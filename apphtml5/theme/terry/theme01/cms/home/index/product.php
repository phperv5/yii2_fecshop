<?php  if(is_array($parentThis['products']) && !empty($parentThis['products'])): ?>
<div class="qp-list">
    <div class="row">
        <div layout="fill" id="just-for-you" class="i-amphtml-layout-fill i-amphtml-layout-size-defined i-amphtml-layout">
            <div class="i-amphtml-fill-content i-amphtml-replaced-content" role="list">
            <?php foreach($parentThis['products'] as $product): ?>
                <a href="details.html" class="grid-qp" target="_top" role="listitem">
                    <div class="product radius shadow">
                        <div class="img">
                            <div layout="responsive" class="img-box i-amphtml-element i-amphtml-layout-responsive i-amphtml-layout-size-defined i-amphtml-layout">
                                <span style="display: block; padding-top: 100%;"></span>
                                <img alt="<?= $product['name'] ?>" class="i-amphtml-fill-content i-amphtml-replaced-content" src="<?= Yii::$service->product->image->getResize($product['image'],[285,434],false) ?>">
                            </div>
                        </div>
                        <div class="none-img">
                            <div class="price">
                                US $2.99
                            </div>
                        </div>
                    </div>
                </a>
            <?php  endforeach;  ?>
            </div>
        </div>
    </div>
</div>
<?php  endif;  ?>