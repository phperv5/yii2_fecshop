<?php
/**
 * FecShop file.
 *
 * @link http://www.fecshop.com/
 * @copyright Copyright (c) 2016 FecShop Software LLC
 * @license http://www.fecshop.com/license/
 */

namespace fecshop\services\product;

//use fecshop\models\mongodb\product\Review as ReviewModel;
use fecshop\services\Service;
use Yii;
use yii\base\InvalidValueException;

/**
 * Product Review Service
 * @author Terry Zhao <2358269014@qq.com>
 * @since 1.0
 */
class Keywords extends Service
{
    public $filterByLang;
    protected $_reviewModelName = '\fecshop\models\mongodb\product\Keywords';
    protected $_reviewModel;

    public function __construct()
    {
        list($this->_reviewModelName, $this->_reviewModel) = \Yii::mapGet($this->_reviewModelName);
    }


    public function getPrimaryKey()
    {
        return '_id';
    }


    /**
     * @property $review_data | Array
     *
     * 增加评论 前台增加评论调用的函数。
     */
    protected function actionAddReview($review_data)
    {
        //$this->initReviewAttr($review_data);
        $model = new $this->_reviewModelName();
        if (isset($review_data[$this->getPrimaryKey()])) {
            unset($review_data[$this->getPrimaryKey()]);
        }
        $model = $this->_reviewModel;
        $review_data['status'] = $model::NOACTIVE_STATUS;

        $review_data['store'] = Yii::$service->store->currentStore;
        $review_data['lang_code'] = Yii::$service->store->currentLangCode;
        $review_data['review_date'] = time();
        if (!Yii::$app->user->isGuest) {
            $identity = Yii::$app->user->identity;
            $user_id = $identity['id'];
            $review_data['user_id'] = $user_id;
        }

        $review_data['ip'] = \fec\helpers\CFunc::get_real_ip();
        $saveStatus = Yii::$service->helper->ar->save($model, $review_data);

        return true;
    }

    /**
     * @property $review_data | Array
     * 保存评论
     */
    protected function actionUpdateReview($review_data)
    {
        //$this->initReviewAttr($review_data);
        $model = $this->_reviewModel->findOne([$this->getPrimaryKey() => $review_data[$this->getPrimaryKey()]]);
        unset($review_data[$this->getPrimaryKey()]);
        $saveStatus = Yii::$service->helper->ar->save($model, $review_data);

        return true;
    }

    /*
     * example filter:
     * [
     * 		'numPerPage' 	=> 20,
     * 		'pageNum'		=> 1,
     * 		'orderBy'	=> [$this->getPrimaryKey() => SORT_DESC, 'sku' => SORT_ASC ],
     * 		'where'			=> [
                ['>','price',1],
                ['<=','price',10]
     * 			['sku' => 'uk10001'],
     * 		],
     * 	'asArray' => true,
     * ]
     * 查看review 的列表
     */
    protected function actionList($filter)
    {
        $query = $this->_reviewModel->find();
        $query = Yii::$service->helper->ar->getCollByFilter($query, $filter);

        return [
            'coll' => $query->all(),
            'count' => $query->limit(null)->offset(null)->count(),
        ];
    }


    /**
     * @property $primaryKey | String 主键值
     * get artile model by primary key.
     */
    protected function actionGetByPrimaryKey($primaryKey)
    {
        if ($primaryKey) {
            return $this->_reviewModel->findOne($primaryKey);
        } else {
            return new $this->_reviewModelName();
        }
    }

    //保存
    protected function actionSave($one)
    {
        $currentDateTime = \fec\helpers\CDate::getCurrentDateTime();
        $primaryVal = isset($one[$this->getPrimaryKey()]) ? $one[$this->getPrimaryKey()] : '';

        if ($primaryVal) {
            $model = $this->_reviewModel->findOne($primaryVal);
            if (!$model) {
                Yii::$service->helper->errors->add('keywordsModel ' . $this->getPrimaryKey() . ' is not exist');

                return;
            }
        } else {
            $model = new $this->_reviewModelName();
            $primaryVal = new \MongoDB\BSON\ObjectId();
            $model->{$this->getPrimaryKey()} = $primaryVal;
            $one['created_at'] = time();
        }
        $one['updated_at'] = time();
        unset($one[$this->getPrimaryKey()]);
        $saveStatus = Yii::$service->helper->ar->save($model, $one);
        $model->save();

        return true;
    }

    /**
     * @property $filter|array
     * get artile collection by $filter
     * example filter:
     * [
     *        'numPerPage'    => 20,
     *        'pageNum'        => 1,
     *        'orderBy'    => [$this->getPrimaryKey() => SORT_DESC, 'sku' => SORT_ASC ],
     * 'where'            => [
     * ['>','price',1],
     * ['<=','price',10]
     *            ['sku' => 'uk10001'],
     *        ],
     *    'asArray' => true,
     * ]
     */
    protected function actionColl($filter = '')
    {
        return $this->list($filter);
    }


    public function actionGetKeywordsList($type, $numPerPage = 10)
    {
        $filter = [
            'numPerPage' => $numPerPage,
            'where' => [
                ['type' => (string)$type],
            ]
        ];
        $keywordsColl = $this->list($filter);
        $keywords = $keywordsColl['coll'];
        return $keywords;
    }


}
