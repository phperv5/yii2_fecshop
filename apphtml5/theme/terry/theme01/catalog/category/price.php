 <?php if(isset($special_price) && !empty($special_price)):  ?>
     <span name="cc_v_USD" style="display:"><span class="pri_pg_vip"><?= $special_price['symbol'].$special_price['value'] ?></span><span class="pri_pg_sale"><i><?= $price['symbol'].$price['value'] ?></i></span></span>
 <?php else: ?>
     <span name="cc_v_USD" style="display:"><span class="pri_pg_vip"><?= $price['symbol'].$price['value'] ?></span></span>
 <?php endif;  ?>
