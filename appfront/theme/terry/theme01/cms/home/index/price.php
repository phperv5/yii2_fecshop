<<<<<<< HEAD
<?php
/**
 * FecShop file.
 *
 * @link http://www.fecshop.com/
 * @copyright Copyright (c) 2016 FecShop Software LLC
 * @license http://www.fecshop.com/license/
 */
?>
<p class="proPrice">
	<?php if(isset($special_price) && !empty($special_price)):  ?>
		<span class="bizhong"><?= $special_price['code'] ?></span><span orgp="<?= $special_price['value'] ?>" class="my_shop_price f14"><span class="icon"><?= $special_price['symbol'] ?></span><?= $special_price['value'] ?></span>
		<span class="bizhong"><?= $price['code'] ?></span><del orgp="<?= $price['value'] ?>" class="my_shop_price"><span class="icon"><?= $price['symbol'] ?></span><?= $price['value'] ?></del>
	
	<?php else: ?>
		<span class="bizhong"><?= $price['code'] ?></span><span orgp="<?= $price['value'] ?>" class="my_shop_price f14"><span class="icon"><?= $price['symbol'] ?></span><?= $price['value'] ?></span>
		
	<?php endif; ?>
=======
<?php
/**
 * FecShop file.
 *
 * @link http://www.fecshop.com/
 * @copyright Copyright (c) 2016 FecShop Software LLC
 * @license http://www.fecshop.com/license/
 */
?>
<p class="proPrice">
	<?php if(isset($special_price) && !empty($special_price)):  ?>
		<span class="bizhong"><?= $special_price['code'] ?></span><span orgp="<?= $special_price['value'] ?>" class="my_shop_price f14"><span class="icon"><?= $special_price['symbol'] ?></span><?= $special_price['value'] ?></span>
		<span class="bizhong"><?= $price['code'] ?></span><del orgp="<?= $price['value'] ?>" class="my_shop_price"><span class="icon"><?= $price['symbol'] ?></span><?= $price['value'] ?></del>
	
	<?php else: ?>
		<span class="bizhong"><?= $price['code'] ?></span><span orgp="<?= $price['value'] ?>" class="my_shop_price f14"><span class="icon"><?= $price['symbol'] ?></span><?= $price['value'] ?></span>
		
	<?php endif; ?>
>>>>>>> de65733890e172b7ff96f675b715c9fe3b198b1f
</p>