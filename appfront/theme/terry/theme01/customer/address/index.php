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
            <div class="align_right px11 verdana" style="margin-top:-10px;"><a href="../">Home</a> - <a href="../members/">My Account: <b class="red">312043814@qq.com</b></a> - Manage Address Book</div><div class="blank5px"></div><h1>Manage Address Book</h1>
            <fieldset>
                <?php   if(is_array($coll) && !empty($coll)):   ?>
                 <legend>Your Shipping Address Book</legend>
                <?php 		foreach($coll as $one): ?>
                <div class="blank5px"></div>
                <div class="fr"><a href="javascript:void(0);" onclick="CheckAddressEdit(293173);return false;"><img src="../images/ico/edit.gif" hspace="3" align="absmiddle" border="0" />Edit</a>&nbsp;&nbsp;&nbsp;&nbsp;<a href="javascript:void(0);" onclick="CheckAddressDelete('293173');return false;"><img src="../images/ico/del.gif" hspace="3" align="absmiddle" border="0" />Delete</a></div>

                <b class="red_dark">Serial #1</b><br />
                <b><?= $one['first_name'] ?>&nbsp;<?= $one['last_name'] ?></b><br />
                 <?= $one['street1'] ?><br />
                 <?= $one['street2'] ?><br />
                 <?= $one['city'] ?>, <?= $one['state'] ?>, <?= $one['country'] ?><br />
                 <?= $one['zip'] ?><br />
                Phone:<?= $one['telephone'] ?><br />
                <div class="blank5px"></div>
                <div class="dashed5px"></div>
                <?php  endforeach; ?>
                    <?php else: ?>
                        <legend>Your Shipping Address Book</legend>
                        Your shipping address is null, please <a href="#addNewAdd">Add Your Shipping Address</a>.
                <?php 	endif; ?>

            </fieldset>

            <form class="addressedit" name="formAddressDelete" method="post" action="<?= Yii::$service->url->getUrl('customer/address/edit'); ?>" id="form-validate">
                <input type="hidden" name="addressID" value="" />
                <input name="abSetAction" type="hidden" value="del" />
                <input name="addFrom" type="hidden" id="addFrom" value="fromDel" />
            </form>

            <form name="formAddressEdit" method="post" action="addressBook_edit.asp">
                <input type="hidden" name="addressID" value="" />
            </form>


            <div class="blank10px"></div><div class="blank10px"></div><div class="blank10px"></div>


            <a name="addNewAdd"><strong class="px14 red_dark"><img src="../../images/arrow/s03.gif" hspace="5" border="0" align="absmiddle" />Enter a New Address</strong></a>
            <div class="dashed5px"></div>
            <form class="addressedit"  action="<?= Yii::$service->url->getUrl('customer/address/edit'); ?>" method="post" id="form-validate">
                <dl>
                    <dt><span class="red_star">*</span>Received Name is:</dt>
                    <dd>
                        <div class="fl w200px"><b class="px11">First Name</b></div><div class="fl w10px"></div>
                        <div class="fl w200px"><b class="px11">Last Name</b></div>
                        <div class="clear"></div>

                        <div class="fl w200px">
                            <input class="input-text required-entry input_normal" maxlength="255" title="First Name" value="<?= $first_name ?>" name="address[first_name]" id="firstname" type="text">
                        </div>

                        <div class="fl w10px"></div>
                        <div class="fl w200px">
                            <input class="input-text required-entry input_normal" maxlength="255" title="Last Name" value="<?= $last_name ?>" name="address[last_name]" id="lastname" type="text">
                        </div>
                    </dd>

                    <dt><span class="red_star">*</span>Address Line1:</dt>
                    <dd>
                        <input class="input-text required-entry input_normal" maxlength="255" title="Last Name" value="<?= $street1 ?>" name="address[street1]" id="lastname" type="text">
                    </dd>

                    <dt>Address Line2:</dt>
                    <dd>
                        <input class="input-text optional input_normal" maxlength="255" title="street2" value="<?= $street2 ?>" name="address[street2]" id="lastname" type="text">
                    </dd>

                    <dt><span class="red_star">*</span>City:</dt>
                    <dd>
                        <input name="addCity" id="addCity" type="text" size="35" maxlength="200" value="" class="input_normal" onfocus="InputCss(this,'focus');" onblur="CheckVerify_addCity(this,'txtID_addCity');"><span id="txtID_addCity" class="red_dark px11"></span></dd>

                    <dt><span class="red_star">*</span>Country / Region:</dt>
                    <dd>
                        <select name="addCountry" id="addCountry" class="input_normal" onchange="CheckVerify_addCountry(this,'txtID_addCountry');">
                            <?= $countrySelect;  ?>
                        </select>
                        <span id="txtID_addCountry" class="red_dark px11"></span>
                    </dd>

                    <dt><span class="red_star" id="is_must_or_not_addProvince" style="display:none">*</span>State/Province/Region:</dt>
                    <dd>
                        <div class="input-box state_html">
                            <?= $stateHtml;  ?>
                        </div>
                    </dd>

                    <dt>
                        <span class="red_star">*</span>ZIP/Postal Code:</dt>
                    <dd>
                        <input class="input-text required-entry input_normal" maxlength="255" title="Last Name" value="<?= $zip ?>" name="address[zip]" id="lastname" type="text">
                    </dd>

                    <dt><span class="red_star">*</span>Phone Number:</dt>
                    <dd>
                        <input class="input-text required-entry input_normal" maxlength="255" title="Last Name" value="<?= $telephone ?>" name="address[telephone]" id="lastname" type="text">
                    </dd>

<!--                    <dt>Fax Number:</dt>-->
<!--                    <dd><input name="addFax" id="addFax" type="text" size="35" maxlength="100" value="" class="input_normal" onfocus="InputCss(this,'focus');" onblur="InputCss(this,'');"></dd>-->

                    <dt>&nbsp;</dt>
                    <dd>
                        <input name="address[is_default]" value="1" title="Save in address book" id="address:is_default" class="address_is_default checkbox" <?= $is_default_str; ?> type="checkbox"> Set it to my Default Address
                    </dd>

                    <div class="blank10px"></div>
                    <dt>&nbsp;</dt>
                    <dd><input name="Submit" type="submit" class="btn_submit submitbutton" value="  Submit &amp; Save  " onclick="submit_address()" ></dd>

                </dl>

            </form>


            <div class="clear"></div>
        </div>
        <div class="exh_bottom"></div>
    </div>
    <div class="main_bottom"></div>
</div>
<script>
    <?php $this->beginBlock('editCustomerAddress') ?>
    $(document).ready(function(){
        $(".address_country").change(function(){
            //alert(111);
            ajaxurl = "<?= Yii::$service->url->getUrl('customer/address/changecountry') ?>";
            country = $(this).val();
            $.ajax({
                async:false,
                timeout: 8000,
                dataType: 'json',
                type:'get',
                data: {
                    'country':country,
                },
                url:ajaxurl,
                success:function(data, textStatus){
                    $(".state_html").html(data.state);
                },
                error:function (XMLHttpRequest, textStatus, errorThrown){

                }
            });

        });

    });
    function submit_address(){
        i = 1;
        jQuery(".addressedit input").each(function(){
            type = jQuery(this).attr("type");
            if(type != "hidden"){
                value = jQuery(this).val();
                if(!value){
                    //alert($(this).hasClass('optional'));
                    if(!$(this).hasClass('optional')){
                        i = 0;
                    }
                }
            }
        });

        jQuery(".addressedit select").each(function(){
            value = jQuery(this).val();
            if(!value){
                i = 0;
            }
        });
        if(i){
            jQuery(".addressedit").submit();
        }else{
            alert("You Must Fill All Field");
        }
    }

    <?php $this->endBlock(); ?>
    <?php $this->registerJs($this->blocks['editCustomerAddress'],\yii\web\View::POS_END);//将编写的js代码注册到页面底部 ?>

</script>








