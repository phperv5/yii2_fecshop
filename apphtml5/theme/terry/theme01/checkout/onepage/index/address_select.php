<?php $address_select = $parentThis['address_select']; ?>

<!--地址列表-->
<input type="hidden" name="address_id" class="address_id" value="<?= $address_select['address_id'] ?>">
<div class="pwa-cart-block pwa-shadow">
    <div class="pwa-title-block small">
        <div class="content">
            <span class="title">shipping address&nbsp; :</span>
        </div>
    </div>
    <div class="pwa-address-item order-shipping-address">
        <?php if($address_select):?>
        <div class="name"><?= $address_select['first_name'];?>&nbsp;<?= $address_select['last_name'];?></div>
        <ul class="address-items">
            <li class="item" data-role="address"><?= $one['street1'] ?></li>
            <div class="address-info"><?= $address_select['street1'] ?></div>
            <?php if($address_select['street2']):?>
                <li class="item" data-role="address"><?= $address_select['street2'] ?></li>
            <?php endif;?>
            <li class="item" data-role="country"><?= $address_select['city'] ?>, <?= $address_select['state'] ?>, <?= $address_select['country'] ?></li>
            <li class="item" data-role="zip"><?= $address_select['zip'] ?></li>
            <li class="item" data-role="phone"><?= $address_select['telephone'] ?></li>
        </ul>
        <?php endif;?>
        <div class="ms-rc-ripple ms-rc-custom has-btn">
            <a href="<?= Yii::$service->url->getUrl('customer/address?redirect_url='.Yii::$service->url->getUrl('checkout/onepage')) ?>" id="change-address" class="pwa-btn transparent">
                <?php
                     if($address_select) echo 'Change Shipping Address';else echo 'Add Shipping Address';
                ?>
            </a>
        </div>
    </div>
</div>