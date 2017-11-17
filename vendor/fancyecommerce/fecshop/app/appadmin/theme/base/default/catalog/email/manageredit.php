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
        <div layouth="56" class="pageFormContent" style="height: 240px; overflow: auto;">
            <fieldset id="fieldset_table_qbe">
                <legend style="color:#cc0000">编辑信息</legend>
                <div>
                    <p class="edit_p">
                        <label>To：</label>
                        <span><input type="text" id="shipping_number" name="editForm[to]" value="" style="width: 300px;" class="required"/></span>
                    </p>
                </div>
            </fieldset>
            <div>
                <label>Subject：</label>
                <span><input type="text" id="subject" name="editForm[subject]" value="" style="width: 300px;" class=""/></span>
            </div>
            <div>
                <label>Body：</label>
                <span><textarea name="body" class="required"></textarea> </span>
            </div>

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

