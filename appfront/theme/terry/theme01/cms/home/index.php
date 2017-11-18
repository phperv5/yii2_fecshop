
<div class="main_h">
    <div class="main_h_left">
        <?php $categories = Yii::$service->category->menu->getChildCate('0');?>
        <?php foreach($categories as $category): ?>
            <div class="left_proclass_menu">
                <a href="<?= $category['url'] ?>" class="mhl_first_main"><?= $category['name'] ?></a>
                <div class="hd_wr_nav_main">
                   <ul class="hdcate">
                    <?php foreach($categories as $category): ?>
                        <a href="<?= $category['url'] ?>" class="mhl_first"><?= $category['name'] ?></a>
                    <?php endforeach; ?>
                  </ul>
                </div>
            </div>
        <?php endforeach; ?>
    </div>
     <div class="main_h_banner">
        <div id="hm_ads_banner_a2" class="owl-carousel">
            <a class="item" href="<?= Yii::$service->url->getUrl('original-mk3-car-keyremote-unlocking-tool-with-online-update'); ?>"><img src="<?= Yii::$service->image->getImgUrl('images/market/1.jpg');  ?>" alt=""></a>
            <a class="item" href="<?= Yii::$service->url->getUrl('catalogsearch/index?q=Language+Handy+Baby&DirID='); ?>"><img src="<?= Yii::$service->image->getImgUrl('images/market/2.jpg');  ?>" alt=""></a>
            <a class="item" href="<?= Yii::$service->url->getUrl('2017-newest-lonsdor-k518ise-key-programmer-with-odometer-adjustment-for-all-makes'); ?>"><img src="<?= Yii::$service->image->getImgUrl('images/market/3.jpg');  ?>" alt=""></a>
            <a class="item" href="<?= Yii::$service->url->getUrl('catalogsearch/index?q=CGDI&DirID='); ?>"><img src="<?= Yii::$service->image->getImgUrl('images/market/4.jpg');  ?>" alt=""></a>
        </div>
         <div class="hm_bnr_ndots" id="hm_bnr_dots"></div>
     </div>
    <div class="clear"></div>
    <div class="blank15px"></div>
    <div class="hm_box_jmp_left">
        <ul>
            <li><a href="<?= Yii::$service->url->getUrl('xhorse'); ?>"><img src="<?= Yii::$service->image->getImgUrl('images/advs/2017011802685309.jpg');  ?>" border="0" alt="Brand Xhorse"></a></li>
            <li><a href="<?= Yii::$service->url->getUrl('launch'); ?>"><img src="<?= Yii::$service->image->getImgUrl('images/advs/2017011802730456.jpg');  ?>" border="0" alt="Brand Launch X431"></a></li>
            <li><a href="<?= Yii::$service->url->getUrl('obdstar'); ?>"><img src="<?= Yii::$service->image->getImgUrl('images/advs/2017011802749706.jpg');  ?>" border="0" alt="Brand obdstar "></a></li>
            <li><a href="<?= Yii::$service->url->getUrl('xtool'); ?>"><img src="<?= Yii::$service->image->getImgUrl('images/advs/2017011802768676.jpg');  ?>" border="0" alt="Brand Xtool"></a></li>
            <li><a href="<?= Yii::$service->url->getUrl('xtuner'); ?>"><img src="<?= Yii::$service->image->getImgUrl('images/advs/2017011802785508.jpg');  ?>" border="0" alt="Brand Xtuner"></a></li>
            <li><a href="<?= Yii::$service->url->getUrl('autel'); ?>"><img src="<?= Yii::$service->image->getImgUrl('images/advs/2017011802803183.jpg');  ?>" border="0" alt="Brand Autel"></a></li>
            <li><a href="<?= Yii::$service->url->getUrl('foxwell'); ?>"><img src="<?= Yii::$service->image->getImgUrl('images/advs/2017011802818939.jpg');  ?>" border="0" alt="Brand Foxwell"></a></li>
            <li><a href="<?= Yii::$service->url->getUrl('lishi'); ?>"><img src="<?= Yii::$service->image->getImgUrl('images/advs/2017011802840124.jpg');  ?>" border="0" alt="Brand Lishi"></a></li>
        </ul>
    </div>
    <div class="hm_box_jmp_right">
        <ul>
            <li><a href="<?= Yii::$service->url->getUrl('4-buttons-bga-315mhz-for-mercedes-benz'); ?>"><img src="<?= Yii::$service->image->getImgUrl('images/market/A.jpg');  ?>" border="0" alt=""></a></li>
            <li><a href="<?= Yii::$service->url->getUrl('catalogsearch/index?q=Remote+for+Toyota&DirID='); ?>"><img src="<?= Yii::$service->image->getImgUrl('images/market/B.jpg');  ?>" border="0" alt=""></a></li>
            <li><a href="<?= Yii::$service->url->getUrl('31-buttons-remote-key-313.8mhz-fcc-idkr55wk49308-for-honda-pilot-accord-2008-2013'); ?>"><img src="<?= Yii::$service->image->getImgUrl('images/market/C.jpg');  ?>" border="0" alt=""></a></li>
        </ul>
    </div>
    <div class="clear"></div>
</div>
<div class="main">
<!--    new arrivals-->
    <?php
    $parentThis['products'] = $newArrivals;
    $parentThis['name'] = 'New Arrivals';
    $config = [
        'view'  		=> 'cms/home/index/newArrivals.php',
    ];
    echo Yii::$service->page->widget->renderContent('category_newArrivals_price',$config,$parentThis);
    ?>

    <div class="blank10px"></div>
    <div class="hm_box hm_box_dir_tf hm_box_dir_tf_1">
        <div class="hmb_title"><h2><a href="">Original Brand Tool<span class="iconfont icon-right"></span></a></h2></div>
<!--        <div class="hmb_more hmb_mor_tag"><a href="producttags/autel-maxisys.html">Autel MaxiSYS</a> &nbsp; <a href="producttags/launch-x431-v.html">Launch X431 V</a> &nbsp; <a href="producttags/autel-maxidiag-elite.html">Autel MaxiDiag Elite</a> &nbsp; <a href="producttags/original-obdstar.html">Original OBDSTAR</a> &nbsp; <a href="producttags/vxdiag-vcx-nano.html">VXDIAG VCX NANO</a> &nbsp; <a href="producttags/launch-creader.html">Launch Creader</a></div>-->
        <div class="clear"></div>
    </div>
    <div class="hm_box">
            <?php
            $parentThis['products'] = $bestSellerProducts1;
            $parentThis['name'] = 'best-seller';
            $config = [
                'view'  		=> 'cms/home/index/product.php',
            ];
            echo Yii::$service->page->widget->renderContent('category_product_price',$config,$parentThis);
            ?>
        <div class="clear"></div>
    </div>
    <div class="blank10px"></div>
    <div class="blank10px"></div>
    <div class="hm_box hm_box_dir_tf hm_box_dir_tf_2">
        <div class="hmb_title"><h2><a href="">Car Diagnostic Tool<span class="iconfont icon-right"></span></a></h2></div>
        <div class="clear"></div>
    </div>
    <div class="hm_box">
        <?php
        $parentThis['products'] = $bestSellerProducts2;
        $parentThis['name'] = 'best-seller';
        $config = [
            'view'  		=> 'cms/home/index/product.php',
        ];
        echo Yii::$service->page->widget->renderContent('category_product_price',$config,$parentThis);
        ?>
        <div class="clear"></div>
    </div>
    <div class="blank10px"></div>
    <div class="blank10px"></div>
    <div class="hm_box hm_box_dir_tf hm_box_dir_tf_3">
        <div class="hmb_title"><h2><a href="">Auto Key Programmer<span class="iconfont icon-right"></span></a></h2></div>
        <!--关键字待开发-->
        <!--        <div class="hmb_more hmb_mor_tag"><a href="producttags/vvdi2.html">VVDI2</a> &nbsp; <a href="producttags/mb-bga-tool.html">MB BGA Tool</a> &nbsp; <a href="producttags/keydiy-remote-maker.html">KEYDIY Remote Maker</a> &nbsp; <a href="producttags/bmw-key-programmer.html">BMW Key Programmer</a> &nbsp; <a href="producttags/mercedes-key-programmer.html">Mercedes Key Programmer</a> &nbsp; <a href="producttags/toyota-g-chip-copier.html">Toyota G Chip Copier</a></div>-->
        <div class="clear"></div>
    </div>
    <div class="hm_box">
        <?php
        $parentThis['products'] = $bestSellerProducts3;
        $parentThis['name'] = 'best-seller';
        $config = [
            'view'  		=> 'cms/home/index/product.php',
        ];
        echo Yii::$service->page->widget->renderContent('category_product_price',$config,$parentThis);
        ?>
        <div class="clear"></div>
    </div>
    <div class="blank10px"></div>
    <div class="blank10px"></div>
    <div class="hm_box hm_box_dir_tf hm_box_dir_tf_4">
        <div class="hmb_title"><h2><a href="">ECU Chip Tuning<span class="iconfont icon-right"></span></a></h2></div>
<!--        <div class="hmb_more hmb_mor_tag"><a href="producttags/ktag-master-tuning.html">Ktag Master Tuning</a> &nbsp; <a href="producttags/fgtech-galletto.html">FGTech Galletto</a> &nbsp; <a href="producttags/kess-v2.html">Kess V2</a> &nbsp; <a href="producttags/xprog-m.html">XPROG-M</a> &nbsp; <a href="producttags/upa-usb-programmer.html">UPA USB Programmer</a> &nbsp; <a href="producttags/motorola-programmer.html">Motorola Programmer</a> &nbsp; <a href="producttags/wellon-programmer.html">Wellon Programmer</a> &nbsp; <a href="producttags/mpps-chip-tuning.html">MPPS Chip Tuning</a> &nbsp; <a href="producttags/nitrodata-chip-tuning.html">NitroData Chip Tuning</a> &nbsp; <a href="producttags/socket-adapter.html">Socket Adapter</a></div>-->
        <div class="clear"></div>
    </div>
    <div class="hm_box">
        <?php
        $parentThis['products'] = $bestSellerProducts4;
        $parentThis['name'] = 'best-seller';
        $config = [
            'view'  		=> 'cms/home/index/product.php',
        ];
        echo Yii::$service->page->widget->renderContent('category_product_price',$config,$parentThis);
        ?>
        <div class="clear"></div>
    </div>
    <div class="blank10px"></div>

</div>
    <script>
        <?php $this->beginBlock('owl_fecshop_slider') ?>

            $(document).ready(function(){
                var owl = $('#hm_ads_banner_a2');
                owl.owlCarousel({
                    items:1,
                    loop:true,
                    nav:false,
                    dots:true,
                    dotsContainer:$('#hm_bnr_dots'),
                    dotClass:'hm_bnr_dot',
                    autoplay:true,
                    autoplayTimeout:3000
                });
                $(".mhl_first_main").hover(
                    function () {
                        $('.hd_wr_nav_main').show();
                    },
                    function () {
                        $('.hd_wr_nav_main').hide();
                    }
                );
            });
        <?php $this->endBlock(); ?>
    </script>
    <?php $this->registerJs($this->blocks['owl_fecshop_slider'],\yii\web\View::POS_END);//将编写的js代码注册到页面底部 ?>