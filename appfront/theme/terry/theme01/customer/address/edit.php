<div class="main">
    <div class="main_left">

        <div class="col_d_t">My Account</div>
        <div class="col_d_m">
            <div class="blank5px"></div>

            <div class="ml_dir"><a href="orderList.asp">View My Orders</a></div>
            <div class="ml_dir"><a href="accountSet.asp">Account Settings</a></div>
            <div class="ml_dir ml_dir_cur"><a href="addressBook.asp">Manage Address Book</a></div>
            <div class="ml_dir"><a href="msg_list.asp">Tickets Center</a></div>
            <div class="ml_dir"><a href="msg_add.asp?DirID=2">Submit a Ticket</a></div>

            <div class="ml_dir"><a href="pro_rev_list.asp">My Products' Reviews</a></div>


            <div class="ml_dir"><a href="my_favorites_list.asp">My Favorites (<b class="green">2</b>)</a></div>


            <div class="blank5px"></div>
        </div>
        <div class="col_d_b"></div>

        <div class="blank10px"></div>



        <div class="fun_column px11 gray word_wrap word_break">
            <div class="clear"></div>
            <b class="px14">Welcome!</b><br />
            <b class="px12">&nbsp;zewe&nbsp;jewew</b><br />
            User ID: 312043814@qq.com<br />
            E-Mail: 312043814@qq.com<br />
            Account Status:<b>Normal</b><br />

            <div class="dashed5px"></div>
            <div class="align_right"><a href="../members/?action=SignOut"><img src="../images/ico/logout.gif" hspace="5" border="0" align="absmiddle" />Sign out</a>&nbsp;&nbsp;</div>
            <div class="clear"></div>
        </div>

        <div class="blank10px"></div>


        <div class="fun_column px11 gray">
            <b class="px14">Need help?</b><br />
            If you have questions or need help with your account, you may goto "<a href="../support" target="_blank">Help</a>" or <a href="../info/?dirid=8" target="_blank">contact us</a> to assist you.
            <div class="clear"></div>
        </div></div>
    <div class="main_scene">
        <div class="exh_top"></div>
        <div class="exh_main">
            <div class="align_right px11 verdana" style="margin-top:-10px;"><a href="../">Home</a> - <a href="../members/">My Account: <b class="red">312043814@qq.com</b></a> - Edit Address Information</div><div class="blank5px"></div><h1>Edit Address Information</h1>


            <form name="formAddressBook" onsubmit="return CheckFormSetAddressBook();" action="addressBook_app.asp" method="post">
                <div class="align_right px11 gray"><span class="red_star">*</span> means required fields </div>

                <dl>
                    <dt><span class="red_star">*</span>Received Name is:</dt>
                    <dd>
                        <div class="fl w60px"><b class="px11">Gender</b></div><div class="fl w10px"></div>
                        <div class="fl w200px"><b class="px11">First Name</b></div><div class="fl w10px"></div>
                        <div class="fl w200px"><b class="px11">Last Name</b></div>

                        <div class="clear"></div>
                        <div class="fl w60px"><div class="blank5px"></div><select name="addGender" id="addGender" class="input"><option value=""></option><option value="Mr.">Mr.</option><option value="Ms.">Ms.</option></select><span id="txtID_addGender" class="red_dark px11"></span></div><div class="fl w10px"></div>
                        <div class="fl w200px"><input name="addFirstName" id="addFirstName" type="text" size="22" maxlength="30" value="221" class="input_normal" onfocus="InputCss(this,'focus');" onblur="CheckVerifyFirstLastName(this,'txtID_addFirstName','First Name');"><span id="txtID_addFirstName" class="red_dark px11"></span></div>
                        <div class="fl w10px"></div>
                        <div class="fl w200px"><input name="addLastName" id="addLastName" type="text" size="22" maxlength="30" value="2121" class="input_normal" onfocus="InputCss(this,'focus');" onblur="CheckVerifyFirstLastName(this,'txtID_addLastName','Last Name');"><span id="txtID_addLastName" class="red_dark px11"></span></div>
                        <div class="clear"></div>
                    </dd>

                    <dt><span class="red_star">*</span>Address Line1:</dt>
                    <dd><input name="addAddressLine1" id="addAddressLine1" type="text" size="70" maxlength="200" value="212121" class="input_normal" onfocus="InputCss(this,'focus');" onblur="CheckVerify_addAddressLine1(this,'txtID_addAddressLine1');"><span id="txtID_addAddressLine1" class="red_dark px11"></span></dd>

                    <dt>Address Line2:</dt>
                    <dd><input name="addAddressLine2" id="addAddressLine2" type="text" size="70" maxlength="200" value="212121" class="input_normal" onfocus="InputCss(this,'focus');" onblur="InputCss(this,'');"></dd>

                    <dt><span class="red_star">*</span>City:</dt>
                    <dd><input name="addCity" id="addCity" type="text" size="35" maxlength="200" value="212121" class="input_normal" onfocus="InputCss(this,'focus');" onblur="CheckVerify_addCity(this,'txtID_addCity');"><span id="txtID_addCity" class="red_dark px11"></span></dd>

                    <dt><span class="red_star">*</span>Country / Region:</dt>
                    <dd><select name="addCountry" id="addCountry" class="input_normal" onchange="CheckVerify_addCountry(this,'txtID_addCountry');"><option value="">please select your country or region</option>
                            <option value="CA"><img src="/images/ico_country/CA.gif" border="0" align="absmiddle" />Canada</option>
                            <option value="FR" selected="selected"><img src="/images/ico_country/FR.gif" border="0" align="absmiddle" />France</option>
                            <option value="DE"><img src="/images/ico_country/DE.gif" border="0" align="absmiddle" />Germany</option>
                            <option value="IT"><img src="/images/ico_country/IT.gif" border="0" align="absmiddle" />Italy</option>
                            <option value="GB"><img src="/images/ico_country/GB.gif" border="0" align="absmiddle" />United Kingdom</option>
                            <option value="US"><img src="/images/ico_country/US.gif" border="0" align="absmiddle" />United States</option>
                            <option value="">---- All Countries &amp; Territories (A to Z) ----</option>
                            <option value="AF">Afghanistan</option>
                            <option value="AL">Albania</option>
                            <option value="DZ">Algeria</option>
                            <option value="AS">American Samoa</option>
                            <option value="AD">Andorra</option>
                            <option value="AO">Angola</option>
                            <option value="AI">Anguilla</option>
                            <option value="AQ">Antarctica</option>
                            <option value="AG">Antigua and Barbuda</option>
                            <option value="AR">Argentina</option>
                            <option value="AM">Armenia</option>
                            <option value="AW">Aruba</option>
                            <option value="AU">Australia</option>
                            <option value="AT">Austria</option>
                            <option value="AZ">Azerbaijan</option>
                            <option value="BS">Bahamas</option>
                            <option value="BH">Bahrain</option>
                            <option value="BD">Bangladesh</option>
                            <option value="BB">Barbados</option>
                            <option value="BY">Belarus</option>
                            <option value="BE">Belgium</option>
                            <option value="BZ">Belize</option>
                            <option value="BJ">Benin</option>
                            <option value="BM">Bermuda</option>
                            <option value="BT">Bhutan</option>
                            <option value="BO">Bolivia</option>
                            <option value="BA">Bosnia and Herzegovina</option>
                            <option value="BW">Botswana</option>
                            <option value="BV">Bouvet Island</option>
                            <option value="BR">Brazil</option>
                            <option value="IO">British Indian Ocean Territory</option>
                            <option value="BN">Brunei Darussalam</option>
                            <option value="BG">Bulgaria</option>
                            <option value="BF">Burkina Faso</option>
                            <option value="BI">Burundi</option>
                            <option value="KH">Cambodia</option>
                            <option value="CM">Cameroon</option>
                            <option value="CA">Canada</option>
                            <option value="CV">Cape Verde</option>
                            <option value="KY">Cayman Islands</option>
                            <option value="CF">Central African Republic</option>
                            <option value="TD">Chad</option>
                            <option value="CL">Chile</option>
                            <option value="CN">China</option>
                            <option value="CX">Christmas Island</option>
                            <option value="CC">Cocos (Keeling) Islands</option>
                            <option value="CO">Colombia</option>
                            <option value="KM">Comoros</option>
                            <option value="CG">Congo</option>
                            <option value="ZR">Congo</option>
                            <option value="CK">Cook Islands</option>
                            <option value="CR">Costa Rica</option>
                            <option value="CI">Cote D'Ivoire</option>
                            <option value="HR">Croatia (local name: Hrvatska)</option>
                            <option value="CU">Cuba</option>
                            <option value="CY">Cyprus</option>
                            <option value="CZ">Czech Republic</option>
                            <option value="CD">Democratic Republic of the Congo</option>
                            <option value="DK">Denmark</option>
                            <option value="DJ">Djibouti</option>
                            <option value="DM">Dominica</option>
                            <option value="DO">Dominican Republic</option>
                            <option value="EC">Ecuador</option>
                            <option value="EG">Egypt</option>
                            <option value="SV">El Salvador</option>
                            <option value="GQ">Equatorial Guinea</option>
                            <option value="ER">Eritrea</option>
                            <option value="EE">Estonia</option>
                            <option value="ET">Ethiopia</option>
                            <option value="FK">Falkland Islands (Malvinas)</option>
                            <option value="FO">Faroe Islands</option>
                            <option value="FJ">Fiji</option>
                            <option value="FI">Finland</option>
                            <option value="FR">France</option>
                            <option value="FX">France Metropolitan</option>
                            <option value="GF">French Guiana</option>
                            <option value="PF">French Polynesia</option>
                            <option value="TF">French Southern Territories</option>
                            <option value="GA">Gabon</option>
                            <option value="GM">Gambia</option>
                            <option value="GE">Georgia</option>
                            <option value="DE">Germany</option>
                            <option value="GH">Ghana</option>
                            <option value="GI">Gibraltar</option>
                            <option value="GR">Greece</option>
                            <option value="GL">Greenland</option>
                            <option value="GD">Grenada</option>
                            <option value="GP">Guadeloupe</option>
                            <option value="GU">Guam</option>
                            <option value="GT">Guatemala</option>
                            <option value="GN">Guinea</option>
                            <option value="GW">Guinea-Bissau</option>
                            <option value="GY">Guyana</option>
                            <option value="HT">Haiti</option>
                            <option value="HM">Heard and Mc Donald Islands</option>
                            <option value="HN">Honduras</option>
                            <option value="HK">Hong Kong</option>
                            <option value="HU">Hungary</option>
                            <option value="IS">Iceland</option>
                            <option value="IN">India</option>
                            <option value="ID">Indonesia</option>
                            <option value="IR">Iran (Islamic Republic of)</option>
                            <option value="IQ">Iraq</option>
                            <option value="IE">Ireland</option>
                            <option value="IM">Isle Of Man</option>
                            <option value="IL">Israel</option>
                            <option value="IT">Italy</option>
                            <option value="JM">Jamaica</option>
                            <option value="JP">Japan</option>
                            <option value="JE">Jersey</option>
                            <option value="JO">Jordan</option>
                            <option value="KZ">Kazakhstan</option>
                            <option value="KE">Kenya</option>
                            <option value="KI">Kiribati</option>
                            <option value="KW">Kuwait</option>
                            <option value="KG">Kyrgyzstan</option>
                            <option value="LA">Lao People's Democratic Republic</option>
                            <option value="LV">Latvia</option>
                            <option value="LB">Lebanon</option>
                            <option value="LS">Lesotho</option>
                            <option value="LR">Liberia</option>
                            <option value="LY">Libyan Arab Jamahiriya</option>
                            <option value="LI">Liechtenstein</option>
                            <option value="LT">Lithuania</option>
                            <option value="LU">Luxembourg</option>
                            <option value="MO">Macau</option>
                            <option value="MK">Macedonia</option>
                            <option value="MG">Madagascar</option>
                            <option value="MW">Malawi</option>
                            <option value="MY">Malaysia</option>
                            <option value="MV">Maldives</option>
                            <option value="ML">Mali</option>
                            <option value="MT">Malta</option>
                            <option value="MH">Marshall Islands</option>
                            <option value="MQ">Martinique</option>
                            <option value="MR">Mauritania</option>
                            <option value="MU">Mauritius</option>
                            <option value="YT">Mayotte</option>
                            <option value="MX">Mexico</option>
                            <option value="FM">Micronesia</option>
                            <option value="MD">Moldova</option>
                            <option value="MC">Monaco</option>
                            <option value="MN">Mongolia</option>
                            <option value="ME">Montenegro</option>
                            <option value="MS">Montserrat</option>
                            <option value="MA">Morocco</option>
                            <option value="MZ">Mozambique</option>
                            <option value="MM">Myanmar</option>
                            <option value="NA">Namibia</option>
                            <option value="NR">Nauru</option>
                            <option value="NP">Nepal</option>
                            <option value="NL">Netherlands</option>
                            <option value="AN">Netherlands Antilles</option>
                            <option value="NC">New Caledonia</option>
                            <option value="NZ">New Zealand</option>
                            <option value="NI">Nicaragua</option>
                            <option value="NE">Niger</option>
                            <option value="NG">Nigeria</option>
                            <option value="NU">Niue</option>
                            <option value="NF">Norfolk Island</option>
                            <option value="KP">North Korea</option>
                            <option value="MP">Northern Mariana Islands</option>
                            <option value="NO">Norway</option>
                            <option value="OM">Oman</option>
                            <option value="PK">Pakistan</option>
                            <option value="PW">Palau</option>
                            <option value="PS">Palestine</option>
                            <option value="PA">Panama</option>
                            <option value="PG">Papua New Guinea</option>
                            <option value="PY">Paraguay</option>
                            <option value="PE">Peru</option>
                            <option value="PH">Philippines</option>
                            <option value="PN">Pitcairn Islands</option>
                            <option value="PL">Poland</option>
                            <option value="PT">Portugal</option>
                            <option value="PR">Puerto Rico</option>
                            <option value="QA">Qatar</option>
                            <option value="RE">Reunion</option>
                            <option value="RO">Romania</option>
                            <option value="RU">Russian Federation</option>
                            <option value="RW">Rwanda</option>
                            <option value="KN">Saint Kitts and Nevis</option>
                            <option value="LC">Saint Lucia</option>
                            <option value="MF">Saint Martin</option>
                            <option value="VC">Saint Vincent and the Grenadines</option>
                            <option value="WS">Samoa</option>
                            <option value="SM">San Marino</option>
                            <option value="ST">Sao Tome and Principe</option>
                            <option value="SA">Saudi Arabia</option>
                            <option value="SN">Senegal</option>
                            <option value="RS">Serbia</option>
                            <option value="SC">Seychelles</option>
                            <option value="SL">Sierra Leone</option>
                            <option value="SG">Singapore</option>
                            <option value="SK">Slovakia (Slovak Republic)</option>
                            <option value="SI">Slovenia</option>
                            <option value="SB">Solomon Islands</option>
                            <option value="SO">Somalia</option>
                            <option value="ZA">South Africa</option>
                            <option value="GS">South Georgia and The South Sandwich Islands</option>
                            <option value="KR">South Korea</option>
                            <option value="ES">Spain</option>
                            <option value="LK">Sri Lanka</option>
                            <option value="SH">St. Helena</option>
                            <option value="PM">St. Pierre and Miquelon</option>
                            <option value="SD">Sudan</option>
                            <option value="SR">Suriname</option>
                            <option value="SJ">Svalbard and Jan Mayen Islands</option>
                            <option value="SZ">Swaziland</option>
                            <option value="SE">Sweden</option>
                            <option value="CH">Switzerland</option>
                            <option value="SY">Syrian Arab Republic</option>
                            <option value="TW">Taiwan</option>
                            <option value="TJ">Tajikistan</option>
                            <option value="TZ">Tanzania</option>
                            <option value="TH">Thailand</option>
                            <option value="TG">Togo</option>
                            <option value="TK">Tokelau</option>
                            <option value="TO">Tonga</option>
                            <option value="TT">Trinidad and Tobago</option>
                            <option value="TN">Tunisia</option>
                            <option value="TR">Turkey</option>
                            <option value="TM">Turkmenistan</option>
                            <option value="TC">Turks and Caicos Islands</option>
                            <option value="TV">Tuvalu</option>
                            <option value="UG">Uganda</option>
                            <option value="UA">Ukraine</option>
                            <option value="AE">United Arab Emirates</option>
                            <option value="GB">United Kingdom</option>
                            <option value="US">United States</option>
                            <option value="UM">United States Minor Outlying Islands</option>
                            <option value="UY">Uruguay</option>
                            <option value="UZ">Uzbekistan</option>
                            <option value="VU">Vanuatu</option>
                            <option value="VA">Vatican City State (Holy See)</option>
                            <option value="VE">Venezuela</option>
                            <option value="VN">Vietnam</option>
                            <option value="VG">Virgin Islands (British)</option>
                            <option value="VI">Virgin Islands (U.S.)</option>
                            <option value="WF">Wallis And Futuna Islands</option>
                            <option value="EH">Western Sahara</option>
                            <option value="YE">Yemen</option>
                            <option value="ZM">Zambia</option>
                            <option value="ZW">Zimbabwe</option>
                            <option value="GG">Guernsey</option>
                            <option value="TL">Timor-Leste (East Timor)</option>
                        </select><span id="txtID_addCountry" class="red_dark px11"></span></dd>

                    <dt><span class="red_star" id="is_must_or_not_addProvince" style="display:none">*</span>State/Province/Region:</dt>
                    <dd><input name="addProvince" id="addProvince" type="text" size="35" maxlength="200" value="" class="input_normal" onfocus="InputCss(this,'focus');" onblur="InputCss(this,'');"><span id="txtID_addProvince" class="red_dark px11"></span></dd>


                    <dt><span class="red_star">*</span>ZIP/Postal Code:</dt>
                    <dd><input name="addPostalCode" id="addPostalCode" type="text" size="35" maxlength="10" value="2121" class="input_normal" onfocus="InputCss(this,'focus');" onblur="CheckVerify_addPostalCode(this,'txtID_addPostalCode');"><span id="txtID_addPostalCode" class="red_dark px11"></span></dd>

                    <dt><span class="red_star">*</span>Phone Number:</dt>
                    <dd><input name="addTel" id="addTel" type="text" size="35" maxlength="100" value="212121" class="input_normal" onfocus="InputCss(this,'focus');" onblur="CheckVerify_addTel(this,'txtID_addTel');"><span id="txtID_addTel" class="red_dark px11"></span></dd>

                    <dt>Fax Number:</dt>
                    <dd><input name="addFax" id="addFax" type="text" size="35" maxlength="100" value="" class="input_normal" onfocus="InputCss(this,'focus');" onblur="InputCss(this,'');"></dd>

                    <dt>&nbsp;</dt>
                    <dd><input name="is_default" type="checkbox" value="1"  checked /> Set it to my Default Address</dd>

                    <div class="blank10px"></div>
                    <dt>&nbsp;</dt>
                    <dd><input name="Submit" type="submit" class="btn_submit" value="  Submit &amp; Save  "></dd>

                    <input name="addFrom" type="hidden" id="addFrom" value="" />
                    <input name="orderID" type="hidden" value="" />

                    <input name="abSetAction" type="hidden" id="abSetAction" value="edit" />
                    <input name="addressID" type="hidden" id="addressID" value="293175" />
                    <input name="UserID_confirm" id="UserID_confirm" type="hidden" value="351041" />

                </dl>
            </form>


            <div class="clear"></div>
        </div>
        <div class="exh_bottom"></div>
    </div>
    <div class="main_bottom"></div>
</div>










