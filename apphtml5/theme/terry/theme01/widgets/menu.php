
<div class="j-categoryWarp categoryWarp-close dhm-hide">
    <div class="category-layer">
        <div class="category-layer-scroll j-menuInitScroll" style="height: 550px;">
            <div class="category-shop">
                <ul>
                    <li class="com-ripple-href"><b class="s-home"><span></span></b><a rel="nofollow" href="/index.html">Home</a>
                    </li>
                </ul>
            </div>
            <div class="category_menu category-shop">
                <ul>
                    <li class="shop-category com-ripple-href"><b class="s-category"><span></span></b>
                        <a  href="javascropt:void(0);">All Categories</a>
                    </li>
                </ul>
                <?php if(is_array($categoryArr) && !empty($categoryArr)): ?>
                    <ul>
                        <?php foreach($categoryArr as $category1): ?>
                            <li class="item-content com-ripple-href shop-category">

                                <div class="item-title" style="padding-left: 45px;">
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