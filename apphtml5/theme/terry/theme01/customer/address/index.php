<div class="addressList">
    <?php if (is_array($coll) && !empty($coll)): ?>
    <ul class="wrapper pwa-shadow">
        <?php foreach ($coll as $one): ?>
        <li class="form-item address-item  ms-rc-ripple ms-rc-custom <?php if($one['is_default'] == 1) echo 'selected';?>">
                <div class="name"><?= $one['first_name'] ?>&nbsp;<?= $one['last_name'] ?></div>
                <div class="detail">
                    <div class="address-info"><?= $one['street1'] ?></div>
                    <?php if($one['street2']):?>
                        <div class="address-info"><?= $one['street2'] ?></div>
                    <?php endif;?>
                    <div class="address-info"><?= $one['city'] ?>, <?= $one['state'] ?>, <?= $one['country'] ?></div>
                    <div class="address-info"><?= $one['zip'] ?></div>
                    <div class="address-info"><?= $one['telephone'] ?></div>
                </div>
            <a href="<?= Yii::$service->url->getUrl('customer/address/edit',['address_id' => $one['address_id']]); ?>" id="manageAddressHref" class="btn">Edit Address</a>
            <div class="circle"><span></span></div>
        </li>
        <?php endforeach; ?>
    </ul>
    <?php endif; ?>
    <div class="add-address pwa-shadow">
        <div class="btn"><a href="<?= Yii::$service->url->getUrl('customer/address/edit'); ?>">Add Shipping Address</a></div>
    </div>

</div>
