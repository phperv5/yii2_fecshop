<div class="main">
    <div class="page_where_l">
        <a href="/" rel="nofollow">Home</a> - <a href="/" rel="nofollow">Products</a> -<a
                href="/">Original Brand Tool</a></div>
    <div class="page_where_r"><a href="javascript:history.go(-1);" rel="nofollow">&laquo; Go Back</a></div>
    <div class="blank8px"></div>
    <div class="main_left">
        <div class="col_t_x col_t_cate">
            <strong>Categories</strong>
            <?php $categories = Yii::$service->category->menu->getChildCate('0'); ?>
            <?php foreach ($categories as $category): ?>
                <div class="left_proclass_menu">
                    <h2 class="fir"><a href="<?= $category['url'] ?>"><?= $category['name'] ?></a></h2>
                    <?php $cates = Yii::$service->category->getChildCate($category['_id']); ?>
                    <?php if (isset($cates) && !empty($cates)): ?>
                        <div class="hd_wr_nav_main">
                            <div style="width: 600px;background-color: #fff;border: none;box-shadow: 3px 3px 3px #E1E1E1;">
                                <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                    <tbody>
                                    <?php foreach ($cates as $k => $c): ?>
                                        <?php if ($k % 3 == 0): ?>
                                            <tr>
                                        <?php endif; ?>
                                        <td><a href="<?= $c['url_key']; ?>"
                                               target="_blank"><?= $c['name']['name_en']; ?></a></td>
                                        <?php if ($k % 3 == 0): ?>
                                            </tr>
                                        <?php endif; ?>
                                    <?php endforeach; ?>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    <?php endif; ?>
                </div>
            <?php endforeach; ?>
            <div class="clear"></div>
        </div>
        <div class="col_d_b"></div>
        <div class="blank10px"></div>
        <!--categories end -->

        <div class="col_t_x col_t_tag col_t_tag_feature">
            <h3>Browse by Feature</h3>
            <?php
            $keywords = Yii::$service->product->keywords->getKeywordsList(3);
            foreach ($keywords as $v):
                ?>
                <a href="<?php if(isset($v['url']) && !empty($v['url'])) echo $v['url'];else echo  Yii::$service->url->getUrl('catalogsearch/index?q='.$v['keywords']);?>"><?= $v['keywords']; ?></a>
            <?php endforeach; ?>
            <div class="clear"></div>
        </div>
        <div class="col_d_b"></div>
        <div class="blank10px"></div>


        <div id="WishProFavorites"></div>
        <div id="WishProVisitedList"></div>


        <div class="col_d_t">Popular Search</div>
        <div class="col_m_tag">
            <?php
            $keywords = Yii::$service->product->keywords->getKeywordsList(2);
            foreach ($keywords as $v):
            ?>
                <a href="<?php if(isset($v['url']) && !empty($v['url'])) echo $v['url'];else echo  Yii::$service->url->getUrl('catalogsearch/index?q='.$v['keywords']);?>"><?= $v['keywords']; ?></a>
            <?php endforeach; ?>

            <div class="clear"></div>
        </div>
        <div class="col_d_b"></div>
        <div class="blank10px"></div>


    </div>

    <div class="main_scene">
        <div class="exh_top"></div>
        <div class="exh_main_pl">

            <h1><?= $name ?></h1>
            <div class="blank10px"></div>
            <?php if (is_array($products) && !empty($products)): ?>
                <?php foreach ($products as $product): ?>
                    <div class="pro_list pro_list_feaured" url='<?= $product['url'] ?>'>
                        <div class="photo">
                            <a href="<?= $product['url'] ?>"
                               title="<?= $product['name'] ?>">
                                <img src="<?= Yii::$service->product->image->getResize($product['image'], [120, 120], false) ?>"
                                     width="120" height="120" border="0" hspace="0" vspace="0" alt=""
                                     align="absmiddle"/></a>
                        </div>
                        <div class="brief">
                            <h2>
                                <span class="specialoffer"></span>
                                <a href="<?= $product['url'] ?>">
                                    <?= $product['name'] ?>
                                </a>
                            </h2>
                            <div class="clear"></div>
                            <span class="px11">Item No.<?= $product['sku']; ?></span>&nbsp;&nbsp;&nbsp;
                            <div class="fr w150px">
                                <div class="rate_star_w100">
                                    <div class="rate_star_w100_bg">
                                        <div class="rate_star_w100_vw" style="width:96px;"></div>
                                    </div>
                                </div>
                                <div class="rate_star_w100_tx"><a href="../../reviews/pro57665.html" target="_blank">(24)</a>
                                </div>
                            </div>
                            <div class="blank10px"></div>
                            <?= $product['short_description']; ?>
                            <div class="blank5px"></div>
                            <div class="clear"></div>

                        </div>
                        <div class="order_fun px11">
                            <div class="blank5px"></div>
                            <?php
                            $config = [
                                'class' => 'fecshop\app\appfront\modules\Catalog\block\category\Price',
                                'view' => 'catalog/category/price.php',
                                'price' => $product['price'],
                                'special_price' => $product['special_price'],
                                'special_from' => $product['special_from'],
                                'special_to' => $product['special_to'],
                            ];
                            echo Yii::$service->page->widget->renderContent('category_product_price', $config);
                            ?>
                            <div class="blank5px"></div>
                            <div class="dashed_line"></div>
                            <div class="blank5px"></div>
                            <div class="blank5px"></div>
                            <input name="add_to_cart" type="button" class="btn_addtocart_s" value="" title="Add to Cart" onclick="javascript:addProductToCart('<?= $product['_id'] ?>');return false;"/>
                        </div>
                        <div class="clear"></div>
                    </div>
                <?php endforeach; ?>
            <?php endif; ?>
            <?= $product_page; ?>
        </div>
        <div class="clear"></div>
    </div>
    <div class="exh_bottom"></div>
</div>
</div>
<script>
    <?php $this->beginBlock('owl_fecshop_slider') ?>

    $(document).ready(function () {

        $(".left_proclass_menu").bind('mouseover', function () {
            $(this).find('.hd_wr_nav_main').show();
        })
        $(".left_proclass_menu").bind('mouseout', function () {
            $('.hd_wr_nav_main').hide();
        })
    });
    <?php $this->endBlock(); ?>
</script>
<?php $this->registerJs($this->blocks['owl_fecshop_slider'], \yii\web\View::POS_END);//将编写的js代码注册到页面底部 ?>









