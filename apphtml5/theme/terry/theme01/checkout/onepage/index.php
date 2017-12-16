<section id="place-order">
    <div class="pwa-cart-block pwa-shadow">
        <div class="pwa-title-block small">
            <div class="content">
                <span class="title">shipping address&nbsp; :</span>
            </div>
        </div>
        <div class="pwa-address-item order-shipping-address">
            <div class="name">1111</div>
            <ul class="address-items">
                <li class="item" data-role="address">212121</li>
                <li class="item"><span>21</span><span>Mato Grosso</span></li>
                <li class="item" data-role="country">United States</li>
                <li class="item" data-role="zip">21</li>
            </ul>
            <div class="ms-rc-ripple ms-rc-custom has-btn">
                <a href="javascript:postManageAddress('/order/addressList.htm',1233320249)" id="change-address"
                   class="pwa-btn transparent">Change Shipping Address</a>
            </div>
        </div>
    </div>
    <div class="pwa-gap"></div>
    <div id="bind-card"></div>
    <form action="<?= Yii::$service->url->getUrl('checkout/onepage'); ?>" method="post" id="onestepcheckout-form">
        <?= \fec\helpers\CRequest::getCsrfInputHtml(); ?>
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

    </form>
</section>
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


