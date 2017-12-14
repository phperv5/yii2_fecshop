<?php # 图片部分。
$imageView = [
    'view' => 'catalog/product/index/image.php'
];

$imageParam = [
    'media_size' => $media_size,
    'image' => $image_thumbnails,
    'productImgMagnifier' => $productImgMagnifier,
];
?>
<?= Yii::$service->page->widget->render($imageView, $imageParam); ?>

    <section class="datail-name-box">
        <h1 class="datail-name"><?= $name; ?></h1>
    </section>

<?php # 价格部分
$priceView = [
    'view' => 'catalog/product/index/price.php'
];
$priceParam = [
    'price_info' => $price_info,
];
?>
<?= Yii::$service->page->widget->render($priceView, $priceParam); ?>
    <input type="hidden" class="product_view_id" value="<?= $_id ?>">
    <input type="hidden" class="sku" value="<?= $sku; ?>"/>
    <div class="split-line"></div>
    <section class="com-ripple-btn datail-attribute j-selectSkuAttr" data-skupop="select">
        <a href="javascript:;" rel="nofollow">
            <p class="attribute-name j-attribute-name">Item No.<?= $sku; ?></p>
            <p>Quantity: <span class="j-quantityVal">
                <input name="oQty" id="oQty" type="text" class="input" size="4" maxlength="6">
            </span>
            </p>
        </a>
    </section>

    <section class="com-ripple-btn datail-address-shipping j-shipcostBtn">
        <a href="javascript:;" rel="nofollow">
            <p class="datail-address-tip">Returns: Return for refund within 7 days,buyer pays return shipping.</p>
            <span class="public-arrow"></span>
        </a>
    </section>

    <div class="split-line"></div>
    <section class="com-ripple-btn datail-specification j-tabShowBtn" data-type="specification">
        <a href="javascript:;" rel="nofollow"><h2 class="specification-name">Specification</h2><span
                    class="public-arrow"></span></a>
    </section>
    <section class="com-ripple-btn datail-description j-tabShowBtn" data-type="description">
        <a href="javascript:;" rel="nofollow"><h2 class="description-name">Description</h2><span
                    class="public-arrow"></span></a>
    </section>
    <section class="detail-share j-detailShare">
        <a href="javascript:;" rel="nofollow" class="com-ripple-btn ga-share" data-name="google"><span></span></a>
        <a href="javascript:;" rel="nofollow" class="com-ripple-btn f-share" data-name="facebook"><span></span></a>
        <a href="javascript:;" rel="nofollow" class="com-ripple-btn g-share" data-name="twitter"><span></span></a>
        <a href="javascript:;" rel="nofollow" class="com-ripple-btn p-share" data-name="pinterest"><span></span></a>
        <a href="javascript:;" rel="nofollow" class="com-ripple-btn mail-share" data-name="mail"><span></span></a>
    </section>
    <div class="datail-reviews-layer j-tabLayerWarp close-layer1 dhm-hide">
        <div class="product-title-top">
            <span class="com-ripple-btn top-icon-warp j-tabCloseBtn"><span class="title-top-icon"></span></span>
            <div class="datail-reviews-tit j-tabBtnWarp">
                <ul>
                    <li class="com-ripple-btn" data-type="specification">Specification</li>
                    <li class="com-ripple-btn current" data-type="description">Description</li>
                </ul>
            </div>
        </div>

        <div class="datail-specification-box dhm-hide j-tabContent" data-type="specification" style="">
            <dl>
                <dt>Weight</dt>
                <dd><?= $weight; ?>KG</dd>
            </dl>
            <dl>
                <dt>Package</dt>
                <dd><?php if ($package) echo $package; else echo 'none'; ?></dd>
            </dl>
        </div>

        <div class="datail-description-box j-tabContent" data-type="description">
            <div class="product-details" style="width: 100%">
                <?php if ($main_description): ?>
                    <div class="exh_m_bri">
                        <?= $main_description; ?>
                    </div>
                <?php endif; ?>
                <?= $description; ?>
            </div>
        </div>
    </div>


<?php # review部分。
$reviewView = [
    'class' => 'fecshop\app\appfront\modules\Catalog\block\product\Review',
    'view' => 'catalog/product/index/review.php',
    'product_id' => $_id,
    'spu' => $spu,
];
?>
<?= Yii::$service->page->widget->render($reviewView, $reviewParam); ?>

<?php # tier price 部分。
$buyAlsoBuyView = [
    'view' => 'catalog/product/index/buy_also_buy.php'
];
$buyAlsoBuyParam = [
    'products' => $buy_also_buy,
];

?>
<?= Yii::$service->page->widget->render($buyAlsoBuyView, $buyAlsoBuyParam); ?>
    <div class="j-recommend-ymlike">
        <div class="viewed1">
            <div class="pro-tit">You May Like<span class="see-all com-ripple-href"><a rel="nofollow"
                                                                                      href="/youmylike.html#mhp1601_youmylike-all">See All<span></span></a></span>
            </div>
            <div class="pro-box">
                <ul>
                    <li class="com-ripple-href"><a rel="nofollow"
                                                   href="https://m.dhgate.com/product/fashionable-cloisonne-enamel-gold-brand-bracelets/183128432.html#mymlpd-1-9|null:201:r1729226847">
                            <div class="pro-img" style="background: none;"><img class="fade-in lazy show"
                                                                                src="https://www.dhresource.com/albu_581422320_00/1.0x0.jpg"
                                                                                data-original="https://www.dhresource.com/albu_581422320_00/1.0x0.jpg">
                            </div>
                            <div class="pro-text"><p class="pro-piece">US $7.89</p></div>
                        </a></li>
                    <li class="com-ripple-href"><a rel="nofollow"
                                                   href="https://m.dhgate.com/product/40pcs-stainless-steel-6-5cm-alex-and-ani/215184132.html#mymlpd-2-9|null:201:r1729226847">
                            <div class="pro-img" style="background: none;"><img class="fade-in lazy show"
                                                                                src="https://www.dhresource.com/0x0/f2/albu/g4/M00/AD/D3/rBVaEFc5KOWAHvjvAACWiFHZ-58995.jpg"
                                                                                data-original="https://www.dhresource.com/0x0/f2/albu/g4/M00/AD/D3/rBVaEFc5KOWAHvjvAACWiFHZ-58995.jpg">
                            </div>
                            <div class="pro-text"><p class="pro-piece">US $13.72</p></div>
                        </a></li>
                    <li class="com-ripple-href"><a rel="nofollow"
                                                   href="https://m.dhgate.com/product/global-hot-925-sterling-silver-plated-charm/377743169.html#mymlpd-3-9|null:201:r1729226847">
                            <div class="pro-img" style="background: none;"><span class="off-ico2">15% Off</span><img
                                        class="fade-in lazy show"
                                        src="https://www.dhresource.com/0x0/f2/albu/g4/M00/2F/E0/rBVaEFb6bwiAGOhvAAEAxLDchm4689.jpg"
                                        data-original="https://www.dhresource.com/0x0/f2/albu/g4/M00/2F/E0/rBVaEFb6bwiAGOhvAAEAxLDchm4689.jpg">
                            </div>
                            <div class="pro-text"><p class="pro-piece">US $20.41</p></div>
                        </a></li>
                    <li class="com-ripple-href"><a rel="nofollow"
                                                   href="https://m.dhgate.com/product/crazy-price-free-p-amp-p-hot-sale-925-sterling/107004936.html#mymlpd-4-9|null:201:r1729226847">
                            <div class="pro-img" style="background: none;"><img class="fade-in lazy show"
                                                                                src="https://www.dhresource.com/albu_150535287_00/1.0x0.jpg"
                                                                                data-original="https://www.dhresource.com/albu_150535287_00/1.0x0.jpg">
                            </div>
                            <div class="pro-text"><p class="pro-piece">US $1.83</p></div>
                        </a></li>
                    <li class="com-ripple-href"><a rel="nofollow"
                                                   href="https://m.dhgate.com/product/wholesale-10mm-wide-colorful-cuff-enamel/255865544.html#mymlpd-5-3|ff8080815f25413c01602f1b29d56117:201:r1729226847">
                            <div class="pro-img"><span class="off-ico2">15% Off</span><img class="fade-in lazy"
                                                                                           src="//css.dhresource.com/mobile/home/image/grey.png"
                                                                                           data-original="https://www.dhresource.com/0x0/f2/albu/g1/M00/E9/ED/rBVaGFX6RwKAVBvPAAIFTZPapf8636.jpg">
                            </div>
                            <div class="pro-text"><p class="pro-piece"><b class="mobile-deals"></b>US $8.88</p></div>
                        </a></li>
                    <li class="com-ripple-href"><a rel="nofollow"
                                                   href="https://m.dhgate.com/product/wholesale-120pcs-dance-style-mixed-color/184684559.html#mymlpd-6-9|null:201:r1729226847">
                            <div class="pro-img"><span class="off-ico2">16% Off</span><img class="fade-in lazy"
                                                                                           src="//css.dhresource.com/mobile/home/image/grey.png"
                                                                                           data-original="https://www.dhresource.com/albu_596241426_00/1.0x0.jpg">
                            </div>
                            <div class="pro-text"><p class="pro-piece"><b class="mobile-deals"></b>US $19.15</p></div>
                        </a></li>
                    <li class="com-ripple-href"><a rel="nofollow"
                                                   href="https://m.dhgate.com/product/new-design-pulseiras-love-bracelet-femaletitanium/376154898.html#mymlpd-7-9|null:201:r1729226847">
                            <div class="pro-img"><img class="fade-in lazy"
                                                      src="//css.dhresource.com/mobile/home/image/grey.png"
                                                      data-original="https://www.dhresource.com/0x0/f2/albu/g1/M00/B2/F8/rBVaGFbm5tWAPpBgAALeD1MF81w647.jpg">
                            </div>
                            <div class="pro-text"><p class="pro-piece">US $15.72</p></div>
                        </a></li>
                    <li class="com-ripple-href"><a rel="nofollow"
                                                   href="https://m.dhgate.com/product/2015-bracelets-925-sterling-silver-rose-flower/236719974.html#mymlpd-8-9|null:201:r1729226847">
                            <div class="pro-img"><span class="off-ico2">5% Off</span><img class="fade-in lazy"
                                                                                          src="//css.dhresource.com/mobile/home/image/grey.png"
                                                                                          data-original="https://www.dhresource.com/0x0/f2/albu/g2/M01/66/13/rBVaG1U2CdyAUanMAAD0R1HPOQc588.jpg">
                            </div>
                            <div class="pro-text"><p class="pro-piece"><b class="mobile-deals"></b>US $1.08</p></div>
                        </a></li>
                    <li class="com-ripple-href"><a rel="nofollow"
                                                   href="https://m.dhgate.com/product/6pcs-lot-new-vintage-openwork-carving-bangle/257139263.html#mymlpd-9-9|null:201:r1729226847">
                            <div class="pro-img"><img class="fade-in lazy"
                                                      src="//css.dhresource.com/mobile/home/image/grey.png"
                                                      data-original="https://www.dhresource.com/0x0/f2/albu/g1/M00/8C/25/rBVaGVYF1sqALlMAAAG1AyFn3Nk243.jpg">
                            </div>
                            <div class="pro-text"><p class="pro-piece">US $17.91</p></div>
                        </a></li>
                    <li class="com-ripple-href"><a rel="nofollow"
                                                   href="https://m.dhgate.com/product/classic-style-netherlands-bracelet-brand/388274671.html#mymlpd-10-9|null:201:r1729226847">
                            <div class="pro-img"><img class="fade-in lazy"
                                                      src="//css.dhresource.com/mobile/home/image/grey.png"
                                                      data-original="https://www.dhresource.com/0x0/f2/albu/g3/M01/51/3F/rBVaHFX41XeAen87AAJOr2ehrVs452.jpg">
                            </div>
                            <div class="pro-text"><p class="pro-piece">US $32.58</p></div>
                        </a></li>
                    <li class="com-ripple-href"><a rel="nofollow"
                                                   href="https://m.dhgate.com/product/top-quality-titanium-steel-double-t-rosse/386666588.html#mymlpd-11-9|null:201:r1729226847">
                            <div class="pro-img"><span class="off-ico2">25% Off</span><img class="fade-in lazy"
                                                                                           src="//css.dhresource.com/mobile/home/image/grey.png"
                                                                                           data-original="https://www.dhresource.com/0x0/f2/albu/g4/M01/42/87/rBVaEVdmUviAKY04AALx5LDb4TI174.jpg">
                            </div>
                            <div class="pro-text"><p class="pro-piece"><b class="mobile-deals"></b>US $6.86</p></div>
                        </a></li>
                    <li class="com-ripple-href"><a rel="nofollow"
                                                   href="https://m.dhgate.com/product/new-925-sterling-silver-four-big-flowers/211868618.html#mymlpd-12-9|null:201:r1729226847">
                            <div class="pro-img"><span class="off-ico2">12% Off</span><img class="fade-in lazy"
                                                                                           src="//css.dhresource.com/mobile/home/image/grey.png"
                                                                                           data-original="https://www.dhresource.com/albu_934293181_00/1.0x0.jpg">
                            </div>
                            <div class="pro-text"><p class="pro-piece">US $39.23</p></div>
                        </a></li>
                    <li class="com-ripple-href"><a rel="nofollow"
                                                   href="https://m.dhgate.com/product/cool-new-silver-gold-316l-high-polished-stainless/270790113.html#mymlpd-13-9|null:201:r1729226847">
                            <div class="pro-img"><span class="off-ico2">10% Off</span><img class="fade-in lazy"
                                                                                           src="//css.dhresource.com/mobile/home/image/grey.png"
                                                                                           data-original="https://www.dhresource.com/0x0/f2/albu/g2/M01/BF/89/rBVaGlZ7WoGABIQPAAMYlUIIbng508.jpg">
                            </div>
                            <div class="pro-text"><p class="pro-piece"><b class="mobile-deals"></b>US $12.34</p></div>
                        </a></li>
                    <li class="com-ripple-href"><a rel="nofollow"
                                                   href="https://m.dhgate.com/product/925-silver-cuff-bracelet-classic-design-silver/202957811.html#mymlpd-14-9|null:201:r1729226847">
                            <div class="pro-img"><span class="off-ico2">15% Off</span><img class="fade-in lazy"
                                                                                           src="//css.dhresource.com/mobile/home/image/grey.png"
                                                                                           data-original="https://www.dhresource.com/albu_846789451_00/1.0x0.jpg">
                            </div>
                            <div class="pro-text"><p class="pro-piece"><b class="mobile-deals"></b>US $5.98</p></div>
                        </a></li>
                    <li class="com-ripple-href"><a rel="nofollow"
                                                   href="https://m.dhgate.com/product/sterling-silver-25mmround-bangle-bracelet/168028939.html#mymlpd-15-9|null:201:r1729226847">
                            <div class="pro-img"><img class="fade-in lazy"
                                                      src="//css.dhresource.com/mobile/home/image/grey.png"
                                                      data-original="https://www.dhresource.com/albu_407962151_00/1.0x0.jpg">
                            </div>
                            <div class="pro-text"><p class="pro-piece">US $15.16</p></div>
                        </a></li>
                    <li class="com-ripple-href"><a rel="nofollow"
                                                   href="https://m.dhgate.com/product/best-crazy-christmas-gift-hot-925-silver/150468945.html#mymlpd-16-9|null:201:r1729226847">
                            <div class="pro-img"><img class="fade-in lazy"
                                                      src="//css.dhresource.com/mobile/home/image/grey.png"
                                                      data-original="https://www.dhresource.com/albu_289064732_00/1.0x0.jpg">
                            </div>
                            <div class="pro-text"><p class="pro-piece">US $1.12</p></div>
                        </a></li>
                </ul>
            </div>
        </div>
    </div>

    <div class="layer-bottom-cartWarp j-layer-bottom-cartWarp">
        <span class="com-ripple-btn layer-bottom-collection j-bto-fav">
            <a href="javascript:;" class="j-favBtn"  data-style="botFav" rel="nofollow"></a></span>
        <span class="com-ripple-href layer-bottom-cart">
            <a class="cart-num j-cartnum" rel="nofollow"  href="/viewcart.do#mpu1509-cart">1</a></span>
        <div class="layer-bottom-box j-layer-bottom-box">
            <a href="javascript:;" class="com-ripple-btn layer-bottom-but j-buySelectSkuAttr" data-skupop="buy"
               rel="nofollow">Buy it Now</a>
            <a href="javascript:;" class="com-ripple-btn layer-bottom-add j-cartSelectSkuAttr goProductToCart" data-skupop="cart"
               rel="nofollow">Add to Cart</a>
        </div>
    </div>
    <script>
        <?php $this->beginBlock('owl_fecshop_click') ?>
        $(function () {
            $('.j-tabShowBtn[data-type="specification"]').click(function () {
                $('.datail-reviews-layer').removeClass('close-layer1').removeClass('dhm-hide').addClass('open-layer1');
                $('.com-ripple-btn[data-type="specification"]').removeClass('current');
                $('.com-ripple-btn[data-type="description"]').addClass('current');
                height = $(window).height() - 45;
                $('.j-tabContent[data-type="description"]').height(height);
            })
            $('.j-tabShowBtn[data-type="description"]').click(function () {
                $('.datail-reviews-layer').removeClass('close-layer1').removeClass('dhm-hide').addClass('open-layer1');
                $('.com-ripple-btn[data-type="specification"]').addClass('current');
                $('.com-ripple-btn[data-type="description"]').removeClass('current');
                height = $(window).height() - 45;
                $('.j-tabContent[data-type="specification"]').height(height);
            })
            $('.j-tabCloseBtn').click(function () {
                $('.datail-reviews-layer').addClass('close-layer1').addClass('dhm-hide').removeClass('open-layer1');
            })

            $('.com-ripple-btn[data-type="specification"]').click(function () {
                $('.com-ripple-btn[data-type="specification"]').removeClass('current');
                $('.com-ripple-btn[data-type="description"]').addClass('current');
                $('.j-tabContent[data-type="description"]').addClass('dhm-hide');
                $('.j-tabContent[data-type="specification"]').removeClass('dhm-hide');
            })
            $('.com-ripple-btn[data-type="description"]').click(function () {
                $('.com-ripple-btn[data-type="specification"]').addClass('current');
                $('.com-ripple-btn[data-type="description"]').removeClass('current');
                $('.j-tabContent[data-type="description"]').removeClass('dhm-hide');
                $('.j-tabContent[data-type="specification"]').addClass('dhm-hide');
            })


            $(".goProductToCart").click(function () {
                i = 1;

                if (i) {
                    custom_option = new Object();
                    $(".product_custom_options .pg .rg ul").each(function () {
                        $m = $(this).find("li.current a.current");
                        attr = $m.attr("attr");
                        value = $m.attr("value");
                        custom_option[attr] = value;
                    });
                    custom_option_json = JSON.stringify(custom_option);
                    //alert(custom_option_json);
                    sku = $(".sku").val();
                    qty = $(".qty").val();
                    qty = qty ? qty : 1;
                    csrfName = $(".product_csrf").attr("name");
                    csrfVal = $(".product_csrf").val();

                    $(".product_custom_options").val(custom_option_json);
                    $(this).addClass("dataUp");
                    // ajax 提交数据

                    addToCartUrl = "<?= Yii::$service->url->getUrl('checkout/cart/add'); ?>";
                    $data = {};
                    $data['custom_option'] = custom_option_json;
                    $data['product_id'] = "<?= $_id ?>";
                    $data['qty'] = qty;
                    $data[csrfName] = csrfVal;
                    jQuery.ajax({
                        async: true,
                        timeout: 6000,
                        dataType: 'json',
                        type: 'post',
                        data: $data,
                        url: addToCartUrl,
                        success: function (data, textStatus) {
                            if (data.status == 'success') {
                                window.location.href = "<?= Yii::$service->url->getUrl("checkout/cart") ?>";
                            } else {
                                content = data.content;
                                $(".addProductToCart").removeClass("dataUp");
                                alert(content);
                            }

                        },
                        error: function (XMLHttpRequest, textStatus, errorThrown) {
                        }
                    });

                }
            });

        });
        <?php $this->endBlock(); ?>
    </script>
<?php $this->registerJs($this->blocks['owl_fecshop_click'], \yii\web\View::POS_END);//将编写的js代码注册到页面底部 ?>