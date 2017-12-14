<?php
use fecshop\app\appfront\helper\Format;
?>
<div class="j-cartCont">
    <div class="wrap-order j-wrap-order">
        <section class="order-list j-order-list" data-info="">
            <?php foreach($cart_info['products'] as $product_one): ?>
            <div class="j-orderDetails order-details clearfix">
                <div class="od-imgcon j-od-imgcon">
                    <a class="od-checkimg" href="javascript:;"></a>
                    <span class="od-img-warp com-ripple-href">
                        <a class="od-img" href="<?= $product_one['url'] ?>">
                            <img src="<?= Yii::$service->product->image->getResize($product_one['image'],[100,100],false) ?>" class="lazy" alt="">
                        </a>
                    </span>
                </div>
                <div class="od-con"><p class="od-productit"><a href="<?= $product_one['url'] ?>"><?= $product_one['name'] ?></a></p>
                    <div class="unit-price j-unit-price"><strong><?=  $currency_info['symbol'];  ?></strong><strong class="j-itemPrice"><?= Format::price($product_one['product_price']); ?></strong>/ Piece</div>
                    <span class="ui-number">
                        <input class="j-numDecrease d-decrease" type="button" value="-"><input class="j-num d-num" type="text" value="1"><input class="j-numIncrease d-increase" type="button" value="+" data-val="jia">
                        <a class="j-odDelete com-ripple-btn" href="javascript:;">Delete</a></span>
                </div>
            </div>
            <?php  endforeach;  ?>
            <div class="subtotal j-subtotalPrice">Subtotal: <strong><?=  $currency_info['symbol'];  ?><?= Format::price($product_one['product_row_price']); ?></strong></div>
        </section>
    </div>
    <div class="check-out  j-check-out-wap clearfix">
        <div class="checkout-main">
            <div class="checkout-price" style="padding-top: 10px;">
                <strong><?=  $currency_info['symbol'];  ?></strong><strong class="j-totalPrice"><?= Format::price($cart_info['grand_total']) ?></strong></div>
            <div class="checkout-btn com-ripple-btn"><input class="j-checkOut" type="button" value="Check out"></div>
        </div>
    </div>
</div>
