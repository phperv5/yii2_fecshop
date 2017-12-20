
<div class="page">
    <div class="pageCon clearfix">
        <?php  if($prevPage){  ?>
         <span class="pagePre js-page-prev">
            <a href="<?= $prevPage['url']['url'] ?>" class=""><var></var>Previous</a>
        </span>
        <?php }else{ ?>
            <span class="pagePre js-page-prev">
            <a href="javascropt:void(0)" class="pageDisable"><var></var>Previous</a>
        </span>
        <?php }  ?>
        <?php if($nextPage){  ?>
        <span class="com-ripple-href pageNext js-page-next">
            <a href="<?= $nextPage['url']['url'] ?>" rel="nofollow">Next<var></var></a>
        </span>
        <?php }else{ ?>
            <span class="com-ripple-href pageNext js-page-next">
            <a href="javascropt:void(0)" class="pageDisable"><var></var>Previous</a>
        </span>
        <?php }  ?>
    </div>
</div>

