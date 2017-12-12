<?php

?>
<div class="product-Reviews">
	<div id="pic_list_2" class="">
		<div class="clear"></div>
		<div class="box">
			<div class="product-Reviews_top">
				<?php  if(is_array($coll) && !empty($coll)):  ?>
				<ul id="review_description">
					<?php foreach($coll as $one):  ?>
					<li>
						<div class="review_description_left">
                            <span class="point">
                                        <span class="star<?= $one['rate_star'] ?>"></span>
                                    </span>
							<p><?= Yii::$service->page->translate->__('By'); ?> <?= $one['name'] ?></p>
							<span><?= $one['review_date'] ? date('Y-m-d H:i:s',$one['review_date']) : '' ?></span>
						</div>
						<div class="review_description_right">
							<input id="review_url_407" value="" type="hidden">
							<span class="review_description_right_span"><b><?= $one['summary'] ?></b></span>
							<div class="review_description_centen">
								<div class="addsize"></div>
								<div class="review-content">
									<?= $one['review_content'] ?>
								</div>
								<?php if($one['status'] == $noActiveStatus): ?>
								<div class="moderation">
									<?= Yii::$service->page->translate->__('Your comment is awaiting moderation'); ?>...
								</div>
								<?php endif; ?>

							</div>
						</div>
						<div class="clear"></div>
					</li>
					<?php endforeach; ?>
				</ul>
				<?php endif; ?>
			</div>
			<div class="clear"></div>
			<a class="submitbutton" href="<?= Yii::$service->url->getUrl('catalog/reviewproduct/add',['spu'=>$spu,'_id'=>$_id]); ?>" >
				<?= Yii::$service->page->translate->__('Write a Comment'); ?>
			</a>
			<div class="clear"></div>
			<div class="view_all_review">
				<a href="<?= Yii::$service->url->getUrl('catalog/reviewproduct/lists',['spu'=>$spu,'_id'=>$_id]); ?>" >
					<?= Yii::$service->page->translate->__('View  All Review'); ?>(<?= $review_count; ?>)
				</a>
			</div>
		</div>
	</div>
</div>

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
