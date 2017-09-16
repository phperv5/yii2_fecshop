<!-- <div class="align_center"><a href="producttags/free-shipping-key-tool.html" title="2017 New & Hot sale Auto Key Programmer" target="_blank"><img src="upload/advs/2017080912762334.jpg" width="1200" height="100" border="0" hspace="0" vspace="0" alt="2017 New & Hot sale Auto Key Programmer" align="absmiddle" /></a></div></div>-->
 <div class="main_h">
    <div class="main_h_left">
        <?php $categories = Yii::$service->category->menu->getChildCate('0');?>
        <?php foreach($categories as $category): ?>
        <a href="<?= $category['url'] ?>" class="mhl_first"><?= $category['name'] ?></a>
        <?php endforeach; ?>
<!--        <a href="search/search.html" class="mhl_last">All Categories</a>-->
    </div>
     <div class="main_h_banner">
        <div id="hm_ads_banner_a2" class="owl-carousel">
            <a class="item" href="<?= Yii::$service->url->getUrl('2432'); ?>"><img src="<?= Yii::$service->image->getImgUrl('images/banner1.jpg');  ?>" alt=""></a>
            <a class="item" href="<?= Yii::$service->url->getUrl('2432'); ?>"><img src="<?= Yii::$service->image->getImgUrl('images/banner2.jpg');  ?>" alt=""></a>
            <a class="item" href="<?= Yii::$service->url->getUrl('2432'); ?>"><img src="<?= Yii::$service->image->getImgUrl('images/banner1.jpg');  ?>" alt=""></a>
        </div>
         <div class="hm_bnr_ndots" id="hm_bnr_dots"></div>
     </div>
    <div class="clear"></div>
    <div class="blank15px"></div>
    <div class="hm_box_jmp_left">
        <ul>
            <li><a href="wholesale/brand-xhorse/brand-xhorse.html"><img src="http://www.uobdii.com/upload/advs/2017011802685309.jpg" border="0" alt="Brand Xhorse"></a></li>
            <li><a href="wholesale/brand-launch-x431/brand-launch-x431.html"><img src="http://www.uobdii.com/upload/advs/2017011802730456.jpg" border="0" alt="Brand Launch X431"></a></li>
            <li><a href="wholesale/brand-obdstar/brand-obdstar.html"><img src="http://www.uobdii.com/upload/advs/2017011802749706.jpg" border="0" alt="Brand obdstar "></a></li>
            <li><a href="wholesale/brand-xtool/brand-xtool.html"><img src="http://www.uobdii.com/upload/advs/2017011802768676.jpg" border="0" alt="Brand Xtool"></a></li>
            <li><a href="wholesale/brand-xtuner/brand-xtuner.html"><img src="http://www.uobdii.com/upload/advs/2017011802785508.jpg" border="0" alt="Brand Xtuner"></a></li>
            <li><a href="wholesale/brand-autel/brand-autel.html"><img src="http://www.uobdii.com/upload/advs/2017011802803183.jpg" border="0" alt="Brand Autel"></a></li>
            <li><a href="wholesale/brand-foxwell/brand-foxwell.html"><img src="http://www.uobdii.com/upload/advs/2017011802818939.jpg" border="0" alt="Brand Foxwell"></a></li>
            <li><a href="wholesale/brand-lishi/brand-lishi.html"><img src="http://www.uobdii.com/upload/advs/2017011802840124.jpg" border="0" alt="Brand Lishi"></a></li>
        </ul>
    </div>
    <div class="hm_box_jmp_right">
        <ul>
            <li><a href="producttags/fcar-f3-g.html"><img src="http://www.uobdii.com/upload/advs/2017081501679468.jpg" border="0" alt="Fcar F3-G (F3-W + F3-D) Fcar Scanner"></a></li>
            <li><a href="wholesale/vpecker-e4-multi-functional-tablet-diagnostic-tool.html"><img src="http://www.uobdii.com/upload/advs/2017081786055905.jpg" border="0" alt="VPECKER E4 Multi Functional Tablet Diagnostic Tool"></a></li>
            <li><a href="wholesale/vxdiag-vcx-nano-pro-gm-ford-mazda-vm.html"><img src="http://www.uobdii.com/upload/advs/2017073074269977.jpg" border="0" alt="VXDIAG VCX NANO PRO For GM Ford Mazda 3 in 1"></a></li>
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
        <div class="hmb_title"><h2><a href="wholesale/original-brand-tool/list.html">O2121riginal Brand Tool<span class="iconfont icon-right"></span></a></h2></div>
        <div class="hmb_more hmb_mor_tag"><a href="producttags/autel-maxisys.html">Autel MaxiSYS</a> &nbsp; <a href="producttags/launch-x431-v.html">Launch X431 V</a> &nbsp; <a href="producttags/autel-maxidiag-elite.html">Autel MaxiDiag Elite</a> &nbsp; <a href="producttags/original-obdstar.html">Original OBDSTAR</a> &nbsp; <a href="producttags/vxdiag-vcx-nano.html">VXDIAG VCX NANO</a> &nbsp; <a href="producttags/launch-creader.html">Launch Creader</a></div>
        <div class="clear"></div>
    </div>
    <div class="hm_box">
            <?php
            $parentThis['products'] = $bestSellerProducts;
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
        <div class="hmb_title"><h2><a href="wholesale/car-diagnostic-tool/car-diagnostic-tool.html">Car Diagnostic Tool<span class="iconfont icon-right"></span></a></h2></div>
        <div class="hmb_more hmb_mor_tag"><a href="producttags/bmw-icom.html">BMW ICOM</a> &nbsp; <a href="producttags/mb-star-diagnosis.html">MB Star Diagnosis</a> &nbsp; <a href="producttags/gm-tech2.html">GM TECH2</a> &nbsp; <a href="producttags/techstream.html">Techstream</a> &nbsp; <a href="producttags/motorcycle-scanner.html">Motorcycle scanner</a> &nbsp; <a href="producttags/fly-obd-scanner.html">FLY OBD Scanner</a> &nbsp; <a href="producttags/jlr-mangoose-sdd.html">JLR Mangoose SDD</a> &nbsp; <a href="producttags/vag-scanner.html">VAG Scanner</a> &nbsp; <a href="producttags/wifi-scanner.html">Wifi Scanner</a></div>
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
    <div class="hm_box hm_box_dir_tf hm_box_dir_tf_3">
        <div class="hmb_title"><h2><a href="wholesale/auto-key-programmer/auto-key-programmer.html">Auto Key Programmer<span class="iconfont icon-right"></span></a></h2></div>
        <!--关键字待开发-->
        <!--        <div class="hmb_more hmb_mor_tag"><a href="producttags/vvdi2.html">VVDI2</a> &nbsp; <a href="producttags/mb-bga-tool.html">MB BGA Tool</a> &nbsp; <a href="producttags/keydiy-remote-maker.html">KEYDIY Remote Maker</a> &nbsp; <a href="producttags/bmw-key-programmer.html">BMW Key Programmer</a> &nbsp; <a href="producttags/mercedes-key-programmer.html">Mercedes Key Programmer</a> &nbsp; <a href="producttags/toyota-g-chip-copier.html">Toyota G Chip Copier</a></div>-->
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
    <div class="hm_box hm_box_dir_tf hm_box_dir_tf_4">
        <div class="hmb_title"><h2><a href="wholesale/ecu-chip-tuning/ecu-chip-tuning.html">ECU Chip Tuning<span class="iconfont icon-right"></span></a></h2></div>
<!--        <div class="hmb_more hmb_mor_tag"><a href="producttags/ktag-master-tuning.html">Ktag Master Tuning</a> &nbsp; <a href="producttags/fgtech-galletto.html">FGTech Galletto</a> &nbsp; <a href="producttags/kess-v2.html">Kess V2</a> &nbsp; <a href="producttags/xprog-m.html">XPROG-M</a> &nbsp; <a href="producttags/upa-usb-programmer.html">UPA USB Programmer</a> &nbsp; <a href="producttags/motorola-programmer.html">Motorola Programmer</a> &nbsp; <a href="producttags/wellon-programmer.html">Wellon Programmer</a> &nbsp; <a href="producttags/mpps-chip-tuning.html">MPPS Chip Tuning</a> &nbsp; <a href="producttags/nitrodata-chip-tuning.html">NitroData Chip Tuning</a> &nbsp; <a href="producttags/socket-adapter.html">Socket Adapter</a></div>-->
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
    <div class="hm_box hm_box_dir_tf hm_box_dir_tf_0">
        <div class="hmb_title"><h2><a href="wholesale/heavy-duty-diagnostic/heavy-duty-diagnostic.html">Heavy Duty Diagnostic<span class="iconfont icon-right"></span></a></h2></div>
<!--        <div class="hmb_more hmb_mor_tag"><a href="producttags/scania-vci2.html">Scania VCI2</a> &nbsp; <a href="producttags/xtruck-usb-link.html">XTruck USB Link</a> &nbsp; <a href="producttags/volvo-vcads.html">Volvo VCADS</a> &nbsp; <a href="producttags/adblueobd2-emulator.html">AdblueOBD2 Emulator</a> &nbsp; <a href="producttags/volvo-vocom.html">VOLVO Vocom</a> &nbsp; <a href="producttags/universal-diesel-scanner.html">Universal Diesel Scanner</a></div>-->
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
    <div class="blank10px"></div>
    <div class="hm_box hm_box_dir_tf hm_box_dir_tf_1">
        <div class="hmb_title"><h2><a href="wholesale/key-cutting-lock-pick-tool/key-cutting-lock-pick-tool.html">Key Cutting &amp; Lock Pick Tool<span class="iconfont icon-right"></span></a></h2></div>
<!--        <div class="hmb_more hmb_mor_tag"><a href="producttags/turbo-decoder.html">Turbo Decoder</a> &nbsp; <a href="producttags/key-cutting-machine.html">Key Cutting Machine</a> &nbsp; <a href="producttags/jingji-key-cutting-machine.html">JINGJI Key Cutting Machine</a></div>-->
        <div class="clear"></div>
    </div>
    <div class="hm_box">
        <?php
        $parentThis['products'] = $bestSellerProducts5;
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
        <div class="hmb_title"><h2><a href="wholesale/oversea-warehouse/oversea-warehouse.html">Oversea Warehouse<span class="iconfont icon-right"></span></a></h2></div>
<!--        <div class="hmb_more hmb_mor_tag"><a href="producttags/ship-from-us.html">Ship from US</a> &nbsp; <a href="producttags/ship-from-ca.html">Ship From CA</a> &nbsp; <a href="producttags/ship-from-au.html">Ship From AU</a> &nbsp; <a href="producttags/ship-from-amazon.html">Ship From Amazon</a></div>-->
        <div class="clear"></div>
    </div>
    <div class="hm_box">
        <?php
        $parentThis['products'] = $bestSellerProducts6;
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
        <div class="hmb_title"><h2><a href="wholesale/mileage-programmer/mileage-programmer.html">Mileage Programmer<span class="iconfont icon-right"></span></a></h2></div>
<!--        <div class="hmb_more hmb_mor_tag"><a href="producttags/digiprog-3.html">Digiprog 3</a> &nbsp; <a href="producttags/digimaster-3.html">Digimaster 3</a> &nbsp; <a href="producttags/bmw-mileage-programmer.html">BMW Mileage Programmer</a> &nbsp; <a href="producttags/odometer-correction-tool.html">Odometer Correction Tool</a></div>-->
        <div class="clear"></div>
    </div>
    <div class="hm_box">
        <?php
        $parentThis['products'] = $bestSellerProducts7;
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
        <div class="hmb_title"><h2><a href="wholesale/car-diagnostic-software/car-diagnostic-software.html">Car Diagnostic Software<span class="iconfont icon-right"></span></a></h2></div>
<!--        <div class="hmb_more hmb_mor_tag"><a href="producttags/update-service.html">Update Service</a> &nbsp; <a href="producttags/bmw-icom-software.html">BMW ICOM Software</a> &nbsp; <a href="producttags/ssd-hard-drive.html">SSD Hard Drive</a> &nbsp; <a href="producttags/gm-diagnostic-software.html">GM Diagnostic Software</a> &nbsp; <a href="producttags/skc-calculator.html">SKC Calculator</a> &nbsp; <a href="producttags/volvo-vocom-ptt-software.html">VOLVO Vocom PTT Software</a> &nbsp; <a href="producttags/scania-vci-sdp3.html">Scania VCI SDP3</a></div>-->
        <div class="clear"></div>
    </div>
    <div class="hm_box">
        <?php
        $parentThis['products'] = $bestSellerProducts8;
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
<div class="main_h">
    <div class="blank10px"></div><div class="blank10px"></div>
    <div class="blank10px">&nbsp;</div>

    <div style="background: rgb(250, 250, 250); margin: 0px; padding: 20px; clear: both; border-top-color: rgb(230, 230, 230); border-bottom-color: rgb(220, 220, 220); border-top-width: 2px; border-bottom-width: 1px; border-top-style: solid; border-bottom-style: solid;">
        <div style="font: 23px/60px georgia, Verdana; height: 60px; text-align: center; color: rgb(242, 109, 0); font-size-adjust: none; font-stretch: normal;">Why Shop at UOBDII.com?</div>

        <div style="background: rgb(250, 250, 250); height: 5px; overflow: hidden; clear: both;">&nbsp;</div>

        <div style="margin: 0px 60px; height: 0px; clear: both; border-bottom-color: rgb(204, 204, 204); border-bottom-width: 1px; border-bottom-style: dotted;">&nbsp;</div>

        <div style="margin: 0px; clear: both;">
            <div style="margin: 0px; padding: 10px 0px 0px 10px; width: 45%; float: left;"><strong>A Vast Selection of OBDII Tools</strong><br />
                Everyday, hundreds of customers search and browse UOBDII.com, to meet their diverse and demanding needs. UOBDII has&nbsp;developed a vast collections of OBDII tools, including: OBDII / OBD2 scanner, OBDII cable and connector, car and truck diagnostic tool, ECU programmer, car key programmer, auto locksmith tool, mileage programmer, auto electronics, and more on auto repair and maintenance tools.<br />
                <br />
                <strong>Top Quality OBDII OBD2 EOBD Tools</strong><br />
                Only after fully tested and quality control procedures, the obd2 tools can ship to customers, ensuring each and every item purchased meets quality standards. UOBDII only offer workable obd2 diagnostic products, ensuring every customer a pleasant shopping experience and win a long lasting good reputation overseas.<br />
                &nbsp;<br />
                <strong>Reasonable Price Direct from Factory</strong><br />
                As a China-based famous brand, UOBDII&nbsp;mainly supply OBDII tools for many years, we develope a long lasting connection with factories, distributors and warehouses in China and our obd2 products price is reasonable and competitive. UOBDII&nbsp;is constantly working to cut our customers cost as much as we can.<br />
                <br />
                <strong>Safe and Secured Payment</strong><br />
                UOBDII.com is available with the most trustable and safest payment options: &nbsp; PayPal,&nbsp;Western Union and bank transfer. We are always doing our best to take our customers a safe and easy shopping experience.<br />
                <br />
                &nbsp;</div>

            <div style="margin: 0px; padding: 10px 0px 0px; width: 45%; float: right;"><strong>Friendly &amp; Effective Customer Service</strong><br />
                UOBDII&nbsp;customers are free to contact us by any of these contact options: live chat, Email, Skype&nbsp;and yahoo messenger. And UOBDII customer service will quick response to customers&rsquo; inquiries and any problems; always friendly and pleasant chat with our customers; prompt and effective communication with them. Be happy and confident shop and save with UOBDII.<br />
                &nbsp;<br />
                <strong>Professional &amp; Unlimited Technical Support</strong><br />
                UOBDII.com qualified engineers have been offering and will always offer our customers professional and unlimited technical support including: providing shopping tips in selecting a workable and easy-to-use tool; produce video tutorial; remote assistance; open download &amp; technical support column; share obd2 software driver, manual, operation guide, vehicle list, package list, etc.<br />
                <br />
                <strong>Fast Delivery Around the World</strong><br />
                UOBDII.com always have enough stock and have a long lasting tire with globally trusted express companies, such as: DHL, UPS, EMS, FedEx, TNT, Singapore post. UOBDII promises to ship the packages as soon as possible and in a good packaging. UOBDII ships to many countries around the world.<br />
                <br />
                <strong>UOBDII not Refuse Improve and Perfect</strong><br />
                Why UOBDII is not 5-star Company, but 4.6 star company? It is concerned about our vision; our vision is to pursuit unlimited perfect, we aim to work out to make our customers have a happy and satisfying shopping experience at UOBDII.com. UOBDII welcome your reviews and suggestions, it will become our start point to improve.</div>
        </div>

        <div class="clear">&nbsp;</div>
    </div>
    <div class="blank10px"></div><div class="blank10px"></div>
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
            });
        <?php $this->endBlock(); ?>
    </script>
    <?php $this->registerJs($this->blocks['owl_fecshop_slider'],\yii\web\View::POS_END);//将编写的js代码注册到页面底部 ?>