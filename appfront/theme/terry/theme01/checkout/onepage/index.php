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
                        <input name="PaymentMethod" type="radio" id="PayPalECS" value="PayPalECS" checked="checked"
                               onclick="javascript:AreaMultiShowHide('area_pay_method_exp_',3,1);"/>

                        <img src="/images/pay/PayPal_mark_60x38.gif" alt="PayPalECS" border="0" align="absmiddle"/>&nbsp;&nbsp;<b
                                class="px13 verdana">PayPal Express Checkout　　<span class=gray>the safer, easier way to pay.</span></b>
                    </label>

                    <div class="blank5px"></div>
                    <div style="display:" class="pay_ex_a" id="area_pay_method_exp_1">
                        <img align="right" alt="" border="0" hspace="5" src="/images/pay/pay_remark_paypal.gif"/>If you
                        have PayPal account, you can pay your order by your PayPal account.<br/>
                        If you don&#39;t have PayPal account, it doesn&#39;t matter. You firstly charge your Paypal with
                        you credit card or bank debit card , then also pay via PayPal.<br/>
                        Payment can be submitted in any currency.&nbsp;<br/>
                        Our PayPal account is: <b style="font-size: 18px;">sinpecal@gmail.com</b>
                        <div class="blank10px"></div>

                        <form action="/api_ppec/paypal_ec_redirect.php" method="POST"
                              id="form_jumpto_checkout_papal_ecs">
                            <input type="hidden" name="PAYMENTREQUEST_0_INVNUM" value="U2170826416376">

                            <input type="hidden" name="paymentType" value="Sale">


                            <input type="hidden" name="CANCELURL"
                                   value="http://www.UOBDII.com/app/order_checkout.asp?OrderSN=U2170826416376">

                            <input type="hidden" name="currencyCodeType" value="USD"/>


                            <input type="hidden" name="L_PAYMENTREQUEST_0_NAME0"
                                   value="Newest+500GB+V2017%2E07+MB+SD+C4%2FC5+Software+HDD+For+DELL+D630+Support+WIN7%26amp%3BWIN10+System"/>
                            <input type="hidden" name="L_PAYMENTREQUEST_0_NUMBER0" value="SS195-D7"/>
                            <input type="hidden" name="L_PAYMENTREQUEST_0_AMT0" value="109.00"/>
                            <input type="hidden" name="L_PAYMENTREQUEST_0_QTY0" value="1"/>
                            <input type="hidden" name="L_PAYMENTREQUEST_0_DESC0" value="69820; 1; %2D; %2D; 275"/>


                            <input type="hidden" name="PAYMENTREQUEST_0_ITEMAMT" value="109.00"/>
                            <input type="hidden" name="PAYMENTREQUEST_0_SHIPPINGAMT" value="0.00">


                            <input type="hidden" name="PAYMENTREQUEST_0_AMT" value="109.00">

                            <input type="hidden" name="PAYMENTREQUEST_0_CUSTOM"
                                   value="0|351041|0.0||0.0|0.00|0|275|http://www.UOBDII.com"/>


                            <input type="hidden" name="myOrderProNum" value="0"/>

                            <input type="hidden" name="LOGOIMG" value="http://www.UOBDII.com/images/logo.png">

                            <input type="submit" style="display:none"/>
                            <input name="" type="image" class="ipt_img" src="/images/pay/pp-checkout-logo-large.png"
                                   alt="Check out with PayPal" id="myPPECbutton"/>


                            <div style="float:right;" id="myContainer"></div>

                        </form>

                    </div>
                    <div class="dashed_line"></div>
                    <div class="blank5px"></div>


                    <div class="blank5px"></div>
                    <label for="Western Union">
                        <input name="PaymentMethod" type="radio" id="Western Union" value="Western Union"
                               onclick="javascript:AreaMultiShowHide('area_pay_method_exp_',3,2);"/>

                        <img src="/images/pay/ico_western_union.gif" alt="Western Union" border="0" align="absmiddle"/>&nbsp;&nbsp;<b
                                class="px13 verdana">Western Union</b>
                    </label>


                    <div class="blank5px"></div>
                    <div style="display:none" class="pay_ex_a" id="area_pay_method_exp_2">
                        <p><strong>First Name: Donglian<br/>
                                Last Name : Xu</strong><br/>
                            <strong>City: SHENZHEN</strong><br/>
                            <strong>Country:CHINA</strong><br/>
                            <strong>Postal Code:518112</strong><br/>
                            <strong>Mobile: +</strong><strong>0086-13995696053</strong><br/>
                            <strong>Tel: +86-755-28704781</strong><br/>
                            <strong>Fax:+86-755-28700303</strong></p>

                        <p>Note: Please make sure leave the Order# in the remark section.<br/>
                            After you make the payment, please remember to Sign In &quot;My Account&quot; on our site,
                            and submit the Western Union Money Transfer Control Number (MTCN) on the page of &quot;Submit
                            a Request Ticket&quot;. We will confirm your payment within 24 hours upon the receipt of the
                            money.</p>

                    </div>
                    <div class="dashed_line"></div>
                    <div class="blank5px"></div>


                    <div class="blank5px"></div>
                    <label for="Bank Transfer">
                        <input name="PaymentMethod" type="radio" id="Bank Transfer" value="Bank Transfer"
                               onclick="javascript:AreaMultiShowHide('area_pay_method_exp_',3,3);"/>

                        <img src="/images/pay/ico_hsbc.gif" alt="Bank Transfer" border="0" align="absmiddle"/>&nbsp;&nbsp;<b
                                class="px13 verdana">Bank Transfer</b>
                    </label>


                    <div class="blank5px"></div>
                    <div style="display:none" class="pay_ex_a" id="area_pay_method_exp_3">
                        <div><strong>Name of Corporation: Sinoy Electronic Technology HK Limited<br/>
                                Account:168-308187-838<br/>
                                Bank name:HSBC HongKong<br/>
                                Swift Code:HSBCHKHH<br/>
                                BANK number:004&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                &nbsp;<br/>
                                Bank Address:BASEMENT L/G &amp; U/G 673 NATHAN ROAD,MONG KOK,KOWLOON,HONGKONG</strong>
                        </div>

                        <p><strong>Sinoy Electronic Technology HK Limited</strong> is&nbsp;the designated bank and
                            transfer the money to the designated account above. The money will arrive in our account in
                            about 2-4business days.<br/>
                            <strong>Note: Please make sure leave the Order# in the remark section.</strong><br/>
                            After you make the payment, please remember to Sign In &quot;My Account&quot; on our site,
                            and submit a notice about payment on the page of &quot;Submit a Request Ttcket&quot;. We
                            will confirm your payment within 24 hours upon the receipt of the money.</p>

                    </div>
                    <div class="dashed_line"></div>
                    <div class="blank5px"></div>


                    <div class="clear"></div>
                </div>
                <div class="clear"></div>
            </div>

        </div>
        <div class="exh_full_bottom"></div>
        <div class="clear"></div>
    </div>
