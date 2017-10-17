<div class="main">
    <div class="page_where_l"><a href="/" rel="nofollow">Home</a> - <a href="/wholesale/" rel="nofollow">Products</a> - [<a href="/wholesale/brand-obdstar/">OBDSTAR</a>] - <a href="/wholesale/original-brand-tool/">Original Brand Tool</a> - OBDSTAR X300 DP X-300DP PAD Tablet Key Programmer Full Configuration Free Shipping by DHL</div><div class="page_where_r"><a href="javascript:history.go(-1);" rel="nofollow">&laquo; Go Back</a></div>
    <div class="blank8px"></div>

    <div class="ms_f_m">
        <input type="hidden" class="product_view_id" value="<?= $_id ?>">
        <input type="hidden" class="sku" value="<?= $sku; ?>"/>
        <div class="pro_chief">
            <div class="pro_chf_photo">
                <?php # 图片部分。
                $imageView = [
                    'view' => 'catalog/product/index/image.php'
                ];
                $imageParam = [
                    'media_size' => $media_size,
                    'image' => $image_thumbnails,
                    'productImgMagnifier' => $productImgMagnifier,
                ];
                ?>
                <?= Yii::$service->page->widget->render($imageView, $imageParam); ?>
            </div>
            <div class="pro_chf_brief">
                <h1><?= $name; ?></h1>
                <div class="blank5px"></div>
                <div class="pro_chf_bri_itemno">Item No.<?= $sku; ?>
                    <div class="blank5px"></div>
                    <!--                    <span class="gray verdana no_bold">Manufacturer: <a href="/wholesale/brand-obdstar/">OBDSTAR</a></span>-->
                    <span id="num_pro_sold_51561"></span>
                </div>
                <div class="pro_ch_bf_rate" id="pro_rate_51561">
                    <div class="pro_ch_bf_rate_bg">
                        <div class="pro_ch_bf_rate_vw" style="width:<?= $reviw_rate_star_average/5*150 ?>px;"></div>
                    </div>
                    <div class="pro_ch_bf_rate_tx"><?= $reviw_rate_star_average ?> stars, <a href="<?= Yii::$service->url->getUrl('catalog/reviewproduct/lists',['spu'=>$spu,'_id'=>$_id]); ?>" target="_blank"><?= $review_count ?> reviews.</a></div>
                </div>
                <div class="blank15px"></div>
                <div class="pro_bo_m">
                    <div class="pro_bo_stock_pra">
                        <!--                        <div class="p_bo_instock">In Stock</div>-->
                    </div>
                    <div class="">
                        <?php # 价格部分
                        $priceView = [
                            'view' => 'catalog/product/index/price.php'
                        ];
                        $priceParam = [
                            'price_info' => $price_info,
                        ];
                        ?>
                        <?= Yii::$service->page->widget->render($priceView, $priceParam); ?>


                        <!--                    <div class="pro_pri_mpr" id="ProMultiCurrTrig"-->
                        <!--                         onmouseover="javascript:ProMultiPriceRef('ProMultiCurrRef', 'ProMultiCurrTrig');"></div>-->
                    </div>
                    <div class="pro_b_item" id="id_pro_b_item_oQty">
                        <div class="pro_bitm_tit">Quantity:</div>
                        <div class="pro_bitm_cont">
                            <input type="text" name="qty" class="qty" value="1"/><span class="px11"></span>
                            <span id="txtSingleProSubTotal" class="px12 verdana"></span>
                        </div>
                        <div class="clear"></div>
                    </div>
                    <div class="blank10px"></div>
                    <!--                <div class="exh_m_bri">Free Shipping Promotion for 2017 New & Hot sale Auto Key Programmer<br>Valid-->
                    <!--                    time: 10th to 20th August, Shopping Now!-->
                    <!--                </div>-->
                    <div class="blank10px"></div>
                    <div class="pro_bo_add_l"><input name="btn_buyitnow" type="button" class="btn_buyitnow" value="" title="Buy It Now"
                                                     onclick="location.href='<?= Yii::$service->url->getUrl('payment/paypal/express/start'); ?>'"/></div>
                    <div class="pro_bo_add_m">
                        <input name="add_to_cart" type="button" class="btn_addtocart addProductToCart" value="" title="Add to Cart"/>
                    </div>

                    <div class="pro_bo_add_r">
                        <input name="add_to_favorites" type="button" class="btn_add_to_favorites" id="divMyFavorite"
                               url="<?= Yii::$service->url->getUrl('catalog/favoriteproduct/add', ['product_id' => $_id]); ?>"/>
                        <span id="txt_r_addToFavorites"></span>
                    </div>
                    <div class="blank5px"></div>
                </div>
                <!--            11-->
                <div class="blank10px"></div>
                <dl>
                    <dt class="w100px">Shipping:</dt>
                    <dd class="w420px">
                        <strong class="px14 green_dark">Free Shipping</strong>Express Shipping Service&nbsp;<br/>
                        <span class="px11 verdana gray_dark">Estimated delivery time: 3-5 Days.<a
                                    href="/support/how-we-ship-the-item-to-you-4072.html" target="_blank"><span
                                        class="px10">See details &raquo;</span></a></span></dd>
                    <dt class="w100px">Weight:</dt>
                    <!--                <dd class="w420px">3.5KG<span class="gray_dark">( 7.72LB )</span></dd>-->
                    <dd class="w420px"><?= $weight;?>KG</dd>
                    <dt class="w100px">Package:</dt>
                    <dd class="w420px"><?= $package;?><?php if($package) echo $package;else echo 'none';?></span>
                    </dd>
                    <dt class="w100px">Returns:</dt>
                    <dd class="w420px">Return for refund within 7 days,buyer pays return shipping.
                        <a href="/support/return-policy-4174.html" target="_blank"><span class="px11 verdana">Read details »</span></a>
                    </dd>
                </dl>
                <div class="blank10px"></div>
                <div class="dashed5px"></div>
                <div class="blank5px"></div>
<!--                <div class="pro_ch_bf_digg">-->
<!--                    <div class="pro_digg_180x35"><a href="javascript:ProDiggIt('51561','sv_pro_digg_51561');">-->
<!--                            <span id="num_pro_digg_51561"></span></a><span id="sv_pro_digg_51561" class="alert"></span>-->
<!--                    </div>-->
<!--                </div>-->
<!--                <div class="blank5px"></div>-->
<!--                <div class="dashed5px"></div>-->
                <?php if($related_download_files): ?>
                <div class="line18em"><b class="green_dark">Related Download Files:</b>&nbsp;
                    <div style="padding-left:10px;overflow: hidden"> <?= $related_download_files;?></div>
                </div>
                <?php  endif;?>
                <div class="blank5px"></div>
                <div class="pro_ch_bf_g_plusone">
                    <g:plusone></g:plusone>
                </div>
                <!--分享-->
                <div class="pro_ch_bf_share">
                    <script type="text/javascript" src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-59c0776ba615dc47"></script>
                    <div class="addthis_inline_share_toolbox"></div>
                </div>
            </div>
        </div>
        <div class="blank10px"></div><div class="blank10px"></div>
<!--        <div class="w95per">-->
<!--            <fieldset class="sec">-->
<!--                <legend><b class="px14 red_dark">Buy more related tools and Save more!</b></legend>-->
<!--                <div class="pro_list">-->
<!--                    <div class="photo"><div class="special"><img src="../images/ico/s_rec.gif" align="absmiddle" alt="Featured"></div><a href="/wholesale/obdstar-x300-pro3-key-master-english-version.html" title="【Ship from US No Tax】OBDSTAR X300 PRO3 X-300 Key Master with Immobiliser + Odometer Adjustment +EEPROM/PIC+OBDII"><img src="/upload/pro/obdstar-x300-pro3-new-180.jpg" width="120" height="120" border="0" hspace="0" vspace="0" alt="【Ship from US No Tax】OBDSTAR X300 PRO3 X-300 Key Master with Immobiliser + Odometer Adjustment +EEPROM/PIC+OBDII" align="absmiddle" /></a></div>-->
<!--                    <div class="brief_fs_suit">-->
<!--                        <div class="title"><a href="/wholesale/obdstar-x300-pro3-key-master-english-version.html" target="_blank" title="【Ship from US No Tax】OBDSTAR X300 PRO3 X-300 Key Master with Immobiliser + Odometer Adjustment +EEPROM/PIC+OBDII">【Ship from US No Tax】OBDSTAR X300 PRO3 X-300 Key Master with Immobiliser + Odometer Adjustment +EEPROM/PIC+OBDII</a></div>-->
<!--                        <b class="px11 gray">(Item No. USHKSK196)</b><br />			X300 PRO3 key master by OBDSTAR Company features with the immobiliser key programming function of SKP900,as well as new function e.g. Odometer adjustment, EEPROM/PIC and OBDII.<br />Its design is fully based on industrial standard, for example, it is designed with bilateral keyboards which make it easy to operate, besides its appearance is processed by special material and reaches to the shockproof level.&nbsp;&nbsp;&nbsp;&nbsp;<a href="/wholesale/obdstar-x300-pro3-key-master-english-version.html" target="_blank"><span>More Details &raquo;</span></a>-->
<!--                        <div class="blank10px"></div>-->
<!--                        　<img src="/images/ico/freeshipping.gif" border="0" align="absmiddle" alt="Free Shipping" />-->
<!--                        <div class="clear"></div>-->
<!--                    </div>-->
<!--                    <div class="order_fun_suit">-->
<!--                        <span class="pro_pri_tit_vip_m">Buy It Now:</span><span class="pro_pri_curr_vip_m" name="cc_v_USD" style="display:">$549.00</span>-->
<!--                        <span class="pro_pri_curr_vip_m" name="cc_v_EUR" style="display:none;">&euro;466.65</span>-->
<!--                        <span class="pro_pri_curr_vip_m" name="cc_v_GBP" style="display:none;">&pound;428.22</span>-->
<!--                        <span class="pro_pri_curr_vip_m" name="cc_v_AUD" style="display:none;">AU$702.72</span>-->
<!--                        <span class="pro_pri_curr_vip_m" name="cc_v_JPY" style="display:none;">&yen;60,939</span>-->
<!--                        <div class="blank10px"></div><span class="pro_b_item" id="id_pro_b_item_oQty_suit_48455"><b>Quantity: </b><input name="oQty_suit_48455" type="text" class="input" id="oQty_suit_48455" size="4" maxlength="6" onkeypress="event.returnValue=IsDigit();" value="1" onkeyup="ProQtySubTotal(this,'1','549.00','txt_single_subtotal_suit_48455');IsOrderNeedQty('Y','oQty_suit_48455');" /><span class="px12"></span>　<b><span id="alert_o_need_oQty_suit_48455" class="alert"></span></b>　</span><span id="txt_single_subtotal_suit_48455" class="txt_subt_m"></span></b>-->
<!--                        <div class="blank5px"></div><a href="javascript:void(0);" onclick="javascript:ShoppingCartAdd('48455','Single','N','oSize_suit_48455','N','oColor_suit_48455','Y','oQty_suit_48455');return false;" title="Add to Cart"><img src="/images/btn/add_to_cart_suit.gif" alt="Add to Cart" border="0" align="absmiddle" /></a>-->
<!--                        <div class="clear"></div></div>-->
<!--                    <div class="clear"></div>-->
<!--                </div>-->
<!--                <div class="pro_list">-->
<!--                    <div class="photo"><div class="special"><img src="../images/ico/s_rec.gif" align="absmiddle" alt="Featured"></div><a href="/wholesale/obdstar-x300-dp-standard-configuration.html" title="OBDSTAR X300 DP PAD Tablet Key Programmer Standard Configuration Immobilizer+ Odometer Adjustment+ EEPROM/PIC Adapter +OBDII"><img src="/upload/pro/obdstar-x300-dp-standard-configuration-180.1.jpg" width="120" height="120" border="0" hspace="0" vspace="0" alt="OBDSTAR X300 DP PAD Tablet Key Programmer Standard Configuration Immobilizer+ Odometer Adjustment+ EEPROM/PIC Adapter +OBDII" align="absmiddle" /></a></div>-->
<!--                    <div class="brief_fs_suit">-->
<!--                        <div class="title"><a href="/wholesale/obdstar-x300-dp-standard-configuration.html" target="_blank" title="OBDSTAR X300 DP PAD Tablet Key Programmer Standard Configuration Immobilizer+ Odometer Adjustment+ EEPROM/PIC Adapter +OBDII">OBDSTAR X300 DP PAD Tablet Key Programmer Standard Configuration Immobilizer+ Odometer Adjustment+ EEPROM/PIC Adapter +OBDII</a></div>-->
<!--                        <b class="px11 gray">(Item No. HKSP283-B)</b><br />			OBDSTAR X300 DP is the first tablet of OBDSTAR, which has reached a higher level in key programming and diagnosis. Inheriting from OBDSTAR professional auto programming and advanced diagnosing technology, OBDSTAR X300 DP is characterized by covering wide range of vehicles, featuring powerful function, and providing superior quality. Meanwhile, taking advantage of Android system, OBDSTAR X300 DP integrates more application and service, such as Maintenance Database, remote assistant, and One Key Update etc.&nbsp;&nbsp;&nbsp;&nbsp;<a href="/wholesale/obdstar-x300-dp-standard-configuration.html" target="_blank"><span>More Details &raquo;</span></a>-->
<!--                        <div class="blank10px"></div>-->
<!--                        　<img src="/images/ico/freeshipping.gif" border="0" align="absmiddle" alt="Free Shipping" />-->
<!--                        <div class="clear"></div>-->
<!--                    </div>-->
<!--                    <div class="order_fun_suit">-->
<!--                        <span class="pro_pri_tit_vip_m">Buy It Now:</span><span class="pro_pri_curr_vip_m" name="cc_v_USD" style="display:">$799.00</span>-->
<!--                        <span class="pro_pri_curr_vip_m" name="cc_v_EUR" style="display:none;">&euro;679.15</span>-->
<!--                        <span class="pro_pri_curr_vip_m" name="cc_v_GBP" style="display:none;">&pound;623.22</span>-->
<!--                        <span class="pro_pri_curr_vip_m" name="cc_v_AUD" style="display:none;">AU$1,022.72</span>-->
<!--                        <span class="pro_pri_curr_vip_m" name="cc_v_JPY" style="display:none;">&yen;88,689</span>-->
<!--                        <div class="blank10px"></div><span class="pro_b_item" id="id_pro_b_item_oQty_suit_53600"><b>Quantity: </b><input name="oQty_suit_53600" type="text" class="input" id="oQty_suit_53600" size="4" maxlength="6" onkeypress="event.returnValue=IsDigit();" value="1" onkeyup="ProQtySubTotal(this,'1','799.00','txt_single_subtotal_suit_53600');IsOrderNeedQty('Y','oQty_suit_53600');" /><span class="px12"></span>　<b><span id="alert_o_need_oQty_suit_53600" class="alert"></span></b>　</span><span id="txt_single_subtotal_suit_53600" class="txt_subt_m"></span></b>-->
<!--                        <div class="blank5px"></div><a href="javascript:void(0);" onclick="javascript:ShoppingCartAdd('53600','Single','N','oSize_suit_53600','N','oColor_suit_53600','Y','oQty_suit_53600');return false;" title="Add to Cart"><img src="/images/btn/add_to_cart_suit.gif" alt="Add to Cart" border="0" align="absmiddle" /></a>-->
<!--                        <div class="clear"></div></div>-->
<!--                    <div class="clear"></div>-->
<!--                </div>-->
<!--                <div class="blank5px"></div>-->
<!--            </fieldset>-->
<!--        </div>-->

        <a name="Specifications"></a>
        <div class="blank10px" id="pro_ctab_star"></div>
        <div class="pro_ctab">
            <ul>
                <li id="p_ab_mn_1" class="current" onclick="AreaMultiMenuShowHide('p_ab_mn_','p_ab_vw_',5,1,'current',''); GotoScrollTop('1', 'pro_ctab_star', 100, '', '', '');"><span>Product Details</span></li>
                <?php if(!empty($video)):?>
                <li id="p_ab_mn_2" onclick="AreaMultiMenuShowHide('p_ab_mn_','p_ab_vw_',5,2,'current',''); GotoScrollTop('1', 'pro_ctab_star', 100, '', '', '');"><span>Video</span></li>
                <?php endif; ?>
                <?php if(!empty($tech_support)):?>
                <li id="p_ab_mn_3" onclick="AreaMultiMenuShowHide('p_ab_mn_','p_ab_vw_',5,3,'current','');  GotoScrollTop('1', 'pro_ctab_star', 100, '', '', ''); ProTechService(8777,'p_ab_vw_xy_3');"><span>Tech Support</span></li>
                <?php endif; ?>
                <li id="p_ab_mn_4" onclick="AreaMultiMenuShowHide('p_ab_mn_','p_ab_vw_',5,4,'current','');  GotoScrollTop('1', 'pro_ctab_star', 100, '', '', '');"><span>Reviews<b id="num_pro_review_51561" class="red_dark"></b></span></li>
                <li><span><a href="<?= Yii::$service->url->getUrl('catalog/reviewproduct/add',['spu'=>$spu,'_id'=>$_id]); ?>">Write a Comment</a></span></li>
<!--                <li onclick="GotoScrollTop('1', 'na_pro_releated', 100, '', '', '');"><span>Related Products</span></li>-->
                <li id="p_ab_mn_5" onclick="AreaMultiMenuShowHide('p_ab_mn_','p_ab_vw_',5,5,'current',''); GotoScrollTop('1', 'pro_ctab_star', 100, '', '', '');"><span>After-sales Service</span></li>
            </ul><div class="clear"></div>
        </div>
        <div id="p_ab_vw_1" style="display:">
            <div class="blank5px"></div>
            <div class="exh_m_cont">
                <?= $description; ?>
 	        </div>
        </div>
        <div id="p_ab_vw_2" style="display:none">
            <?= $video; ?>
        </div>
        <div id="p_ab_vw_3" style="display:none"><a name="Service"></a><div class="blank60px"></div>
            <div id="p_ab_vw_xy_3">
                <?= $tech_support; ?>
            </div>
        </div>
        <div id="p_ab_vw_4" style="display:none">
            <div id="p_ab_vw_xy_4">
                <?php # review部分。
                $reviewView = [
                    'class' => 'fecshop\app\appfront\modules\Catalog\block\product\Review',
                    'view' => 'catalog/product/index/review.php',
                    'product_id' => $_id,
                    'spu' => $spu,
                ];
                ?>
                <?= Yii::$service->page->widget->render($reviewView, $reviewParam); ?>
            </div></div>
        <div id="p_ab_vw_5" style="display:none">
            <a name="AftersalesService"></a>
            <div class="blank60px"></div>
            <?php # payment部分。
            if(empty($payment)) {
                $paymentView = [
                    'view' => 'catalog/product/index/payment.php',
                ];
                echo Yii::$service->page->widget->render($paymentView);
            }else{
                echo $payment;
            }
            ?>
        </div>

        <div class="blank5px"></div>
        <div class="blank10px" id="na_pro_releated"></div>
        <div id="ProRelated_Pros"></div>

        <div id="WishProFavorites"></div>
        <div id="WishProVisitedList"></div>
        <div class="clear"></div>
    </div>
    <div class="main_bottom"></div>
</div>

<script>
    // add to cart js
    <?php $this->beginBlock('add_to_cart') ?>
    $(document).ready(function () {
        $(".addProductToCart").click(function () {
            i = 1;

            if (i) {
                custom_option = new Object();
                $(".product_custom_options .pg .rg ul").each(function () {
                    $m = $(this).find("li.current a.current");
                    attr = $m.attr("attr");
                    value = $m.attr("value");
                    custom_option[attr] = value;
                });
                custom_option_json = JSON.stringify(custom_option);
                //alert(custom_option_json);
                sku = $(".sku").val();
                qty = $(".qty").val();
                qty = qty ? qty : 1;
                csrfName = $(".product_csrf").attr("name");
                csrfVal = $(".product_csrf").val();

                $(".product_custom_options").val(custom_option_json);
                $(this).addClass("dataUp");
                // ajax 提交数据

                addToCartUrl = "<?= Yii::$service->url->getUrl('checkout/cart/add'); ?>";
                $data = {};
                $data['custom_option'] = custom_option_json;
                $data['product_id'] = "<?= $_id ?>";
                $data['qty'] = qty;
                $data[csrfName] = csrfVal;
                jQuery.ajax({
                    async: true,
                    timeout: 6000,
                    dataType: 'json',
                    type: 'post',
                    data: $data,
                    url: addToCartUrl,
                    success: function (data, textStatus) {
                        if (data.status == 'success') {
                            window.location.href = "<?= Yii::$service->url->getUrl("checkout/cart") ?>";
                        } else {
                            content = data.content;
                            $(".addProductToCart").removeClass("dataUp");
                            alert(content);
                        }

                    },
                    error: function (XMLHttpRequest, textStatus, errorThrown) {
                    }
                });

            }
        });

        // product favorite
        $("#divMyFavorite").click(function () {
            if ($(this).hasClass('act')) {
                $('#txt_r_addToFavorites').empty().html('<span class="px11 red">Added it successfully.</span>');
            } else {
                url = $(this).attr('url');
                $(this).addClass('act');
                window.location.href = url;
            }
        });
        // 改变个数的时候，价格随之变动
        $(".qty").blur(function () {
            // 如果全部选择完成，需要到ajax请求，得到最后的价格
            i = 1;
            $(".product_custom_options .pg .rg ul.required").each(function () {
                val = $(this).find("li.current a.current").attr("value");
                attr = $(this).find("li.current a.current").attr("attr");
                if (!val) {
                    i = 0;
                }
            });
            if (i) {
                getCOUrl = "<?= Yii::$service->url->getUrl('catalog/product/getcoprice'); ?>";
                product_id = "<?=  $_id ?>";
                qty = $(".qty").val();
                custom_option_sku = '';
                for (x in custom_option_arr) {
                    one = custom_option_arr[x];
                    j = 1;
                    $(".product_custom_options .pg .rg ul.required").each(function () {
                        val = $(this).find("li.current a.current").attr("value");
                        attr = $(this).find("li.current a.current").attr("attr");
                        if (one[attr] != val) {
                            j = 0;
                            //break;
                        }
                    });
                    if (j) {
                        custom_option_sku = one['sku'];
                        break;
                    }
                }
                $data = {
                    custom_option_sku: custom_option_sku,
                    qty: qty,
                    product_id: product_id
                };
                jQuery.ajax({
                    async: true,
                    timeout: 6000,
                    dataType: 'json',
                    type: 'get',
                    data: $data,
                    url: getCOUrl,
                    success: function (data, textStatus) {
                        $(".price_info").html(data.price);
                    },
                    error: function (XMLHttpRequest, textStatus, errorThrown) {
                    }
                });
            }
        });
    });
    <?php $this->endBlock(); ?>
    <?php $this->registerJs($this->blocks['add_to_cart'], \yii\web\View::POS_END);//将编写的js代码注册到页面底部 ?>

</script>




