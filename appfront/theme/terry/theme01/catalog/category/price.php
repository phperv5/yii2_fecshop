<?php
/**
 * FecShop file.
 *
 * @link http://www.fecshop.com/
 * @copyright Copyright (c) 2016 FecShop Software LLC
 * @license http://www.fecshop.com/license/
 */
?>

<div class="order_fun px11">
    <div class="blank5px"></div>
    <span class="pro_pri_tit_sale_s">Latest price:</span><span class="pro_pri_curr_sale_s" name="cc_v_USD" style="display:"><strong>$1,196.00</strong></span>
    <span class="pro_pri_curr_sale_s" name="cc_v_USD" style="display:none;"><strong><?= $price['symbol'].$price['value'] ?></strong></span>
    <span class="pro_pri_tit_vip_m">Buy It Now:</span>
    <span class="pro_pri_curr_vip_m" name="cc_v_USD" style="display:"><?= $special_price['symbol'].$special_price['value'] ?></span>
    <span class="pro_pri_of_sr" name="cc_v_USD" style="display:">20% off</span>
    <span class="pro_pri_of_sr" name="cc_v_EUR" style="display:none;">20% off</span>
    <span class="pro_pri_of_sr" name="cc_v_GBP" style="display:none;">20% off</span>
    <span class="pro_pri_of_sr" name="cc_v_AUD" style="display:none;">20% off</span>
    <span class="pro_pri_of_sr" name="cc_v_JPY" style="display:none;">20% off</span>
    <div class="blank5px"></div>
    <div class="dashed_line"></div>
    <div class="blank5px"></div>
    <div class="blank5px"></div>
    <input name="add_to_cart" type="button" class="btn_addtocart_s" value="" title="Add to Cart" onclick="javascript:ShoppingCartAdd('57665','Single','N','oSize_57665','N','oColor_57665','N','');return false;"/>
</div>