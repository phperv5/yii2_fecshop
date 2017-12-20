<div class="j-categoryWarp categoryWarp-close dhm-hide">
    <div class="category-layer">
        <div class="category-layer-scroll j-menuInitScroll" style="height: 550px;">
            <div class="category-shop">
                <ul>
                    <li class="com-ripple-href"><b class="s-home"><span></span></b><a rel="nofollow" href="/index.html">Home</a>
                    </li>
                    <li class="shop-category com-ripple-href"><b class="s-category"><span></span></b>
                        <a rel="nofollow" href="/allcategories.html">All Categories</a>
                    </li>
                </ul>
            </div>
            <div class="category-list2">
                <ul>
                    <li class="com-ripple-href"><b class="s-cart"><span></span></b><a rel="nofollow" href="/viewcart.do">Shopping Cart<span class="number j-cartnum">2</span></a></li>
                    <li class="com-ripple-href"><a rel="nofollow" href="/vieworder.do">My DHgate</a></li>
                    <li class="com-ripple-href"><a rel="nofollow" href="/mydhgate/order/orderlist.html?rft=1">My
                            Orders</a></li>
                    <li class="com-ripple-href"><a rel="nofollow" href="/myinbox.do">My Message<span
                                    class="number j-messagenum">0</span></a></li>
                    <li class="com-ripple-href"><a rel="nofollow" href="/mydhgate/coupon/mycoupons.html">My Coupons</a>
                    </li>
                    <li class="com-ripple-href"><a rel="nofollow" href="/myFavorites.html">My Favorites</a></li>
                    <li class="confirmEmail j-confirmEmail com-ripple-btn dhm-hide"><b
                                class="s-confirmEmailIcon"><span></span></b><a rel="nofollow" href="javascript:;">Confirm
                            Email to get coupons<var class="couponIcon"></var></a></li>
                    <li class="com-ripple-href"><a rel="nofollow" href="/oneclickorder/oneclickorder.html">1-Step Buy
                            Settings</a></li>
                </ul>
            </div>
            <div class="category-language">
                <ul>
                    <li class="com-ripple-btn" id="J_language"
                        onclick="javascript:ga('send', 'event', 'MHP', 'Menu', 'Select language')"><b
                                class="s-language"><span></span></b><a rel="nofollow" href="javascript:;">Select
                            Language<span class="English">English</span></a></li>
                    <li class="com-ripple-btn"><a rel="nofollow" class="j-openApp" data-entrance="Maindirect"
                                                  href="javascript:;"
                                                  onclick="javascript:ga('send', 'event', 'MHP', 'Menu', 'Download App')"><b
                                    class="s-app"><span></span></b>Download App</a></li>
                </ul>
            </div>
            <div class="category-socialshops">
                <ul>
                    <li class="com-ripple-btn"><a rel="nofollow"
                                                  href="https://www.socialshops.com?F=SS|MKT|WAP|event1|s027001|&amp;channelId=s027001"
                                                  target="_blank"><b class="s-socialshops"><span></span></b>Selling on
                            Socialshops</a></li>
                </ul>
            </div>
            <div class="category-feedback">
                <ul>
                    <li class="com-ripple-href"><a rel="nofollow" href="http://dg.dhgate.com/contact/contactUs.do"
                                                   onclick="javascript:ga('send', 'event', 'MHP', 'Menu', 'Customer Service')"><b
                                    class="s-service"><span></span></b>Customer Service</a></li>
                    <li class="com-ripple-href"><a rel="nofollow"
                                                   href="http://survey.dhgate.com/index.php?sid=92928&amp;lang=en"
                                                   onclick="javascript:ga('send', 'event', 'MHP', 'Menu', 'Feed back')">Feedback</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>
<div class="j-fixedShadow" style="position:fixed;width:100%;height:100%;bottom:0;z-index:777;background:#000;opacity:0.3;cursor:pointer;display: none;"></div>
<script type="text/javascript">
    <?php $this->beginBlock('owl_fecshop_menu') ?>
    $(function () {
        $('.j-fixedShadow').bind('click', function () {
            $('.j-categoryWarp').addClass('categoryWarp-close').addClass('dhm-hide');
            $('.j-fixedShadow').hide();
            $('html').removeClass('dhm-htmlOverflow');
        })
        $('.j-headCategoryBtn').bind('click', function () {
            $('.j-categoryWarp').removeClass('categoryWarp-close').removeClass('dhm-hide').addClass('categoryWarp-open');
            $('.j-fixedShadow').show();
            $('html').addClass('dhm-htmlOverflow');
        })
    });
    <?php $this->endBlock(); ?>
</script>
<?php $this->registerJs($this->blocks['owl_fecshop_menu'], \yii\web\View::POS_END);//将编写的js代码注册到页面底部 ?>