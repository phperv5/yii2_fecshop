<?php
# css config
$cssOptions = [
    # css config 1.
    [
        'css' => [
            'css/sidebar.css',
        ],
    ],
];

\Yii::$service->page->asset->cssOptions = $cssOptions;
\Yii::$service->page->asset->register($this);
?>
<ul class="kefu_list clearfix">

    <li class="tel_list" style="list-style: none;"><a id="telList"></a>
        <div class="slide_wrapper">
            <p><span>TEL:086-755-25785490</span></p>
            <p><span class="country"> </span><span> </span></p></div>
    </li>
    <li class="btn_top" style="list-style: none;"><a id="toTop"></a></li>
</ul>

<script>
    $(function () {
        $(".btn_top").hide();
        $(".btn_top").live("click", function () {
            $('html, body').animate({scrollTop: 0}, 300);
            return false;
        })
        $(window).bind('scroll resize', function () {
            if ($(window).scrollTop() <= 300) {
                $(".btn_top").hide();
            } else {
                $(".btn_top").show();
            }
        })
    })

</script>


