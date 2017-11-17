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
    public $_to;

    public function __construct()
    {
        $this->_saveUrl = CUrl::getUrl('catalog/keywords/managereditsave');
        $this->_to = Yii::$app->request->get('to');
    }

    // 传递给前端的数据 显示编辑form
    public function getLastData()
    {
        return [
            'saveUrl' => $this->_saveUrl,
            'to' => $this->_to,
        ];
    }


    /**
     * save article data,  get rewrite url and save to article url key.
     */
    public function save()
    {
        try {
            $editForm = Yii::$app->request->post('editForm');
            $to = $editForm['to'];
            $subject = $editForm['subject'];
            $htmlBody = $editForm['htmlBody'];
            $sendInfo = compact('to', 'subject', 'htmlBody');

            Yii::$service->email->send($sendInfo);
        } catch (\Exception $e) {

        }
        echo json_encode([
            'statusCode' => '200',
            'message' => 'save success',
        ]);
        exit;
    }
}
