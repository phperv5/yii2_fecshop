<?php
/**
 * FecShop file.
 *
 * @link http://www.fecshop.com/
 * @copyright Copyright (c) 2016 FecShop Software LLC
 * @license http://www.fecshop.com/license/
 */
?>
<?php
$jsOptions = [
    # js config 1
    [
        'options' => [
            'position' => 'POS_END',
            //	'condition'=> 'lt IE 9',
        ],
        'js' => [
            'js/jquery.js',
        ],
    ],
];

# css config
$cssOptions = [
    # css config 1.
    [
        'css' => [
            'css/style.css',
            'css/cart.css',
            'css/login.css',
            'css/login-form-min.css',
            'css/login-form-min.css',
            'css/address.css',
            'css/editaddress.css',
        ],
    ],

];
\Yii::$service->page->asset->jsOptions = $jsOptions;
\Yii::$service->page->asset->cssOptions = $cssOptions;
\Yii::$service->page->asset->register($this);
?>
<?php $this->beginPage() ?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="<?= $currentLangCode = Yii::$service->store->currentLangCode; ?>"
      lang="<?= $currentLangCode ?>">
<head>
    <?= Yii::$service->page->widget->render('head', $this); ?>
</head>
<body>
<?php $this->beginBody() ?>
<?= Yii::$service->page->widget->render('header', $this); ?>
<?= Yii::$service->page->widget->render('menu', $this); ?>
<div class="main-container">
    <?= $content; ?>
</div>
<div class="footer-container">
    <?= Yii::$service->page->widget->render('footer', $this); ?>
</div>
<?= Yii::$service->page->widget->render('scroll', $this); ?>
<?php $this->endBody() ?>
</body>
</html>
<?php $this->endPage() ?>
