<?php

namespace fecshop\app\apphtml5\modules\Checkout\controllers;

use fecshop\app\apphtml5\modules\AppfrontController;
use Yii;

/**
 * @author Terry Zhao <2358269014@qq.com>
 * @since 1.0
 */
class OnepageController extends AppfrontController
{
    public $enableCsrfValidation = true;

    public function actionIndex()
    {
        if (Yii::$app->user->isGuest) {
            $checkoutOrderUrl = Yii::$service->url->getUrl('checkout/onepage/index');
            Yii::$service->customer->setLoginSuccessRedirectUrl($checkoutOrderUrl);
            return Yii::$service->url->redirectByUrlKey('customer/account/login');
        }
        $_csrf = Yii::$app->request->post('_csrf');
        if ($_csrf) {
            $status = $this->getBlock('placeorder')->getLastData();
            if (!$status) {
                //var_dump(Yii::$service->helper->errors->get());
                //exit;
            }
        }

        $data = $this->getBlock()->getLastData();
        if (is_array($data) && !empty($data)) {
            return $this->render($this->action->id, $data);
        } else {
            return $data;
        }
    }

    public function actionChangecountry()
    {
        $this->getBlock('index')->ajaxChangecountry();
    }

    public function actionAjaxupdateorder()
    {
        $this->getBlock('index')->ajaxUpdateOrderAndShipping();
    }

    /*
     * 订单显示
     */
    public function actionOrderdetail()
    {
        $data = $this->getBlock('orderdetail')->getLastData();
        return $this->render($this->action->id, $data);
    }
    
    /*
     * 订单付款
     */
    public function actionOrderpay()
    {
        $data = $this->getBlock('orderdetail')->paySave();
    }
    
    
}
