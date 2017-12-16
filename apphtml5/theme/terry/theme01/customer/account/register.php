<div class="ms-panel-bodyer account-register" data-role="panel-body"><div id="wap-register" class="join">
        <form id="register-form" method="post" action="<?= Yii::$service->url->getUrl('customer/account/register'); ?>">
        <div class="form-group">
                <lable class="label fm-md fm-email-md"></lable>
                <div class="input-wrap input-box">
                    <div class="ms-man-loading"></div>
                    <input id="email_address" type="text" class="form-control validate-email required-entry" placeholder="Email" name="editForm[email]" value="<?= $email; ?>" >
                    <div class="underline">
                        <div class="unfocused-line"></div>
                        <div class="focused-line"></div>
                    </div>
                </div>
            </div><div class="form-group">
                <lable class="label fm-md fm-user-md"></lable>
                <div class="input-wrap input-box">
                    <!--anita-if-->
                    <input id="firstname" type="text" class="form-control required-entry" placeholder="First Name" name="editForm[firstname]" value="<?= $firstname ?>" >
                    <div class="underline">
                        <div class="unfocused-line"></div>
                        <div class="focused-line"></div>
                    </div>
                </div>

            </div><div class="form-group">
                <lable class="label fm-md fm-user-md"></lable>
                <div class="input-wrap input-box">
                    <!--anita-if-->
                    <input id="lastname" type="text" class="form-control required-entry" placeholder="Last Name" name="editForm[lastname]" value="<?= $lastname; ?>">
                    <div class="underline">
                        <div class="unfocused-line"></div>
                        <div class="focused-line"></div>
                    </div>
                </div>
            </div><div class="form-group">
                <lable class="label fm-md fm-password-md"></lable>
                <div class="input-wrap input-box">
                    <!--anita-if-->
                    <input id="password" type="password" class="form-control" placeholder="Password required-entry validate-password" name="editForm[password]" data-verify-type="password">
                    <div class="underline">
                        <div class="unfocused-line"></div>
                        <div class="focused-line"></div>
                    </div>
                </div>
            </div><div class="form-group">
                <lable class="label fm-md fm-password-md"></lable>
                <div class="input-wrap input-box">
                    <!--anita-if-->
                    <input id="confirmation" type="password" class="form-control required-entry validate-cpassword" placeholder="Reenter Password" name="editForm[confirmation]" data-verify-type="repassword">
                    <div class="underline">
                        <div class="unfocused-line"></div>
                        <div class="focused-line"></div>
                    </div>
                </div>
            </div><div class="form-group verify-error">
                <lable class="label fm-md fm-security-md"></lable>
                <!--anita-if-->
                <div class="input-wrap input-box clearfix">
                    <div class="code-wrap">
                        <input id="buyer_join_imagePassword" type="text" class="check-code" placeholder="" name="editForm[captcha]" data-verify-type="checkCode">
                        <div class="underline">
                            <div class="unfocused-line"></div>
                            <div class="focused-line"></div>
                        </div>
                    </div>
                    <div class="imgcode-wp">
                        <img class="login-captcha-img"  title="click refresh" src="<?= Yii::$service->url->getUrl('site/helper/captcha'); ?>" align="absbottom" onclick="this.src='<?= Yii::$service->url->getUrl('site/helper/captcha'); ?>?'+Math.random();"></img>
                    </div>
                </div>
            </div>
            <!--ai-repeat-end-->
            <span class="agreement-box validation-advice">
                <?= Yii::$service->page->widget->render('flashmessage'); ?>
            </span>
            <div class="fm-submit-wrap">
                <span type="button" class="fm-submit" id="js_registBtn"><span></span>Agree &amp; Create My Account</span>
            </div>
        </form>
        <section class="sns-login-wrap">
            <ul class="sns-btns radius">
                <li class="facebook"><span class="logo"></span><a data-partner="facebook" href="//thirdparty.aliexpress.com/login.htm?type=fb&amp;from=msite" target="_blank">Sign In With Facebook</a></li>
            </ul>
        </section>
        <p class="fm-bottom">Already have an account?<a class="link">Sign In</a></p>
    </div>
</div>
<?php
$requiredValidate = Yii::$service->page->translate->__('This is a required field.');
$emailFormatValidate = Yii::$service->page->translate->__('Please enter a valid email address. For example johndoe@domain.com.');
$firstNameLenghtValidate = Yii::$service->page->translate->__('first name length must between');
$lastNameLenghtValidate = Yii::$service->page->translate->__('last name length must between');
$passwordLenghtValidate = Yii::$service->page->translate->__('Please enter 6 or more characters. Leading or trailing spaces will be ignored.');
$passwordMatchValidate = Yii::$service->page->translate->__('Please make sure your passwords match. ');
//$minNameLength = 2;
//$maxNameLength = 20;
//$minPassLength = 6;
//$maxPassLength = 30;

?>
<script>
    <?php $this->beginBlock('customer_account_register') ?>
    $(document).ready(function () {

        $("#js_registBtn").click(function () {
            validate = 1;
            $(".validation-advice").remove();
            $(".validation-failed").removeClass("validation-failed");

            var myreg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
            // empty check
            $(".account-register .required-entry").each(function () {
                val = $(this).val();
                if (!val) {
                    $(this).parents('.input-box').addClass("validation-failed");
                    $(this).parents('.input-box').append('<div class="validation-advice" id="advice-required-entry-firstname" style=""><?= $requiredValidate; ?></div>');
                    validate = 0;
                }
            });

            // email check
            $(".account-register .validate-email").each(function () {
                email = $.trim($(this).val());
                if (email) {
                    if (!$(this).parents('.input-box').hasClass("validation-failed")) {
                        if (!myreg.test(email)) {
                            $(this).parents('.input-box').append('<div class="validation-advice" id="advice-validate-email-email_address" style=""><?= $emailFormatValidate; ?></div>');
                            $(this).parents('.input-box').addClass("validation-failed");
                            validate = 0;
                        }
                    }
                } else {
                    validate = 0;
                }
            });

            //first name lenght check;
            firstname = $("#firstname").val();
            lastname = $("#lastname").val();
            password = $("#password").val();
            confirmation = $("#confirmation").val();
            minNameLength = <?= $minNameLength ? $minNameLength : 4 ?>;
            maxNameLength = <?= $maxNameLength ? $maxNameLength : 30 ?>;
            minPassLength = <?= $minPassLength ? $minPassLength : 4 ?>;
            maxPassLength = <?= $maxPassLength ? $maxPassLength : 30 ?>;
            firstNameLength = firstname.length;
            lastNameLength = lastname.length;
            passwordLength = password.length;
            //firstname length validate
            if (firstNameLength < minNameLength || firstNameLength > maxNameLength) {
                if (!$("#firstname").parents('.input-box').hasClass("validation-failed")) {
                    $("#firstname").parents('.input-box').append('<div class="validation-advice" id="min_lenght" style=""><?= $firstNameLenghtValidate; ?> ' + minNameLength + ' , ' + maxNameLength + '</div>');
                    $("#firstname").parents('.input-box').addClass("validation-failed");
                    validate = 0;
                }
            }
            //lastname length validate
            if (lastNameLength < minNameLength || lastNameLength > maxNameLength) {
                if (!$("#lastname").parents('.input-box').hasClass("validation-failed")) {
                    $("#lastname").parents('.input-box').append('<div class="validation-advice" id="min_lenght" style=""><?= $lastNameLenghtValidate; ?> ' + minNameLength + ' , ' + maxNameLength + '</div>');
                    $("#lastname").parents('.input-box').addClass("validation-failed");
                    validate = 0;
                }
            }
            //password length validate
            if (passwordLength < minPassLength || passwordLength > maxPassLength) {
                if (!$("#password").parents('.input-box').hasClass("validation-failed")) {
                    //alert(111);
                    $("#password").parents('.input-box').append('<div class="validation-advice" id="min_lenght" style=""><?= $passwordLenghtValidate; ?> </div>');
                    $("#password").parents('.input-box').addClass("validation-failed");
                    validate = 0;
                }
            }
            //password validate
            if (confirmation != password) {
                if (!$("#confirmation").parents('.input-box').hasClass("validation-failed")) {
                    //alert(111);
                    $("#confirmation").parents('.input-box').append('<div class="validation-advice" id="min_lenght" style=""><?= $passwordMatchValidate; ?></div>');
                    $("#confirmation").parents('.input-box').addClass("validation-failed");
                    validate = 0;
                }
            }


            if (validate) {
                $(this).addClass("dataUp");
                $("#register-form").submit();
            }
        });
    });
    <?php $this->endBlock(); ?>
</script>
<?php $this->registerJs($this->blocks['customer_account_register'], \yii\web\View::POS_END);//将编写的js代码注册到页面底部 ?>
