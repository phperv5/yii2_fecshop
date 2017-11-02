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
	<form  method="post" action="<?= $saveUrl ?>" class="pageForm required-validate" onsubmit="return validateCallback(this, dialogAjaxDoneCloseAndReflush);">
		<?php echo CRequest::getCsrfInputHtml();  ?>	
		<div layouth="56" class="pageFormContent" style="height: 240px; overflow: auto;">
				<fieldset id="fieldset_table_qbe">
					<legend style="color:#cc0000">编辑信息</legend>
					<div>
						<?= $editBar; ?>
                        <div id="addpicContainer">
                            <!-- 利用multiple="multiple"属性实现添加多图功能 -->
                            <!-- position: absolute;left: 10px;top: 5px;只针对本用例将input隐至图片底下。-->
                            <!-- height:0;width:0;z-index: -1;是为了隐藏input，因为Chrome下不能使用display:none，否则无法添加文件 -->
                            <!-- onclick="getElementById('inputfile').click()" 点击图片时则点击添加文件按钮 -->
                            <button style="" onclick="getElementById('inputfile').click()" class="scalable" type="button" title="Duplicate" id=""><span><span><span>Browse Files</span></span></span></button>

                            <input type="file" multiple="multiple" id="inputfile" style="height:0;width:0;z-index: -1; position: absolute;left: 10px;top: 5px;"/>
                            <span class="loading"></span>
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

