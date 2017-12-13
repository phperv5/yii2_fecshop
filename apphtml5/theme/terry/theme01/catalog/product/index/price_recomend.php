<?php $price_info = $parentThis['price_info']; ?>
<?php if (isset($price_info['special_price']['value'])): ?>
    <div class="datail-pro-name"><p
                class="datail-pro-piece"><?= $price_info['special_price']['symbol'] ?><?= $price_info['special_price']['value'] ?></p>
    </div>
<?php else: ?>
    <div class="datail-pro-name"><p
                class="datail-pro-piece"><?= $price_info['price']['symbol'] ?><?= $price_info['price']['value'] ?></p>
    </div>
<?php endif; ?>
