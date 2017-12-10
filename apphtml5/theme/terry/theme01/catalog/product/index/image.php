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
            <li class="swiper-slide swiper-slide-active" style="width: 400px;">
                <img src="<?= Yii::$service->product->image->getResize($image,$middle_img_width,false) ?>" alt="Brazilian Human Hair Closure 4*4 water wave peruvian hair deep wave body wave straight bleached knots free part swiss lace closure G-EASY">
            </li>
        <?php
    endforeach;
    ?>
        </ul>
        <div class="swiper-pagination swiper-pagination-white j-thumbnail-pagination swiper-pagination-clickable"></div>
    </div>
</section>
<?php endif; ?>