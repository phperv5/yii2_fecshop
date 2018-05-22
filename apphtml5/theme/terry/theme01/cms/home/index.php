
<!-- App root element -->
<div id="app" class="app">

    <div class="page-content index-content">
        <!-- Slider container -->
        <div class="swiper-container index-swiper">
            <div class="swiper-pagination"></div>
            <div class="swiper-wrapper">
                <?php
                $ads = Yii::$service->product->ads->getAdList();
                foreach($ads as $v):
                ?>
                <div class="swiper-slide">
                    <a class="" target="_blank" href="<?= $v['url'] ?>"><img class="img-response" src="<?= $v['banner'] ?>"  alt="<?= $v['title'] ?>" /></a>
                </div>
                <?php endforeach;?>
            </div>
        </div>

        <div class="category">
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
<!--        <div class="floor-deals mt-24">-->
<!--          <div class="coupon shadow radius">-->
<!--            <a href="//m.aliexpress.com/coupon/getCoupon.htm?p=2m3Kfj3Q6%2BHyaIoqs9mQKmx1z6faogkuhLIYBSf8X5v1s2k4Z%2FH9Cw%3D%3D">-->
<!--              <div class="radius i-amphtml-element i-amphtml-layout-fixed-height i-amphtml-layout-size-defined i-amphtml-layout" layout="fixed-height" style="height: 80px;">-->
<!--                <img class="i-amphtml-fill-content i-amphtml-replaced-content" src="http://ae01.alicdn.com/kf/HTB19Q3UlgvD8KJjy0Flq6ygBFXaf.jpg_q70.jpg">-->
<!--              </div>-->
<!--            </a>-->
<!--          </div>-->
<!--        </div>-->
        <div class="under-five">
            <div class="deals-title-container">
                <a href="list.html" class="block">
                    <span class="float">New Arrivals  & Flash Sale</span>
                    <span class="float">More</span>
                </a>
            </div>

            <?php
            $parentThis['products'] = $newArrivals;
            $parentThis['name'] = 'New Arrivals';
            $config = [
                'view' => 'cms/home/index/newArrivals.php',
            ];
            echo Yii::$service->page->widget->renderContent('category_newArrivals_price', $config, $parentThis);
            ?>
        </div>


        <div id="favor-list" class="favor-list">
            <div class="qp-title">Original Brand Tool</div>
            <?php
            $parentThis['products'] = $bestSellerProducts1;
            $parentThis['name'] = 'best-seller';
            $config = [
                'view' => 'cms/home/index/product.php',
            ];
            echo Yii::$service->page->widget->renderContent('category_product_price', $config, $parentThis);
            ?>

        </div>
        <div id="favor-list" class="favor-list">
            <div class="qp-title">Car Diagnostic Tool</div>
            <?php
            $parentThis['products'] = $bestSellerProducts2;
            $parentThis['name'] = 'best-seller';
            $config = [
                'view' => 'cms/home/index/product.php',
            ];
            echo Yii::$service->page->widget->renderContent('category_product_price', $config, $parentThis);
            ?>

        </div>
        <div id="favor-list" class="favor-list">
            <div class="qp-title">Auto Key Programmer</div>
            <?php
            $parentThis['products'] = $bestSellerProducts3;
            $parentThis['name'] = 'best-seller';
            $config = [
                'view' => 'cms/home/index/product.php',
            ];
            echo Yii::$service->page->widget->renderContent('category_product_price', $config, $parentThis);
            ?>

        </div>
        <div id="favor-list" class="favor-list">
            <div class="qp-title">ECU Chip Tuning</div>
            <?php
            $parentThis['products'] = $bestSellerProducts4;
            $parentThis['name'] = 'best-seller';
            $config = [
                'view' => 'cms/home/index/product.php',
            ];
            echo Yii::$service->page->widget->renderContent('category_product_price', $config, $parentThis);
            ?>

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
