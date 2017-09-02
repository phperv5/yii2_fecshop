<?php
use fecshop\app\appfront\helper\Format;
?>
<div class="main">
    <?php
    $leftMenu = [
        'class' => 'fecshop\app\appfront\modules\Customer\block\LeftMenu',
        'view'	=> 'customer/leftmenu.php'
    ];
    ?>
    <?= Yii::$service->page->widget->render($leftMenu,$this); ?>
    <div class="main_scene">
        <div class="exh_top"></div>
        <div class="exh_main">
            <div class="align_right px11 verdana" style="margin-top:-10px;"><a href="../">Home</a> - <a href="../members/">My Account: <b class="red">312043814@qq.com</b></a> - My Order Form: S/N.<b class="red">U2170826416375</b></div><div class="blank5px"></div>
            <h1>My Order Form: S/N.<b class="red"><?=  $increment_id ?></b></h1>
            <div class="blank10px"></div>
            <div class="p_sub_a">Order Status</div>
            <table class="tab_comm">
                <tr class="tr_head">
                    <td width="180"><b>Status</b></td>
                    <td width="150"><b>Added Time</b></td>
                    <td><b>Comments</b></td>
                </tr>

                <tr class="tr_info">
                    <td><font color=#333><?= Yii::$service->page->translate->__($order_status);?></font></td>
                    <td class="px11 gray"><?=  date('Y-m-d H:i:s',$created_at); ?></td>
                    <td></td>
                </tr>

            </table>
            <div class="blank15px"></div>
            <div class="p_sub_a">Order Information</div>
            <div class="p_con_a">
                <form name="formGotoCheckout" id="formGotoCheckout" method="post" action="../app/order_checkout.asp">
                    <input type="hidden" name="OrderID" id="OrderID" value="416375" />
                    <input type="submit" style="display:none" />
                </form>
                <div class="fr"><br /><input type="button" class="btn_submit btn_big" value="Pay for this Order" onclick="javascript:document.getElementById('formGotoCheckout').submit();" /></div>
                <span class="px11">Order Serial Number: </span><b class="blue_dark">U2170826416375</b><br />
                <span class="px11">Order Date: </span><span class="px11 verdana">Saturday,&nbsp;Aug 26, 2017</span><br />
                <span class="px11">Order Total Sum: </span><b class="red px14">$109.00</b>
            </div>

            <table class="tab_comm">
                <tr class="tr_head">
                    <td width="110">&nbsp;</td>
                    <td>Product Name</td>
                    <td width="100">Unit Price</td>
                    <td width="100">Qty.</td>
                    <td width="100">Subtotal</td>
                </tr>
                <tr class="tr_info">
                    <td><div class="img90px"><a href="/wholesale/latest-mb-sd-c4-c5-software-hdd.html" title="Newest 500GB V2017.07 MB SD C4/C5 Software HDD For DELL D630 Support WIN7&amp;WIN10 System" target="_blank"><img src="/upload/pro/500gb-mb-sd-connect-compact-c4-software-hdd-180.jpg" width="90" height="90" border="0" hspace="0" vspace="0" alt="Newest 500GB V2017.07 MB SD C4/C5 Software HDD For DELL D630 Support WIN7&amp;WIN10 System" align="absmiddle" /></a></div></td>
                    <td class="align_left gray">
                        <a href="/wholesale/latest-mb-sd-c4-c5-software-hdd.html" target="_blank"><span class="px13">Newest 500GB V2017.07 MB SD C4/C5 Software HDD For DELL D630 Support WIN7&amp;WIN10 System</span></a>
                        <div class="blank10px"></div>
                        <span class="gray px12">Item No. SS195-D7</span>
                    </td>
                    <td>$109.00</td>
                    <td>1</td>
                    <td><b>$109.00</b></td>
                </tr>

                <tr class="tr_info">
                    <td colspan="5" class="align_right verdana px13 line18em">
                        Items Total: <span class="red_dark">$109.00</span>
                        <br /><span class="green">Free Shipping</span>
                        <div class="blank10px"></div>
                        <b class="red px16" style="border-top:1px solid #CCCCCC; padding-top:5px; padding-left:20px;">
                            Total Sum: $109.00
                        </b>
                        <div class="blank5px"></div>
                    </td>
                </tr>
            </table>
            <div class="p_con_a">
                <b class="green_dark">Your Shipping Address:</b><br />
                Receiver: zhuang jian<br />
                rwrewrewrewrew<br />
                ewrewr, werwe, Germany<br />
                Post Code: 233223<br />
                Phone: 23232323<br />
                <div class="blank10px"></div>
            </div>
            <div class="blank15px"></div>
            <div class="p_sub_a">Order Comments</div>
            <div class="p_con_a">
                <div class="blank10px"></div>
                <div class="p_sub_a"><span class="red_dark"><img src="../images/ico/edit.gif" border="0" align="absmiddle" hspace="5" />Post a New Comment</span></div>
                <div class="p_con_a">
                    <form action="order_comment_app.asp" method="post" name="formAddOrderComment" onsubmit="return OrderCommentAddSim();">
                        <textarea name="CommentMessage" cols="120" rows="6" id="CommentMessage" class="input"></textarea><span class="alert" id="txtOrderCommentMessage"></span>
                        <div class="blank5px"></div>
                        <input type="submit" name="Submit5" value="Submit" class="btn_submit">

                        <input name="OrderID" type="hidden" value="416375">
                        <input type="hidden" name="UserID" value="351041">
                    </form>
                </div>
                <div class="clear"></div>
            </div>
            <div class="clear"></div>
        </div>
        <div class="exh_bottom"></div>
    </div>
    <div class="main_bottom"></div>
</div>






