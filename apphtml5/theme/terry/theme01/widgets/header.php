<header class="bar bar-nav">
    <a class="icon icon-menu pull-left open-panel" data-panel="#panel-left-menu"></a>
    <a href="<?= Yii::$service->url->homeUrl();  ?>"  external>
        <h1 class='title header_logo'>
            <img class="lazy" data-src="<?= Yii::$service->image->getImgUrl('/custom/logo.png','appfront') ?>"  />
        </h1>
    </a>
    <div class="pull-right">
        <a  style="padding-right:0.4rem" class="icon icon-me open-panel"  data-panel="#panel-left-account"></a>
        <a  style="padding-right:0.4rem" class="icon icon-cart" href="<?= Yii::$service->url->getUrl('checkout/cart'); ?>" external></a>
    </div>

</header>
<input type="hidden" class="currentBaseUrl" value="<?= $currentBaseUrl ?>" />
<input type="hidden" class="logoutUrl" value="<?= $logoutUrl ?>" />
<header class="new-header j-headerWarp">
    <div class="new-header-inner">
        <div class="new-return j-common-back com-ripple-btn"><i class="common-ic-md ic-return-md"></i></div>
        <div class="new-head-category j-headCategoryBtn com-ripple-btn"><i class="common-ic-md ic-menu-md"></i></div>
        <div class="head-right-Warp">
            <div class="new-head-search com-ripple-btn" id="J_searchBtn">
                <i class="common-ic-md common-ic-search-md"></i>
            </div>
            <div class="new-head-cart com-ripple-href">
                <a href="<?= Yii::$service->url->getUrl('checkout/cart') ?>" rel="nofollow" id="cartnum" class="cart"><i class="common-ic-md common-ic-shoppingcart-md"></i></a>
            </div>
        </div>
    </div>
    <div class="new-logotext j-header-title">Sports Shoes</div>
</header>
<div class="panel-overlay">
</div>
<!-- Left Panel with Reveal effect -->
<div class="panel panel-left panel-reveal theme-dark active" id='panel-left-menu' style="display: block">
    <div class="content-block">
        <div class="searchbar row">
            <form method="get" name="searchFrom" class="js_topSeachForm" action="<?= Yii::$service->url->getUrl('catalogsearch/index');   ?>">
                <div class="search-input">
                    <label class="icon icon-search" for="search"></label>
                    <input name="q" type="search" id="search" placeholder="<?= Yii::$service->page->translate->__('Products keyword'); ?>" value="<?=  \Yii::$service->helper->htmlEncode(Yii::$app->request->get('q'));  ?>" />
                </div>
            </form>
        </div>
        <div class="category_menu">
            <?php if(is_array($categoryArr) && !empty($categoryArr)): ?>
                <ul>
                    <?php foreach($categoryArr as $category1): ?>
                        <li class="item-content">
                            <div class="item-title">
                                <a href="<?= $category1['url'] ?>" class="nav_t" external><?= $category1['name'] ?></a>
                            </div>
                            <?php $childMenu1 = $category1['childMenu'];   ?>
                            <?php if(is_array($childMenu1) && !empty($childMenu1)): ?>
                                <ul>
                                    <?php foreach($childMenu1 as $category2): ?>
                                        <span class="icon icon-right"></span>
                                        <li class="item-content">
                                            <div class="item-title">
                                                <a href="<?= $category2['url'] ?>" external>
                                                    <?= $category2['name'] ?>
                                                </a>
                                            </div>
                                            <?php $childMenu2 = $category2['childMenu'];   ?>
                                            <?php if(is_array($childMenu2) && !empty($childMenu2)): ?>
                                                <ul>
                                                    <?php foreach($childMenu2 as $category3): ?>
                                                        <span class="icon icon-right"></span>
                                                        <li class="item-content">
                                                            <div class="item-title"><a href="<?= $category3['url'] ?>" external><?= $category3['name'] ?></a></div>
                                                        </li>

                                                    <?php endforeach; ?>
                                                </ul>
                                            <?php endif; ?>
                                        </li>
                                    <?php endforeach; ?>
                                </ul>
                                <?php //echo $category1['menu_custom'];  ?>

                            <?php endif; ?>
                        </li>
                    <?php endforeach; ?>
                </ul>
            <?php endif; ?>
        </div>

    </div>
    <div class="list-block">
        <!-- .... -->
    </div>
</div>

<div class="panel-overlay"></div>
<!-- Left Panel with Reveal effect -->
<div class="panel panel-left panel-reveal theme-dark" id='panel-left-account'>
    <div class="content-block">
        <div class="searchbar row">
            <div class="search-input">
                <label class="icon icon-search" for="search"></label>
                <input type="search" id='search' placeholder='输入关键字...'/>
            </div>
        </div>
        <div class="category_menu list-block">
            <ul>
                <li class="item-content">
                    <div class="item-inner">
                        <div class="item-title"><a href="<?= Yii::$service->url->homeUrl();  ?>" external>Home</a></div>
                    </div>
                </li>
                <li class="item-content">
                    <div class="item-inner">
                        <div class="item-title"><a href="<?= Yii::$service->url->getUrl('customer/account/index'); ?>" external>Account</a></div>
                    </div>
                </li>
                <li class="item-content">
                    <div class="item-inner">
                        <div class="item-title"><a href="<?= Yii::$service->url->getUrl('checkout/cart'); ?>" external>Shopping Cart</a></div>
                    </div>
                </li>
                <li class="item-content">
                    <div class="item-inner">
                        <div class="item-title"><a href="<?= Yii::$service->url->getUrl('customer/order'); ?>" external>My Order</a></div>
                    </div>
                </li>
                <li class="item-content">

                    <div class="item-inner">
                        <div class="item-title"><a href="<?= Yii::$service->url->getUrl('customer/productfavorite'); ?>" external>My Favorite</a></div>
                    </div>
                </li>
                <li class="item-content">
                    <div class="item-inner">
                        <div class="item-title"><a href="<?= Yii::$service->url->getUrl('about-us'); ?>" external>About Us</a></div>
                    </div>
                </li>
                <li class="item-content">
                    <div class="item-inner">
                        <div class="item-title"><a href="<?= Yii::$service->url->getUrl('customer/contacts'); ?>" external>Contact us</a></div>
                    </div>
                </li>
                <li class="item-content">
                    <div class="item-inner">
                        <div class="item-title"><a href="<?= Yii::$service->url->getUrl('privacy-policy'); ?>" external>privacy policy</a></div>
                    </div>
                </li>
                <li class="item-content">
                    <div class="item-inner">
                        <div class="item-title"><a href="<?= Yii::$service->url->getUrl('return-policy'); ?>" external>Return Policy</a></div>
                    </div>
                </li>
            </ul>
        </div>

    </div>
    <div class="list-block">
        <!-- .... -->
    </div>
</div>