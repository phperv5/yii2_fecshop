<?= Yii::$service->page->widget->render('flashmessage'); ?>
<section id="place-order">
    <?php # address
    $addressView = [
        'view' => $address_view_file,
    ];
    $addressParam = [
        'cart_address_id' => $cart_address_id,
        'address_list' => $address_list,
        'address_select' => $address_select,
        'customer_info' => $customer_info,
        'country_select' => $country_select,
        'state_html' => $state_html,
        'cart_address' => $cart_address,
    ];
    ?>
    <?= Yii::$service->page->widget->render($addressView, $addressParam); ?>
    <div class="pwa-gap"></div>
    <div id="bind-card"></div>
    <form action="<?= Yii::$service->url->getUrl('checkout/onepage'); ?>" method="post" id="onestepcheckout-form">
        <?= \fec\helpers\CRequest::getCsrfInputHtml(); ?>
        <input type="hidden" id="s_method_flatrate_flatrate2" name="shipping_method" value="<?= $cart_info['shipping_method'] ?>" class="validate-one-required-by-name">
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


