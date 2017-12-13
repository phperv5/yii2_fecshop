<?php
$media_size = $parentThis['media_size'];
$image = $parentThis['image'];
$productImgMagnifier = $parentThis['productImgMagnifier'];
$small_img_width = $media_size['small_img_width'];
$small_img_height = $media_size['small_img_height'];
$middle_img_width = $media_size['middle_img_width'];
?>

<?php
if(isset($image['gallery']) && is_array($image['gallery']) && !empty($image['gallery'])):
    $gallerys = $image['gallery'];
    $gallerys = \fec\helpers\CFunc::array_sort($gallerys,'sort_order',$dir='asc');
    if(is_array($image['main']) && !empty($image['main'])):
        $main_arr[] = $image['main'];
        $gallerys = array_merge($main_arr,$gallerys);
    endif;
elseif(is_array($image['main']) && !empty($image['main'])):
    $main_arr[] = $image['main'];
    $gallerys = $main_arr;
endif;

if(is_array($gallerys) && !empty($gallerys)):
?>

<section class="datail-sliderWarp">
    <div class="swiper-container datail-slider j-detail-silder detail-slider-warp swiper-container-horizontal swiper-container-android">
        <ul class="swiper-wrapper detail-slider-content detail-slider-small" id="J_swiperWrap">
    <?php
    foreach($gallerys as $gallery):
        $image		= $gallery['image'];
        $sort_order = $gallery['sort_order'];
        $label 		= $gallery['label'];
        ?>
            <li class="swiper-slide" style="width: 400px;">
                <img src="<?= Yii::$service->product->image->getResize($image,$middle_img_width,false) ?>" alt="Brazilian Human Hair Closure 4*4 water wave peruvian hair deep wave body wave straight bleached knots free part swiss lace closure G-EASY">
            </li>
        <?php
    endforeach;
    ?>
        </ul>
        <div class="swiper-pagination"></div>
    </div>
</section>
<?php endif; ?>
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
