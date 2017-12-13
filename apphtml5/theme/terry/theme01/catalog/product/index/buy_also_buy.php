
<?php  if(is_array($parentThis['products']) && !empty($parentThis['products'])): ?>
<div id="goto-recommended">
    <section class="recommended-products j-recommended-products"><h2 class="country-tit">Recommended Products</h2>
        <div class="datail-pro-list">
            <ul>
    <?php foreach($parentThis['products'] as $product): ?>
                <li class="com-ripple-href">
                    <a rel="nofollow"  href="">
                        <div class="datail-pro-img" style="background: none;">
                            <img class="fade-in lazy show" src="<?= Yii::$service->product->image->getResize($product['image'],[178,178],false) ?>" alt="<?= $product['name'] ?>">
                        </div>
                        <?php
                        $config = [
                            'class' => 'fecshop\app\apphtml5\modules\Catalog\block\category\Price',
                            'view' => 'catalog/category/price.php',
                            'price' => $product['price'],
                            'special_price' => $product['special_price'],
                            'special_from' => $product['special_from'],
                            'special_to' => $product['special_to'],
                        ];
                        echo Yii::$service->page->widget->renderContent('category_product_price_recomend', $config);
                        ?>
                    </a></li>
                <?php  endforeach;  ?>
            </ul>
        </div>
    </section>
</div>
<?php  endif;  ?>
