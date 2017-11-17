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
    .checker {
        float: left;
    }

    .dialog .pageContent {
        background: none;
    }

    .dialog .pageContent .pageFormContent {
        background: none;
    }
</style>

<div class="pageContent">
    <form method="post" action="<?= $saveUrl ?>" class="pageForm required-validate"
          onsubmit="return validateCallback(this, dialogAjaxDoneCloseAndReflush);">
        <?php echo CRequest::getCsrfInputHtml(); ?>
        <div layouth="56" class="pageFormContent" style="height: 485px; overflow: auto;">

            <fieldset id="fieldset_table_qbe">
                <legend style="color:#cc0000">编辑信息</legend>
                <div>

                    <p class="edit_p">
                        <label>To：</label>
                        <input type="text" value="32323" size="30" name="editFormData[to]" class="textInput">
                    </p>
                    <p class="edit_p">
                        <label>Subject：</label>
                        <input type="text" value="2323" size="30" name="editFormData[subject]" class="textInput">
                    </p>
                    <div class="edit_p">
                        <label>Body：</label>
                        <textarea class="editor" name="body" style="width: 80%;height: 500px"></textarea>
                    </div>
                </div>
            </fieldset>

        </div>
        <div class="formBar">
            <ul>
                <!--<li><a class="buttonActive" href="javascript:;"><span>保存</span></a></li>-->
                <li>
                    <div class="buttonActive">
                        <div class="buttonContent">
                            <button onclick="func('accept')" value="accept" name="accept" type="submit">保存</button>
                        </div>
                    </div>
                </li>

                <li>
                    <div class="button">
                        <div class="buttonContent">
                            <button type="button" class="close">取消</button>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </form>
</div>	

