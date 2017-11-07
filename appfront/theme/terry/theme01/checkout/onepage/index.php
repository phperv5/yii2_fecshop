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


            <div class="p_order_step">
                <div class="o_stp_s_off" id="m_os_shippingAddress" onclick="javascript:AreaShowHide('ar_os_shippingAddress');OrderStepCSSswitch('m_os_shippingAddress');" style="cursor:pointer">
                    <span class="sn">2</span> &nbsp;Shipping Address
                </div>
                    <?php # address 部门
                    //echo $address_view_file;
                    $addressView = [
                        'view' => $address_view_file,
                    ];
                    //var_dump($address_list);
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
                    <div class="clear"></div>
                <div class="p_order_step">
                    <div class="o_stp_s_off"><span class="sn">3</span> &nbsp;Checkout and Payment Details</div>
                    <div class="scene">
                        <div class="blank5px"></div>
                        <label for="PayPalECS">
                            <input name="payment_method" type="radio" id="PayPalECS" value="paypal_standard" onclick="javascript:AreaMultiShowHide('area_pay_method_exp_',3,1);">
                            <img src="<?= Yii::$service->image->getImgUrl('images/pay/PayPal_mark_60x38.gif'); ?>" alt="PayPalECS" border="0" align="absmiddle"/>&nbsp;&nbsp;
                            <b class="px13 verdana">PayPal Express Checkout　　<span class=gray>the safer, easier way to pay.</span></b>
                        </label>

                        <div class="blank5px"></div>
                        <div style="display: none;" class="pay_ex_a" id="area_pay_method_exp_1">
                            <img align="right" alt="" border="0" hspace="5" src="/images/pay/pay_remark_paypal.gif">If you have PayPal account, you can pay your order by your PayPal account.<br>
                            If you don't have PayPal account, it doesn't matter. You firstly charge your Paypal with you credit card or bank debit card , then also pay via PayPal.<br>
                            Payment can be submitted in any currency.&nbsp;<br>
                            Our PayPal account is: <b style="font-size: 18px;">sinpecal@gmail.com</b>
                            <div class="blank10px"></div>
                            <input name="" type="image" class="ipt_img onestepcheckout-button" src="<?= Yii::$service->image->getImgUrl('images/pay/pp-checkout-logo-large.png'); ?>" alt="Check out with PayPal" id="onestepcheckout-place-order">
                        </div>
                        <div class="dashed_line"></div>
                        <div class="blank5px"></div>
                        <div class="blank5px"></div>

                        <label for="Western Union">
                            <input name="PaymentMethod" type="radio" id="Western Union" value="Western Union"  onclick="javascript:AreaMultiShowHide('area_pay_method_exp_',3,2);">
                            <img src="<?= Yii::$service->image->getImgUrl('images/pay/ico_western_union.gif'); ?>"   alt="Western Union" border="0" align="absmiddle">&nbsp;&nbsp;<b class="px13 verdana">Western Union</b>
                        </label>
                        <div class="blank5px"></div>
                        <div style="display: none;" class="pay_ex_a" id="area_pay_method_exp_2">
                            <p><strong>First Name: Feihong<br>
                                    Last Name : Zhong</strong><br>
                                <strong>City: SHENZHEN</strong><br>
                                <strong>Country:CHINA</strong><br>
                                <strong>Postal Code:518112</strong><br>
                                <strong>Mobile: +</strong><strong>0086-13995696053</strong><br>
                                <strong>Tel: +86-755-28704781</strong><br>
                                <strong>Fax:+86-755-28700303</strong></p>

                            <p>
                                Note: Please make sure leave the Order# in the remark section.<br>
                                After you make the payment, please remember to Sign In "My Account" on our site, and submit the Western Union Money Transfer Control Number (MTCN) on the page of "Submit a Request Ticket". We will confirm your payment within 24 hours upon the receipt of the money.
                            </p>

                        </div>
                        <div class="dashed_line"></div>
                        <div class="blank5px"></div>
                        <div class="blank5px"></div>

                        <label for="MoneyGram">
                            <input name="PaymentMethod" type="radio" id="MoneyGram" value="MoneyGram" onclick="javascript:AreaMultiShowHide('area_pay_method_exp_',3,3);">
                            <img src="<?= Yii::$service->image->getImgUrl('images/pay/MoneyGram.png'); ?>" style="width: 96px;" alt="MoneyGram" border="0" align="absmiddle">&nbsp;&nbsp;<b class="px13 verdana">MoneyGram</b>
                        </label>
                        <div class="blank5px"></div>
                        <div style="display:none" class="pay_ex_a" id="area_pay_method_exp_3">
                            <div><strong>Name of Corporation: Sinoy Electronic Technology HK Limited<br>
                                    Account:168-308187-838<br>
                                    Bank name:HSBC HongKong<br>
                                    Swift Code:HSBCHKHH<br>
                                    BANK number:004&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;<br>
                                    Bank Address:BASEMENT L/G &amp; U/G 673 NATHAN ROAD,MONG KOK,KOWLOON,HONGKONG</strong></div>

                            <p><strong>Sinoy Electronic Technology HK Limited</strong> is&nbsp;the designated bank and transfer the money to the designated account above. The money will arrive in our account in about 2-4business days.<br>
                                <strong>Note: Please make sure leave the Order# in the remark section.</strong><br>
                                After you make the payment, please remember to Sign In "My Account" on our site, and submit a notice about payment on the page of "Submit a Request Ttcket". We will confirm your payment within 24 hours upon the receipt of the money.</p>

                        </div>
                        <div class="dashed_line"></div>
                        <div class="blank5px"></div>
                        <div class="clear"></div>
                    </div>
                    <?= Yii::$service->page->widget->render('flashmessage'); ?>
                    <div class="clear"></div>
                </div>

            </div>
            <div class="exh_full_bottom"></div>
            <div class="clear"></div>
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
                payment_method = $("#PayPalECS").val();

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


