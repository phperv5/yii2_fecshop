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
                <div class="od-con">
                    <p class="od-productit"><a href="<?= $product_one['url'] ?>"><?= $product_one['name'] ?></a></p>
                    <p class="od-productAttr">Item No.<?= $product_one['sku']; ?></p>
                    <div class="unit-price j-unit-price"><strong><?=  $currency_info['symbol'];  ?></strong><strong class="j-itemPrice"><?= Format::price($product_one['product_price']); ?></strong>/ Piece</div>
                    <span class="ui-number">
                        <input class="j-numDecrease d-decrease cartqtydown" rel="<?= $product_one['item_id']; ?>" num="<?= $product_one['qty']; ?>" type="button" value="-"><input class="j-num d-num" type="text" value="<?= $product_one['qty']; ?>"><input class="j-numIncrease d-increase cartqtyup" el="<?= $product_one['item_id']; ?>" num="<?= $product_one['qty']; ?>" type="button" value="+" data-val="jia">
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

<script>
    // add to cart js
    <?php $this->beginBlock('changeCartInfo') ?>
    $(document).ready(function(){
        currentUrl = "<?= Yii::$service->url->getUrl('checkout/cart') ?>"
        updateCartInfoUrl = "<?= Yii::$service->url->getUrl('checkout/cart/updateinfo') ?>"
        $(".cartqtydown").click(function(){
            $item_id = $(this).attr("rel");
            num = $(this).attr("num");
            if(num > 1){
                $data = {
                    item_id:$item_id,
                    up_type:"less_one"
                };
                jQuery.ajax({
                    async:true,
                    timeout: 6000,
                    dataType: 'json',
                    type:'get',
                    data: $data,
                    url:updateCartInfoUrl,
                    success:function(data, textStatus){
                        if(data.status == 'success'){
                            window.location.href=currentUrl;
                        }
                    },
                    error:function (XMLHttpRequest, textStatus, errorThrown){}
                });
            }
        });

        $(".cartqtyup").click(function(){
            $item_id = $(this).attr("rel");
            $data = {
                item_id:$item_id,
                up_type:"add_one"
            };
            jQuery.ajax({
                async:true,
                timeout: 6000,
                dataType: 'json',
                type:'get',
                data: $data,
                url:updateCartInfoUrl,
                success:function(data, textStatus){
                    if(data.status == 'success'){
                        window.location.href=currentUrl;
                    }
                },
                error:function (XMLHttpRequest, textStatus, errorThrown){

                }
            });

        });

        $(".btn-remove").click(function(){
            $item_id = $(this).attr("rel");

            $data = {
                item_id:$item_id,
                up_type:"remove"
            };
            jQuery.ajax({
                async:true,
                timeout: 6000,
                dataType: 'json',
                type:'get',
                data: $data,
                url:updateCartInfoUrl,
                success:function(data, textStatus){
                    if(data.status == 'success'){
                        window.location.href=currentUrl;
                    }
                },
                error:function (XMLHttpRequest, textStatus, errorThrown){}
            });

        });

        $(".add_coupon_submit").click(function(){
            coupon_code = $("#coupon_code").val();
            coupon_type = $(".couponType").val();
            coupon_url = "";
            if(coupon_type == 2){
                coupon_url = "<?=  Yii::$service->url->getUrl('checkout/cart/addcoupon'); ?>";
            }else if(coupon_type == 1){
                coupon_url = "<?=  Yii::$service->url->getUrl('checkout/cart/cancelcoupon'); ?>";
            }
            if(!coupon_code){
                alert("coupon can not empty!");
            }
            //coupon_url = $("#discount-coupon-form").attr("action");
            jQuery.ajax({
                async:true,
                timeout: 6000,
                dataType: 'json',
                type:'post',
                data: {"coupon_code":coupon_code},
                url:coupon_url,
                success:function(data, textStatus){
                    if(data.status == 'success'){
                        window.location.href=currentUrl;
                    }else if(data.content == 'nologin'){
                        window.location.href="<?=  Yii::$service->url->getUrl('customer/account/login'); ?>";
                    }else{
                        $(".coupon_add_log").html(data.content);
                    }
                },
                error:function (XMLHttpRequest, textStatus, errorThrown){}
            });


        });
    });

    <?php $this->endBlock(); ?>
    <?php $this->registerJs($this->blocks['changeCartInfo'],\yii\web\View::POS_END);//将编写的js代码注册到页面底部 ?>
</script>