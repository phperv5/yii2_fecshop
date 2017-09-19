<div class="main container one-column">
    <?= Yii::$service->page->widget->render('flashmessage'); ?>
    <div class="page_where_l"><a href="/">Home</a> - Membership Registration</div><div class="page_where_r"><a href="javascript:history.go(-1);" rel="nofollow">&laquo; Go Back</a></div>
    <div class="blank8px"></div>
    <div class="mn_full">
        <h1>Membership Registration</h1>

        <div class="blank10px"></div>
        <span class="px11 gray"><span class="red_star px10">*</span> means required fields </span>
        <div class="float_right px13">New Customer? <a href="<?= Yii::$service->url->getUrl("customer/account/login");  ?>" class="btn_blue"><span class="white">Sign In</span></a></div>
        <div class="blank10px"></div>

        <form action="<?= Yii::$service->url->getUrl('customer/account/register'); ?>" method="post" id="form-validate">
            <?= \fec\helpers\CRequest::getCsrfInputHtml();  ?>
            <div id="u_reg_email" class="rowfull">
                <div class="rowf_per25tr"><span class="red_star">*</span><b>E-mail Address:</b></div>
                <div class="rowf_per70">
                    <input name="editForm[email]" id="email_address" value="<?= $email ?>" title="Email Address" class="input-text validate-email required-entry" type="text">
                </div>
                <div class="clear"></div>
            </div>

            <div id="u_reg_password" class="rowfull">
                <div class="rowf_per25tr"><span class="red_star">*</span><b>Password:</b></div>
                <div class="rowf_per70">
                    <input name="editForm[password]" id="password" title="Password" class="input-text required-entry validate-password" type="password">
                    <br /><span class="remark">4 to 20 characters (A-Z, a-z, 0-9, no space).<span class="red">Case sensitive.</span></span>
                </div>
                <div class="clear"></div>
            </div>

            <div id="u_reg_password_confirm" class="rowfull">
                <div class="rowf_per25tr"><span class="red_star">*</span><b>Confirm Password:</b></div>
                <div class="rowf_per70">
                    <input type="password" name="pwd2" id="pwd2" maxlength="20" size="25" onblur="CheckVerifyUserPwd('pwd', 'pwd2', 'u_reg_password_confirm', 'alert_reg_pwd_2', 0);">
                    <span id="alert_reg_pwd_2" class="alert_remark"></span>
                </div>
                <div class="clear"></div>
            </div>


            <div id="u_reg_myname" class="rowfull">
                <div class="rowf_per25tr"><span class="red_star">*</span><b> My Name is</b>:</div>
                <div class="rowf_per70">
<!--                    <select name="uGender" id="uGender"><option value="" style="color:#999;">select</option><option value="Mr.">Mr.</option><option value="Ms.">Ms.</option></select>-->
                    <input id="firstname" name="editForm[firstname]" value="<?= $firstname ?>" title="First Name" maxlength="255" class="input-text required-entry" type="text">
                    <input id="lastname" name="editForm[lastname]" value="<?= $lastname ?>" title="Last Name" maxlength="255" class="input-text required-entry" type="text">&nbsp;&nbsp;
                    <span id="alert_reg_myname" class="alert_remark"></span>
                </div>
                <div class="clear"></div>
            </div>

            <div id="u_reg_country" class="rowfull">
                <div class="rowf_per25tr"><span class="red_star">*</span><b>Country / Region:</b></div>
                <div class="rowf_per70">
                    <select name="editForm[country]" id="uCountry" size="10">
                        <option value="">---- All Countries &amp; Territories (A to Z) ----</option>
                        <?php foreach($country as $code=>$c){ ?>
                        <option value="<?= $code;?>"><?= $c;?></option>
                        <?php  }?>
                    </select>
                </div>
                <div class="clear"></div>
            </div>


<!--            <div id="u_reg_usertype" class="rowfull">-->
<!--                <div class="rowf_per25tr"><b>Best describes you:</b></div>-->
<!--                <div class="rowf_per70">-->
<!--                    <select name="usertype" id="usertype"><option value="0">please select</option><option value="1">Wholesale</option><option value="2">Common</option><option value="3">Drop-ship wholesale</option></select>-->
<!--                </div>-->
<!--                <div class="clear"></div>-->
<!--            </div>-->
            <div id="u_reg_verification_code" class="rowfull">
                <div class="rowf_per25tr"><span class="red_star">*</span><b>Verification Code:</b></div>
                <div class="rowf_per70">
                    <input name="numVerify" id="numVerify" type="text" maxlength="4" size="10" onkeypress="event.returnValue=IsDigit();" onblur="CheckVerificationCode('numVerify', 'numVerifyConfirm', 'u_reg_verification_code', 'rowfull', 0);"> &nbsp; <span class="span_num_verify">2120</span><input name="numVerifyConfirm" id="numVerifyConfirm" type="hidden" value="2120" />
                    <span id="alert_verification_code" class="alert_remark"></span>
                </div>
                <div class="clear"></div>
            </div>

            <div class="rowfull">
                <div class="rowf_per25tr">&nbsp;</div>
                <div class="rowf_per70">
                    <input name="Submit" type="submit"  value="Submit &amp; Continue" id="js_registBtn" class="redBtn btn_submit btn_big">
                    <div class="blank10px"></div>
                    <span class="gray_dark">Click "Submit &amp; Continue" button, which means you have read and agree to <a href="http://www.uobdii.com/info/Privacy-Policy" target="_blank"><b>Privacy Policy of UOBDII.com</b></a>.</span>
                </div>
                <div class="clear"></div>
            </div>
        </form>
        <div class="clear"></div>
    </div>
    <div class="clear"></div>
</div>
<?php
$requiredValidate 			= Yii::$service->page->translate->__('This is a required field.');
$emailFormatValidate 		= Yii::$service->page->translate->__('Please enter a valid email address. For example johndoe@domain.com.');
$firstNameLenghtValidate 	= Yii::$service->page->translate->__('first name length must between');
$lastNameLenghtValidate 	= Yii::$service->page->translate->__('last name length must between');
$passwordLenghtValidate 	= Yii::$service->page->translate->__('Please enter 6 or more characters. Leading or trailing spaces will be ignored.');
$passwordMatchValidate 		= Yii::$service->page->translate->__('Please make sure your passwords match. ');
//$minNameLength = 2;
//$maxNameLength = 20;
//$minPassLength = 6;
//$maxPassLength = 30;

?>
<script>
    <?php $this->beginBlock('customer_account_register') ?>
    $(document).ready(function(){

        $("#js_registBtn").click(function(){
            validate = 1;
            $(".validation-advice").remove();
            $(".validation-failed").removeClass("validation-failed");

            var myreg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
            // empty check
            $(".account-register .required-entry").each(function(){
                val = $(this).val();
                if(!val){
                    $(this).addClass("validation-failed");
                    $(this).parent().append('<div class="validation-advice" id="advice-required-entry-firstname" style=""><?= $requiredValidate; ?></div>');
                    validate = 0;
                }
            });

            // email check
            $(".account-register .validate-email").each(function(){
                email = $(this).val();
                if(email){
                    if(!$(this).hasClass("validation-failed")){
                        if(!myreg.test(email)){
                            $(this).parent().append('<div class="validation-advice" id="advice-validate-email-email_address" style=""><?= $emailFormatValidate; ?></div>');
                            $(this).addClass("validation-failed");
                            validate = 0;
                        }
                    }
                }else{
                    validate = 0;
                }
            });

            //first name lenght check;
            firstname 	= $("#firstname").val();
            lastname 	= $("#lastname").val();
            password  	= $("#password").val();
            confirmation= $("#confirmation").val();
            minNameLength = <?= $minNameLength ? $minNameLength : 4 ?>;
            maxNameLength = <?= $maxNameLength ? $maxNameLength : 30 ?>;
            minPassLength = <?= $minPassLength ? $minPassLength : 4 ?>;
            maxPassLength = <?= $maxPassLength ? $maxPassLength : 30 ?>;
            firstNameLength = firstname.length;
            lastNameLength  = lastname.length;
            passwordLength  = password.length;
            //firstname length validate
            if(firstNameLength < minNameLength || firstNameLength > maxNameLength){
                if(!$("#firstname").hasClass("validation-failed")){
                    //alert(111);
                    $("#firstname").parent().append('<div class="validation-advice" id="min_lenght" style=""><?= $firstNameLenghtValidate; ?> '+minNameLength+' , '+maxNameLength+'</div>');
                    $("#firstname").addClass("validation-failed");
                    validate = 0;
                }
            }
            //lastname length validate
            if(lastNameLength < minNameLength || lastNameLength > maxNameLength){
                if(!$("#lastname").hasClass("validation-failed")){
                    //alert(111);
                    $("#lastname").parent().append('<div class="validation-advice" id="min_lenght" style=""><?= $lastNameLenghtValidate; ?> '+minNameLength+' , '+maxNameLength+'</div>');
                    $("#lastname").addClass("validation-failed");
                    validate = 0;
                }
            }
            //password length validate
            if(passwordLength < minPassLength || passwordLength > maxPassLength){
                if(!$("#password").hasClass("validation-failed")){
                    //alert(111);
                    $("#password").parent().append('<div class="validation-advice" id="min_lenght" style=""><?= $passwordLenghtValidate; ?> </div>');
                    $("#password").addClass("validation-failed");
                    validate = 0;
                }
            }
            //password validate
            if(confirmation != password){
                if(!$("#confirmation").hasClass("validation-failed")){
                    //alert(111);
                    $("#confirmation").parent().append('<div class="validation-advice" id="min_lenght" style=""><?= $passwordMatchValidate; ?></div>');
                    $("#confirmation").addClass("validation-failed");
                    validate = 0;
                }
            }


            if(validate){
                //	alert("validate success");
                $(this).addClass("dataUp");
                $("#form-validate").submit();
            }
        });
    });
    <?php $this->endBlock(); ?>
</script>
<?php $this->registerJs($this->blocks['customer_account_register'],\yii\web\View::POS_END);//将编写的js代码注册到页面底部 ?>





