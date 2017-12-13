<div class="swiper-container">
    <div class="swiper-wrapper">
        <?php
        $ads = Yii::$service->product->ads->getAdList();
        foreach ($ads as $v):?>
        <div class="swiper-slide">
            <a href="<?= $v['url'] ?>">
                <img src="<?= $v['banner'] ?>" alt="<?= $v['title'] ?>" style="width: 100%">
            </a>
        </div>
        <?php endforeach; ?>
    </div>
    <!-- Add Pagination -->
    <div class="swiper-pagination"></div>
</div>
<div class="blank10px"></div>
<div class="mn_row"><a href="/featured_products.html"><b> Our Recommendations</b> <i
        class="iconfont icon-right m_row_fr_right"></i></a>
    <div class="clear"></div>
</div>
<div class="pro_grid_list">
<div class="pro_grid">
    <a href="/wholesale/ktag-kess-ktm-dimsport-bdm-probe-adapters-full-set.html"
       title="KTAG KESS KTM Dimsport BDM Probe Adapters Full Set (Denso, Marelli, Bosch, Siemens)">
        <div class="pro_gr_photo"><img
                src="http://www.UOBDII.com/upload/pro/ktag-kess-ktm-dimsport-bdm-probe-adapters-full-set-180.jpg"
                width="120" height="120" border="0" hspace="0" vspace="0"
                alt="KTAG KESS KTM Dimsport BDM Probe Adapters Full Set (Denso, Marelli, Bosch, Siemens)"
                align="absmiddle"></div>
        <div class="pro_gr_name">KTAG KESS KTM Dimsport BDM Probe Adapters Full Set (Denso, Marelli, Bosch, Siemens)
        </div>
        <div class="pro_gr_pri_vew">
            <div id="ProPriDisp_m_h_">
                <span name="cc_v_USD" style="display:"><span class="pri_ph_vip">$189.00</span></span>
                <span name="cc_v_EUR" style="display:none"><span class="pri_ph_vip">€160.65</span></span>
                <span name="cc_v_GBP" style="display:none"><span class="pri_ph_vip">£147.42</span></span>
                <span name="cc_v_AUD" style="display:none"><span class="pri_ph_vip">AU$241.92</span></span>
                <span name="cc_v_JPY" style="display:none"><span class="pri_ph_vip">¥20,979</span></span>
            </div>
        </div>
    </a>
    <div class="clear"></div>
</div>
</div>
<div class="pro_grid_list">
<div class="pro_grid">
    <a href="/wholesale/ktag-kess-ktm-dimsport-bdm-probe-adapters-full-set.html"
       title="KTAG KESS KTM Dimsport BDM Probe Adapters Full Set (Denso, Marelli, Bosch, Siemens)">
        <div class="pro_gr_photo"><img
                src="http://www.UOBDII.com/upload/pro/ktag-kess-ktm-dimsport-bdm-probe-adapters-full-set-180.jpg"
                width="120" height="120" border="0" hspace="0" vspace="0"
                alt="KTAG KESS KTM Dimsport BDM Probe Adapters Full Set (Denso, Marelli, Bosch, Siemens)"
                align="absmiddle"></div>
        <div class="pro_gr_name">KTAG KESS KTM Dimsport BDM Probe Adapters Full Set (Denso, Marelli, Bosch, Siemens)
        </div>
        <div class="pro_gr_pri_vew">
            <div id="ProPriDisp_m_h_">
                <span name="cc_v_USD" style="display:"><span class="pri_ph_vip">$189.00</span></span>
                <span name="cc_v_EUR" style="display:none"><span class="pri_ph_vip">€160.65</span></span>
                <span name="cc_v_GBP" style="display:none"><span class="pri_ph_vip">£147.42</span></span>
                <span name="cc_v_AUD" style="display:none"><span class="pri_ph_vip">AU$241.92</span></span>
                <span name="cc_v_JPY" style="display:none"><span class="pri_ph_vip">¥20,979</span></span>
            </div>
        </div>
    </a>
    <div class="clear"></div>
</div>
</div>
<div class="blank10px"></div>
<div class="blank10px"></div>
<div class="mn_row"><a href="/producttags/new-arrivals.html"><b>New Arrivals</b> <i
        class="iconfont icon-right m_row_fr_right"></i></a>
    <div class="clear"></div>
</div>
    <?php
    $parentThis['products'] = $newArrivals;
    $parentThis['name'] = 'New Arrivals';
    $config = [
        'view' => 'cms/home/index/newArrivals.php',
    ];
    echo Yii::$service->page->widget->renderContent('category_newArrivals_price', $config, $parentThis);
    ?>

<script>
    <?php $this->beginBlock('owl_fecshop_slider') ?>
    $(function () {
        var swiper = new Swiper('.swiper-container', {
            pagination: {
                el: '.swiper-pagination',
            },
        });
    });
    <?php $this->endBlock(); ?>
</script>
<?php $this->registerJs($this->blocks['owl_fecshop_slider'], \yii\web\View::POS_END);//将编写的js代码注册到页面底部 ?>