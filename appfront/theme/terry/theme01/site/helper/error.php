﻿<?php
/**
 * FecShop file.
 *
 * @link http://www.fecshop.com/
 * @copyright Copyright (c) 2016 FecShop Software LLC
 * @license http://www.fecshop.com/license/
 */
?>
<?php

/* @var $this yii\web\View */
/* @var $name string */
/* @var $message string */
/* @var $exception Exception */

use yii\helpers\Html;

$this->title = $name;
?>
<style>
    .image404{width:400px;}

    .content-404 h1 {
        color: #363432;
        font-family: "Roboto",sans-serif;
        font-size: 41px;
        font-weight: 300;
    }

    .content-404 p {
        color: #363432;
        font-family: "Roboto",sans-serif;
        font-size: 18px;
    }
    .text-center {
        text-align: center;
    }
</style>
<div class="main container one-column">
	<div class="col-main">
		<div class="content-404 text-center" style="">
			<img class="image404" src="<?=  Yii::$service->image->getImgUrl('images/404.png','appfront') ?>" class="img-responsive" alt=""  />
			<h1><b><?= Yii::$service->page->translate->__('OPPS!'); ?></b> <?= Yii::$service->page->translate->__('We Couldn’t Find this Page'); ?></h1>
			<p><?= Yii::$service->page->translate->__('Please contact us if you think this is a server error, Thank you.'); ?></p>
			<h2><a href="<?= Yii::$service->url->homeUrl(); ?>"><?= Yii::$service->page->translate->__('Bring me back Home'); ?></a></h2>
		</div>
	</div>	
</div>
