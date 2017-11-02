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
class Batchimport extends AppadminbaseBlockEdit implements AppadminbaseBlockEditInterface
{
    public function init()
    {
        /**
         * 通过Yii::mapGet() 得到重写后的class类名以及对象。Yii::mapGet是在文件@fecshop\yii\Yii.php中
         */
        $this->_attrBlockName = Yii::mapGetName($this->_attrBlockName);

        $this->_saveUrl = CUrl::getUrl('catalog/productinfo/managereditsave');
        parent::init();


        //$this->_param		= $request_param[$this->_editFormData];
    }

    public function setService()
    {
        $this->_service = Yii::$service->product;
    }

    /**
     * save article data,  get rewrite url and save to article url key.
     */
    public function save()
    {
        $this->initParamType();
        /*
         * if attribute is date or date time , db storage format is int ,by frontend pass param is int ,
         * you must convert string datetime to time , use strtotime function.
         */
        // var_dump()

        $this->_service->save($this->_param, 'catalog/product/index');

        $errors = Yii::$service->helper->errors->get();
        if (!$errors) {
            echo  json_encode([
                'statusCode'=>'200',
                'message'=>'save success',
            ]);
            exit;
        } else {
            echo  json_encode([
                'statusCode'=>'300',
                'message'=>$errors,
            ]);
            exit;
        }
    }


    public function getEditArr()
    {
    }
}