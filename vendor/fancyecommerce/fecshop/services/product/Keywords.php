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
class ProductSearch extends Service
{
    public $filterByLang;
    protected $_reviewModelName = '\fecshop\models\mongodb\product\Keywords';
    protected $_reviewModel;

    public function __construct()
    {
        list($this->_reviewModelName, $this->_reviewModel) = \Yii::mapGet($this->_reviewModelName);
    }
}