<h1><?= $name ?></h1>
<div id="J_list" class="productsCon j-product-list clearfix dh-list" style="padding-top: 0px;">
    <ul class="clearfix">
        <?php if (is_array($products) && !empty($products)): ?>
            <?php foreach ($products as $product): ?>
              <li>
            <div class="com-ripple-href">
                <a href="<?= $product['url'] ?>">
                    <div class="list-img">
                        <img src="<?= Yii::$service->product->image->getResize($product['image'], [140, 140], false) ?>" alt="<?= $product['name'] ?>">
                    </div>
                    <div class="list-cont">
                        <h3 class="list-title"><?= $product['name'] ?></h3>
                        <div class="by-sellername">No.<?= $product['sku']; ?></div>
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
                        <div class="reviews clearfix"><span class="reviewsCon"><span class="reviewsNum" style="width:90%;"></span></span><em>(387)</em></div>
                    </div>
                </a>
            </div>
            <span class="com-ripple-btn j-favorite favorite"><var class="icon-nofavorite"></var></span>
        </li>
            <?php endforeach; ?>
        <?php endif; ?>
    </ul>
</div>
<div class="page">
    <div class="pageNum">Page <span>1</span> of <span>100</span></div>
    <div class="pageCon clearfix">
         <span class="pagePre js-page-prev">
            <a href="javascript:;" class="pageDisable">
        <var></var>Previous</a>
        </span>

        <span class="com-ripple-href pageNext js-page-next">
            <a href="https://m.dhgate.com/wholesale/hair-extensions/c130002/1.html" rel="nofollow">
        Next<var></var></a>
        </span>
    </div>
</div>
