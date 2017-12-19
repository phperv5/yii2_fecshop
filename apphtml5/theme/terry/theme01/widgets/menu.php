<div class="panel-overlay"></div>
<!-- Left Panel with Reveal effect -->
<div class="panel panel-left panel-reveal theme-dark" id='panel-left-menu'>
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
