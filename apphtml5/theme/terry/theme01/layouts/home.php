<?php
$jsOptions = [
    # js config 1
    [
        'options' => [
            'position' => 'POS_END',
            //	'condition'=> 'lt IE 9',
        ],
        'js' => [
            'js/common.js',
            'js/jquery.js',
            'js/js.js',
            'js/dist/js/swiper.min.js',
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
            'css/sm-extend.min.css',
            'css/fec.css',
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
    <div class="page">
        <?= Yii::$service->page->widget->render('header', $this); ?>
        <div class="content">
            <?= $content; ?>
        </div>
    </div>
    <?= Yii::$service->page->widget->render('menu', $this); ?>
</div>
<?php $this->endBody() ?>
</body>
</html>
<?php $this->endPage() ?>


