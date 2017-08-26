<div class="main">
    <div class="page_where_l"><a href='../www.uobdii.html'>Home</a> - Member Sign In</div>
    <div class="page_where_r"><a href="javascript:history.go(-1);" rel="nofollow">&laquo; Go Back</a></div>
    <div class="blank8px"></div>


    <div class="mn_full">
        <h1>Sign into your account</h1>
        <div class="blank10px"></div>
        <div class="blank10px"></div>
        <div class="float_right px13">New Customer? <a href="regist.asp�sSignReturnURL=.html" class="btn_blue"><span
                        class="white">Register Free</span></a></div>
        <div class="blank10px"></div>
        <div class="blank10px"></div>


        <script type="text/javascript" src="../js/singin.js"></script>
        <form name="formLogin" method="post" action="signinCheck.asp"
              onsubmit="javascript:return CheckFormSignIn('rowfull');">

            <div id="u_sign_username" class="rowfull">
                <div class="rowf_sign_lt"><span class="red_star">*</span><b>User ID or E-Mail:</b></div>
                <div class="rowf_sign_ri">
                    <input name="Username" id="Username" type="text" size="25" maxlength="50"
                           onblur="CheckVerifySignUserID('Username', 'u_sign_username', 'alert_sign_username', 'rowfull', 0);"
                           class="ipt_large" style="width:300px;"/>
                    <span id="alert_sign_username" class="alert_remark"></span>
                </div>
                <div class="clear"></div>
            </div>

            <div id="u_sign_password" class="rowfull">
                <div class="rowf_sign_lt"><span class="red_star">*</span><b>Password:</b></div>
                <div class="rowf_sign_ri">
                    <input name="Password" id="Password" type="password" size="25" maxlength="20"
                           onblur="CheckVerifySignUserID('Password', 'u_sign_password', 'alert_sign_password', 'rowfull', 0);"
                           class="ipt_large" style="width:300px;"/>
                    <span id="alert_sign_password" class="alert_remark"></span>
                </div>
                <div class="clear"></div>
            </div>


            <div class="rowfull">
                <div class="rowf_sign_lt">&nbsp;</div>
                <div class="rowf_sign_ri">
                    <input name="is_remember_uid" type="checkbox" id="is_remember_uid" value="1" checked="checked"/>Remember
                    my User ID or E-mail address for this computer
                </div>
                <div class="clear"></div>
            </div>


            <div class="rowfull">
                <div class="rowf_sign_lt"></div>
                <div class="rowf_sign_ri">
                    <input name="Submit" type="submit" class="btn_submit btn_big btn_prolong" value="Sign In"/> &nbsp;&nbsp;&nbsp;
                    <a href="getPassword.asp.html" style="vertical-align:bottom;">Forgot password? </a>
                </div>
                <div class="clear"></div>
            </div>

            <input type="hidden" name="sSignReturnURL" value="http://www.uobdii.com/"/>
            <input name="signinFrom" type="hidden" id="signinFrom" value=""/>

        </form>


        <div class="blank10px"></div>
        <div class="blank10px"></div>
        <div class="blank10px"></div>
        <div class="clear"></div>
    </div>
    <div class="clear"></div>
</div>




