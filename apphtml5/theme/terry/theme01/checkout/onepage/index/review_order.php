<?php
use fecshop\app\appfront\helper\Format;
?>
<?php  $cart_info = $parentThis['cart_info'];   ?>
<?php  $currency_info = $parentThis['currency_info'];   ?>
<?php  if(is_array( $cart_info) && !empty( $cart_info)): ?>
<?php  $products = $cart_info['products'];?>
<?php foreach($products as $product): ?>
<div class="pwa-cart-block pwa-shadow order-panel">
    <div class="pwa-cart-product">
        <div class="product-info flex-row">
            <div class="pic">
                <img src="<?= Yii::$service->product->image->getResize($product['image'],[100,100],false) ?>" alt="<?= $product['name'] ?>">
                <div class="content"><img src="<?= Yii::$service->product->image->getResize($product['image'],[100,100],false) ?>" alt="<?= $product['name'] ?>"></div>
            </div>
            <div class="detail">
                <div class="always in top">
                    <div class="title"><?= $product['name'] ?></div>
                </div>
                <div class="options">
                    <div class="flex-row price two-cols">Item No.<?= $product['sku'] ?></div>
                    <div class="flex-row price two-cols">
                        <?=  $currency_info['symbol'];  ?><?= Format::price($product['product_price']); ?>
                    </div>
                    <div class="flex-row num two-cols">
                        <div class="ha">
                            <div class="pwa-num-tool" data-role="num-tool">
                                <div class="num-value"  maxnum="">
                                    Qty:1
                                </div>
                            </div>
                        </div>
                        <div class="heng">
                            <span></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="pwa-result-by-store">
        <div class="flex-row two-cols">
            <div class="ha">
                <span>Subtotal:</span>
            </div>
            <div class="heng">
                <span class="cost checkout-price" data-price="US $0.45"><?=  $currency_info['symbol'];  ?><?= Format::price($product['product_row_price']); ?></span>
            </div>
        </div>
    </div>
</div>
    <?php endforeach; ?>
    <div class="pwa-gap"></div>
    <div class="pwa-cart-block pwa-shadow" id="total-result">
        <div class="pwa-title-block">
            <div class="content">
                <span class="title">order summary&nbsp;</span>
            </div>
        </div>
        <div class="pwa-result-by-store">
            <div class="flex-row two-cols">
                <div class="ha">
                    <span>Subtotal:</span>
                </div>
                <div class="heng"><?=  $currency_info['symbol'];  ?><?= Format::price($cart_info['product_total']); ?></div>
            </div>
            <div class="flex-row two-cols">
                <div class="ha">
                    <span>Shipping Cost:</span>
                </div>
                <div class="heng">
                    <?= $currency_info['symbol']; ?><?= Format::price($cart_info['shipping_cost']); ?>
                </div>
            </div>

            <div class="ms-rc-ripple ms-rc-custom" data-role="btn">
                <div class="flex-row two-cols coupon">
                    <div class="ha"><span>AliExpress Coupon:</span></div>
                    <div class="heng">
                        <span class="change-coupon pwa-btn transparent">Please enter Coupon code</span>
                        <input type="hidden" class="hid-coupon-id" name="couponId" value="">
                    </div>
                </div>
            </div>

            <div class="flex-row two-cols">
                <div class="ha">
                    <span>Grand total&nbsp;:</span>
                </div>
                <div class="heng">
                            <span id="checkout-price-total" class="cost" data-price="0.45"><?=  $currency_info['symbol'];  ?><?= Format::price($cart_info['grand_total']) ?></span>
                </div>
            </div>
        </div>
        <div class="always in bottom fixed" id="bottom-total">
            <div class="flex-row two-cols">
                <div class="ha">
                    <span>Grand total&nbsp;:</span>
                    <span class="strong"><?=  $currency_info['symbol'];  ?><?= Format::price($cart_info['grand_total']) ?></span>
                </div>
                <div class="heng">
                    <div class="ms-rc-ripple ms-rc-custom">
                        <input type="submit" id="create-order" class="pwa-btn" value="Checkout&nbsp;" name="placeOrderBtn">
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="pwa-gap"></div>
    <div class="pwa-cart-block pwa-shadow" id="total-result">
        <div class="pwa-title-block">
            <div class="content">
                <span class="title">Checkout and Payment Details&nbsp;</span>
            </div>
        </div>
        <div class="pwa-result-by-store">
            <div class="flex-row two-cols">
                 <div class="scene">

                        <label for="PayPalECS">
                            <input name="payment_method" type="radio" id="PayPalECS" value="paypal_standard" onclick="javascript:AreaMultiShowHide('area_pay_method_exp_',3,1);">
                            <img src="http://img.normankeys.com/images/pay/PayPal_mark_60x38.gif" style="width: 50px;" alt="PayPalECS" border="0" align="absmiddle">&nbsp;&nbsp;<b class="px13 verdana">PayPal Express Checkout</b>
                        </label>
                        <div class="blank5px"></div>
                        <div style="display: none;" class="pay_ex_a" id="area_pay_method_exp_1">
                            If you don't have PayPal account, it doesn't matter. You firstly charge your Paypal with you credit card or bank debit card , then also pay via PayPal.<br>
                            Payment can be submitted in any currency.&nbsp;<br>
                            Our PayPal account is: <b style="font-size: 18px;">carkeyunlock@gmail.com</b>
                        </div>
                        <div class="dashed_line"></div>
                        <div class="blank5px"></div>
                        <div class="blank5px"></div>

                        <label for="Western Union">
                            <input name="payment_method" type="radio" id="Western Union" value="WesternUnion" onclick="javascript:AreaMultiShowHide('area_pay_method_exp_',3,2);">
                            <img src="http://img.normankeys.com/images/pay/ico_western_union.gif" alt="Western Union" border="0" align="absmiddle">&nbsp;&nbsp;<b class="px13 verdana">Western Union</b>
                        </label>
                        <div class="blank5px"></div>
                        <div style="display: none;" class="pay_ex_a" id="area_pay_method_exp_2">
                            <p>
                                <strong>First Name: PING<br>Last Name : YANG</strong><br>
                                <strong>City: SHENZHEN</strong><br>
                                <strong>Country:CHINA</strong><br>
                                <strong>Postal Code:518000</strong><br>
                                <strong>Tel: +8618565823526</strong><br>
                            </p>
                            <p>
                                Note:&nbsp;for easy and quick confirmation of your payment, please do not fix the exchange rate of money.
                                When you pay it, send the billing full information to company email box <b style="font-size: 18px;">carkeyunlock@gmail.com</b>
                                We will check it soon, and arrange your order as soon as possible.
                            </p>
                        </div>
                        <div class="dashed_line"></div>
                        <div class="blank5px"></div>
                        <div class="blank5px"></div>

                        <label for="MoneyGram">
                            <input name="payment_method" type="radio" id="MoneyGram" value="MoneyGram" onclick="javascript:AreaMultiShowHide('area_pay_method_exp_',3,3);">
                            <img src="http://img.normankeys.com/images/pay/MoneyGram.jpg" style="width: 96px;" alt="MoneyGram" border="0" align="absmiddle">&nbsp;&nbsp;<b class="px13 verdana">MoneyGram</b>
                        </label>
                        <div class="blank5px"></div>
                        <div style="display:none" class="pay_ex_a" id="area_pay_method_exp_3">
                            <div>
                                <strong>First Name: PING<br>Last Name : YANG</strong><br>
                                <strong>City: SHENZHEN</strong><br>
                                <strong>Country:CHINA</strong><br>
                                <strong>Postal Code:518000</strong><br>
                                <strong>Tel: +8618565823526</strong><br>
                            </div>
                            <p>Note:for easy and quick confirmation of your payment, please do not fix the exchange rate of money.
                                When you pay it, send the billing full information to company email box carkeyunlock@gmail.com
                                We will check it soon, and arrange your order as soon as possible.
                            </p>
                        </div>
                        <div class="dashed_line"></div>
                        <div class="blank5px"></div>
                        <div class="clear"></div>
                    </div>
            </div>
        </div>
    </div>
<?php endif; ?>

