<?php
$jsOptions = [
    # js config 1
    [
        'options' => [
            'position' => 'POS_END',
        ],
        'js' => [
            'js/common.js',
            'js/jquery.js',
            'js/zepto.min.js',
            'js/js.js',
            'js/dist/js/swiper.min.js',
            'js/sm.min.js',
        ],
    ],
];

# css config
$cssOptions = [
    # css config 1.
    [
        'css' => [
            'css/style.css',
            'css/en.css',
            'js/dist/css/swiper.min.css',
            'css/sm.min.css',
        ],
    ],
];
\Yii::$service->page->asset->jsOptions = $jsOptions;
\Yii::$service->page->asset->cssOptions = $cssOptions;
\Yii::$service->page->asset->register($this);
?>

<?php $this->beginPage() ?>
<!DOCTYPE html>
<html>
<style>
    body {
        background: #f5f4ef;
    }
</style>
<head>
    <?= Yii::$service->page->widget->render('head', $this); ?>
</head>
<body>
<?php $this->beginBody() ?>
<div class="page-group">
    <div class="page main-page page-current">
        <?= Yii::$service->page->widget->render('header', $this); ?>
        <div class="content">
            <?= $content; ?>
            <div class="footer-container">
                <?= Yii::$service->page->widget->render('footer', $this); ?>
            </div>
        </div>
    </div>
    <?= Yii::$service->page->widget->render('menu', $this); ?>
</div>
<?php $this->endBody() ?>
</body>
</html>
<?php $this->endPage() ?>


