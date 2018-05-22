
<!-- App root element -->
<div id="app" class="app">

    <div class="page-content index-content">
        <!-- Slider container -->
        <div class="swiper-container index-swiper">
            <div class="swiper-pagination"></div>
            <div class="swiper-wrapper">
                <?php
                $middle_banner = Yii::$service->product->banner->getList('middle_position',4);
                foreach($middle_banner as $v):
                ?>
                <div class="swiper-slide">
                    <a class="" href="<?= $v['url'] ?>"><img class="img-response" src="<?= $v['banner_url'] ?>"  alt="<?= $v['title'] ?>" /></a>
                </div>
                <?php endforeach;?>
            </div>
        </div>
        <h3 class="big-sale-title ellipsis" data-role="#DEB055">FIND DEALS BY CATEGORY</h3>
        <ul class="big-sale-list" data-role="#DEB055">
            <li class="big-sale-item">
                <a href="details.html">
                    <div class="img-box">
                        <img class="img-response" src="./img/HTB1JIibbAOWBuNjSsppq6xPgpXaJ.jpg_640x640.jpg">
                    </div>
                    <h4 class="flex align-items-center justify-content-center" data-role="#F340DF">Beauty &amp; Hair</h4>
                </a>
            </li>
            <li class="big-sale-item">
                <a href="details.html">
                    <div class="img-box">
                        <img class="img-response" src="./img/HTB1JIibbAOWBuNjSsppq6xPgpXaJ.jpg_640x640.jpg">
                    </div>
                    <h4 class="flex align-items-center justify-content-center" data-role="#F340DF">Beauty &amp; Hair</h4>
                </a>
            </li>
            <li class="big-sale-item">
                <a href="details.html">
                    <div class="img-box">
                        <img class="img-response" src="./img/HTB1JIibbAOWBuNjSsppq6xPgpXaJ.jpg_640x640.jpg">
                    </div>
                    <h4 class="flex align-items-center justify-content-center" data-role="#F340DF">Beauty &amp; Hair</h4>
                </a>
            </li>
        </ul>
        <h3 class="big-sale-title ellipsis">FIND DEALS BY LIFESTYLE</h3>
        <ul class="big-sale-list" data-role="#DEB055">
            <li class="big-sale-item">
                <a href="details.html">
                    <div class="img-box">
                        <img class="img-response" src="./img/HTB1JIibbAOWBuNjSsppq6xPgpXaJ.jpg_640x640.jpg">
                    </div>
                    <h4 class="flex align-items-center justify-content-center" data-role="#F340DF">Beauty &amp; Hair</h4>
                </a>
            </li>
            <li class="big-sale-item">
                <a href="details.html">
                    <div class="img-box">
                        <img class="img-response" src="./img/HTB1JIibbAOWBuNjSsppq6xPgpXaJ.jpg_640x640.jpg">
                    </div>
                    <h4 class="flex align-items-center justify-content-center" data-role="#F340DF">Beauty &amp; Hair</h4>
                </a>
            </li>
            <li class="big-sale-item">
                <a href="details.html">
                    <div class="img-box">
                        <img class="img-response" src="./img/HTB1JIibbAOWBuNjSsppq6xPgpXaJ.jpg_640x640.jpg">
                    </div>
                    <h4 class="flex align-items-center justify-content-center" data-role="#F340DF">Beauty &amp; Hair</h4>
                </a>
            </li>
        </ul>
        <div class="big-sale-banner coupon-info" data-role="#DEB055">
            <a href="https://sale.aliexpress.com/20180328_Select_Coupon.htm">
                <div layout="responsive" class="i-amphtml-element i-amphtml-layout-responsive i-amphtml-layout-size-defined i-amphtml-layout">
                    <span style="display: block; padding-top: 33.3333%;"></span>
                    <img class="i-amphtml-fill-content i-amphtml-replaced-content" src="http://ae01.alicdn.com/kf/HTB1117Ucv9TBuNjy1zb760pepXa7.png">
                </div>
            </a>
        </div>
        <!--<div class="category">
          <div class="category-container">
            <ul class="category-list">
              <li><a href="category.html"><span class="icon"> <i class="ic-md icon-ic_all_category_md shadow"></i> </span> <span class="text">All Categories</span> </a></li>
              <li><a href="category.htmln"><span class="icon"> <i class="ic-md icon-ic_womens_clothing_ shadow"></i> </span> <span class="text">Women's Clothing</span> </a></li>
              <li><a href="category.html"><span class="icon"> <i class="ic-md icon-ic_mens_clothing_md shadow"></i> </span> <span class="text">Men's Clothing</span> </a></li>
              <li><a href="//m.aliexpress.com/category/509.html?spm=a2g0n.home-amp.category.phones"><span class="icon"> <i class="ic-md icon-ic_phones__accessor shadow"></i> </span> <span class="text">Phones &amp; Accessories</span> </a></li>
              <li><a href="//m.aliexpress.com/category/44.html?spm=a2g0n.home-amp.category.consumer"><span class="icon"> <i class="ic-md icon-ic_consumer_lectroni shadow"></i> </span> <span class="text">Consumer Electronics</span> </a></li>
              <li><a href="//m.aliexpress.com/category/7.html?spm=a2g0n.home-amp.category.computer"><span class="icon"> <i class="ic-md icon-ic_computer__office shadow"></i> </span> <span class="text">Computer &amp; Office</span> </a></li>
              <li><a href="//m.aliexpress.com/category/34.html?spm=a2g0n.home-amp.category.automobiles"><span class="icon"> <i class="ic-md icon-ic_automobiles__mot shadow"></i> </span> <span class="text">Automobiles &amp; Motorcycles</span> </a></li>
              <li><a href="//m.aliexpress.com/category/15.html?spm=a2g0n.home-amp.category.garden"><span class="icon"> <i class="ic-md icon-ic_home__gardenfur shadow"></i> </span> <span class="text">Home &amp; Garden</span> </a></li>
              <li><a href="//m.aliexpress.com/category/18.html?spm=a2g0n.home-amp.category.sports"><span class="icon"> <i class="ic-md icon-ic_sports__outdoors shadow"></i> </span> <span class="text">Sports &amp; Entertainment</span> </a></li>
              <li><a href="//m.aliexpress.com/category/26.html?spm=a2g0n.home-amp.category.toys"><span class="icon"> <i class="ic-md icon-ic_toyskids__baby_ shadow"></i> </span> <span class="text">Toys, Kids &amp; Baby</span> </a></li>
              <li><a href="//m.aliexpress.com/category/1509.html?spm=a2g0n.home-amp.category.jewelry"><span class="icon"> <i class="ic-md icon-ic_jewelry__watches shadow"></i> </span> <span class="text">Jewelry &amp; Accessories</span> </a></li>
              <li><a href="//m.aliexpress.com/category/1524.html?spm=a2g0n.home-amp.category.luggage"><span class="icon"> <i class="ic-md icon-ic_bags__shoes_md shadow"></i> </span> <span class="text">Luggage &amp; Bags</span> </a></li>
              <li><a href="//m.aliexpress.com/category/66.html?spm=a2g0n.home-amp.category.beauty"><span class="icon"> <i class="ic-md icon-ic_health__beautyh shadow"></i> </span> <span class="text">Beauty &amp; Health</span> </a></li>
              <li><a href="//m.aliexpress.com/category/13.html?spm=a2g0n.home-amp.category.improvement"><span class="icon"> <i class="ic-md icon-ic_home_improvement_ shadow"></i> </span> <span class="text">Home Improvement</span> </a></li>
            </ul>
          </div>
        </div>
        <div class="floor-deals mt-24">
          <div class="coupon shadow radius">
            <a href="//m.aliexpress.com/coupon/getCoupon.htm?p=2m3Kfj3Q6%2BHyaIoqs9mQKmx1z6faogkuhLIYBSf8X5v1s2k4Z%2FH9Cw%3D%3D">
              <div class="radius i-amphtml-element i-amphtml-layout-fixed-height i-amphtml-layout-size-defined i-amphtml-layout" layout="fixed-height" style="height: 80px;">
                <img class="i-amphtml-fill-content i-amphtml-replaced-content" src="http://ae01.alicdn.com/kf/HTB19Q3UlgvD8KJjy0Flq6ygBFXaf.jpg_q70.jpg">
              </div>
            </a>
          </div>
        </div>-->
        <div class="under-five">
            <div class="deals-title-container">
                <a href="list.html" class="block">
                    <span class="float">Popular items under $5</span>
                    <span class="float">More</span>
                </a>
            </div>
            <div class="junlong-method">
                <div id="under-five" class="junlong-method-list i-amphtml-element i-amphtml-layout-fixed-height i-amphtml-layout-size-defined i-amphtml-layout">
                    <div class="i-amphtml-fill-content i-amphtml-replaced-content" role="list">
                        <div class="amp-carousel radius shadow" role="listitem">
                            <a href="list.html" target="_top">
                                <div class="product-img">
                                    <div class="i-amphtml-element i-amphtml-layout-fixed i-amphtml-layout-size-defined i-amphtml-layout" style="width: 27.22vw; height: 27.22vw;">
                                        <img alt="Booksew New 30 pieces 10cmx10cm cotton Twill fabrics charm packs patchwork fabrics quilting  stash no repeat design tissue cloth" class="i-amphtml-fill-content i-amphtml-replaced-content" src="https://ae01.alicdn.com/kf/HTB1fMwoXekJL1JjSZFmq6Aw0XXak.jpg_220x220q90.jpg">
                                    </div>
                                </div>
                                <div class="product-price radius">
                                    <span>US $1.77</span>
                                    <del>US $1.77</del>
                                </div>
                            </a>
                        </div>
                        <div class="amp-carousel radius shadow" role="listitem">
                            <a href="list.html" target="_top">
                                <div class="product-img">
                                    <div class="i-amphtml-element i-amphtml-layout-fixed i-amphtml-layout-size-defined i-amphtml-layout" style="width: 27.22vw; height: 27.22vw;">
                                        <img alt="Booksew New 30 pieces 10cmx10cm cotton Twill fabrics charm packs patchwork fabrics quilting  stash no repeat design tissue cloth" class="i-amphtml-fill-content i-amphtml-replaced-content" src="https://ae01.alicdn.com/kf/HTB1fMwoXekJL1JjSZFmq6Aw0XXak.jpg_220x220q90.jpg">
                                    </div>
                                </div>
                                <div class="product-price radius">
                                    <span>US $1.77</span>
                                    <del>US $1.77</del>
                                </div>
                            </a>
                        </div>
                        <div class="amp-carousel radius shadow" role="listitem">
                            <a href="https://sale.aliexpress.com/UNDER_X_m.htm?pid=32684298876" target="_top">
                                <div class="product-img">
                                    <div class="i-amphtml-element i-amphtml-layout-fixed i-amphtml-layout-size-defined i-amphtml-layout" style="width: 27.22vw; height: 27.22vw;">
                                        <img alt="Booksew New 30 pieces 10cmx10cm cotton Twill fabrics charm packs patchwork fabrics quilting  stash no repeat design tissue cloth" class="i-amphtml-fill-content i-amphtml-replaced-content" src="https://ae01.alicdn.com/kf/HTB1fMwoXekJL1JjSZFmq6Aw0XXak.jpg_220x220q90.jpg">
                                    </div>
                                </div>
                                <div class="product-price radius">
                                    <span>US $1.77</span>
                                    <del>US $1.77</del>
                                </div>
                            </a>
                        </div>
                        <div class="amp-carousel radius shadow" role="listitem">
                            <a href="https://sale.aliexpress.com/UNDER_X_m.htm?pid=32684298876" target="_top">
                                <div class="product-img">
                                    <div class="i-amphtml-element i-amphtml-layout-fixed i-amphtml-layout-size-defined i-amphtml-layout" style="width: 27.22vw; height: 27.22vw;">
                                        <img alt="Booksew New 30 pieces 10cmx10cm cotton Twill fabrics charm packs patchwork fabrics quilting  stash no repeat design tissue cloth" class="i-amphtml-fill-content i-amphtml-replaced-content" src="https://ae01.alicdn.com/kf/HTB1fMwoXekJL1JjSZFmq6Aw0XXak.jpg_220x220q90.jpg">
                                    </div>
                                </div>
                                <div class="product-price radius">
                                    <span>US $1.77</span>
                                    <del>US $1.77</del>
                                </div>
                            </a>
                        </div>
                        <div class="amp-carousel radius shadow" role="listitem">
                            <a href="https://sale.aliexpress.com/UNDER_X_m.htm?pid=32684298876" target="_top">
                                <div class="product-img">
                                    <div class="i-amphtml-element i-amphtml-layout-fixed i-amphtml-layout-size-defined i-amphtml-layout" style="width: 27.22vw; height: 27.22vw;">
                                        <img alt="Booksew New 30 pieces 10cmx10cm cotton Twill fabrics charm packs patchwork fabrics quilting  stash no repeat design tissue cloth" class="i-amphtml-fill-content i-amphtml-replaced-content" src="https://ae01.alicdn.com/kf/HTB1fMwoXekJL1JjSZFmq6Aw0XXak.jpg_220x220q90.jpg">
                                    </div>
                                </div>
                                <div class="product-price radius">
                                    <span>US $1.77</span>
                                    <del>US $1.77</del>
                                </div>
                            </a>
                        </div>
                        <div class="amp-carousel radius shadow" role="listitem">
                            <a href="https://sale.aliexpress.com/UNDER_X_m.htm?pid=32684298876" target="_top">
                                <div class="product-img">
                                    <div class="i-amphtml-element i-amphtml-layout-fixed i-amphtml-layout-size-defined i-amphtml-layout" style="width: 27.22vw; height: 27.22vw;">
                                        <img alt="Booksew New 30 pieces 10cmx10cm cotton Twill fabrics charm packs patchwork fabrics quilting  stash no repeat design tissue cloth" class="i-amphtml-fill-content i-amphtml-replaced-content" src="https://ae01.alicdn.com/kf/HTB1fMwoXekJL1JjSZFmq6Aw0XXak.jpg_220x220q90.jpg">
                                    </div>
                                </div>
                                <div class="product-price radius">
                                    <span>US $1.77</span>
                                    <del>US $1.77</del>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="flash-deals">
            <div class="deals-title-container">
                <a href="list.html" class="block">
                    <span class="float">Flash Deals</span>
                    <span class="float">More</span>
                </a>
            </div>
            <div class="junlong-method">
                <div layout="fixed-height" id="flash-deals" class="junlong-method-list i-amphtml-element i-amphtml-layout-fixed-height i-amphtml-layout-size-defined i-amphtml-layout" style="height: 43vw;" aria-live="polite">
                    <div class="i-amphtml-fill-content i-amphtml-replaced-content" role="list">
                        <div class="amp-carousel radius shadow" role="listitem">
                            <a href="list.html" target="_top">
                                <div class="product-img">
                                    <div class="i-amphtml-element i-amphtml-layout-fixed i-amphtml-layout-size-defined i-amphtml-layout" style="width: 27.22vw; height: 27.22vw;">
                                        <img alt="Booksew New 30 pieces 10cmx10cm cotton Twill fabrics charm packs patchwork fabrics quilting  stash no repeat design tissue cloth" class="i-amphtml-fill-content i-amphtml-replaced-content" src="https://ae01.alicdn.com/kf/HTB1fMwoXekJL1JjSZFmq6Aw0XXak.jpg_220x220q90.jpg">
                                    </div>
                                </div>
                                <div class="product-price radius">
                                    <span>US $1.77</span>
                                    <del>US $1.77</del>
                                </div>
                            </a>
                        </div>
                        <div class="amp-carousel radius shadow" role="listitem">
                            <a href="list.html" target="_top">
                                <div class="product-img">
                                    <div class="i-amphtml-element i-amphtml-layout-fixed i-amphtml-layout-size-defined i-amphtml-layout" style="width: 27.22vw; height: 27.22vw;">
                                        <img alt="Booksew New 30 pieces 10cmx10cm cotton Twill fabrics charm packs patchwork fabrics quilting  stash no repeat design tissue cloth" class="i-amphtml-fill-content i-amphtml-replaced-content" src="https://ae01.alicdn.com/kf/HTB1fMwoXekJL1JjSZFmq6Aw0XXak.jpg_220x220q90.jpg">
                                    </div>
                                </div>
                                <div class="product-price radius">
                                    <span>US $1.77</span>
                                    <del>US $1.77</del>
                                </div>
                            </a>
                        </div>
                        <div class="amp-carousel radius shadow" role="listitem">
                            <a href="https://sale.aliexpress.com/UNDER_X_m.htm?pid=32684298876" target="_top">
                                <div class="product-img">
                                    <div class="i-amphtml-element i-amphtml-layout-fixed i-amphtml-layout-size-defined i-amphtml-layout" style="width: 27.22vw; height: 27.22vw;">
                                        <img alt="Booksew New 30 pieces 10cmx10cm cotton Twill fabrics charm packs patchwork fabrics quilting  stash no repeat design tissue cloth" class="i-amphtml-fill-content i-amphtml-replaced-content" src="https://ae01.alicdn.com/kf/HTB1fMwoXekJL1JjSZFmq6Aw0XXak.jpg_220x220q90.jpg">
                                    </div>
                                </div>
                                <div class="product-price radius">
                                    <span>US $1.77</span>
                                    <del>US $1.77</del>
                                </div>
                            </a>
                        </div>
                        <div class="amp-carousel radius shadow" role="listitem">
                            <a href="https://sale.aliexpress.com/UNDER_X_m.htm?pid=32684298876" target="_top">
                                <div class="product-img">
                                    <div class="i-amphtml-element i-amphtml-layout-fixed i-amphtml-layout-size-defined i-amphtml-layout" style="width: 27.22vw; height: 27.22vw;">
                                        <img alt="Booksew New 30 pieces 10cmx10cm cotton Twill fabrics charm packs patchwork fabrics quilting  stash no repeat design tissue cloth" class="i-amphtml-fill-content i-amphtml-replaced-content" src="https://ae01.alicdn.com/kf/HTB1fMwoXekJL1JjSZFmq6Aw0XXak.jpg_220x220q90.jpg">
                                    </div>
                                </div>
                                <div class="product-price radius">
                                    <span>US $1.77</span>
                                    <del>US $1.77</del>
                                </div>
                            </a>
                        </div>
                        <div class="amp-carousel radius shadow" role="listitem">
                            <a href="https://sale.aliexpress.com/UNDER_X_m.htm?pid=32684298876" target="_top">
                                <div class="product-img">
                                    <div class="i-amphtml-element i-amphtml-layout-fixed i-amphtml-layout-size-defined i-amphtml-layout" style="width: 27.22vw; height: 27.22vw;">
                                        <img alt="Booksew New 30 pieces 10cmx10cm cotton Twill fabrics charm packs patchwork fabrics quilting  stash no repeat design tissue cloth" class="i-amphtml-fill-content i-amphtml-replaced-content" src="https://ae01.alicdn.com/kf/HTB1fMwoXekJL1JjSZFmq6Aw0XXak.jpg_220x220q90.jpg">
                                    </div>
                                </div>
                                <div class="product-price radius">
                                    <span>US $1.77</span>
                                    <del>US $1.77</del>
                                </div>
                            </a>
                        </div>
                        <div class="amp-carousel radius shadow" role="listitem">
                            <a href="https://sale.aliexpress.com/UNDER_X_m.htm?pid=32684298876" target="_top">
                                <div class="product-img">
                                    <div class="i-amphtml-element i-amphtml-layout-fixed i-amphtml-layout-size-defined i-amphtml-layout" style="width: 27.22vw; height: 27.22vw;">
                                        <img alt="Booksew New 30 pieces 10cmx10cm cotton Twill fabrics charm packs patchwork fabrics quilting  stash no repeat design tissue cloth" class="i-amphtml-fill-content i-amphtml-replaced-content" src="https://ae01.alicdn.com/kf/HTB1fMwoXekJL1JjSZFmq6Aw0XXak.jpg_220x220q90.jpg">
                                    </div>
                                </div>
                                <div class="product-price radius">
                                    <span>US $1.77</span>
                                    <del>US $1.77</del>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="floor-deals">
            <div class="deals-title-container">
                <a class="block" href="list.html"><span class="float">Featured Brands</span> </a>
            </div>

            <div class="featured-brands">
                <div layout="fixed-height" class="featured-brands-carousel i-amphtml-element i-amphtml-layout-fixed-height i-amphtml-layout-size-defined i-amphtml-layout" style="height: 38vw;">
                    <div class="i-amphtml-scrollable-carousel-container">
                        <a class="radius shadow amp-carousel-slide amp-scrollable-carousel-slide" href="list.html">
                            <div class="block radius i-amphtml-element i-amphtml-layout-fixed i-amphtml-layout-size-defined i-amphtml-layout" layout="fixed" style="width: 85.56vw; height: 36.67vw;">
                                <img alt="image" class="i-amphtml-fill-content i-amphtml-replaced-content" src="http://ae01.alicdn.com/kf/HTB1kf1IdNWYBuNjy1zk760GGpXaH.png_q70.jpg">
                            </div>
                        </a>
                        <a class="radius shadow amp-carousel-slide amp-scrollable-carousel-slide" href="list.html">
                            <div class="block radius i-amphtml-element i-amphtml-layout-fixed i-amphtml-layout-size-defined i-amphtml-layout" layout="fixed" style="width: 85.56vw; height: 36.67vw;">
                                <img alt="image" class="i-amphtml-fill-content i-amphtml-replaced-content" src="http://ae01.alicdn.com/kf/HTB1Y4Bhd1ySBuNjy1zd760PxFXa5.png_q70.jpg">
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <div class="life-style">
            <div class="deals-title-container">
                <a href="list.html" class="block">
                    <span class="float">Inspiration</span>
                    <span class="float"></span>
                </a>
            </div>
            <div class="radius shadow i-amphtml-element i-amphtml-layout-fixed-height i-amphtml-layout-size-defined i-amphtml-layout" layout="fixed-height" id="life-style" style="height: 412px;">
                <div class="life-style-list i-amphtml-fill-content i-amphtml-replaced-content" role="list">
                    <div role="listitem">
                        <span class="text">FASHION</span>
                        <div class="bg">
                            <a href="details.html" class="block" target="_top">
                                <div layout="responsive" class="i-amphtml-element i-amphtml-layout-responsive i-amphtml-layout-size-defined i-amphtml-layout">
                                    <span style="display: block; padding-top: 43.8953%;"></span>
                                    <img alt="" class="i-amphtml-fill-content i-amphtml-replaced-content" src="https://ae01.alicdn.com/kf/HTB1FaL3X_JYBeNjy1zeq6yhzVXaj.jpg_220x220q90.jpg">
                                </div>
                            </a>
                        </div>
                        <a href="details.html" class="product-box" target="_top">
                            <div layout="fixed" class="i-amphtml-element i-amphtml-layout-fixed i-amphtml-layout-size-defined i-amphtml-layout" style="width: 22.22vw; height: 22.22vw;">
                                <img alt="Fashion Female Women Belt Hot Ladies Faux Leather Metal Buckle Straps Girls Summer Dress Accessories" class="i-amphtml-fill-content i-amphtml-replaced-content" src="https://ae01.alicdn.com/kf/HTB1tdgpQXXXXXcbXFXXq6xXFXXXp.jpg_220x220q90.jpg">
                            </div>
                            <div layout="fixed" class="i-amphtml-element i-amphtml-layout-fixed i-amphtml-layout-size-defined i-amphtml-layout" style="width: 22.22vw; height: 22.22vw;">
                                <img  alt="New women  tops   casual and sexy backless women clothing solid women summer  tank tops" class="i-amphtml-fill-content i-amphtml-replaced-content" src="https://ae01.alicdn.com/kf/HTB1Pb2GHpXXXXaPXVXXq6xXFXXXs.jpg_220x220q90.jpg">
                            </div>
                            <div class="i-amphtml-element i-amphtml-layout-fixed i-amphtml-layout-size-defined i-amphtml-layout" style="width: 22.22vw; height: 22.22vw;">
                                <img alt="Sisjuly 2017 Summer Female Party Dress Solid Black Dresses Sexy Hollow Out Vintage Gothic Dress Summer Peter Pan Collar Dresses" class="i-amphtml-fill-content i-amphtml-replaced-content" src="https://ae01.alicdn.com/kf/HTB1tF3ESXXXXXX4apXXq6xXFXXXA.jpg_220x220q90.jpg">
                            </div>
                        </a>
                    </div>
                    <div role="listitem">
                        <span class="text">HOME</span>
                        <div class="bg">
                            <a href="details.html" class="block" target="_top">
                                <div layout="responsive" class="img-box i-amphtml-element i-amphtml-layout-responsive i-amphtml-layout-size-defined">
                                    <span style="display: block; padding-top: 43.8953%;"></span>
                                </div>
                            </a>
                        </div>
                        <a href="details.html" class="product-box" target="_top">
                            <div layout="fixed" class="img-box i-amphtml-element i-amphtml-layout-fixed i-amphtml-layout-size-defined i-amphtml-layout" style="width: 22.22vw; height: 22.22vw;">
                                <img alt="160x200cm Fitted Sheet with an elastic band 17 solid colors Bed Sheets  linen Bedspread  polyester cotton Mattress Cover TD200" class="i-amphtml-fill-content i-amphtml-replaced-content" src="https://ae01.alicdn.com/kf/HTB1IuNoPXXXXXbVaXXXq6xXFXXXR.jpg_220x220q90.jpg">
                            </div>
                            <div layout="fixed" class="img-box i-amphtml-element i-amphtml-layout-fixed i-amphtml-layout-size-defined i-amphtml-layout" style="width: 22.22vw; height: 22.22vw;">
                                <img alt="1PCS Crystal Pendant Pet Dog Collar Puppy Cat Pet Buckle Dogs Leads Neck Strap PU Leather Animal Pet Accessories For Small Dogs" class="i-amphtml-fill-content i-amphtml-replaced-content" src="https://ae01.alicdn.com/kf/HTB15hlMKVXXXXXvXXXXq6xXFXXXx.jpg_220x220q90.jpg">
                            </div>
                            <div layout="fixed" class="img-box i-amphtml-element i-amphtml-layout-fixed i-amphtml-layout-size-defined" style="width: 22.22vw; height: 22.22vw;"></div>
                        </a>
                    </div>
                    <div role="listitem">
                        <span class="text">HOME</span>
                        <div class="bg">
                            <a class="block" target="_top">
                                <div layout="responsive" class="img-box i-amphtml-element i-amphtml-layout-responsive i-amphtml-layout-size-defined"><span style="display: block; padding-top: 43.8953%;"></span></div>
                            </a>
                        </div>
                        <a href="details.html" class="product-box" target="_top">
                            <div layout="fixed" class="img-box i-amphtml-element i-amphtml-layout-fixed i-amphtml-layout-size-defined i-amphtml-layout" style="width: 22.22vw; height: 22.22vw;">
                                <img alt="160x200cm Fitted Sheet with an elastic band 17 solid colors Bed Sheets  linen Bedspread  polyester cotton Mattress Cover TD200" class="i-amphtml-fill-content i-amphtml-replaced-content" src="https://ae01.alicdn.com/kf/HTB1IuNoPXXXXXbVaXXXq6xXFXXXR.jpg_220x220q90.jpg">
                            </div>
                            <div layout="fixed" class="img-box i-amphtml-element i-amphtml-layout-fixed i-amphtml-layout-size-defined i-amphtml-layout" style="width: 22.22vw; height: 22.22vw;">
                                <img alt="1PCS Crystal Pendant Pet Dog Collar Puppy Cat Pet Buckle Dogs Leads Neck Strap PU Leather Animal Pet Accessories For Small Dogs" class="i-amphtml-fill-content i-amphtml-replaced-content" src="https://ae01.alicdn.com/kf/HTB15hlMKVXXXXXvXXXXq6xXFXXXx.jpg_220x220q90.jpg">
                            </div>
                            <div layout="fixed" class="img-box i-amphtml-element i-amphtml-layout-fixed i-amphtml-layout-size-defined" style="width: 22.22vw; height: 22.22vw;"></div>
                        </a>
                    </div>
                    <div role="listitem">
                        <span class="text">KIDS</span>
                        <div class="bg">
                            <a href="details.html" class="block" target="_top">
                                <div layout="responsive"  class="img-box i-amphtml-element i-amphtml-layout-responsive i-amphtml-layout-size-defined">
                                    <span style="display: block; padding-top: 43.8953%;"></span>
                                </div>
                            </a>
                        </div>
                        <a href="details.html" class="product-box" target="_top">
                            <div layout="fixed" class="i-amphtml-element i-amphtml-layout-fixed i-amphtml-layout-size-defined i-amphtml-layout" style="width: 22.22vw; height: 22.22vw;">
                                <img alt="Stuffed Brinquedos Backpack Sweet Cute Pendant Baby Kids Toys for Girls Birthday Christmas Bonecas Keppel Doll Plush Metoo Doll" class="i-amphtml-fill-content i-amphtml-replaced-content" src="https://ae01.alicdn.com/kf/HTB12RtaQVXXXXaIXFXXq6xXFXXXK.jpg_220x220q90.jpg">
                            </div>
                            <div layout="fixed" class="i-amphtml-element i-amphtml-layout-fixed i-amphtml-layout-size-defined i-amphtml-layout" style="width: 22.22vw; height: 22.22vw;"></div>
                            <div layout="fixed" class="i-amphtml-element i-amphtml-layout-fixed i-amphtml-layout-size-defined" style="width: 22.22vw; height: 22.22vw;"></div>
                        </a>
                    </div>
                    <div role="listitem">
                        <span class="text">KIDS</span>
                        <div class="bg">
                            <a href="details.html" class="block" target="_top">
                                <div layout="responsive"  class="img-box i-amphtml-element i-amphtml-layout-responsive i-amphtml-layout-size-defined">
                                    <span style="display: block; padding-top: 43.8953%;"></span>
                                </div>
                            </a>
                        </div>
                        <a href="details.html" class="product-box" target="_top">
                            <div layout="fixed" class="img-box i-amphtml-element i-amphtml-layout-fixed i-amphtml-layout-size-defined i-amphtml-layout" style="width: 22.22vw; height: 22.22vw;">
                                <img alt="Stuffed Brinquedos Backpack Sweet Cute Pendant Baby Kids Toys for Girls Birthday Christmas Bonecas Keppel Doll Plush Metoo Doll" class="i-amphtml-fill-content i-amphtml-replaced-content" src="https://ae01.alicdn.com/kf/HTB12RtaQVXXXXaIXFXXq6xXFXXXK.jpg_220x220q90.jpg">
                            </div>
                            <div layout="fixed" class="img-box i-amphtml-element i-amphtml-layout-fixed i-amphtml-layout-size-defined i-amphtml-layout" style="width: 22.22vw; height: 22.22vw;"></div>
                            <div layout="fixed" class="img-box i-amphtml-element i-amphtml-layout-fixed i-amphtml-layout-size-defined" style="width: 22.22vw; height: 22.22vw;"></div>
                        </a>
                    </div>
                    <div role="listitem">
                        <span class="text">KIDS</span>
                        <div class="bg">
                            <a href="https://sale.aliexpress.com/inpiration_kids.htm" class="block" target="_top">
                                <div layout="responsive"  class="img-box i-amphtml-element i-amphtml-layout-responsive i-amphtml-layout-size-defined">
                                    <span style="display: block; padding-top: 43.8953%;"></span>
                                </div>
                            </a>
                        </div>
                        <a href="https://sale.aliexpress.com/inpiration_kids.htm" class="product-box" target="_top">
                            <div layout="fixed" class="img-box i-amphtml-element i-amphtml-layout-fixed i-amphtml-layout-size-defined i-amphtml-layout" style="width: 22.22vw; height: 22.22vw;">
                                <img alt="Stuffed Brinquedos Backpack Sweet Cute Pendant Baby Kids Toys for Girls Birthday Christmas Bonecas Keppel Doll Plush Metoo Doll" class="i-amphtml-fill-content i-amphtml-replaced-content" src="https://ae01.alicdn.com/kf/HTB12RtaQVXXXXaIXFXXq6xXFXXXK.jpg_220x220q90.jpg">
                            </div>
                            <div layout="fixed" class="img-box i-amphtml-element i-amphtml-layout-fixed i-amphtml-layout-size-defined i-amphtml-layout" style="width: 22.22vw; height: 22.22vw;"></div>
                            <div layout="fixed" class="img-box i-amphtml-element i-amphtml-layout-fixed i-amphtml-layout-size-defined" style="width: 22.22vw; height: 22.22vw;"></div>
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <div id="favor-list" class="favor-list">
            <div class="qp-title">You May Also Like</div>
            <div class="qp-list">
                <div class="row">
                    <div layout="fill" id="just-for-you" class="i-amphtml-layout-fill i-amphtml-layout-size-defined i-amphtml-layout">
                        <div class="i-amphtml-fill-content i-amphtml-replaced-content" role="list">
                            <a href="details.html" class="grid-qp" target="_top" role="listitem">
                                <div class="product radius shadow">
                                    <div class="img">
                                        <div layout="responsive" class="img-box i-amphtml-element i-amphtml-layout-responsive i-amphtml-layout-size-defined i-amphtml-layout">
                                            <span style="display: block; padding-top: 100%;"></span>
                                            <img alt="48 Sheet 35cm*4cm Mix Color Transfer Foil Nail Art Star Design Sticker Decal For Polish Care DIY Free Shipping Universe Nail Art" class="i-amphtml-fill-content i-amphtml-replaced-content" src="http://ae01.alicdn.com/kf/HTB18LXwLpXXXXaZXFXXq6xXFXXXH.jpg_350x350.jpg_q75.jpg">
                                        </div>
                                    </div>
                                    <div class="none-img">
                                        <div class="price">
                                            US $2.99
                                        </div>
                                    </div>
                                </div>
                            </a>
                            <a href="details.html" class="grid-qp" target="_top" role="listitem">
                                <div class="product radius shadow">
                                    <div class="img">
                                        <div layout="responsive" class="img-box i-amphtml-element i-amphtml-layout-responsive i-amphtml-layout-size-defined i-amphtml-layout">
                                            <span style="display: block; padding-top: 100%;"></span>
                                            <img alt="48 Sheet 35cm*4cm Mix Color Transfer Foil Nail Art Star Design Sticker Decal For Polish Care DIY Free Shipping Universe Nail Art" class="i-amphtml-fill-content i-amphtml-replaced-content" src="http://ae01.alicdn.com/kf/HTB18LXwLpXXXXaZXFXXq6xXFXXXH.jpg_350x350.jpg_q75.jpg">
                                        </div>
                                    </div>
                                    <div class="none-img">
                                        <div class="price">
                                            US $2.99
                                        </div>
                                    </div>
                                </div>
                            </a>
                            <a href="details.html" class="grid-qp" target="_top" role="listitem">
                                <div class="product radius shadow">
                                    <div class="img">
                                        <div layout="responsive" class="img-box i-amphtml-element i-amphtml-layout-responsive i-amphtml-layout-size-defined i-amphtml-layout">
                                            <span style="display: block; padding-top: 100%;"></span>
                                            <img alt="48 Sheet 35cm*4cm Mix Color Transfer Foil Nail Art Star Design Sticker Decal For Polish Care DIY Free Shipping Universe Nail Art" class="i-amphtml-fill-content i-amphtml-replaced-content" src="http://ae01.alicdn.com/kf/HTB18LXwLpXXXXaZXFXXq6xXFXXXH.jpg_350x350.jpg_q75.jpg">
                                        </div>
                                    </div>
                                    <div class="none-img">
                                        <div class="price">
                                            US $2.99
                                        </div>
                                    </div>
                                </div>
                            </a>
                            <a href="https://m.aliexpress.com/item/32456521124.html?spm=a2g0n.home-amp.alsolike.32456521124" class="grid-qp" target="_top" role="listitem">
                                <div class="product radius shadow">
                                    <div class="img">
                                        <div layout="responsive" class="img-box i-amphtml-element i-amphtml-layout-responsive i-amphtml-layout-size-defined i-amphtml-layout">
                                            <span style="display: block; padding-top: 100%;"></span>
                                            <img alt="48 Sheet 35cm*4cm Mix Color Transfer Foil Nail Art Star Design Sticker Decal For Polish Care DIY Free Shipping Universe Nail Art" class="i-amphtml-fill-content i-amphtml-replaced-content" src="http://ae01.alicdn.com/kf/HTB18LXwLpXXXXaZXFXXq6xXFXXXH.jpg_350x350.jpg_q75.jpg">
                                        </div>
                                    </div>
                                    <div class="none-img">
                                        <div class="price">
                                            US $2.99
                                        </div>
                                    </div>
                                </div>
                            </a>
                            <a href="https://m.aliexpress.com/item/32456521124.html?spm=a2g0n.home-amp.alsolike.32456521124" class="grid-qp" target="_top" role="listitem">
                                <div class="product radius shadow">
                                    <div class="img">
                                        <div layout="responsive" class="img-box i-amphtml-element i-amphtml-layout-responsive i-amphtml-layout-size-defined i-amphtml-layout">
                                            <span style="display: block; padding-top: 100%;"></span>
                                            <img alt="48 Sheet 35cm*4cm Mix Color Transfer Foil Nail Art Star Design Sticker Decal For Polish Care DIY Free Shipping Universe Nail Art" class="i-amphtml-fill-content i-amphtml-replaced-content" src="http://ae01.alicdn.com/kf/HTB18LXwLpXXXXaZXFXXq6xXFXXXH.jpg_350x350.jpg_q75.jpg">
                                        </div>
                                    </div>
                                    <div class="none-img">
                                        <div class="price">
                                            US $2.99
                                        </div>
                                    </div>
                                </div>
                            </a>
                            <a href="https://m.aliexpress.com/item/32456521124.html?spm=a2g0n.home-amp.alsolike.32456521124" class="grid-qp" target="_top" role="listitem">
                                <div class="product radius shadow">
                                    <div class="img">
                                        <div layout="responsive" class="img-box i-amphtml-element i-amphtml-layout-responsive i-amphtml-layout-size-defined i-amphtml-layout">
                                            <span style="display: block; padding-top: 100%;"></span>
                                            <img alt="48 Sheet 35cm*4cm Mix Color Transfer Foil Nail Art Star Design Sticker Decal For Polish Care DIY Free Shipping Universe Nail Art" class="i-amphtml-fill-content i-amphtml-replaced-content" src="http://ae01.alicdn.com/kf/HTB18LXwLpXXXXaZXFXXq6xXFXXXH.jpg_350x350.jpg_q75.jpg">
                                        </div>
                                    </div>
                                    <div class="none-img">
                                        <div class="price">
                                            US $2.99
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="show-more radius">
            <div class="relative">
                <div role="button" tabindex="-1" id="btnSubmit">
                    View More
                </div>
                <div class="md-loading" id="data-loading" hidden="">
                    <div class="preloader-wrapper active">
                        <div class="spinner-layer spinner-red-only">
                            <div class="circle-clipper left">
                                <div class="circle"></div>
                            </div>
                            <div class="gap-patch">
                                <div class="circle"></div>
                            </div>
                            <div class="circle-clipper right">
                                <div class="circle"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
    <footer>
        <div class="banner-register shadow radius">
            <a href="https://m.aliexpress.com/login.html" class="block">
                <div layout="responsive" width="95.56vw" height="56.67vw" class="img-box radius i-amphtml-element i-amphtml-layout-responsive i-amphtml-layout-size-defined i-amphtml-layout">
                    <span style="display: block; padding-top: 59.3031%;"></span>
                    <img  alt="" class="i-amphtml-fill-content i-amphtml-replaced-content" src="http://ae01.alicdn.com/kf/HTB1TdEOmLDH8KJjy1Xcq6ApdXXag.jpg_q70.jpg&#10;">
                </div>
            </a>
        </div>
        <div class="buyer-protection shadow radius">
            <p>In 2010, Alibaba Group made waves in the e-commerce sector by launching AliExpress, an online retail service made up of small businesses in China that offer quality products and continues to grow every single day.</p>
            <ul>
                <li>
                    <a href="https://m.aliexpress.com/helpcenter/index.htm"><span>Help Center</span><i class="ic-md ic-chevronright-md"></i></a>
                </li>
            </ul>
        </div>
        <div class="method shadow radius">
            <div class="payment">
                <p>Payment methods</p>
                <div layout="fixed-height" height="20" class="img-box i-amphtml-element i-amphtml-layout-fixed-height i-amphtml-layout-size-defined i-amphtml-layout" style="height: 20px;">
                    <img alt="" class="i-amphtml-fill-content i-amphtml-replaced-content" src="http://ae01.alicdn.com/kf/HTB1JShmkJzJ8KJjSspkq6zF7VXaD.jpg_q70.jpg">
                </div>
            </div>
            <div class="logistics">
                <p>Our logistic partners</p>
                <div layout="fixed-height" class="i-amphtml-element i-amphtml-layout-fixed-height i-amphtml-layout-size-defined i-amphtml-layout" style="height: 20px;">
                    <img alt="" class="i-amphtml-fill-content i-amphtml-replaced-content" src="//ae01.alicdn.com/kf/HTB1IvXckSYH8KJjSspdq6ARgVXat.jpg_q70.jpg">
                </div>
            </div>
        </div>
        <div class="footer-inc">
            <p class="items">
                <a href="//news.alibaba.com/article/detail/help/100453303-1-privacy-policy.html"><span>Privacy Policy&nbsp;</span></a>
                <a href="//news.alibaba.com/article/detail/help/100453293-1-terms-use.html"><span>Terms of use&nbsp;</span></a>
                <a href="http://m.aliexpress.com/sitemap.html"><span>Site Map</span></a>
            </p>
            <p class="inc">© 2010-2017 Aliexpress.com. All rights reserved.</p>
        </div>
    </footer>
    <div class="sidebar-mask"  onclick="sidebar.toggle()" ></div>
    <div id="ms-sidebar" side="left" class="ms-sidebar">
        <div class="ms-drawer">
            <ul class="drawer-box">
                <li class="drawer-home">
                    <a href="index.html">
                        <i class="ic-md ic-home-md"></i>
                        <span>Home</span>
                    </a>
                </li>
                <li class="drawer-AllCategory">
                    <a href="category.html">
                        <i class="ic-md icon-ic_all_category_md"></i>
                        <span>All Category</span>
                    </a>
                </li>
            </ul>
            <ul class="drawer-box">
                <li class="drawer-myOrder">
                    <a href="myOrders.html">
                        <i class="ic-md ic-order-md"></i>
                        <span>My Orders</span>
                    </a>
                </li>
                <li class="drawer-cart">
                    <a href="cart.html">
                        <i class="ic-md ic-shoppingcart-md"></i>
                        <span>Cart</span>
                    </a>
                </li>
                <li class="drawer-wishList">
                    <a href="wishList.html">
                        <i class="ic-md ic-wishlist-md"></i>
                        <span>Wish List</span>
                    </a>
                </li>
            </ul>
            <ul class="drawer-box">
                <li role="button" tabindex="-1" class="drawer-language">
                    <i class="ic-md ic-translation-md"></i>
                    <b>Language</b>
                    <span>English</span>
                </li>
            </ul>
            <ul class="drawer-box">
                <li class="drawer-help">
                    <a href="">
                        <i class="ic-md ic-helpcenter-md"></i>
                        <span>Help Center</span>
                    </a>
                </li>
                <li class="drawer-feedback">
                    <a href="">
                        <i class="ic-md ic-star-md"></i>
                        <span>Feedback</span>
                    </a>
                </li>
            </ul>
            <ul class="drawer-box">
                <li class="drawer-loginout">
                    <a href="">
                        <i class="ic-md ic-signout-md"></i>
                        <span>Sign Out</span>
                    </a>
                </li>
            </ul>

        </div>

    </div>

</div>
