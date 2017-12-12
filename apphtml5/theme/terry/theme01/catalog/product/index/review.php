<?php  if(is_array($coll) && !empty($coll)):  ?>
<div class="split-line"></div>
<section class="datail-reviews j-detail-reviews">
    <h2 class="reviews-name">Rating &amp; Reviews</h2>
    <div class="reviews-star">
        <a href="<?= Yii::$service->url->getUrl('catalog/reviewproduct/lists',['spu'=>$spu,'_id'=>$_id]); ?>" rel="nofollow">
            <span class="reviews-branch"><?= $one['rate_star'] ?></span>
            <div class="reviews-icon">
                <span class="reviews-icon-bottom"></span><span class="reviews-icon-top" style="width:100%;"></span>
            </div>
            <span class="reviews-text"><?= $review_count; ?> Reviews</span>
            <span class="public-arrow"></span>
        </a>
    </div>
    <div class="reviews-comment">
        <div class="reviews-title">Most Relevant Reviews</div>
        <?php foreach($coll as $one):  ?>
        <div class="reviews-box">
            <div class="reviews-info">
                <div class="reviews-icon">
                    <span class="reviews-icon-bottom"></span><span class="reviews-icon-top" style="width:<?= $one['rate_star']/5*100 ?>%;"></span>
                </div>
                <span class="reviews-namemid">by <?= $one['name'] ?></span>
                <span class="reviews-country dh-us"></span>
            </div>
            <div class="reviews-content"><?= $one['review_content'] ?></div>

        </div>
        <?php endforeach; ?>
    </div>
    <div class="com-ripple-href"><a href="<?= Yii::$service->url->getUrl('catalog/reviewproduct/lists',['spu'=>$spu,'_id'=>$_id]); ?>" class="allreviews" rel="nofollow">View all reviews (<?= $review_count; ?>)</a></div>
</section>
<?php endif; ?>
