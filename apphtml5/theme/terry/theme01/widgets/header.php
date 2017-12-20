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

