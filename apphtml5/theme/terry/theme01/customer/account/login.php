<div id="signin-panel"><div class="" id="panel-ai-jb913nei">
        <div class="ms-panel-bodyer" data-role="panel-body"><div id="login-join-box" class="signin">
                <div id="wap-login" data-widget-cid="widget-0" class="iframe-loaded iframe-show"><div class="wslogin-loading" style="display: none;"></div>
                    <div id="login-wrap" class=" login-static  nc-outer-box">
                        <form id="login-form" name="login-form" action="<?= Yii::$service->url->getUrl("customer/account/login");  ?>" method="post" class="form clr style-type-auto lang-en_us auto-en_us is-error-show">
                            <?= \fec\helpers\CRequest::getCsrfInputHtml();  ?>
                            <div id="login-loading" class="loading-mask">
                                <div class="loading-icon"></div>
                                <div class="loading-mask-body"></div>
                            </div>

                            <div id="login-content" class="form clr">
                                <dl>
                                    <dt class="fm-label">
                                    <div class="fm-label-wrap clr">
                                        <label for="fm-login-id">Account:</label>
                                    </div>
                                    </dt>
                                    <dd id="fm-login-id-wrap" class="fm-field">
                                        <div class="fm-field-wrap ">
                                            <div id="account-check-loading" class="loading-mask">
                                                <div class="loading-icon"></div>
                                                <div class="loading-mask-body"></div>
                                            </div>
                                            <input id="email required-entry validate-email" class="fm-text" name="editForm[email]" value="<?= $email; ?>" tabindex="1" placeholder="Email address"  autocorrect="off" autocapitalize="off">
                                            <div class="underline">
                                                <div class="unfocused-line"></div>
                                                <div class="focused-line"></div>
                                            </div>
                                        </div>
                                    </dd>
                                </dl>
                                <dl>
                                    <dt class="fm-label">
                                    <div class="fm-label-wrap clr">
                                        <label for="fm-login-password">Password:</label>
                                    </div>
                                    </dt>
                                    <dd id="fm-login-password-wrap" class="fm-field">
                                        <div class="fm-field-wrap">
                                            <input id="pass" class="fm-text required-entry validate-password" type="password" name="editForm[password]" tabindex="2" placeholder="Password" autocorrect="off" autocapitalize="off">
                                            <div class="underline">
                                                <div class="unfocused-line"></div>
                                                <div class="focused-line"></div>
                                            </div>
                                        </div>
                                    </dd>
                                </dl>
                            </div>
                            <div id="login-submit">
                                <input id="fm-login-submit" value="Sign In" class="fm-button fm-submit" type="submit" tabindex="4" name="submit-btn">
                            </div>
                            <div class="fm-label-extra">
                                 <a id="forgot-password-link" href="<?= Yii::$service->url->getUrl("customer/account/register");  ?>" target="_blank" data-spm-protocol="i">Forgot Password?</a>
                             </div>
                            <div id="login-other"></div>
                            <div id="login-error" class="form-error notice" style="clear: both">
                                <span class="icon-error"></span>
                                <span class="notice-descript">
                                        <?= Yii::$service->page->widget->render('flashmessage'); ?>
                                </span>
                            </div>
                    </div>

                <section class="sns-login-wrap">
                    <ul class="sns-btns radius">
                        <li class="facebook"><span class="logo"></span><a data-partner="facebook" href="//thirdparty.aliexpress.com/login.htm?type=fb&amp;from=msite" target="_blank" rel="noopener">Sign In With Facebook</a></li>
                    </ul>
                </section>
                <div class="fm-bottom">
                    <p>Don't have an account?<a href="<?= Yii::$service->url->getUrl('customer/account/register');  ?>" class="link uppercase">Register</a></p>
                </div>
            </div>
        </div>
    </div>
</div>