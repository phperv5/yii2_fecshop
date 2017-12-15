<?php
use fecshop\app\appfront\helper\Format;
?>
<section class="shopcart-list" id="shopcart-list">
    <div class="shipto bb p-24 mb-16 pwa-shadow">
        Ship my order(s) to<span class="ship-to" id="ship-to">Canada</span>
    </div>
    <article id="seller-cart-220588563" class="seller-products pwa-shadow">
        <ul class="product bt">
            <?php foreach ($cart_info['products'] as $product_one): ?>
                <li id="shopcart-" class="p-24 " productid="1784151434">
                    <div class="pi-details mb-24 clearfix">
                        <div class="pi-details-pic">
                            <a href="<?= $product_one['url'] ?>">
                                <img src="<?= Yii::$service->product->image->getResize($product_one['image'], [100, 100], false) ?>"
                                     alt="<?= $product_one['name'] ?>">
                            </a>
                        </div>
                        <div class="pi-details-desc">
                            <div class="pi-details-desc-row">
                                <a href="<?= $product_one['url'] ?>">
                                    <div class="details-title">
                                        <?= $product_one['name'] ?>
                                    </div>
                                </a>
                                <div class="details-sku ellipsis-multiple">
                                    Item No.<?= $product_one['sku']; ?>
                                </div>
                                <div class="details-price clearfix">
                                    <div>
                                        <span class="sell-price"><?= $currency_info['symbol']; ?><?= Format::price($product_one['product_price']); ?></span>
                                    </div>
                                </div>
                                <div class="pi-quantity  clearfix">
                                    <div class="clearfix">
                                        <div class="trim">
                                                <span class="trim ms-numberic ms-numberic-20081458765"
                                                      data-shop-cartid="20081458765">
                                                    <a href="javascript:;" class="ms-minus">
                                                        <i class="ic-md ic-remove-md cartqtydown"
                                                           rel="<?= $product_one['item_id']; ?>"
                                                           num="<?= $product_one['qty']; ?>"></i>
                                                    </a>
                                                    <input type="number" id="quantity-20081458765" min="1" max="6"
                                                           value="<?= $product_one['qty']; ?>"
                                                           rel="<?= $product_one['item_id']; ?>">
                                                    <a href="javascript:;" class="ms-plus">
                                                        <i class="ic-md ic-add-md cartqtyup"
                                                           rel="<?= $product_one['item_id']; ?>"
                                                           num="<?= $product_one['qty']; ?>"></i>
                                                    </a>
                                                </span>
                                        </div>
                                        <span class="delete"><i class="ic-delete-md ic-md btn-remove"
                                                                rel="<?= $product_one['item_id']; ?>"></i></span>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div class="pi-shipping mb-40 ms-rc-ripple ms-rc-custom">
                        <div class="shipping clearfix" data-shop-cartid="20081458765"></div>
                    </div>
                </li>
            <?php endforeach; ?>
        </ul>
    </article>

    <article id="seller-cart-buyall" class="seller-products pwa-shadow">
        <div class="seller-cart-buyall seller-costs bt p-24 pb-24">
            <dl class="seller-costs-subtotal mt-24 clearfix">
                <dt>Subtotal:</dt>
                <dd><span><?= $currency_info['symbol']; ?><?= Format::price($cart_info['product_total']); ?></span></dd>
            </dl>
            <dl class="seller-costs-shipping mt-16 clearfix">
                <dt>Shipping&nbsp;:</dt>
                <dd><span><?= $currency_info['symbol']; ?><?= Format::price($cart_info['shipping_cost']); ?></span></dd>
            </dl>
        </div>

        <div class="accounts bt bb p-24 pt-24 pb-24 clearfix">
            <div class="total">
                <span>Total&nbsp;:</span>
                <span class="mt-16 price"><?= $currency_info['symbol']; ?><?= Format::price($cart_info['grand_total']) ?></span>
            </div>
            <div class="ui-button ui-button-main buyall pwa-shadow ">Buy All</div>
        </div>
    </article>

    <form id="submit-for-seller-create-order" method="post" action="/order/createNewOrderForCombine.htm">
        <input name="_csrf_token_" type="hidden" value="s73ert97ohum">
        <input type="hidden" data-role="seller-shopcart-ids" name="availableProductShopcartIds" value="">
    </form>

    <form id="submit-for-delete" method="post" action="/shopcart/detail.htm">
        <input name="_csrf_token_" type="hidden" value="s73ert97ohum">
        <input type="hidden" name="action" value="/shopcart/mobi_shopcart_action">
        <input type="hidden" data-role="shopcart-id" name="shopcartId" value="">
        <input type="hidden" name="event_submit_do_delete_shopcart" value="anything">
    </form>

    <form id="submit-for-delete-all" method="post" action="/shopcart/detail.htm">
        <input name="_csrf_token_" type="hidden" value="s73ert97ohum">
        <input type="hidden" name="action" value="/shopcart/mobi_shopcart_action">
        <input type="hidden" name="event_submit_do_delete_all_shopcart" value="anything">
    </form>

    <form id="submit-for-update-quantity" method="post" action="/shopcart/detail.htm">
        <input name="_csrf_token_" type="hidden" value="s73ert97ohum">
        <input type="hidden" name="action" value="/shopcart/mobi_shopcart_action">
        <input type="hidden" data-role="shopcart-id" name="shopcartId" value="">
        <input type="hidden" data-role="quantity" name="quantity" value="">
        <input type="hidden" name="event_submit_do_update_quantity" value="anything">
    </form>

    <form id="submit-for-update-freight" method="post" action="/shopcart/detail.htm">
        <input name="_csrf_token_" type="hidden" value="s73ert97ohum">
        <input type="hidden" name="action" value="/shopcart/mobi_shopcart_action">
        <input type="hidden" data-role="shopcart-id" name="shopcartId" value="">
        <input type="hidden" data-role="freight" name="logisticService" value="">
        <input type="hidden" name="event_submit_do_update_logistic_service" value="anything">
    </form>

    <form id="submit-for-update-country" method="post" action="/shopcart/detail.htm">
        <input name="_csrf_token_" type="hidden" value="s73ert97ohum">
        <input type="hidden" name="action" value="/shopcart/mobi_shopcart_action">
        <input type="hidden" data-role="country-code" name="countryCode" value="">
        <input type="hidden" name="event_submit_do_update_buyer_country" value="anything">
    </form>

    <form id="submit-for-buy-all" method="post" action="/order/createNewOrderForCombine.htm">
        <input name="_csrf_token_" type="hidden" value="s73ert97ohum">
        <input type="hidden" data-role="seller-shopcart-ids" name="availableProductShopcartIds" value="">
    </form>
</section>

<div class="ms-toast">
    <div class="ms-toast-loading ms-loading ms-loading-20" data-role="loading" style="display: none;"></div>
    <div class="ms-toast-content" data-role="content"></div>
</div>
<div id="ai-jb7lm8t9">
    <div class="ms-panel-md panel-show" id="panel-ai-jb7lm8t9" style="top: 0%;">
        <div class="ms-panel-header">
            <span class="ms-panel-title" data-role="panel-title">Country</span>
            <span class="ms-panel-cancel">
            <i class="ic-md ic-close-md"></i>
        </span>
        </div>
        <div class="ms-panel-bodyer" data-role="panel-body">
            <section class="ms-country-wrap" id="country-jb7lm8t8">
                <ul class="ms-country-list">
                    <li data-name="all" data-code="-1" class="ms-country-all">All <i class="ms-icon icon-check"></i></li>
                    <?php foreach ($country as $code => $c): ?>
                        <li class="ms-rc-ripple ms-rc-custom>" data-type="pop" data-code="<?= $code; ?>"
                            data-name="<?= $c; ?>" data-index="0"><?= $c; ?>
                            <div class="circle <?php if($cart_info['shipping_country'] == $code) echo 'current'; ?>"><span></span></div>
                        </li>
                    <?php endforeach; ?>
                </ul>
            </section>
        </div>
    </div>
</div>

<script>
    // add to cart js
    <?php $this->beginBlock('changeCartInfo') ?>
    $(document).ready(function () {
        currentUrl = "<?= Yii::$service->url->getUrl('checkout/cart') ?>"
        updateCartInfoUrl = "<?= Yii::$service->url->getUrl('checkout/cart/updateinfo') ?>"
        $(".cartqtydown").click(function () {
            $item_id = $(this).attr("rel");
            num = $(this).attr("num");
            if (num > 1) {
                $data = {
                    item_id: $item_id,
                    up_type: "less_one"
                };
                jQuery.ajax({
                    async: true,
                    timeout: 6000,
                    dataType: 'json',
                    type: 'get',
                    data: $data,
                    url: updateCartInfoUrl,
                    success: function (data, textStatus) {
                        if (data.status == 'success') {
                            window.location.href = currentUrl;
                        }
                    },
                    error: function (XMLHttpRequest, textStatus, errorThrown) {
                    }
                });
            }
        });

        $(".cartqtyup").click(function () {
            $item_id = $(this).attr("rel");
            $data = {
                item_id: $item_id,
                up_type: "add_one"
            };
            jQuery.ajax({
                async: true,
                timeout: 6000,
                dataType: 'json',
                type: 'get',
                data: $data,
                url: updateCartInfoUrl,
                success: function (data, textStatus) {
                    if (data.status == 'success') {
                        window.location.href = currentUrl;
                    }
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {

                }
            });

        });

        $(".btn-remove").click(function () {
            $item_id = $(this).attr("rel");

            $data = {
                item_id: $item_id,
                up_type: "remove"
            };
            jQuery.ajax({
                async: true,
                timeout: 6000,
                dataType: 'json',
                type: 'get',
                data: $data,
                url: updateCartInfoUrl,
                success: function (data, textStatus) {
                    if (data.status == 'success') {
                        window.location.href = currentUrl;
                    }
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                }
            });

        });

        $(".add_coupon_submit").click(function () {
            coupon_code = $("#coupon_code").val();
            coupon_type = $(".couponType").val();
            coupon_url = "";
            if (coupon_type == 2) {
                coupon_url = "<?=  Yii::$service->url->getUrl('checkout/cart/addcoupon'); ?>";
            } else if (coupon_type == 1) {
                coupon_url = "<?=  Yii::$service->url->getUrl('checkout/cart/cancelcoupon'); ?>";
            }
            if (!coupon_code) {
                alert("coupon can not empty!");
            }
            //coupon_url = $("#discount-coupon-form").attr("action");
            jQuery.ajax({
                async: true,
                timeout: 6000,
                dataType: 'json',
                type: 'post',
                data: {"coupon_code": coupon_code},
                url: coupon_url,
                success: function (data, textStatus) {
                    if (data.status == 'success') {
                        window.location.href = currentUrl;
                    } else if (data.content == 'nologin') {
                        window.location.href = "<?=  Yii::$service->url->getUrl('customer/account/login'); ?>";
                    } else {
                        $(".coupon_add_log").html(data.content);
                    }
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                }
            });
        });

        //修改发货方式
        $('#oShipMethod').change(function () {
            var oShipMethod = $(this).val();
            jQuery.ajax({
                async: true,
                timeout: 6000,
                dataType: 'json',
                type: 'post',
                data: {"shipping_method": oShipMethod},
                url: "<?= Yii::$service->url->getUrl('checkout/cart/updateshippingmethod') ?>",
                success: function (data, textStatus) {
                    if (data.status == 'success') {
                        window.location.href = currentUrl;
                    } else if (data.content == 'nologin') {
                        window.location.href = "<?=  Yii::$service->url->getUrl('customer/account/login'); ?>";
                    } else {
                        $(".coupon_add_log").html(data.content);
                    }
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                }
            });
        })
        $('.circle').on('click', function () {
            var shipping_country = $(this).parents('li').attr('data-code');
            jQuery.ajax({
                async: true,
                timeout: 6000,
                dataType: 'json',
                type: 'post',
                data: {"shipping_country": shipping_country},
                url: "<?= Yii::$service->url->getUrl('checkout/cart/updateshipping') ?>",
                success: function (data, textStatus) {
                    if (data.status == 'success') {
                        window.location.href = currentUrl;
                    } else if (data.content == 'nologin') {
                        window.location.href = "<?=  Yii::$service->url->getUrl('customer/account/login'); ?>";
                    } else {
                        $(".coupon_add_log").html(data.content);
                    }
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                }
            });
        })
    });

    <?php $this->endBlock(); ?>
    <?php $this->registerJs($this->blocks['changeCartInfo'], \yii\web\View::POS_END);//将编写的js代码注册到页面底部 ?>
</script>