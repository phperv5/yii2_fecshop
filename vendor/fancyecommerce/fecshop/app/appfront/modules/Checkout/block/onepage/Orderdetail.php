<?php
/**
 * FecShop file.
 *
 * @link http://www.fecshop.com/
 * @copyright Copyright (c) 2016 FecShop Software LLC
 * @license http://www.fecshop.com/license/
 */

namespace fecshop\app\appfront\modules\checkout\block\onepage;

use fec\helpers\CRequest;
use Yii;

/**
 * @author Terry Zhao <2358269014@qq.com>
 * @since 1.0
 */
class Orderdetail
{
    protected $_payment_method;

    public function getLastData()
    {
        $customer_id = Yii::$app->user->identity['id'];
        $filter = [
            'numPerPage' => 50,
            'pageNum' => 1,
            'orderBy' => ['updated_at' => SORT_DESC],
            'where' => [
                ['customer_id' => $customer_id],
            ],
            'asArray' => true,
        ];
        $address_list = Yii::$service->customer->address->Coll($filter)['coll'];

        //获取
        $request_param = CRequest::param();
        $order_id = $request_param['order_id'];
        $order_id = '1';
        //订单详细
        $orderDetail = $this->getCustomerOrderInfo($order_id);

        return [
            'payments' => '',
            'shippings' => '',
            'current_payment_method' => '',
            'cart_info' => $orderDetail,
            'currency_info' => '',
            'address_view_file' => '',
            'cart_address' => '',
            'cart_address_id' => '',
            'address_list' => $address_list,
            'address_select' => '',
            'country_select' => '',
            'state_html' => '',
        ];
    }

    public function getCustomerOrderInfo($order_id)
    {
        if ($order_id) {
            $order_info = Yii::$service->order->getOrderInfoById($order_id);
            if (isset($order_info['customer_id']) && !empty($order_info['customer_id'])) {
                $identity = Yii::$app->user->identity;
                $customer_id = $identity->id;
                if ($order_info['customer_id'] == $customer_id) {
                    return $order_info;
                }
            }
        }

        return [];
    }
    
    /*
     * 订单提交支付
     */

    public function paySave()
    {
        $post = Yii::$app->request->post();
//        var_dump($post);die;
        if (is_array($post) && !empty($post)) {
            /**
             * 对传递的数据，去除掉非法xss攻击部分内容（通过\Yii::$service->helper->htmlEncode()）.
             */
            $post = \Yii::$service->helper->htmlEncode($post);
            // 检查前台传递的数据的完整
            if ($this->checkOrderInfoAndInit($post)) {

                    // 设置checkout type
                    $serviceOrder = Yii::$service->order;
                    $checkout_type = $serviceOrder::CHECKOUT_TYPE_STANDARD;
                    $serviceOrder->setCheckoutType($checkout_type);
                    // 将购物车数据，生成订单。
                    if($this->_payment_method == 'paypal_standard'){
                      $startUrl = Yii::$service->payment->getStandardStartUrl();
                       Yii::$service->url->redirect($startUrl);
                    }
            } else {
            }
        }
        Yii::$service->page->message->addByHelperErrors();

        return false;
    }
    
    public function checkOrderInfoAndInit($post)
    {
        $payment_method = isset($post['payment_method']) ? $post['payment_method'] : '';
        
        // 验证支付方式
        if (!$payment_method) {
            Yii::$service->helper->errors->add('payment method can not empty');

            return false;
        } else {
            if (!Yii::$service->payment->ifIsCorrectStandard($payment_method)) {
                Yii::$service->helper->errors->add('payment method is not correct');

                return false;
            }
        }
        $this->_shipping_method = $shipping_method;
        $this->_payment_method = $payment_method;
        Yii::$service->payment->setPaymentMethod($this->_payment_method);

        return true;
    }
}
