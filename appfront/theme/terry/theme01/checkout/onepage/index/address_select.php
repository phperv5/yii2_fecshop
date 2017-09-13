<?php
/**
 * FecShop file.
 *
 * @link http://www.fecshop.com/
 * @copyright Copyright (c) 2016 FecShop Software LLC
 * @license http://www.fecshop.com/license/
 */
?>
<?php $address_list = $parentThis['address_list']; ?>
<?php $address_select = $parentThis['address_select']; ?>
<?php $cart_address_id = $parentThis['cart_address_id']; ?>
<?php $country_select = $parentThis['country_select']; ?>
<?php $state_html = $parentThis['state_html']; ?>
<?php $cart_address = $parentThis['cart_address']; ?>

<!--地址列表-->
<input type="hidden" name="address_id" class="address_id" value="<?= $address_select['address_id'] ?>">
<?php if ($address_select): ?>
    <div class="scene px13 line15em" id="ar_os_shippingAddress">
        <div class="float_right"><a href="javascript:void(0);" onclick="change"><b class="px11">Change</b></a></div>
        Receiver: <?= $address_select['first_name'] ?>&nbsp;<?= $address_select['first_name'] ?><br>
        <?= $address_select['street1'] ?><br>
        <?php if($address_select['street2']): ?>
            <?= $address_select['street2'] ?><br>
        <?php endif;?>
        <?= $address_select['city'] ?>, <?= $address_select['state'] ?>, <?= $address_select['country'] ?><br>
        <?= $address_select['zip'] ?><br>
        Phone: <?= $address_select['telephone'] ?><br>
        <div class="blank10px"></div>
    </div>
<?php else: ?>
<div class="scene" id="shippingAddress_select">
    <div class="fr"><a href="javascript:void(0);" onclick="CheckAddressAdd();return false;"><strong><img src="<?= Yii::$service->image->getImgUrl('images/ico/edit.gif'); ?>" hspace="3" border="0">Entera New Address</strong></a></div>
    <strong class="verdana">Please Choose Your Shipping Address</strong>
    <div class="dashed5px"></div>
    <?php if (is_array($address_list) && !empty($address_list)): ?>
        <?php
        $n = 0;
        foreach ($address_list as $address_id => $one):
            $n++;
            ?>
            <div class="pos_addr_off" id="areaAddS295224" onmouseover="this.className='pos_addr_on';"
                 onmouseout="this.className='pos_addr_off';">
                <div class="clear"></div>
                <div class="fr"></div>

                <div class="pos_addr_lt">
                    <strong class="red_dark">Shipping Address #<?php echo $n; ?></strong>
                    <div class="blank5px"></div>
                    <b class="blue"><?= $one['first_name'] ?>&nbsp;<?= $one['first_name'] ?></b><br>
                    <?= $one['street1'] ?><br>
                    <?php if($one['street2']): ?>
                    <?= $one['street2'] ?><br>
                    <?php endif;?>
                    <?= $one['city'] ?>, <?= $one['state'] ?>, <?= $one['country'] ?><br>
                    <?= $one['zip'] ?><br>
                    Phone: <?= $one['telephone'] ?><br>
                    <div class="clear"></div>
                </div>
                <div class="pos_addr_slt">
                    <a href="javascript:void(0);"><img
                                src="<?= Yii::$service->image->getImgUrl('images/ico/edit.gif'); ?>" hspace="3"
                                align="absmiddle" border="0">Edit</a>&nbsp;&nbsp;&nbsp;&nbsp;
                    <a href="javascript:void(0);"><img
                                src="<?= Yii::$service->image->getImgUrl('images/ico/del.gif'); ?>" hspace="3"
                                align="absmiddle" border="0">Delete</a>
                    <br><br><br>
                    <input type="button" class="btn_submit btn_mid" value="Ship to this address"
                           onclick="AddressBookChoose('295224');"></div>
                <div class="clear"></div>
            </div>

            <div class="dashed5px"></div>

        <?php endforeach; ?>
        <span class="px11">- If you confirmed payment online and your shipping address, the system will automatically redirect you.</span>
        </div>
    </div>
    <?php endif; ?>
    <?php endif; ?>
