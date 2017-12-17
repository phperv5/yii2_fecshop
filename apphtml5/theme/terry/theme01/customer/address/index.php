
<div class="addressList">
    <?php if (is_array($coll) && !empty($coll)): ?>
    <ul class="wrapper pwa-shadow">
        <?php foreach ($coll as $one): ?>
        <li class="address-item  ms-rc-ripple ms-rc-custom selected">
            <form id="Address-Form-1233320249" name="Address-Form-1233320249-id" action="//m.aliexpress.com/order/createNewOrderForCombinePwa.htm" method="post" class="form-item" data-action="default">

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
            </form>
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
