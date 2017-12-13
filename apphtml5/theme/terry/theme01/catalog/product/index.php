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
    <div class="split-line"></div>

    <section class="com-ripple-btn datail-attribute j-selectSkuAttr" data-skupop="select">
        <a href="javascript:;" rel="nofollow">
            <p class="attribute-name j-attribute-name">Item No.<?= $sku; ?></p>
            <p>Quantity: <span class="j-quantityVal">
                <input name="oQty" id="oQty" type="text" class="input" size="4" maxlength="6"
                       onkeypress="event.returnValue=IsDigit();" value="1"
                       onkeyup="IsOrderNeedQty('Y','oQty',0);ProQtySubTotal(this,'1','209.00','txtSingleProSubTotal','Subtotal: ');">
            </span>
            </p>
        </a>
    </section>

    <section class="com-ripple-btn datail-address-shipping j-shipcostBtn">
        <a href="javascript:;" rel="nofollow">
            <p class="datail-shippingcost"><?= $weight; ?>KG</p>
            <p class="datail-address-tip">Returns: Return for refund within 7 days,buyer pays return shipping.</p>
            <span class="public-arrow"></span>
        </a>
    </section>

    <div class="split-line"></div>
    <section class="com-ripple-btn datail-specification j-tabShowBtn" data-type="specification">
        <a href="javascript:;" rel="nofollow"><h2 class="specification-name">Specification</h2><span class="public-arrow"></span></a>
    </section>
    <section class="com-ripple-btn datail-description j-tabShowBtn" data-type="description">
        <a href="javascript:;" rel="nofollow"><h2 class="description-name">Description</h2><span class="public-arrow"></span></a>
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

        <div class="datail-specification-box dhm-hide j-tabContent" data-type="specification" style="height: 138px;">
            <dl>
                <dt>Item Name</dt>
                <dd>
                    Wholesale New Korean Fashion Couple Bracelet Couple Titanium Steel Rose Gold Bracelet Love Oath
                    Bracelet wholesale free shipping
                </dd>
            </dl>
            <dl>
                <dt>Item Code</dt>
                <dd>
                    399037048
                </dd>
            </dl>
            <dl>
                <dt>Category</dt>
                <dd>
                    <a class="aColor" href="https://m.dhgate.com/wholesale/bangle/c100002001.html">Bangle</a>
                </dd>
            </dl>
            <div class="datail-specification-h2">
                <dl>
                    <dt>Short Description</dt>
                    <dd>This produce is designed for lovers in our company,we can prefer more than 10000 price for you
                        anywhen.And we can designed any produce which you love
                    </dd>
                </dl>
            </div>
            <dl>
                <dt>Quantity</dt>
                <dd>
                    1 Piece
                </dd>
            </dl>
            <dl>
                <dt>Package Size</dt>
                <dd>
                    10.0*12.0*15.0(cm)
                </dd>
            </dl>
            <dl>
                <dt>Gross Weight/Package</dt>
                <dd>
                    0.09(kg)
                </dd>
            </dl>
            <dl>
                <dt>Bracelets Type</dt>
                <dd>
                    Bangle
                </dd>
            </dl>
            <dl>
                <dt>Main Stone Color</dt>
                <dd>
                    White
                </dd>
            </dl>
            <dl>
                <dt>Bracelets Material</dt>
                <dd>
                    Titanium
                </dd>
            </dl>
            <dl>
                <dt>Style</dt>
                <dd>
                    Bohemian
                </dd>
            </dl>
            <dl>
                <dt>Setting Type</dt>
                <dd>
                    Prong Setting
                </dd>
            </dl>
            <dl>
                <dt>Metal Color</dt>
                <dd>
                    18K Gold Plated
                </dd>
            </dl>
            <dl>
                <dt>Clasp Type</dt>
                <dd>
                    Lobster-claw-clasps
                </dd>
            </dl>
            <dl>
                <dt>Metals Type</dt>
                <dd>
                    Titanium
                </dd>
            </dl>
            <dl>
                <dt>Gender</dt>
                <dd>
                    Women's
                </dd>
            </dl>
            <dl>
                <dt>Holiday</dt>
                <dd>
                    Valentine's Day
                </dd>
            </dl>
            <dl>
                <dt>Bracelets Stone Material</dt>
                <dd>
                    Moonstone
                </dd>
            </dl>
            <dl>
                <dt>Occasion</dt>
                <dd>
                    Engagement
                </dd>
            </dl>
            <dl>
                <dt>Chain Type</dt>
                <dd>
                    Twisted Singapore Chain
                </dd>
            </dl>
        </div>

        <div class="datail-description-box j-tabContent" data-type="description" style="height: 138px;">
            <div class="product-details">
                <?php if($main_description):?>
                <div class="exh_m_bri">
                    <?= $main_description; ?>
                </div>
                <?php endif;?>
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


    <div id="goto-recommended">
        <section class="recommended-products j-recommended-products"><h2 class="country-tit">Recommended Products</h2>
            <div class="datail-pro-list">
                <ul>
                    <li class="com-ripple-href"><a rel="nofollow"
                                                   href="https://m.dhgate.com/product/factory-direct-sales-speed-through-the-amazon/399032667.html#cppd-1-9|null:102:r1460666847">
                            <div class="datail-pro-img" style="background: none;"><img class="fade-in lazy show"
                                                                                       src="https://www.dhresource.com/0x0/f2/albu/g5/M00/FC/13/rBVaI1kF7aaAGsOOAAB4IZer6hk699.jpg"
                                                                                       data-original="https://www.dhresource.com/0x0/f2/albu/g5/M00/FC/13/rBVaI1kF7aaAGsOOAAB4IZer6hk699.jpg">
                            </div>
                            <div class="datail-pro-name"><p class="datail-pro-piece">US $3.66</p></div>
                        </a></li>
                    <li class="com-ripple-href"><a rel="nofollow"
                                                   href="https://m.dhgate.com/product/new-screws-never-lose-style-silver-18k-rose/397645274.html#cppd-2-9|null:102:r1460666847">
                            <div class="datail-pro-img" style="background: none;"><img class="fade-in lazy show"
                                                                                       src="https://www.dhresource.com/0x0/f2/albu/g5/M01/36/53/rBVaI1jX04yAaeHFAATAip-Z7jY461.jpg"
                                                                                       data-original="https://www.dhresource.com/0x0/f2/albu/g5/M01/36/53/rBVaI1jX04yAaeHFAATAip-Z7jY461.jpg">
                            </div>
                            <div class="datail-pro-name"><p class="datail-pro-piece">US $45.72</p></div>
                        </a></li>
                </ul>
                <ul>
                    <li class="com-ripple-href"><a rel="nofollow"
                                                   href="https://m.dhgate.com/product/new-jewelry-fashion-generous-opening-metal/399028537.html#cppd-3-9|null:102:r1460666847">
                            <div class="datail-pro-img" style="background: none;"><img class="fade-in lazy show"
                                                                                       src="https://www.dhresource.com/0x0/f2/albu/g5/M00/E9/5F/rBVaI1kFtCeAdc2TAAEFw3BlaLs259.jpg"
                                                                                       data-original="https://www.dhresource.com/0x0/f2/albu/g5/M00/E9/5F/rBVaI1kFtCeAdc2TAAEFw3BlaLs259.jpg">
                            </div>
                            <div class="datail-pro-name"><p class="datail-pro-piece">US $2.06</p></div>
                        </a></li>
                    <li class="com-ripple-href"><a rel="nofollow"
                                                   href="https://m.dhgate.com/product/2017-high-quality-new-titanium-steel-bangle/401780488.html#cppd-4-9|null:108:r1460666847">
                            <div class="datail-pro-img" style="background: none;"><img class="fade-in lazy show"
                                                                                       src="https://www.dhresource.com/0x0/f2/albu/g5/M00/5F/73/rBVaJFlbVnaABo-oAAK7h-Rb2Ic717.jpg"
                                                                                       data-original="https://www.dhresource.com/0x0/f2/albu/g5/M00/5F/73/rBVaJFlbVnaABo-oAAK7h-Rb2Ic717.jpg">
                            </div>
                            <div class="datail-pro-name"><p class="datail-pro-piece">US $6.56</p></div>
                        </a></li>
                </ul>
                <ul>
                    <li class="com-ripple-href"><a rel="nofollow"
                                                   href="https://m.dhgate.com/product/love-bracelets-for-women-opening-bracelets/401384390.html#cppd-5-9|null:108:r1460666847">
                            <div class="datail-pro-img" style="background: none;"><img class="fade-in lazy show"
                                                                                       src="https://www.dhresource.com/0x0/f2/albu/g5/M01/7F/47/rBVaJFlNHdOAJU2kAAGFltAKC24875.jpg"
                                                                                       data-original="https://www.dhresource.com/0x0/f2/albu/g5/M01/7F/47/rBVaJFlNHdOAJU2kAAGFltAKC24875.jpg">
                            </div>
                            <div class="datail-pro-name"><p class="datail-pro-piece">US $1.53</p></div>
                        </a></li>
                    <li class="com-ripple-href"><a rel="nofollow"
                                                   href="https://m.dhgate.com/product/factory-direct-wholesale-925-sterling-silver/381928561.html#cppd-6-9|null:108:r1460666847">
                            <div class="datail-pro-img" style="background: none;"><img class="fade-in lazy show"
                                                                                       src="https://www.dhresource.com/0x0/f2/albu/g4/M01/49/83/rBVaEFcLYYeABh1-AACl2n37A-M846.jpg"
                                                                                       data-original="https://www.dhresource.com/0x0/f2/albu/g4/M01/49/83/rBVaEFcLYYeABh1-AACl2n37A-M846.jpg">
                            </div>
                            <div class="datail-pro-name"><p class="datail-pro-piece">US $13.72</p></div>
                        </a></li>
                </ul>
                <ul>
                    <li class="com-ripple-href"><a rel="nofollow"
                                                   href="https://m.dhgate.com/product/gold-plated-bangle-brand-design-fast-colors/212775686.html#cppd-7-3|ff8080815f25413c01602f1b25eb609c:108:r1460666847">
                            <div class="datail-pro-img" style="background: none;"><img class="fade-in lazy show"
                                                                                       src="https://www.dhresource.com/0x0/f2/albu/g2/M01/77/F3/rBVaG1XddNaAEYunAAHftWfsoEY088.jpg"
                                                                                       data-original="https://www.dhresource.com/0x0/f2/albu/g2/M01/77/F3/rBVaG1XddNaAEYunAAHftWfsoEY088.jpg">
                            </div>
                            <div class="datail-pro-name"><p class="datail-pro-piece">US $7.58</p></div>
                        </a></li>
                    <li class="com-ripple-href"><a rel="nofollow"
                                                   href="https://m.dhgate.com/product/wholesale-925-sterling-silver-plated-fashion/396522770.html#cppd-8-9|null:108:r1460666847">
                            <div class="datail-pro-img" style="background: none;"><img class="fade-in lazy show"
                                                                                       src="https://www.dhresource.com/0x0/f2/albu/g5/M00/B6/28/rBVaI1iyUoiAVcDTAAIbT53LDPA913.jpg"
                                                                                       data-original="https://www.dhresource.com/0x0/f2/albu/g5/M00/B6/28/rBVaI1iyUoiAVcDTAAIbT53LDPA913.jpg">
                            </div>
                            <div class="datail-pro-name"><p class="datail-pro-piece">US $28.95</p></div>
                        </a></li>
                </ul>
                <ul>
                    <li class="com-ripple-href"><a rel="nofollow"
                                                   href="https://m.dhgate.com/product/low-price-sell-new-korean-fashion-couple/405418897.html#cppd-9-9|null:108:r1460666847">
                            <div class="datail-pro-img" style="background: none;"><img class="fade-in lazy show"
                                                                                       src="https://www.dhresource.com/0x0/f2/albu/g5/M00/F1/03/rBVaI1ncMKqAaI-aAAHdoT8LYqo417.jpg"
                                                                                       data-original="https://www.dhresource.com/0x0/f2/albu/g5/M00/F1/03/rBVaI1ncMKqAaI-aAAHdoT8LYqo417.jpg">
                            </div>
                            <div class="datail-pro-name"><p class="datail-pro-piece">US $29.71</p></div>
                        </a></li>
                    <li class="com-ripple-href"><a rel="nofollow"
                                                   href="https://m.dhgate.com/product/fashion-bangle-jewelry-wholesale-black-box/405141624.html#cppd-10-9|null:108:r1460666847">
                            <div class="datail-pro-img" style="background: none;"><img class="fade-in lazy show"
                                                                                       src="https://www.dhresource.com/0x0/f2/albu/g4/M00/EE/0F/rBVaEFnL_ueAeWMzAAFYS2YhCC8347.jpg"
                                                                                       data-original="https://www.dhresource.com/0x0/f2/albu/g4/M00/EE/0F/rBVaEFnL_ueAeWMzAAFYS2YhCC8347.jpg">
                            </div>
                            <div class="datail-pro-name"><p class="datail-pro-piece">US $17.26</p></div>
                        </a></li>
                </ul>
                <ul>
                    <li class="com-ripple-href"><a rel="nofollow"
                                                   href="https://m.dhgate.com/product/jewelry-wholesale-and-cross-opening-bracelet/401684691.html#cppd-11-9|null:108:r1460666847">
                            <div class="datail-pro-img" style="background: none;"><img class="fade-in lazy show"
                                                                                       src="https://www.dhresource.com/0x0/f2/albu/g5/M01/86/09/rBVaI1lXqi-AOYVNAAGVHSUn-mU864.jpg"
                                                                                       data-original="https://www.dhresource.com/0x0/f2/albu/g5/M01/86/09/rBVaI1lXqi-AOYVNAAGVHSUn-mU864.jpg">
                            </div>
                            <div class="datail-pro-name"><p class="datail-pro-piece">US $16</p></div>
                        </a></li>
                    <li class="com-ripple-href"><a rel="nofollow"
                                                   href="https://m.dhgate.com/product/luxury-stainless-steel-cuff-bracelets-bangles/400259864.html#cppd-12-9|null:108:r1460666847">
                            <div class="datail-pro-img" style="background: none;"><img class="fade-in lazy show"
                                                                                       src="https://www.dhresource.com/0x0/f2/albu/g5/M01/01/01/rBVaJFkprlOAHJ74AAJL1xDVd2U445.jpg"
                                                                                       data-original="https://www.dhresource.com/0x0/f2/albu/g5/M01/01/01/rBVaJFkprlOAHJ74AAJL1xDVd2U445.jpg">
                            </div>
                            <div class="datail-pro-name"><p class="datail-pro-piece">US $12.7</p></div>
                        </a></li>
                </ul>
                <ul>
                    <li class="com-ripple-href"><a rel="nofollow"
                                                   href="https://m.dhgate.com/product/2016-new-fashion-14k-gold-tone-round-black/385103255.html#cppd-13-9|null:108:r1460666847">
                            <div class="datail-pro-img"><img class="fade-in lazy"
                                                             src="//css.dhresource.com/mobile/home/image/grey.png"
                                                             data-original="https://www.dhresource.com/0x0/f2/albu/g4/M00/C4/88/rBVaEFdJuCeAJyVeAADeBk_JUKQ228.jpg">
                            </div>
                            <div class="datail-pro-name"><p class="datail-pro-piece">US $2.75</p></div>
                        </a></li>
                    <li class="com-ripple-href"><a rel="nofollow"
                                                   href="https://m.dhgate.com/product/europe-and-america-hotsale-aaa-cz-open-size/405719160.html#cppd-14-9|null:108:r1460666847">
                            <div class="datail-pro-img"><img class="fade-in lazy"
                                                             src="//css.dhresource.com/mobile/home/image/grey.png"
                                                             data-original="https://www.dhresource.com/0x0/f2/albu/g5/M00/1F/21/rBVaI1nnRT2AeR2gAAJJ8kvUMdE200.jpg">
                            </div>
                            <div class="datail-pro-name"><p class="datail-pro-piece">US $5.6</p></div>
                        </a></li>
                </ul>
                <ul>
                    <li class="com-ripple-href"><a rel="nofollow"
                                                   href="https://m.dhgate.com/product/chikage-jewelry-gold-bracelet-18k-gold-bracelet/388723980.html#cppd-15-9|null:108:r1460666847">
                            <div class="datail-pro-img"><img class="fade-in lazy"
                                                             src="//css.dhresource.com/mobile/home/image/grey.png"
                                                             data-original="https://www.dhresource.com/0x0/f2/albu/g4/M00/15/4D/rBVaEFekmrWAEt_aAAF1jEt0Mq4266.jpg">
                            </div>
                            <div class="datail-pro-name"><p class="datail-pro-piece">US $117.03</p></div>
                        </a></li>
                    <li class="com-ripple-href"><a rel="nofollow"
                                                   href="https://m.dhgate.com/product/couple-bracelet-rose-gold-glossy-titanium/380400368.html#cppd-16-9|null:108:r1460666847">
                            <div class="datail-pro-img"><img class="fade-in lazy"
                                                             src="//css.dhresource.com/mobile/home/image/grey.png"
                                                             data-original="https://www.dhresource.com/0x0/f2/albu/g4/M01/9B/B3/rBVaEFccjb2AU-djAABLAiPqqoo434.jpg">
                            </div>
                            <div class="datail-pro-name"><p class="datail-pro-piece">US $10.24</p></div>
                        </a></li>
                </ul>
            </div>
        </section>
    </div>
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
    <div class="j-recommend-yviewed">
        <div class="viewed1 viewed-common">
            <div class="pro-tit">You Viewed</div>
            <div class="pro-box">
                <ul>
                    <li class="com-ripple-href"><a rel="nofollow"
                                                   href="https://m.dhgate.com/product/2017-new-fashion-high-quality-sunglasses/402033153.html#mvdpd-1-9|null:01:r0389608382">
                            <div class="pro-img" style="background: none;"><img class="fade-in lazy show"
                                                                                src="https://www.dhresource.com/0x0/f2/albu/g5/M01/63/D3/rBVaI1ljTlaAJaO6AAOzG-D8H_o392.jpg"
                                                                                data-original="https://www.dhresource.com/0x0/f2/albu/g5/M01/63/D3/rBVaI1ljTlaAJaO6AAOzG-D8H_o392.jpg">
                            </div>
                        </a></li>
                    <li class="com-ripple-href"><a rel="nofollow"
                                                   href="https://m.dhgate.com/product/wholesale-mens-sleeveless-sweatshirt-hoodies/390046609.html#mvdpd-2-9|null:01:r0389608382">
                            <div class="pro-img" style="background: none;"><img class="fade-in lazy show"
                                                                                src="https://www.dhresource.com/0x0/f2/albu/g4/M00/6E/89/rBVaEVfO1saAWc1cAAIc-3v0u9c005.jpg"
                                                                                data-original="https://www.dhresource.com/0x0/f2/albu/g4/M00/6E/89/rBVaEVfO1saAWc1cAAIc-3v0u9c005.jpg">
                            </div>
                        </a></li>
                </ul>
            </div>
        </div>
    </div>

    <div class="layer-bottom-cartWarp j-layer-bottom-cartWarp">
        <span class="com-ripple-btn layer-bottom-collection j-bto-fav"><a href="javascript:;" class="j-favBtn"
                                                                          data-style="botFav" rel="nofollow"></a></span>
        <span class="com-ripple-href layer-bottom-cart"><a class="cart-num j-cartnum" rel="nofollow"
                                                           href="/viewcart.do#mpu1509-cart">1</a></span>
        <div class="layer-bottom-box j-layer-bottom-box">
            <a href="javascript:;" class="com-ripple-btn layer-bottom-but j-buySelectSkuAttr" data-skupop="buy"
               rel="nofollow">Buy it Now</a>
            <a href="javascript:;" class="com-ripple-btn layer-bottom-add j-cartSelectSkuAttr" data-skupop="cart"
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
            })
            $('.j-tabShowBtn[data-type="description"]').click(function () {
                $('.datail-reviews-layer').removeClass('close-layer1').removeClass('dhm-hide').addClass('open-layer1');
                $('.com-ripple-btn[data-type="specification"]').addClass('current');
                $('.com-ripple-btn[data-type="description"]').removeClass('current');
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

        });
        <?php $this->endBlock(); ?>
    </script>
<?php $this->registerJs($this->blocks['owl_fecshop_click'], \yii\web\View::POS_END);//将编写的js代码注册到页面底部 ?>