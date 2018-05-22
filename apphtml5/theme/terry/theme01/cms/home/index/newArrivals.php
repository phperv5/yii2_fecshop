<?php $products = $parentThis['products'];?>
<div class="junlong-method">
    <div id="under-five" class="junlong-method-list i-amphtml-element i-amphtml-layout-fixed-height i-amphtml-layout-size-defined i-amphtml-layout">
        <div class="i-amphtml-fill-content i-amphtml-replaced-content" role="list">
            <?php foreach ($products as $product): ?>
            <div class="amp-carousel radius shadow" role="listitem">
                <a href="<?= $product['url'] ?>" target="_top">
                    <div class="product-img">
                        <div class="i-amphtml-element i-amphtml-layout-fixed i-amphtml-layout-size-defined i-amphtml-layout" style="width: 27.22vw; height: 27.22vw;">
                            <img alt="<?= $product['name'] ?>" class="i-amphtml-fill-content i-amphtml-replaced-content" src="<?= Yii::$service->product->image->getResize($product['image'],[280,280],false) ?>">
                        </div>
                    </div>
                    <?php
                    $config = [
                        'class' 		=> 'fecshop\app\appfront\modules\Catalog\block\category\Price',
                        'view'  		=> 'cms/home/index/price.php',
                        'price' 		=> $product['price'],
                        'special_price' => $product['special_price'],
                    ];
                    echo Yii::$service->page->widget->renderContent('category_newArrivals_price',$config);
                    ?>
                </a>
            </div>
            <?php endforeach;?>
        </div>
    </div>
</div>