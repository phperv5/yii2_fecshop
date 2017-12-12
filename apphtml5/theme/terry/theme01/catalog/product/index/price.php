<section class="datail-price-warp">
    <div class="datail-price-box">
        <?php  $price_info = $parentThis['price_info'];   ?>
        <?php if(isset($price_info['special_price']['value'])):  ?>
        <div class="detail-price-container"><span class="price-span"><?= $price_info['special_price']['symbol']  ?><?= $price_info['special_price']['value'] ?></span></div>
        <p class="detail-origin-price"><del><?= $price_info['price']['symbol']  ?><?= $price_info['price']['value'] ?></del></p>
        <?php else:  ?>
        <div class="detail-price-container"><span class="price-span"><?= $price_info['price']['symbol']  ?><?= $price_info['price']['value'] ?></span></div>
        <?php endif; ?>
    </div>
</section>    