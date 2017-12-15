<?php
use fecshop\app\appfront\helper\Format;
?>
<section class="shopcart-list" id="shopcart-list">
    <div class="shipto bb p-24 mb-16 pwa-shadow">
        Ship my order(s) to<span class="ship-to" id="ship-to">Canada</span>
    </div>
    <article id="seller-cart-220588563" class="seller-products pwa-shadow">
        <ul class="product bt">
            <?php foreach($cart_info['products'] as $product_one): ?>
            <li id="shopcart-" class="p-24 " productid="1784151434">
                <div class="pi-details mb-24 clearfix">
                    <div class="pi-details-pic">
                        <a href="<?= $product_one['url'] ?>">
                            <img src="<?= Yii::$service->product->image->getResize($product_one['image'],[100,100],false) ?>" alt="<?= $product_one['name'] ?>">
                        </a>
                    </div>
                    <div class="pi-details-desc">
                        <div class="pi-details-desc-row">
                            <a href="<?= $product_one['url'] ?>">
                                <div class="details-title">
                                    <?= $product_one['name'] ?>
                                </div>
                            </a>
                            <div class="details-sku ellipsis-multiple">
                                China
                            </div>
                            <div class="details-price clearfix">
                                <div>
                                    <span class="sell-price">US $15.29</span>
                                </div>
                            </div>
                            <div class="pi-quantity  clearfix">
                                <div class="clearfix">
                                    <div class="trim">
                                                <span class="trim ms-numberic ms-numberic-20081458765" data-shop-cartid="20081458765">
                                                    <a href="javascript:;" class="ms-minus">
                                                        <i class="ic-md ic-remove-md cartqtydown" rel="<?= $product_one['item_id']; ?>" num="<?= $product_one['qty']; ?>"></i>
                                                    </a>
                                                    <input type="number" id="quantity-20081458765" min="1" max="6" value="<?= $product_one['qty']; ?>" rel="<?= $product_one['item_id']; ?>">
                                                    <a href="javascript:;" class="ms-plus">
                                                        <i class="ic-md ic-add-md cartqtyup" rel="<?= $product_one['item_id']; ?>" num="<?= $product_one['qty']; ?>"></i>
                                                    </a>
                                                </span>
                                    </div>
                                    <span class="delete"><i class="ic-delete-md ic-md"></i></span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div class="pi-shipping mb-40 ms-rc-ripple ms-rc-custom">
                    <div class="shipping clearfix" data-shop-cartid="20081458765"></div>
                </div>
            </li>
            <?php  endforeach;  ?>
        </ul>
    </article>

    <article id="seller-cart-buyall" class="seller-products pwa-shadow">
        <div class="seller-cart-buyall seller-costs bt p-24 pb-24">
            <dl class="seller-costs-subtotal mt-24 clearfix">
                <dt>Subtotal:</dt>
                <dd><span>US $15.29</span></dd>
            </dl>
            <dl class="seller-costs-shipping mt-16 clearfix">
                <dt>Shipping&nbsp;:</dt>
                <dd><span>US $0.00</span></dd>
            </dl>
        </div>

        <div class="accounts bt bb p-24 pt-24 pb-24 clearfix">
            <div class="total">
                <span>Total&nbsp;:</span>
                <span class="mt-16 price">US $15.29</span>
            </div>
            <div class="ui-button ui-button-main buyall pwa-shadow ">Buy All</div>
        </div>
    </article>

    <form id="submit-for-seller-create-order" method="post" action="/order/createNewOrderForCombine.htm">
        <input name="_csrf_token_" type="hidden" value="s73ert97ohum">
        <input type="hidden" data-role="seller-shopcart-ids" name="availableProductShopcartIds" value="">
    </form>

    <form id="submit-for-delete" method="post" action="/shopcart/detail.htm">
        <input name="_csrf_token_" type="hidden" value="s73ert97ohum">
        <input type="hidden" name="action" value="/shopcart/mobi_shopcart_action">
        <input type="hidden" data-role="shopcart-id" name="shopcartId" value="">
        <input type="hidden" name="event_submit_do_delete_shopcart" value="anything">
    </form>

    <form id="submit-for-delete-all" method="post" action="/shopcart/detail.htm">
        <input name="_csrf_token_" type="hidden" value="s73ert97ohum">
        <input type="hidden" name="action" value="/shopcart/mobi_shopcart_action">
        <input type="hidden" name="event_submit_do_delete_all_shopcart" value="anything">
    </form>

    <form id="submit-for-update-quantity" method="post" action="/shopcart/detail.htm">
        <input name="_csrf_token_" type="hidden" value="s73ert97ohum">
        <input type="hidden" name="action" value="/shopcart/mobi_shopcart_action">
        <input type="hidden" data-role="shopcart-id" name="shopcartId" value="">
        <input type="hidden" data-role="quantity" name="quantity" value="">
        <input type="hidden" name="event_submit_do_update_quantity" value="anything">
    </form>

    <form id="submit-for-update-freight" method="post" action="/shopcart/detail.htm">
        <input name="_csrf_token_" type="hidden" value="s73ert97ohum">
        <input type="hidden" name="action" value="/shopcart/mobi_shopcart_action">
        <input type="hidden" data-role="shopcart-id" name="shopcartId" value="">
        <input type="hidden" data-role="freight" name="logisticService" value="">
        <input type="hidden" name="event_submit_do_update_logistic_service" value="anything">
    </form>

    <form id="submit-for-update-country" method="post" action="/shopcart/detail.htm">
        <input name="_csrf_token_" type="hidden" value="s73ert97ohum">
        <input type="hidden" name="action" value="/shopcart/mobi_shopcart_action">
        <input type="hidden" data-role="country-code" name="countryCode" value="">
        <input type="hidden" name="event_submit_do_update_buyer_country" value="anything">
    </form>

    <form id="submit-for-buy-all" method="post" action="/order/createNewOrderForCombine.htm">
        <input name="_csrf_token_" type="hidden" value="s73ert97ohum">
        <input type="hidden" data-role="seller-shopcart-ids" name="availableProductShopcartIds" value="">
    </form>
</section>

<div class="ms-toast">
    <div class="ms-toast-loading ms-loading ms-loading-20" data-role="loading" style="display: none;"></div>
    <div class="ms-toast-content" data-role="content"></div>
</div>
<div id="ai-jb7lm8t9">
    <div class="ms-panel-md" id="panel-ai-jb7lm8t9">
        <div class="ms-panel-header">
            <span class="ms-panel-title" data-role="panel-title">Country</span>
            <span class="ms-panel-cancel">
          <i class="ic-md ic-close-md"></i>
                <!--anita-if-->
        </span>
        </div>
        <div class="ms-panel-bodyer" data-role="panel-body">
            <section class="ms-country-wrap" id="country-jb7lm8t8">
                <ul class="ms-country-list">
                    <li data-name="all" data-code="-1" class="ms-country-all">All <i class="ms-icon icon-check"></i>
                    </li>
                    <li class="ms-country-title">Popular</li>
                    <!--ai-repeat-start-->
                    <li class="ms-rc-ripple ms-rc-custom" data-type="pop" data-code="US" data-name="United States"
                        data-index="0">United States
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="pop" data-code="RU" data-name="Russian Federation"
                        data-index="1">Russian Federation
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="pop" data-code="BR" data-name="Brazil"
                        data-index="2">Brazil
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="pop" data-code="AU" data-name="Australia"
                        data-index="3">Australia
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="pop" data-code="UK" data-name="United Kingdom"
                        data-index="4">United Kingdom
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="pop" data-code="ES" data-name="Spain"
                        data-index="5">Spain
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="pop" data-code="FR" data-name="France"
                        data-index="6">France
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom selected" data-type="pop" data-code="CA" data-name="Canada"
                        data-index="7">Canada
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="pop" data-code="PL" data-name="Poland"
                        data-index="8">Poland
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="pop" data-code="TR" data-name="Turkey"
                        data-index="9">Turkey
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="pop" data-code="SE" data-name="Sweden"
                        data-index="10">Sweden
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="pop" data-code="IL" data-name="Israel"
                        data-index="11">Israel
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="pop" data-code="IT" data-name="Italy"
                        data-index="12">Italy
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="pop" data-code="NZ" data-name="New Zealand"
                        data-index="13">New Zealand
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="pop" data-code="DE" data-name="Germany"
                        data-index="14">Germany
                        <div class="circle"><span></span></div>
                    </li><!--ai-repeat-end-->
                    <!--ai-repeat-start-->
                    <li class="ms-rc-ripple ms-rc-custom ms-country-title" data-type="all" data-code="split"
                        data-name="A" data-index="0">A
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="AF" data-name="Afghanistan"
                        data-index="1">Afghanistan
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="ALA" data-name="Aland Islands"
                        data-index="2">Aland Islands
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="AL" data-name="Albania"
                        data-index="3">Albania
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="GBA" data-name="Alderney"
                        data-index="4">Alderney
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="DZ" data-name="Algeria"
                        data-index="5">Algeria
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="AS" data-name="American Samoa"
                        data-index="6">American Samoa
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="AD" data-name="Andorra"
                        data-index="7">Andorra
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="AO" data-name="Angola"
                        data-index="8">Angola
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="AI" data-name="Anguilla"
                        data-index="9">Anguilla
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="AG" data-name="Antigua and Barbuda"
                        data-index="10">Antigua and Barbuda
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="AR" data-name="Argentina"
                        data-index="11">Argentina
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="AM" data-name="Armenia"
                        data-index="12">Armenia
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="AW" data-name="Aruba"
                        data-index="13">Aruba
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="ASC" data-name="Ascension Island"
                        data-index="14">Ascension Island
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="AU" data-name="Australia"
                        data-index="15">Australia
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="AT" data-name="Austria"
                        data-index="16">Austria
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="AZ" data-name="Azerbaijan"
                        data-index="17">Azerbaijan
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom ms-country-title" data-type="all" data-code="split"
                        data-name="B" data-index="18">B
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="BS" data-name="Bahamas"
                        data-index="19">Bahamas
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="BH" data-name="Bahrain"
                        data-index="20">Bahrain
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="BD" data-name="Bangladesh"
                        data-index="21">Bangladesh
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="BB" data-name="Barbados"
                        data-index="22">Barbados
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="BY" data-name="Belarus"
                        data-index="23">Belarus
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="BE" data-name="Belgium"
                        data-index="24">Belgium
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="BZ" data-name="Belize"
                        data-index="25">Belize
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="BJ" data-name="Benin"
                        data-index="26">Benin
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="BM" data-name="Bermuda"
                        data-index="27">Bermuda
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="BT" data-name="Bhutan"
                        data-index="28">Bhutan
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="BO" data-name="Bolivia"
                        data-index="29">Bolivia
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="BA"
                        data-name="Bosnia and Herzegovina" data-index="30">Bosnia and Herzegovina
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="BW" data-name="Botswana"
                        data-index="31">Botswana
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="BR" data-name="Brazil"
                        data-index="32">Brazil
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="BN" data-name="Brunei Darussalam"
                        data-index="33">Brunei Darussalam
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="BG" data-name="Bulgaria"
                        data-index="34">Bulgaria
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="BF" data-name="Burkina Faso"
                        data-index="35">Burkina Faso
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="BI" data-name="Burundi"
                        data-index="36">Burundi
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom ms-country-title" data-type="all" data-code="split"
                        data-name="C" data-index="37">C
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="KH" data-name="Cambodia"
                        data-index="38">Cambodia
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="CM" data-name="Cameroon"
                        data-index="39">Cameroon
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="CA" data-name="Canada"
                        data-index="40">Canada
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="CV" data-name="Cape Verde"
                        data-index="41">Cape Verde
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="KY" data-name="Cayman Islands"
                        data-index="42">Cayman Islands
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="CF"
                        data-name="Central African Republic" data-index="43">Central African Republic
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="TD" data-name="Chad"
                        data-index="44">Chad
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="CL" data-name="Chile"
                        data-index="45">Chile
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="CX" data-name="Christmas Island"
                        data-index="46">Christmas Island
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="CC"
                        data-name="Cocos (Keeling) Islands" data-index="47">Cocos (Keeling) Islands
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="CO" data-name="Colombia"
                        data-index="48">Colombia
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="KM" data-name="Comoros"
                        data-index="49">Comoros
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="ZR"
                        data-name="Congo, The Democratic Republic Of The" data-index="50">Congo, The Democratic Republic
                        Of The
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="CG"
                        data-name="Congo, The Republic of Congo" data-index="51">Congo, The Republic of Congo
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="CK" data-name="Cook Islands"
                        data-index="52">Cook Islands
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="CR" data-name="Costa Rica"
                        data-index="53">Costa Rica
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="CI" data-name="Cote D'Ivoire"
                        data-index="54">Cote D'Ivoire
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="HR"
                        data-name="Croatia (local name: Hrvatska)" data-index="55">Croatia (local name: Hrvatska)
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="CY" data-name="Cyprus"
                        data-index="56">Cyprus
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="CZ" data-name="Czech Republic"
                        data-index="57">Czech Republic
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom ms-country-title" data-type="all" data-code="split"
                        data-name="D" data-index="58">D
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="DK" data-name="Denmark"
                        data-index="59">Denmark
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="DJ" data-name="Djibouti"
                        data-index="60">Djibouti
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="DM" data-name="Dominica"
                        data-index="61">Dominica
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="DO" data-name="Dominican Republic"
                        data-index="62">Dominican Republic
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom ms-country-title" data-type="all" data-code="split"
                        data-name="E" data-index="63">E
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="TP" data-name="East Timor"
                        data-index="64">East Timor
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="EC" data-name="Ecuador"
                        data-index="65">Ecuador
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="EG" data-name="Egypt"
                        data-index="66">Egypt
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="SV" data-name="El Salvador"
                        data-index="67">El Salvador
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="GQ" data-name="Equatorial Guinea"
                        data-index="68">Equatorial Guinea
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="ER" data-name="Eritrea"
                        data-index="69">Eritrea
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="EE" data-name="Estonia"
                        data-index="70">Estonia
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="ET" data-name="Ethiopia"
                        data-index="71">Ethiopia
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom ms-country-title" data-type="all" data-code="split"
                        data-name="F" data-index="72">F
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="FK"
                        data-name="Falkland Islands (Malvinas)" data-index="73">Falkland Islands (Malvinas)
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="FO" data-name="Faroe Islands"
                        data-index="74">Faroe Islands
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="FJ" data-name="Fiji"
                        data-index="75">Fiji
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="FI" data-name="Finland"
                        data-index="76">Finland
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="FR" data-name="France"
                        data-index="77">France
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="GF" data-name="French Guiana"
                        data-index="78">French Guiana
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="PF" data-name="French Polynesia"
                        data-index="79">French Polynesia
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom ms-country-title" data-type="all" data-code="split"
                        data-name="G" data-index="80">G
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="GA" data-name="Gabon"
                        data-index="81">Gabon
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="GM" data-name="Gambia"
                        data-index="82">Gambia
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="GE" data-name="Georgia"
                        data-index="83">Georgia
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="DE" data-name="Germany"
                        data-index="84">Germany
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="GH" data-name="Ghana"
                        data-index="85">Ghana
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="GI" data-name="Gibraltar"
                        data-index="86">Gibraltar
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="GR" data-name="Greece"
                        data-index="87">Greece
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="GL" data-name="Greenland"
                        data-index="88">Greenland
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="GD" data-name="Grenada"
                        data-index="89">Grenada
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="GP" data-name="Guadeloupe"
                        data-index="90">Guadeloupe
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="GU" data-name="Guam"
                        data-index="91">Guam
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="GT" data-name="Guatemala"
                        data-index="92">Guatemala
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="GGY" data-name="Guernsey"
                        data-index="93">Guernsey
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="GN" data-name="Guinea"
                        data-index="94">Guinea
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="GW" data-name="Guinea-Bissau"
                        data-index="95">Guinea-Bissau
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="GY" data-name="Guyana"
                        data-index="96">Guyana
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom ms-country-title" data-type="all" data-code="split"
                        data-name="H" data-index="97">H
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="HT" data-name="Haiti"
                        data-index="98">Haiti
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="HN" data-name="Honduras"
                        data-index="99">Honduras
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="HK" data-name="Hong Kong"
                        data-index="100">Hong Kong
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="HU" data-name="Hungary"
                        data-index="101">Hungary
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom ms-country-title" data-type="all" data-code="split"
                        data-name="I" data-index="102">I
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="IS" data-name="Iceland"
                        data-index="103">Iceland
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="IN" data-name="India"
                        data-index="104">India
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="ID" data-name="Indonesia"
                        data-index="105">Indonesia
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="IQ" data-name="Iraq"
                        data-index="106">Iraq
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="IE" data-name="Ireland"
                        data-index="107">Ireland
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="IL" data-name="Israel"
                        data-index="108">Israel
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="IT" data-name="Italy"
                        data-index="109">Italy
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom ms-country-title" data-type="all" data-code="split"
                        data-name="J" data-index="110">J
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="JM" data-name="Jamaica"
                        data-index="111">Jamaica
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="JP" data-name="Japan"
                        data-index="112">Japan
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="JEY" data-name="Jersey"
                        data-index="113">Jersey
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="JO" data-name="Jordan"
                        data-index="114">Jordan
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom ms-country-title" data-type="all" data-code="split"
                        data-name="K" data-index="115">K
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="KZ" data-name="Kazakhstan"
                        data-index="116">Kazakhstan
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="KE" data-name="Kenya"
                        data-index="117">Kenya
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="KI" data-name="Kiribati"
                        data-index="118">Kiribati
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="KW" data-name="Kuwait"
                        data-index="119">Kuwait
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="KG" data-name="Kyrgyzstan"
                        data-index="120">Kyrgyzstan
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom ms-country-title" data-type="all" data-code="split"
                        data-name="L" data-index="121">L
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="LA"
                        data-name="Lao People's Democratic Republic" data-index="122">Lao People's Democratic Republic
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="LV" data-name="Latvia"
                        data-index="123">Latvia
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="LB" data-name="Lebanon"
                        data-index="124">Lebanon
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="LS" data-name="Lesotho"
                        data-index="125">Lesotho
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="LR" data-name="Liberia"
                        data-index="126">Liberia
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="LY" data-name="Libya"
                        data-index="127">Libya
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="LI" data-name="Liechtenstein"
                        data-index="128">Liechtenstein
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="LT" data-name="Lithuania"
                        data-index="129">Lithuania
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="LU" data-name="Luxembourg"
                        data-index="130">Luxembourg
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom ms-country-title" data-type="all" data-code="split"
                        data-name="M" data-index="131">M
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="MO" data-name="Macau"
                        data-index="132">Macau
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="MK" data-name="Macedonia"
                        data-index="133">Macedonia
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="MG" data-name="Madagascar"
                        data-index="134">Madagascar
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="MW" data-name="Malawi"
                        data-index="135">Malawi
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="MY" data-name="Malaysia"
                        data-index="136">Malaysia
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="MV" data-name="Maldives"
                        data-index="137">Maldives
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="ML" data-name="Mali"
                        data-index="138">Mali
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="MT" data-name="Malta"
                        data-index="139">Malta
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="MH" data-name="Marshall Islands"
                        data-index="140">Marshall Islands
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="MQ" data-name="Martinique"
                        data-index="141">Martinique
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="MR" data-name="Mauritania"
                        data-index="142">Mauritania
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="MU" data-name="Mauritius"
                        data-index="143">Mauritius
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="YT" data-name="Mayotte"
                        data-index="144">Mayotte
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="MX" data-name="Mexico"
                        data-index="145">Mexico
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="FM" data-name="Micronesia"
                        data-index="146">Micronesia
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="MD" data-name="Moldova"
                        data-index="147">Moldova
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="MC" data-name="Monaco"
                        data-index="148">Monaco
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="MN" data-name="Mongolia"
                        data-index="149">Mongolia
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="MNE" data-name="Montenegro"
                        data-index="150">Montenegro
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="MS" data-name="Montserrat"
                        data-index="151">Montserrat
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="MA" data-name="Morocco"
                        data-index="152">Morocco
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="MZ" data-name="Mozambique"
                        data-index="153">Mozambique
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="MM" data-name="Myanmar"
                        data-index="154">Myanmar
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom ms-country-title" data-type="all" data-code="split"
                        data-name="N" data-index="155">N
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="NA" data-name="Namibia"
                        data-index="156">Namibia
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="NR" data-name="Nauru"
                        data-index="157">Nauru
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="NP" data-name="Nepal"
                        data-index="158">Nepal
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="NL" data-name="Netherlands"
                        data-index="159">Netherlands
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="AN"
                        data-name="Netherlands Antilles" data-index="160">Netherlands Antilles
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="NC" data-name="New Caledonia"
                        data-index="161">New Caledonia
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="NZ" data-name="New Zealand"
                        data-index="162">New Zealand
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="NI" data-name="Nicaragua"
                        data-index="163">Nicaragua
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="NE" data-name="Niger"
                        data-index="164">Niger
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="NG" data-name="Nigeria"
                        data-index="165">Nigeria
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="NU" data-name="Niue"
                        data-index="166">Niue
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="NF" data-name="Norfolk Island"
                        data-index="167">Norfolk Island
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="MP"
                        data-name="Northern Mariana Islands" data-index="168">Northern Mariana Islands
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="NO" data-name="Norway"
                        data-index="169">Norway
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom ms-country-title" data-type="all" data-code="split"
                        data-name="O" data-index="170">O
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="OM" data-name="Oman"
                        data-index="171">Oman
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="Other" data-name="Other Country"
                        data-index="172">Other Country
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom ms-country-title" data-type="all" data-code="split"
                        data-name="P" data-index="173">P
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="PK" data-name="Pakistan"
                        data-index="174">Pakistan
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="PW" data-name="Palau"
                        data-index="175">Palau
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="PS" data-name="Palestine"
                        data-index="176">Palestine
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="PA" data-name="Panama"
                        data-index="177">Panama
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="PG" data-name="Papua New Guinea"
                        data-index="178">Papua New Guinea
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="PY" data-name="Paraguay"
                        data-index="179">Paraguay
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="PE" data-name="Peru"
                        data-index="180">Peru
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="PH" data-name="Philippines"
                        data-index="181">Philippines
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="PL" data-name="Poland"
                        data-index="182">Poland
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="PT" data-name="Portugal"
                        data-index="183">Portugal
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="PR" data-name="Puerto Rico"
                        data-index="184">Puerto Rico
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom ms-country-title" data-type="all" data-code="split"
                        data-name="Q" data-index="185">Q
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="QA" data-name="Qatar"
                        data-index="186">Qatar
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom ms-country-title" data-type="all" data-code="split"
                        data-name="R" data-index="187">R
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="RE" data-name="Reunion"
                        data-index="188">Reunion
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="RO" data-name="Romania"
                        data-index="189">Romania
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="RU" data-name="Russian Federation"
                        data-index="190">Russian Federation
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="RW" data-name="Rwanda"
                        data-index="191">Rwanda
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom ms-country-title" data-type="all" data-code="split"
                        data-name="S" data-index="192">S
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="BLM" data-name="Saint Barthelemy"
                        data-index="193">Saint Barthelemy
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="KN"
                        data-name="Saint Kitts and Nevis" data-index="194">Saint Kitts and Nevis
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="LC" data-name="Saint Lucia"
                        data-index="195">Saint Lucia
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="MAF" data-name="Saint Martin"
                        data-index="196">Saint Martin
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="VC"
                        data-name="Saint Vincent and the Grenadines" data-index="197">Saint Vincent and the Grenadines
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="WS" data-name="Samoa"
                        data-index="198">Samoa
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="SM" data-name="San Marino"
                        data-index="199">San Marino
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="ST"
                        data-name="Sao Tome and Principe" data-index="200">Sao Tome and Principe
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="SA" data-name="Saudi Arabia"
                        data-index="201">Saudi Arabia
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="SCT" data-name="Scotland"
                        data-index="202">Scotland
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="SN" data-name="Senegal"
                        data-index="203">Senegal
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="SRB" data-name="Serbia"
                        data-index="204">Serbia
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="SC" data-name="Seychelles"
                        data-index="205">Seychelles
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="SL" data-name="Sierra Leone"
                        data-index="206">Sierra Leone
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="SG" data-name="Singapore"
                        data-index="207">Singapore
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="SK"
                        data-name="Slovakia (Slovak Republic)" data-index="208">Slovakia (Slovak Republic)
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="SI" data-name="Slovenia"
                        data-index="209">Slovenia
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="SB" data-name="Solomon Islands"
                        data-index="210">Solomon Islands
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="SO" data-name="Somalia"
                        data-index="211">Somalia
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="ZA" data-name="South Africa"
                        data-index="212">South Africa
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="SGS"
                        data-name="South Georgia and the South Sandwich Islands" data-index="213">South Georgia and the
                        South Sandwich Islands
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="KR" data-name="South Korea"
                        data-index="214">South Korea
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="SS" data-name="South Sudan"
                        data-index="215">South Sudan
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="ES" data-name="Spain"
                        data-index="216">Spain
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="LK" data-name="Sri Lanka"
                        data-index="217">Sri Lanka
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="PM"
                        data-name="St. Pierre and Miquelon" data-index="218">St. Pierre and Miquelon
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="SR" data-name="Suriname"
                        data-index="219">Suriname
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="SZ" data-name="Swaziland"
                        data-index="220">Swaziland
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="SE" data-name="Sweden"
                        data-index="221">Sweden
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="CH" data-name="Switzerland"
                        data-index="222">Switzerland
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom ms-country-title" data-type="all" data-code="split"
                        data-name="T" data-index="223">T
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="TW" data-name="Taiwan"
                        data-index="224">Taiwan
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="TJ" data-name="Tajikistan"
                        data-index="225">Tajikistan
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="TZ" data-name="Tanzania"
                        data-index="226">Tanzania
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="TH" data-name="Thailand"
                        data-index="227">Thailand
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="TLS" data-name="Timor-Leste"
                        data-index="228">Timor-Leste
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="TG" data-name="Togo"
                        data-index="229">Togo
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="TO" data-name="Tonga"
                        data-index="230">Tonga
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="TT" data-name="Trinidad and Tobago"
                        data-index="231">Trinidad and Tobago
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="TN" data-name="Tunisia"
                        data-index="232">Tunisia
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="TR" data-name="Turkey"
                        data-index="233">Turkey
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="TM" data-name="Turkmenistan"
                        data-index="234">Turkmenistan
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="TC"
                        data-name="Turks and Caicos Islands" data-index="235">Turks and Caicos Islands
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="TV" data-name="Tuvalu"
                        data-index="236">Tuvalu
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom ms-country-title" data-type="all" data-code="split"
                        data-name="U" data-index="237">U
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="UG" data-name="Uganda"
                        data-index="238">Uganda
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="UA" data-name="Ukraine"
                        data-index="239">Ukraine
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="AE"
                        data-name="United Arab Emirates" data-index="240">United Arab Emirates
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="UK" data-name="United Kingdom"
                        data-index="241">United Kingdom
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="US" data-name="United States"
                        data-index="242">United States
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="UY" data-name="Uruguay"
                        data-index="243">Uruguay
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="UZ" data-name="Uzbekistan"
                        data-index="244">Uzbekistan
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom ms-country-title" data-type="all" data-code="split"
                        data-name="V" data-index="245">V
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="VU" data-name="Vanuatu"
                        data-index="246">Vanuatu
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="VA"
                        data-name="Vatican City State (Holy See)" data-index="247">Vatican City State (Holy See)
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="VE" data-name="Venezuela"
                        data-index="248">Venezuela
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="VN" data-name="Vietnam"
                        data-index="249">Vietnam
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="VG"
                        data-name="Virgin Islands (British)" data-index="250">Virgin Islands (British)
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="VI"
                        data-name="Virgin Islands (U.S.)" data-index="251">Virgin Islands (U.S.)
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom ms-country-title" data-type="all" data-code="split"
                        data-name="W" data-index="252">W
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="WF"
                        data-name="Wallis And Futuna Islands" data-index="253">Wallis And Futuna Islands
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom ms-country-title" data-type="all" data-code="split"
                        data-name="Y" data-index="254">Y
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="YE" data-name="Yemen"
                        data-index="255">Yemen
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="YU" data-name="Yugoslavia"
                        data-index="256">Yugoslavia
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom ms-country-title" data-type="all" data-code="split"
                        data-name="Z" data-index="257">Z
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="ZM" data-name="Zambia"
                        data-index="258">Zambia
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="EAZ" data-name="Zanzibar"
                        data-index="259">Zanzibar
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="ZW" data-name="Zimbabwe"
                        data-index="260">Zimbabwe
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="CW" data-name="Curacao"
                        data-index="261">Curacao
                        <div class="circle"><span></span></div>
                    </li>
                    <li class="ms-rc-ripple ms-rc-custom" data-type="all" data-code="SX" data-name="Sint Maarten"
                        data-index="262">Sint Maarten
                        <div class="circle"><span></span></div>
                    </li><!--ai-repeat-end-->
                </ul>
            </section>
        </div>
    </div>
</div>

<div class="offline-notice-bar">You are currently offline.</div>

<span style="border-radius: 3px; text-indent: 20px; width: auto; padding: 0px 4px 0px 0px; text-align: center; font-style: normal; font-variant: normal; font-weight: bold; font-stretch: normal; font-size: 11px; line-height: 20px; font-family: &quot;Helvetica Neue&quot;, Helvetica, sans-serif; color: rgb(255, 255, 255); background: url(&quot;data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMzBweCIgd2lkdGg9IjMwcHgiIHZpZXdCb3g9Ii0xIC0xIDMxIDMxIj48Zz48cGF0aCBkPSJNMjkuNDQ5LDE0LjY2MiBDMjkuNDQ5LDIyLjcyMiAyMi44NjgsMjkuMjU2IDE0Ljc1LDI5LjI1NiBDNi42MzIsMjkuMjU2IDAuMDUxLDIyLjcyMiAwLjA1MSwxNC42NjIgQzAuMDUxLDYuNjAxIDYuNjMyLDAuMDY3IDE0Ljc1LDAuMDY3IEMyMi44NjgsMC4wNjcgMjkuNDQ5LDYuNjAxIDI5LjQ0OSwxNC42NjIiIGZpbGw9IiNmZmYiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIxIj48L3BhdGg+PHBhdGggZD0iTTE0LjczMywxLjY4NiBDNy41MTYsMS42ODYgMS42NjUsNy40OTUgMS42NjUsMTQuNjYyIEMxLjY2NSwyMC4xNTkgNS4xMDksMjQuODU0IDkuOTcsMjYuNzQ0IEM5Ljg1NiwyNS43MTggOS43NTMsMjQuMTQzIDEwLjAxNiwyMy4wMjIgQzEwLjI1MywyMi4wMSAxMS41NDgsMTYuNTcyIDExLjU0OCwxNi41NzIgQzExLjU0OCwxNi41NzIgMTEuMTU3LDE1Ljc5NSAxMS4xNTcsMTQuNjQ2IEMxMS4xNTcsMTIuODQyIDEyLjIxMSwxMS40OTUgMTMuNTIyLDExLjQ5NSBDMTQuNjM3LDExLjQ5NSAxNS4xNzUsMTIuMzI2IDE1LjE3NSwxMy4zMjMgQzE1LjE3NSwxNC40MzYgMTQuNDYyLDE2LjEgMTQuMDkzLDE3LjY0MyBDMTMuNzg1LDE4LjkzNSAxNC43NDUsMTkuOTg4IDE2LjAyOCwxOS45ODggQzE4LjM1MSwxOS45ODggMjAuMTM2LDE3LjU1NiAyMC4xMzYsMTQuMDQ2IEMyMC4xMzYsMTAuOTM5IDE3Ljg4OCw4Ljc2NyAxNC42NzgsOC43NjcgQzEwLjk1OSw4Ljc2NyA4Ljc3NywxMS41MzYgOC43NzcsMTQuMzk4IEM4Ljc3NywxNS41MTMgOS4yMSwxNi43MDkgOS43NDksMTcuMzU5IEM5Ljg1NiwxNy40ODggOS44NzIsMTcuNiA5Ljg0LDE3LjczMSBDOS43NDEsMTguMTQxIDkuNTIsMTkuMDIzIDkuNDc3LDE5LjIwMyBDOS40MiwxOS40NCA5LjI4OCwxOS40OTEgOS4wNCwxOS4zNzYgQzcuNDA4LDE4LjYyMiA2LjM4NywxNi4yNTIgNi4zODcsMTQuMzQ5IEM2LjM4NywxMC4yNTYgOS4zODMsNi40OTcgMTUuMDIyLDYuNDk3IEMxOS41NTUsNi40OTcgMjMuMDc4LDkuNzA1IDIzLjA3OCwxMy45OTEgQzIzLjA3OCwxOC40NjMgMjAuMjM5LDIyLjA2MiAxNi4yOTcsMjIuMDYyIEMxNC45NzMsMjIuMDYyIDEzLjcyOCwyMS4zNzkgMTMuMzAyLDIwLjU3MiBDMTMuMzAyLDIwLjU3MiAxMi42NDcsMjMuMDUgMTIuNDg4LDIzLjY1NyBDMTIuMTkzLDI0Ljc4NCAxMS4zOTYsMjYuMTk2IDEwLjg2MywyNy4wNTggQzEyLjA4NiwyNy40MzQgMTMuMzg2LDI3LjYzNyAxNC43MzMsMjcuNjM3IEMyMS45NSwyNy42MzcgMjcuODAxLDIxLjgyOCAyNy44MDEsMTQuNjYyIEMyNy44MDEsNy40OTUgMjEuOTUsMS42ODYgMTQuNzMzLDEuNjg2IiBmaWxsPSIjYmQwODFjIj48L3BhdGg+PC9nPjwvc3ZnPg==&quot;) 3px 50% / 14px 14px no-repeat rgb(189, 8, 28); position: absolute; opacity: 1; z-index: 8675309; display: none; cursor: pointer; border: none; -webkit-font-smoothing: antialiased;">Save</span>
<span style="width: 24px; height: 24px; background: url(&quot;data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/Pjxzdmcgd2lkdGg9IjI0cHgiIGhlaWdodD0iMjRweCIgdmlld0JveD0iMCAwIDI0IDI0IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxkZWZzPjxtYXNrIGlkPSJtIj48cmVjdCBmaWxsPSIjZmZmIiB4PSIwIiB5PSIwIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHJ4PSI2IiByeT0iNiIvPjxyZWN0IGZpbGw9IiMwMDAiIHg9IjUiIHk9IjUiIHdpZHRoPSIxNCIgaGVpZ2h0PSIxNCIgcng9IjEiIHJ5PSIxIi8+PHJlY3QgZmlsbD0iIzAwMCIgeD0iMTAiIHk9IjAiIHdpZHRoPSI0IiBoZWlnaHQ9IjI0Ii8+PHJlY3QgZmlsbD0iIzAwMCIgeD0iMCIgeT0iMTAiIHdpZHRoPSIyNCIgaGVpZ2h0PSI0Ii8+PC9tYXNrPjwvZGVmcz48cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9IiNmZmYiIG1hc2s9InVybCgjbSkiLz48L3N2Zz4=&quot;) 50% 50% / 14px 14px no-repeat rgba(0, 0, 0, 0.4); position: absolute; opacity: 1; z-index: 8675309; display: none; cursor: pointer; border: none; border-radius: 12px;"></span></body></html>
<script>
    // add to cart js
    <?php $this->beginBlock('changeCartInfo') ?>
    $(document).ready(function(){
        currentUrl = "<?= Yii::$service->url->getUrl('checkout/cart') ?>"
        updateCartInfoUrl = "<?= Yii::$service->url->getUrl('checkout/cart/updateinfo') ?>"
        $(".cartqtydown").click(function(){
            $item_id = $(this).attr("rel");
            num = $(this).attr("num");
            if(num > 1){
                $data = {
                    item_id:$item_id,
                    up_type:"less_one"
                };
                jQuery.ajax({
                    async:true,
                    timeout: 6000,
                    dataType: 'json',
                    type:'get',
                    data: $data,
                    url:updateCartInfoUrl,
                    success:function(data, textStatus){
                        if(data.status == 'success'){
                            window.location.href=currentUrl;
                        }
                    },
                    error:function (XMLHttpRequest, textStatus, errorThrown){}
                });
            }
        });

        $(".cartqtyup").click(function(){
            $item_id = $(this).attr("rel");
            $data = {
                item_id:$item_id,
                up_type:"add_one"
            };
            jQuery.ajax({
                async:true,
                timeout: 6000,
                dataType: 'json',
                type:'get',
                data: $data,
                url:updateCartInfoUrl,
                success:function(data, textStatus){
                    if(data.status == 'success'){
                        window.location.href=currentUrl;
                    }
                },
                error:function (XMLHttpRequest, textStatus, errorThrown){

                }
            });

        });

        $(".btn-remove").click(function(){
            $item_id = $(this).attr("rel");

            $data = {
                item_id:$item_id,
                up_type:"remove"
            };
            jQuery.ajax({
                async:true,
                timeout: 6000,
                dataType: 'json',
                type:'get',
                data: $data,
                url:updateCartInfoUrl,
                success:function(data, textStatus){
                    if(data.status == 'success'){
                        window.location.href=currentUrl;
                    }
                },
                error:function (XMLHttpRequest, textStatus, errorThrown){}
            });

        });

        $(".add_coupon_submit").click(function(){
            coupon_code = $("#coupon_code").val();
            coupon_type = $(".couponType").val();
            coupon_url = "";
            if(coupon_type == 2){
                coupon_url = "<?=  Yii::$service->url->getUrl('checkout/cart/addcoupon'); ?>";
            }else if(coupon_type == 1){
                coupon_url = "<?=  Yii::$service->url->getUrl('checkout/cart/cancelcoupon'); ?>";
            }
            if(!coupon_code){
                alert("coupon can not empty!");
            }
            //coupon_url = $("#discount-coupon-form").attr("action");
            jQuery.ajax({
                async:true,
                timeout: 6000,
                dataType: 'json',
                type:'post',
                data: {"coupon_code":coupon_code},
                url:coupon_url,
                success:function(data, textStatus){
                    if(data.status == 'success'){
                        window.location.href=currentUrl;
                    }else if(data.content == 'nologin'){
                        window.location.href="<?=  Yii::$service->url->getUrl('customer/account/login'); ?>";
                    }else{
                        $(".coupon_add_log").html(data.content);
                    }
                },
                error:function (XMLHttpRequest, textStatus, errorThrown){}
            });
        });

        //修改发货国家
        $('#oShipCountry').change(function () {
            var shipping_country = $(this).val();
            jQuery.ajax({
                async: true,
                timeout: 6000,
                dataType: 'json',
                type: 'post',
                data: {"shipping_country": shipping_country},
                url: "<?= Yii::$service->url->getUrl('checkout/cart/updateshipping') ?>",
                success: function (data, textStatus) {
                    if (data.status == 'success') {
                        window.location.href = currentUrl;
                    } else if (data.content == 'nologin') {
                        window.location.href = "<?=  Yii::$service->url->getUrl('customer/account/login'); ?>";
                    } else {
                        $(".coupon_add_log").html(data.content);
                    }
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                }
            });
        })
        //修改发货方式
        $('#oShipMethod').change(function () {
            var oShipMethod = $(this).val();
            jQuery.ajax({
                async: true,
                timeout: 6000,
                dataType: 'json',
                type: 'post',
                data: {"shipping_method": oShipMethod},
                url: "<?= Yii::$service->url->getUrl('checkout/cart/updateshippingmethod') ?>",
                success: function (data, textStatus) {
                    if (data.status == 'success') {
                        window.location.href = currentUrl;
                    } else if (data.content == 'nologin') {
                        window.location.href = "<?=  Yii::$service->url->getUrl('customer/account/login'); ?>";
                    } else {
                        $(".coupon_add_log").html(data.content);
                    }
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                }
            });
        })
    });

    <?php $this->endBlock(); ?>
    <?php $this->registerJs($this->blocks['changeCartInfo'],\yii\web\View::POS_END);//将编写的js代码注册到页面底部 ?>
</script>