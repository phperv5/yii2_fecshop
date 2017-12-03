
<?php foreach($parentThis['products'] as $item=>$product): ?>
<div class="pro_grid">
    <a href="<?= $product['url'] ?>" title="<?= $product['name'] ?>">
        <div class="pro_gr_photo"><img src="<?= Yii::$service->product->image->getResize($product['image'],[120,120],false) ?>" width="120"
                                       height="120" border="0" hspace="0" vspace="0"
                                       alt="<?= $product['name'] ?>"
                                       align="absmiddle"></div>
        <div class="pro_gr_name"><?= $product['name'] ?></div>
        <div class="pro_gr_pri_vew">
                        <?php
                        $config = [
                            'class' 		=> 'fecshop\app\appfront\modules\Catalog\block\category\Price',
                            'view'  		=> 'cms/home/index/price.php',
                            'price' 		=> $product['price'],
                            'special_price' => $product['special_price'],
                        ];
                        echo Yii::$service->page->widget->renderContent('category_newArrivals_price',$config);
                        ?>
            <div class="pro_gr_review">
                <div class="rate_star_w50">
                    <div class="rate_star_w50_bg">
                        <div class="rate_star_w50_vw" style="width:49px;"></div>
                    </div>
                </div>
            </div>
        </div>
    </a>
    <div class="clear"></div>
</div
 <?php  endforeach;  ?>