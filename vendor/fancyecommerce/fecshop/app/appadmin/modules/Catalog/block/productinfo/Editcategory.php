<?php
/**
 * FecShop file.
 *
 * @link http://www.fecshop.com/
 * @copyright Copyright (c) 2016 FecShop Software LLC
 * @license http://www.fecshop.com/license/
 */

namespace fecshop\app\appadmin\modules\Catalog\block\productinfo;

use fec\helpers\CRequest;
use fec\helpers\CUrl;
use fecshop\app\appadmin\interfaces\base\AppadminbaseBlockEditInterface;
use fecshop\app\appadmin\modules\AppadminbaseBlockEdit;
use Yii;

/**
 * block catalog/productinfo.
 * @author Terry Zhao <2358269014@qq.com>
 * @since 1.0
 */
class Editcategory extends AppadminbaseBlockEdit implements AppadminbaseBlockEditInterface
{
    protected $_attrBlockName = '\fecshop\app\appadmin\modules\Catalog\block\productinfo\index\Attr';
    private $_saveUrl;

    public function init()
    {
        /**
         * 通过Yii::mapGet() 得到重写后的class类名以及对象。Yii::mapGet是在文件@fecshop\yii\Yii.php中
         */
        $this->_attrBlockName = Yii::mapGetName($this->_attrBlockName);

        $this->_saveUrl = CUrl::getUrl('catalog/productinfo/editcategorysave');
        parent::init();
    }

    public function setService()
    {
        $this->_service = Yii::$service->product;
    }

    public function getLastData()
    {

        return [
            'saveUrl' => $this->_saveUrl,
            '_ids' => CRequest::param()['_ids'],
        ];
    }

    /**
     * save article data,  get rewrite url and save to article url key.
     */
    public function save()
    {
        $request_param = CRequest::param();
        $_ids = explode(',',$request_param['_ids']);
        $category = $request_param['category'];
        if ($category) {
            $category = explode(',', $category);
            if (!empty($category)) {
                $cates = [];
                foreach ($category  as $cate) {
                    if ($cate) {
                        $cates[] = $cate;
                    }
                }
                $this->_param['category'] = $cates;
            } else {
                $this->_param['category'] = [];
            }
        } else {
            $this->_param['category'] = [];
        }
    }

    public function getEditArr()
    {
    }
}