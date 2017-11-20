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
    <form method="post" action="<?= $saveUrl ?>" class="pageForm required-validate" onsubmit="return validateCallback(this);">
        <?php echo CRequest::getCsrfInputHtml(); ?>
        <input type="hidden" name="editForm[type]" value="<?= $type ?>">
        <div layouth="56" class="" style="height: 485px; overflow: auto;">

            <fieldset id="fieldset_table_qbe">
                <legend style="color:#cc0000">编辑信息</legend>
                <div>
                    <div class="edit_p" style="padding-bottom: 10px;">
                        <label style="width: 50px;display: inline-block">telphone：</label>
                        <input type="text" value="<?= $to ?>" size="30" name="editForm[telphone]" class="required">
                    </div>
                    <div class="edit_p" style="padding-bottom: 10px;">
                        <label style="width: 50px;display: inline-block">Subject：</label>
                        <input type="text" value="" style="width: 300px;" name="editForm[subject]" class="">
                    </div>
                    <div class="edit_p" style="padding-bottom: 10px;">
                        <label style="width: 50px;display: inline-block">Body：</label>
                        <textarea class="editor" name="editForm[htmlBody]" style="width: 80%;height: 500px"></textarea>
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

