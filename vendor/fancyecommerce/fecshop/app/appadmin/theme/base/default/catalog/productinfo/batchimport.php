<?php
/**
 * FecShop file.
 *
 * @link http://www.fecshop.com/
 * @copyright Copyright (c) 2016 FecShop Software LLC
 * @license http://www.fecshop.com/license/
 */
use yii\helpers\Html;
use fec\helpers\CRequest;
use fec\helpers\CUrl;
use fecadmin\models\AdminRole;
/**
 * @author Terry Zhao <2358269014@qq.com>
 * @since 1.0
 */
?>
<style>
.checker{float:left;}
.dialog .pageContent {background:none;}
.dialog .pageContent .pageFormContent{background:none;}
</style>

<div class="pageContent"> 
	<form  method="post" action="<?= $saveUrl ?>" enctype="multipart/form-data" class="pageForm required-validate">
		<?php echo CRequest::getCsrfInputHtml();  ?>	
		<div layouth="56" class="pageFormContent" style="height: 240px; overflow: auto;">
				<fieldset id="fieldset_table_qbe">
					<legend style="color:#cc0000">编辑信息</legend>
					<div>
						<?= $editBar; ?>
                        <div id="addpicContainer">

                            <input type="file" name="file" multiple="multiple" id="inputfile"/>

                        </div>
					</div>
				</fieldset>

				<?= $lang_attr ?>

				<?= $textareas ?>

		</div>
	
		<div class="formBar">
			<ul>
				<!--<li><a class="buttonActive" href="javascript:;"><span>保存</span></a></li>-->
				<li><div class="buttonActive"><div class="buttonContent"><button onclick="func('accept')"  value="accept" name="accept" type="submit">保存</button></div></div></li>
			
				<li>
					<div class="button"><div class="buttonContent"><button type="button" class="close">取消</button></div></div>
				</li>
			</ul>
		</div>
	</form>
</div>


