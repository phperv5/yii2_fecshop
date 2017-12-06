<h1><?= $name ?></h1>
            <?php if (is_array($products) && !empty($products)): ?>
                <?php foreach ($products as $product): ?>
<div class="pro_list" id="">
    <div class="pro_li_photo">
        <div class="pro_li_off">9% off</div>
        <a href="<?= $product['url'] ?>" title="<?= $product['name'] ?>">
            <img src="<?= Yii::$service->product->image->getResize($product['image'], [120, 120], false) ?>" width="120" height="120" border="0" hspace="0" vspace="0" alt="<?= $product['name'] ?>" align="absmiddle">
        </a>
    </div>
    <div class="pro_li_brief">

        <h2><a href="<?= $product['url'] ?>">
            <span class="iconfont icon-new gold font_large no_bold"></span><?= $product['name'] ?></a></h2>
        <div class="clear"></div>
        <span class="font_medium">No.<?= $product['sku']; ?></span>&nbsp;&nbsp;
        <b class="font_medium green">Free Shipping</b> <span class="iconfont icon-localshipping green"></span>
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
        <a href="/reviews/pro71861">
            <div class="rate_star_w75">
                <div class="rate_star_w75_bg">
                    <div class="rate_star_w75_vw" style="width:75px;"></div>
                </div>
            </div>
            <div class="rate_star_w75_tx">5 reviews</div>
        </a>
        <div class="clear"></div>


        <div class="clear"></div>
    </div>

    <div class="clear"></div>
</div>
<?php endforeach; ?>
<?php endif; ?>
