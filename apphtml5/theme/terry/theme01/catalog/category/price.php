<?php if(isset($special_price) && !empty($special_price)):  ?>
 <div class="now-price"><var><?= $special_price['symbol'] ?></var><strong><?= $special_price['value'] ?></strong> / Piece</div>
 <div class="priceOnApp"><?= $price['symbol'].$price['value'] ?></div>
 <?php else: ?>
<div class="now-price"><var><?= $price['symbol'] ?></var><strong><?= $price['value'] ?></strong> / Piece</div>
<div class="priceOnApp"></div>
 <?php endif;  ?>
