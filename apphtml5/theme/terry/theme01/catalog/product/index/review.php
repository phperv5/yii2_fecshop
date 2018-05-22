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