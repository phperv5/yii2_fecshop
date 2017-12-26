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
<section id="J_search" class="dhm-hide">
    <div class="head-search">
        <form action="<?= Yii::$service->url->getUrl('catalogsearch/index');   ?>" method="get" autocomplete="off">
            <div class="j-search-box search-box search-mar">
                <div class="search-btnWarp com-ripple-btn"><input type="submit" class="search-btn j-topSearchBtn" value="" onclick="javascript:ga('send', 'event', 'MPU1509', 'search')"></div>
                <div class="search-text">
                    <input id="J_searchInput" type="text" value="" name="key" class="inputtext" placeholder="I'm shopping for...">
                    <input type="hidden" name="cid" id="cateId">
                    <input type="hidden" name="tag" id="tagId">
                    <input type="hidden" name="scht" id="schtypeId">
                </div>
                <div id="J_searchDel" class="search-close dhm-hide"></div>
            </div>
            <div id="J_searchCl" class="search-cancel">
                <a href="javascript:;" class="com-ripple-btn">Cancel</a>
            </div>
        </form>
    </div>
    <div id="J_searchList" class="search-list dhm-hide"></div>
</section>
<script type="text/javascript">
    <?php $this->beginBlock('owl_fecshop_header') ?>
    $(function () {
        $('#J_searchBtn').bind('click',function(){
            $('#J_search').addClass('fadeIn section-active').removeClass('dhm-hide');
        })
        
        $('#J_searchCl').bind('click',function(){
            $('#J_search').addClass('dhm-hide').removeClass('fadeIn section-active');
        })
    });
    <?php $this->endBlock(); ?>
</script>
<?php $this->registerJs($this->blocks['owl_fecshop_header'], \yii\web\View::POS_END);//将编写的js代码注册到页面底部 ?>

