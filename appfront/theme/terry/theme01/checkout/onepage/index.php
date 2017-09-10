<div class="main">
    <div class="page_where_l"><a href="../">Home</a> - Check Out for Order:&nbsp;&nbsp;Serial No. U2170826416376</div>
    <div class="page_where_r"><a href="javascript:history.go(-1);" rel="nofollow">&laquo; Go Back</a></div>
    <div class="blank8px"></div>


    <div class="exh_full_top"></div>
    <div class="exh_full_main">
        <h1>Check Out for Order:&nbsp;&nbsp;<span class="px14 black">Serial No. U2170826416376</span></h1>


        <div class="blank10px"></div>

        <b class="red_dark px16">You placed an order on our site successfully! </b>

        <div class="blank10px"></div>
        <span id="sRtnGetOrderFormStatus"></span>
        <div class="blank10px"></div>


        <div class="p_order_step">
            <div class="o_stp_s_off" id="m_os_shippingcart"
                 onclick="javascript:AreaShowHide('ar_os_shippingcart');OrderStepCSSswitch('m_os_shippingcart');"
                 style="cursor:pointer"><span class="sn">1</span> &nbsp;Order Details
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
            <div class="o_stp_s_off" id="m_os_shippingAddress"
                 onclick="javascript:AreaShowHide('ar_os_shippingAddress');OrderStepCSSswitch('m_os_shippingAddress');"
                 style="cursor:pointer">
                <span class="sn">2</span> &nbsp;Shipping Address
            </div>
            <div class="scene" id="ar_os_shippingAddress">
                <?php # address 部门
                //echo $address_view_file;
                $addressView = [
                    'view' => $address_view_file,
                ];
                //var_dump($address_list);
                $addressParam = [
                    'cart_address_id' => $cart_address_id,
                    'address_list' => $address_list,
                    'customer_info' => $customer_info,
                    'country_select' => $country_select,
                    'state_html' => $state_html,
                    'cart_address' => $cart_address,
                    //'payments' => $payments,
                    //'current_payment_mothod' => $current_payment_mothod,
                ];
                ?>
                <?= Yii::$service->page->widget->render($addressView, $addressParam); ?>
                <div class="clear"></div>
            </div>

            <div class="p_order_step">
                <div class="o_stp_s_cur"><span class="sn_cur">3</span> &nbsp;Checkout and Payment Details</div>
                <div class="scene">

                    <div class="blank5px"></div>
                    <label for="PayPalECS">
                        <img src="<?= Yii::$service->image->getImgUrl('images/pay/PayPal_mark_60x38.gif'); ?>" alt="PayPalECS" border="0" align="absmiddle"/>&nbsp;&nbsp;
                        <b class="px13 verdana">PayPal Express Checkout　　<span class=gray>the safer, easier way to pay.</span></b>
                    </label>

                    <div class="blank5px"></div>
                    <div style="display:" class="pay_ex_a" id="area_pay_method_exp_1">
                        <img align="right" alt="" border="0" hspace="5" src="<?= Yii::$service->image->getImgUrl('images/pay/pay_remark_paypal.gif'); ?>"/>If you
                        have PayPal account, you can pay your order by your PayPal account.<br/>
                        If you don&#39;t have PayPal account, it doesn&#39;t matter. You firstly charge your Paypal with
                        you credit card or bank debit card , then also pay via PayPal.<br/>
                        Payment can be submitted in any currency.&nbsp;<br/>
                        Our PayPal account is: <b style="font-size: 18px;">sinpecal@gmail.com</b>
                        <div class="blank10px"></div>
                        <input name="" type="image" class="ipt_img" src="<?= Yii::$service->image->getImgUrl('images/pay/pp-checkout-logo-large.png'); ?>" alt="Check out with PayPal" id="onestepcheckout-place-order">
                    </div>
                    <div class="clear"></div>
                </div>
                <div class="clear"></div>
            </div>

        </div>
        <div class="exh_full_bottom"></div>
        <div class="clear"></div>
    </div>
    <script>
        <?php $this->beginBlock('placeOrder') ?>
        $(document).ready(function(){
            currentUrl = "<?= Yii::$service->url->getUrl('checkout/onepage') ?>"
            //优惠券
            $(".add_coupon_submit").click(function(){
                coupon_code = $("#id_couponcode").val();
                coupon_type = $(".couponType").val();
                coupon_url = "";
                $succ_coupon_type = 0;
                if(coupon_type == 2){
                    coupon_url = "<?=  Yii::$service->url->getUrl('checkout/cart/addcoupon'); ?>";
                    $succ_coupon_type = 1;
                }else if(coupon_type == 1){
                    coupon_url = "<?=  Yii::$service->url->getUrl('checkout/cart/cancelcoupon'); ?>";
                    $succ_coupon_type = 2;
                }
                //alert(coupon_type);
                if(!coupon_code){
                    //alert("coupon can not empty!");
                }
                //coupon_url = $("#discount-coupon-form").attr("action");
                //alert(coupon_url);
                $.ajax({
                    async:true,
                    timeout: 6000,
                    dataType: 'json',
                    type:'post',
                    data: {"coupon_code":coupon_code},
                    url:coupon_url,
                    success:function(data, textStatus){
                        if(data.status == 'success'){
                            $(".couponType").val($succ_coupon_type);
                            hml = $('.add_coupon_submit').html();
                            if(hml == 'Add Coupon'){
                                $('.add_coupon_submit').html('<?= Yii::$service->page->translate->__('Cancel Coupon');?>');
                            }else{
                                $('.add_coupon_submit').html('<?= Yii::$service->page->translate->__('Add Coupon');?>');
                            }
                            $(".coupon_add_log").html("");
                            ajaxreflush();
                        }else if(data.content == 'nologin'){
                            $(".coupon_add_log").html("<?= Yii::$service->page->translate->__('you must login your account before you use coupon');?>");
                        }else{
                            $(".coupon_add_log").html(data.content);
                        }
                    },
                    error:function (XMLHttpRequest, textStatus, errorThrown){}
                });


            });

            // 对于非登录用户，可以填写密码，进行注册账户，这里进行信息的检查。
            $("#id_create_account").click(function(){
                if($(this).is(':checked')){
                    email = $("input[name='billing[email]']").val();
                    if(!email){
                        $(this).prop('checked', false);
                        $(".label_create_account").html(" <?= Yii::$service->page->translate->__('email address is empty, you must Fill in email');?>");
                    }else{
                        thischeckbox = this;
                        if(!validateEmail(email)){
                            $(this).prop('checked', false);
                            $(".label_create_account").html(" <?= Yii::$service->page->translate->__('email address format is incorrect');?>");

                        }else{
                            // ajax  get if  email is register
                            $.ajax({
                                async:true,
                                timeout: 6000,
                                dataType: 'json',
                                type:'get',
                                data: {"email":email},
                                url:"<?= Yii::$service->url->getUrl('customer/ajax/isregister'); ?>",
                                success:function(data, textStatus){
                                    if(data.registered == 2){
                                        $(".label_create_account").html("");
                                        $("#onestepcheckout-li-password").show();
                                        $("#onestepcheckout-li-password input").addClass("required-entry");

                                    }else{
                                        $(thischeckbox).prop('checked', false);
                                        $(".label_create_account").html(" <?= Yii::$service->page->translate->__('This email is registered , you must fill in another email');?>");
                                    }
                                },
                                error:function (XMLHttpRequest, textStatus, errorThrown){}
                            });
                        }
                    }
                }else{
                    $(".label_create_account").html("");
                    $("#onestepcheckout-li-password").hide();
                    $("#onestepcheckout-li-password input").removeClass("required-entry");
                }
            });
            //###########################
            //下单(这个部分未完成。)
            $("#onestepcheckout-place-order").click(function(){
                $(".validation-advice").remove();
                i = 0;
                j = 0;
                address_list = $(".address_list").val();
                // shipping
                shipment_method = $(".onestepcheckout-shipping-method-block input[name='shipping_method']:checked").val();
                //alert(shipment_method);
                if(!shipment_method){
                    $(".shipment-methods").after('<div style=""  class="validation-advice"><?= Yii::$service->page->translate->__('This is a required field.');?></div>');
                    j = 1;
                }
                //alert(j);
                //payment
                payment_method = $("#checkout-payment-method-load input[name='payment_method']:checked").val();
                //alert(shipment_method);
                if(!payment_method){
                    $(".checkout-payment-method-load").after('<div style=""  class="validation-advice"><?= Yii::$service->page->translate->__('This is a required field.');?></div>');
                    j = 1;
                }



                if(address_list){
                    if(!j){
                        $(".onestepcheckout-place-order").addClass('visit');

                        $("#onestepcheckout-form").submit();
                    }
                }else{
                    //alert(11);
                    //alert(j);
                    $("#onestepcheckout-form .required-entry").each(function(){
                        value = $(this).val();
                        if(!value){
                            //alert(this);
                            //alert($(this).attr('name'));
                            i++;
                            $(this).after('<div style=""  class="validation-advice"><?= Yii::$service->page->translate->__('This is a required field.');?></div>');
                        }
                    });
                    //email  format validate
                    user_email = $("#billing_address .validate-email").val();
                    if(user_email && !validateEmail(user_email)){
                        $("#billing_address .validate-email").after('<div style=""  class="validation-advice"><?= Yii::$service->page->translate->__('email address format is incorrect');?></div>');
                        i++;
                    }
                    // password 是否长度大于6，并且两个密码一致
                    if($("#id_create_account").is(':checked')){

                        new_user_pass = $(".customer_password").val();
                        new_user_pass_cm = $(".customer_confirm_password").val();
                        //alert(new_user_pass);
                        //alert(new_user_pass.length);
                        //alert(new_user_pass_cm);
                        <?php
                        $passwdMinLength = Yii::$service->customer->getRegisterPassMinLength();
                        $passwdMaxLength = Yii::$service->customer->getRegisterPassMaxLength();
                        ?>
                        passwdMinLength = "<?= $passwdMinLength ?>";
                        passwdMaxLength = "<?= $passwdMaxLength ?>";
                        if(new_user_pass.length < passwdMinLength){
                            $(".customer_password").after('<div style=""  class="validation-advice"><?= Yii::$service->page->translate->__('Password length must be greater than or equal to {passwdMinLength}',['passwdMinLength' => $passwdMinLength]);?></div>');
                            i++;
                        }else if(new_user_pass.length > passwdMaxLength){
                            $(".customer_password").after('<div style=""  class="validation-advice"><?= Yii::$service->page->translate->__('Password length must be less than or equal to {passwdMaxLength}',['passwdMaxLength' => $passwdMaxLength]);?></div>');
                            i++;
                        }else if(new_user_pass != new_user_pass_cm){
                            $(".customer_confirm_password").after('<div style=""  class="validation-advice"><?= Yii::$service->page->translate->__('The passwords are inconsistent');?></div>');
                            i++;
                        }
                    }

                    //alert(222);
                    if(!i && !j){
                        //alert(333);
                        $(".onestepcheckout-place-order").addClass('visit');
                        $("#onestepcheckout-form").submit();
                    }
                }

            });



        });
        //ajaxreflush();
        <?php $this->endBlock(); ?>
        <?php $this->registerJs($this->blocks['placeOrder'],\yii\web\View::POS_END);//将编写的js代码注册到页面底部 ?>

    </script>


