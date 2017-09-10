<?php
/**
 * FecShop file.
 *
 * @link http://www.fecshop.com/
 * @copyright Copyright (c) 2016 FecShop Software LLC
 * @license http://www.fecshop.com/license/
 */
?>
<?php  $address_list = $parentThis['address_list'];   ?>
<?php  $cart_address_id = $parentThis['cart_address_id'];   ?>
<?php  $country_select = $parentThis['country_select'];   ?>
<?php  $state_html = $parentThis['state_html'];   ?>
<?php  $cart_address = $parentThis['cart_address'];   ?>
<div class="scene" id="ar_os_shippingAddress">
    <div class="fr"><a href="javascript:void(0);" onclick="CheckAddressAdd();return false;"><strong><img src="../images/ico/edit.gif" hspace="3" border="0">Enter a New Address</strong></a></div>
    <strong class="verdana">Please Choose Your Shipping Address</strong>
    <div class="dashed5px"></div>
    <!--地址列表-->
    <?php  	if(is_array($address_list) && !empty($address_list)):    ?>
        <?php
            $n = 0;
            foreach($address_list as $address_id => $one):
            $n++;
         ?>
    <div class="pos_addr_off" id="areaAddS295224" onmouseover="this.className='pos_addr_on';" onmouseout="this.className='pos_addr_off';">
        <div class="clear"></div>
        <div class="fr"></div>

        <div class="pos_addr_lt">
            <strong class="red_dark">Shipping Address #<?php echo $n;?></strong>
            <div class="blank5px"></div>
            <b class="blue"><?= $one['first_name'] ?>&nbsp;<?= $one['first_name'] ?></b><br>
            <?= $one['street1'] ?><br>
            <?= $one['street2'] ?><br>
            <?= $one['city'] ?>, <?= $one['state'] ?>, <?= $one['country'] ?><br>
            <?= $one['zip'] ?><br>
            Phone: <?= $one['telephone'] ?><br>
            <div class="clear"></div>
        </div>
        <div class="pos_addr_slt">
            <a href="javascript:void(0);"><img src="<?= Yii::$service->image->getImgUrl('images/ico/edit.gif');?>" hspace="3" align="absmiddle" border="0">Edit</a>&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="javascript:void(0);"><img src="<?= Yii::$service->image->getImgUrl('images/ico/del.gif');?>" hspace="3" align="absmiddle" border="0">Delete</a>
            <br><br><br>
            <input type="button" class="btn_submit btn_mid" value="Ship to this address" onclick="AddressBookChoose('295224');"></div>
        <div class="clear"></div>
    </div>
    <div class="dashed5px"></div>
         <?php   endforeach;  ?>
    <?php  endif;  ?>
    <span class="px11">- If you confirmed payment online and your shipping address, the system will automatically redirect you.</span>
</div>