<?php
/**
 * FecShop file.
 *
 * @link http://www.fecshop.com/
 * @copyright Copyright (c) 2016 FecShop Software LLC
 * @license http://www.fecshop.com/license/
 */

namespace fecshop\app\appadmin\modules\Catalog\block\email;

use fec\helpers\CRequest;
use fec\helpers\CUrl;
use fecshop\app\appadmin\interfaces\base\AppadminbaseBlockEditInterface;
use fecshop\app\appadmin\modules\AppadminbaseBlockEdit;
use Yii;

/**
 * block cms\article.
 * @author Terry Zhao <2358269014@qq.com>
 * @since 1.0
 */
class Manageredit
{
    public $_saveUrl;

    public function __construct()
    {
        $this->_saveUrl = CUrl::getUrl('catalog/keywords/managereditsave');
    }

    // 传递给前端的数据 显示编辑form
    public function getLastData()
    {
        return [
            'editBar'    => $this->getEditBar(),
            'saveUrl'    => $this->_saveUrl,
        ];
    }


    public function getEditArr()
    {
        return [
            [
                'label'=>'收件人',
                'name'=>'to',
                'display'=>[
                    'type' => 'inputString',
                ],
                'require' => 1,
            ],
            [
                'label'=>'主题',
                'name'=>'subject',
                'width' => '200',
                'display'=>[
                    'type' => 'inputString',
                ],
            ],
            [
                'label'=>'正文',
                'name'=>'type',
                'display'=>[
                    'type' => 'textarea',
                ],
                'require' => 1,
            ],

        ];
    }

    /**
     * save article data,  get rewrite url and save to article url key.
     */
    public function save()
    {
        $request_param = CRequest::param();
        var_dump($request_param);
    }



}
