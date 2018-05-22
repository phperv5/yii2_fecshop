
<div class="product-price radius">
    <?php if(isset($special_price) && !empty($special_price)):  ?>
    <span><?= $special_price['symbol'] ?><?= $special_price['value'] ?></span>
    <del><?= $price['symbol'] ?><?= $price['value'] ?></del>
    <?php else: ?>
        <span><?= $price['symbol'] ?><?= $price['value'] ?></span>
    <?php endif; ?>
</div>