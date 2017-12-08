<h1><?= $name ?></h1>
<div id="J_list" class="productsCon j-product-list clearfix dh-list" style="padding-top: 0px;">
    <ul class="clearfix">
        <?php if (is_array($products) && !empty($products)): ?>
            <?php foreach ($products as $product): ?>
              <li>
            <div class="com-ripple-href">
                <a href="<?= $product['url'] ?>">
                    <div class="list-img">
                        <img src="<?= Yii::$service->product->image->getResize($product['image'], [140, 140], false) ?>" alt="<?= $product['name'] ?>">
                    </div>
                    <div class="list-cont">
                        <h3 class="list-title"><?= $product['name'] ?></h3>
                        <div style="clear: both;" class="now-price">
                            <span class="pri_pg_vip">$159.00</span>
                            <span class="pri_pg_sale"><i>$179.00</i></span>
                        </div>
                        <div class="min-order">Min. Order 4 Pieces</div>
                        <div class="orders">1554 Orders</div>
                        <div class="reviews clearfix"><span class="reviewsCon"><span class="reviewsNum" style="width:90%;"></span></span><em>(387)</em></div>
                    </div>
                </a>
            </div>
            <span data-pagetype="4" data-itemcode="388085854" class="com-ripple-btn j-favorite favorite"><var class="icon-nofavorite"></var></span>
        </li>
            <?php endforeach; ?>
        <?php endif; ?>
        <li>
            <div class="com-ripple-href">
                <a href="https://m.dhgate.com/product/3-bundles-virgin-indian-curly-hair-extensions/399732722.html#gw-1-4|ff8080815fb048ff01600bf738506243:ff8080815f253414015f2535a164797c">
                    <div class="list-img">


                        <img src="//css.dhresource.com/mobile/home/image/grey.png" class="lazy" data-original="https://www.dhresource.com/260x260/f2/albu/g5/M00/3D/29/rBVaJFj_B02ARxOmAAOtjdFWZ-M470.jpg" alt="Indian virgin curly hair extensions raw Indian virgin hair 10a grade virgin unprocessed human hair weave bundles wet and wavy 3 4 bundles">
                    </div>
                    <div class="list-cont">
                        <h3 class="list-title">Indian virgin curly hair extensions raw Indian virgin hair 10a grade virgin unprocessed human hair weave bundles wet and wavy 3 4 bundles</h3>
                        <div class="by-sellername">by milisa</div>
                        <div class="promotion">

                            39% Off
                        </div>
                        <div class="now-price"><var>US $</var><strong>15.17 - 66.24</strong> / Piece</div>
                        <div class="priceOnApp"><var class="mobileIcon"></var>US $0.0 on App</div>
                        <div class="freeship-coupon">
                            <span class="free-shipping">Free Shipping</span>
                            <var>|</var>
                            <span class="clip-coupon">Coupon</span>
                        </div>
                        <div class="min-order">Min. Order 3 Pieces</div>
                        <div class="orders">4 Orders</div>
                    </div>
                </a>
            </div>
            <span data-pagetype="4" data-itemcode="399732722" class="com-ripple-btn j-favorite favorite"><var class="icon-nofavorite"></var></span>
        </li>
    </ul>
</div>
<div class="page">
    <div class="pageNum">Page <span>1</span> of <span>100</span></div>
    <div class="pageCon clearfix">
         <span class="pagePre js-page-prev">
            <a href="javascript:;" class="pageDisable">
        <var></var>Previous</a>
        </span>


        <span class="com-ripple-href pageNext js-page-next">
            <a href="https://m.dhgate.com/wholesale/hair-extensions/c130002/1.html" rel="nofollow">
        Next<var></var></a>
        </span>
    </div>
</div>
