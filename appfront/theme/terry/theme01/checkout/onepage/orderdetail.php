<div class="main">
    <div class="page_where_l"><a href="../">Home</a> - Check Out for Order</div>
    <div class="page_where_r"><a href="javascript:history.go(-1);" rel="nofollow">&laquo; Go Back</a></div>
    <div class="blank8px"></div>
    <div class="exh_full_top"></div>
    <form action="<?= Yii::$service->url->getUrl('checkout/onepage'); ?>" method="post" id="onestepcheckout-form">
        <?= \fec\helpers\CRequest::getCsrfInputHtml(); ?>
        <input type="hidden" id="s_method_flatrate_flatrate2" name="shipping_method" value="<?= $cart_info['shipping_method'] ?>" class="validate-one-required-by-name">
        <div class="exh_full_main">
            <!--            <h1>Check Out for Order:&nbsp;&nbsp;<span class="px14 black">Serial No. U2170826416376</span></h1>-->
            <div class="blank10px"></div>
            <b class="red_dark px16">You placed an order on our site successfully! </b>
            <div class="blank10px"></div>
            <span id="sRtnGetOrderFormStatus"></span>
            <div class="blank10px"></div>
            <div class="p_order_step">
                <div class="o_stp_s_off" id="m_os_shippingcart" onclick="javascript:AreaShowHide('ar_os_shippingcart');OrderStepCSSswitch('m_os_shippingcart');" style="cursor:pointer"><span class="sn">1</span> &nbsp;Order Details
                </div>
                <div class="scene_nopadding" id="ar_os_shippingcart" style="display:">
                    <table class="tab_comm">
                        <tr class="tr_head">
                            <td width="110">&nbsp;</td>
                            <td>Product Name</td>
                            <td width="100">Unit Price</td>
                            <td width="100">Qty.</td>
                            <td width="100">Subtotal</td>
                        </tr>
                        <?php # review order部分
                        $reviewOrderView = [
                            'view' => 'checkout/onepage/index/review_order.php'
                        ];
                        $reviewOrderParam = [
                            'cart_info' => $cart_info,
                            'currency_info' => $currency_info,
                        ];
                        ?>
                        <?= Yii::$service->page->widget->render($reviewOrderView, $reviewOrderParam); ?>
                    </table>
                </div>
                <div class="clear"></div>
            </div>


        </div>
    </form>
    <script>
        <?php $this->beginBlock('placeOrder') ?>
        $(document).ready(function () {
            $('.change').click(function(){
                $('#shippingAddress_select').show();
                $('#ar_os_shippingAddress').hide();
            })

            $('.choose_address').bind('click',function(){
                $('#shippingAddress_select').hide();
                var str = $(this).parents('.address-data').find(".select_address").clone();
                $('.cur_address').empty().html(str);
                var address_id = $(this).attr('address_id');
                $('.address_id').val(address_id);
                $('#ar_os_shippingAddress').show();
            })

            currentUrl = "<?= Yii::$service->url->getUrl('checkout/onepage') ?>"
            //下单(这个部分未完成。)
            $("#onestepcheckout-place-order").click(function(){
                $(".validation-advice").remove();
                i = 0;
                j = 0;
                address_id = $(".address_id").val();
                // shipping

                //payment
                payment_method = $("[name='payment_method'] checked").val();

                //alert(shipment_method);
                if(!payment_method){
                    $(".checkout-payment-method-load").after('<div style=""  class="validation-advice"><?= Yii::$service->page->translate->__('This is a required field.');?></div>');
                    j = 1;
                }

            });
        });
        <?php $this->endBlock(); ?>
        <?php $this->registerJs($this->blocks['placeOrder'], \yii\web\View::POS_END);//将编写的js代码注册到页面底部 ?>

    </script>


