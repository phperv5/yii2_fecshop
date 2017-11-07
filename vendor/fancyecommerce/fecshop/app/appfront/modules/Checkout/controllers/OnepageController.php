<?php
/**
 * FecShop file.
 *
 * @link http://www.fecshop.com/
 * @copyright Copyright (c) 2016 FecShop Software LLC
 * @license http://www.fecshop.com/license/
 */

namespace fecshop\app\appfront\modules\Checkout\controllers;

use fecshop\app\appfront\modules\AppfrontController;
use Yii;

/**
 * @author Terry Zhao <2358269014@qq.com>
 * @since 1.0
 */
class OnepageController extends AppfrontController
{
    public $enableCsrfValidation = true;

    //public function init(){
    //	Yii::$service->page->theme->layoutFile = 'one_step_checkout.php';

    //}

    public function actionIndex()
    {
        $guestOrder = Yii::$app->controller->module->params['guestOrder'];
        if (!$guestOrder && Yii::$app->user->isGuest) {
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
    public function actionOrdercheckout()
    {
        $data = $this->getBlock()->getLastData();
        return $this->render($this->action->id, $data);
    }
}
