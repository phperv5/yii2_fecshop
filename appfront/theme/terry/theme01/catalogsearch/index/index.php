<div class="main">
    <div class="page_where_l">
        <a href="/" rel="nofollow">Home</a>
    </div>
    <div class="page_where_r"><a href="javascript:history.go(-1);" rel="nofollow">&laquo; Go Back</a></div>
    <div class="blank8px"></div>

    <div class="main_left">
        <div class="col_t_x col_t_cate">
            <strong>OBD2 Categories</strong>
            <?php $categories = Yii::$service->category->menu->getChildCate('0'); ?>
            <?php foreach ($categories as $category): ?>
                <h2 class=" fir"><a href="<?= $category['url'] ?>"><?= $category['name'] ?></a></h2>
            <?php endforeach; ?>
            <div class="clear"></div>
        </div>
        <div class="col_d_b"></div>
        <div class="blank10px"></div>
        <!--categories end -->

        <div class="col_t_x col_t_tag col_t_tag_feature">
            <h3>Browse by Feature</h3>
            <a href="../../producttags/mb-bga-tool.html">MB BGA Tool</a>
            <a href="../../producttags/vvdi2.html">VVDI2</a>
            <a href="../../producttags/2017-launch-x431.html">2017 Launch X431</a>
            <a href="../../producttags/xtruck-usb-link.html">XTruck USB Link</a>
            <a href="../../producttags/vxdiag-vcx-nano.html">VXDIAG VCX NANO</a>
            <a href="../../producttags/volvo-vcads.html">Volvo VCADS</a>
            <a href="../../producttags/xtuner.html">XTUNER</a>
            <a href="../../producttags/launch-x431-v.html">Launch X431 V</a>
            <div class="clear"></div>
        </div>
        <div class="col_d_b"></div>
        <div class="blank10px"></div>

        <div class="col_d_t">Popular Search</div>
        <div class="col_m_tag">
            <a href="../../producttags/autel-maxisys.html"><strong>Autel MaxiSYS</strong></a>&nbsp;&nbsp;
            <a href="../../producttags/launch-x431-v.html">Launch X431 V</a>&nbsp;&nbsp;
            <a href="../../producttags/autel-maxidiag-elite.html"><strong>Autel MaxiDiag Elite</strong></a>&nbsp;&nbsp;
            <a href="../../producttags/original-obdstar.html">Original OBDSTAR</a>&nbsp;&nbsp;
            <a href="../../producttags/vxdiag-vcx-nano.html"><strong>VXDIAG VCX NANO</strong></a>&nbsp;&nbsp;
            <a href="../../producttags/launch-creader.html">Launch Creader</a>&nbsp;&nbsp;

            <div class="clear"></div>
        </div>
        <div class="col_d_b"></div>
        <div class="blank10px"></div>


    </div>

    <div class="main_scene">
        <div class="exh_top"></div>
        <div class="exh_main_pl">
            <h1>Search Result: <span class="red"><?= $searchText ?></span></h1>
            <div class="blank10px"></div>
            <?php if (is_array($products) && !empty($products)): ?>
                <?php foreach ($products as $product): ?>
                    <div class="pro_list pro_list_feaured">
                        <div class="photo">
                            <a href="<?= $product['url'] ?>" title="<?= $product['name'] ?>">
                                <img src="<?= Yii::$service->product->image->getResize($product['image'], [230, 230], false) ?>" width="120" height="120" border="0" hspace="0" vspace="0" alt="" align="absmiddle"/>
                            </a>
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
<!--                            <img src="../../images/ico/freeshipping.gif" border="0" align="absmiddle"/>&nbsp;&nbsp;&nbsp;-->
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
                        <div class="clear"></div>
                    </div>
                <?php endforeach; ?>
            <?php else: ?>
                <div class="fl">
                    Search results for<span class="red">'<?= $searchText ?>'</span> returns no results
                </div>

            <?php endif; ?>
        </div>
        <div class="page_nav">
            <?php if ($pageToolBar): ?>
                <div class="pageToolbar">
                    <?= $pageToolBar ?>
                </div>
            <?php endif; ?>
        </div>
        <div class="clear"></div>
    </div>
    <div class="exh_bottom"></div>
</div>
</div>




