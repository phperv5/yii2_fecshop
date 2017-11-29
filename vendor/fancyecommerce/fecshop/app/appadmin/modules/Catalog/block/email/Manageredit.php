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
//                var_dump($emailArr);die;
                foreach ($emailArr as $email) {
                    $to = $email;
                    $subject = $editForm['subject'];
                    $htmlBody = $editForm['htmlBody'];
                    $sendInfo = compact('to', 'subject', 'htmlBody');
                    sleep(20);
                    Yii::$service->email->send($sendInfo);
                }
            } else {
                $to = $editForm['to'];
                $subject = $editForm['subject'];
                $htmlBody = $editForm['htmlBody'];
                $sendInfo = compact('to', 'subject', 'htmlBody');
                Yii::$service->email->send($sendInfo);
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
