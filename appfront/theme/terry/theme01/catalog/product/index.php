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
                    <dd class="w420px"><?php if($package) echo $package;else echo 'none';?></span>
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
                <?php # tier price 部分。
                $buyAlsoBuyView = [
                    'view' => 'catalog/product/index/buy_also_buy.php'
                ];
                $buyAlsoBuyParam = [
                    'products' => $buy_also_buy,
                ];

                ?>
                <?= Yii::$service->page->widget->render($buyAlsoBuyView, $buyAlsoBuyParam); ?>
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




