<?php
$jsOptions = [
    # js config 1
    [
        'options' => [
            'position' => 'POS_END',
        ],
        'js' => [
            'js/jquery.js',
            'js/zepto.min.js',
            'js/js.js',
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
            'css/sm.min.css',
            'css/cart.css',
            'css/order.css',
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
        </div>
    </div>
    <?= Yii::$service->page->widget->render('menu', $this); ?>
</div>
<?php $this->endBody() ?>
</body>
</html>
<?php $this->endPage() ?>


