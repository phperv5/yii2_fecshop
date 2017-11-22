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
        ],
        'js' => [
            'js/jquery-3.0.0.min.js',
        ],
    ],
];

# css config
$cssOptions = [
    # css config 1.
    [
        'css' => [
            'css/sidebar.css',
        ],
    ],
];
\Yii::$service->page->asset->jsOptions = $jsOptions;
\Yii::$service->page->asset->cssOptions = $cssOptions;
\Yii::$service->page->asset->register($this);
?>


<div class="main-container">
    <?= $content; ?>
</div>


