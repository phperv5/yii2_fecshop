<?php
/**
 * FecShop file.
 *
 * @link http://www.fecshop.com/
 * @copyright Copyright (c) 2016 FecShop Software LLC
 * @license http://www.fecshop.com/license/
 */
?>

<?php  if(is_array($parentThis['products']) && !empty($parentThis['products'])): ?>
    <?php foreach($parentThis['products'] as $product): ?>
<div class="hm_pro_grid">
                <div class="hm_pro_gr_item hm_pro_gr_item_noad_left">
                    <div class="hm_progrd_photo"><a href="<?= $product['url'] ?>"><img src="<?= Yii::$service->product->image->getResize($product['image'],[285,434],false) ?>" width="180" height="180" border="0" hspace="0" vspace="0" alt="OBDSTAR X300 DP X-300DP PAD Tablet Key Programmer Full Configuration Free Shipping by DHL" align="absmiddle" /></a></div>
                    <div class="hm_progrd_name"><a href="<?= $product['url'] ?>" title="<?= $product['name'] ?>"><?= $product['name'] ?></a></div>
                    <div class="hm_progrd_price" id="ProPriDisp_h_dp_51561"><span class="pro_pri_curr_vip_s" name="cc_v_USD" style="display:">$999.00</span>
                        <span class="pro_pri_curr_vip_s" name="cc_v_EUR" style="display:none;">&euro;849.15</span>
                        <span class="pro_pri_curr_vip_s" name="cc_v_GBP" style="display:none;">&pound;779.22</span>
                        <span class="pro_pri_curr_vip_s" name="cc_v_AUD" style="display:none;">AU$1,278.72</span>
                        <span class="pro_pri_curr_vip_s" name="cc_v_JPY" style="display:none;">&yen;110,889</span>
                    </div>
                    <div class="hm_progrd_rate"><div class="pro_g_r4_prate"><div class="rate_star_w75"><div class="rate_star_w75_bg"><div class="rate_star_w75_vw" style="width:72px;"></div></div></div><div class="rate_star_w75_tx">(<a href="reviews/pro51561.html" target="_blank">55</a>)</div></div></div>
                </div>
</div>
    <?php  endforeach;  ?>
<?php  endif;  ?>