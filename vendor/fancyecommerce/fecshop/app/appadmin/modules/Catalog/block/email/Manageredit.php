<?php
/**
 * FecShop file.
 *
 * @link http://www.fecshop.com/
 * @copyright Copyright (c) 2016 FecShop Software LLC
 * @license http://www.fecshop.com/license/
 */

namespace fecshop\app\appadmin\modules\Catalog\block\email;

use fec\helpers\CUrl;
use Yii;
use fecshop\app\console\modules\Amqp\block\Push;

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
        $this->_saveUrl = CUrl::getUrl('catalog/email/managereditsave');
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
        set_time_limit(0);
        try {
            $editForm = Yii::$app->request->post('editForm');
            if ($editForm['toall']) {
                $emailArr = Yii::$service->customer->getAllUserEmail();
                foreach ($emailArr as $email) {
                    $to = $email;
                    $subject = $editForm['subject'];
                    $htmlBody = $editForm['htmlBody'];
                    $sendInfo = compact('to', 'subject', 'htmlBody');
                    Yii::$app->queue->push(new Push($sendInfo));
                }
            } else {
                $to = $editForm['to'];
                $subject = $editForm['subject'];
                $htmlBody = $editForm['htmlBody'];
                $sendInfo = compact('to', 'subject', 'htmlBody');
                Yii::$app->queue->push(new Push($sendInfo));
            }


        } catch (\Exception $e) {
            exit(json_encode([
                'statusCode' => '400',
                'message' => $e->getMessage(),
            ]));
        }
        echo json_encode([
            'statusCode' => '200',
            'message' => 'save success',
        ]);
        exit;
    }
}
