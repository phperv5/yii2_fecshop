<?= Yii::$service->page->widget->render('flashmessage'); ?>
<form method="post" id="manage-address-form" action="<?= Yii::$service->url->getUrl('customer/address/edit'); ?>" class="addressedit" onsubmit="return submit_address()">
    <input name="address[address_id]" value="<?= $address_id; ?>" type="hidden">
    <input name="address[email]" value="<?= $email; ?>" type="hidden">
    <div class="wrap">
        <p style="line-height: 1.5;font-size: 12px;padding-top: 12px;">Please enter only unaccented alphabetical
            letters, A–Z or a–z.</p>
        <fieldset class="field-form address-form">
            <div class="field-item">
                <input type="text" name="address[first_name]" value="<?= $first_name ?>" placeholder="First Name"
                       id="firstname">
                <div class="underline">
                    <div class="unfocused-line"></div>
                    <div class="focused-line"></div>
                </div>
            </div>
            <div class="field-item">
                <input type="text" name="address[last_name]" value="<?= $last_name ?>" placeholder="Last Name"
                       id="lastname">
                <div class="underline">
                    <div class="unfocused-line"></div>
                    <div class="focused-line"></div>
                </div>
            </div>
            <div class="field-item">
                <div class="panel-select">
                    <span id="country-span">Country</span>
                    <i class="just-tip">Please Change</i></div>
                <input type="hidden" id="country-sel" name="address[country]" value="<?= $country ?>">
            </div>
            <div class="field-item">
                <input type="text" name="address[street1]" value="" placeholder="Street1">
                <div class="underline">
                    <div class="unfocused-line"></div>
                    <div class="focused-line"></div>
                </div>
            </div>
            <div class="field-item">
                <input type="text" name="address[street2]" value="<?= $street2 ?>" placeholder="Street2">
                <div class="underline">
                    <div class="unfocused-line"></div>
                    <div class="focused-line"></div>
                </div>
            </div>
            <div class="field-item">
                <input type="text" name="address[city]" value="<?= $city ?>" placeholder="City">
                <div class="underline">
                    <div class="unfocused-line"></div>
                    <div class="focused-line"></div>
                </div>
            </div>
            <div class="field-item">
                <div class="hidden panel-select">State<i class="just-tip">Please Select</i></div>
                <input type="text" id="state-sel" name="address[state]" value="<?= $state ?>" placeholder="State">
                <div class="underline">
                    <div class="unfocused-line"></div>
                    <div class="focused-line"></div>
                </div>
            </div>
            <div class="field-item">
                <div>
                    <input type="text" name="address[zip]" value="<?= $zip ?>" placeholder="Zip/Postal code">
                    <div class="underline">
                        <div class="unfocused-line"></div>
                        <div class="focused-line"></div>
                    </div>
                </div>
            </div>
            <div class="field-item tel">
                <div>
                    <input type="text" name="address[telephone]" value="<?= $telephone ?>" placeholder="Mobile Number">
                    <div class="underline">
                        <div class="unfocused-line"></div>
                        <div class="focused-line"></div>
                    </div>
                </div>
            </div>
            <div class="address-action">
                <input type="submit" value="Submit &amp; Save"
                       class="ui-button ui-button-main add ms-rc-ripple ms-rc-custom">
            </div>
        </fieldset>
    </div>
</form>


<div id="ai-jbaa90pm">
    <div class="ms-panel-md panel-show" id="panel-ai-jbaa90pm">
        <div class="ms-panel-header">
            <span class="ms-panel-title" data-role="panel-title">Country</span>
            <span class="ms-panel-cancel">
          <i class="ic-md ic-close-md"></i>
        </span>
        </div>
        <div class="ms-panel-bodyer" data-role="panel-body">
            <section class="ms-country-wrap" id="country-jbaa90pl">
                <ul class="ms-country-list">
                    <?php foreach ($countrySelect as $code => $c): ?>
                        <li class="ms-rc-ripple ms-rc-custom  <?php if ($cart_info['shipping_country'] == $code) echo 'selected'; ?>"
                            data-type="pop" data-code="<?= $code; ?>"
                            data-name="<?= $c; ?>" data-index="0"><?= $c; ?>
                            <div class="oShipCountry circle">
                                <span></span></div>
                        </li>
                    <?php endforeach; ?>
                </ul>
            </section>
        </div>
    </div>
</div>
<div id="ai-jbaa90po">
    <div class="ms-panel-md" id="panel-ai-jbaa90po">
        <div class="ms-panel-header">
            <span class="ms-panel-title" data-role="panel-title">Please Select</span>
            <span class="ms-panel-cancel">
          <i class="ic-md ic-close-md"></i>
                <!--anita-if-->
        </span>
        </div>
        <div class="ms-panel-bodyer" data-role="panel-body">
            <section class="ms-state-wrap">
                <ul class="ms-state-list">
                    <!--ai-repeat-start--><!--ai-repeat-end-->
                </ul>
            </section>
        </div>
    </div>
</div>

<script>
    <?php $this->beginBlock('editCustomerAddress') ?>
    $(document).ready(function () {
        $('.panel-select').bind('click', function () {
            $('#panel-ai-jbaa90pm').css('top', '0%')
        })
        $('.ms-panel-cancel').bind('click', function () {
            $('#panel-ai-jbaa90pm').css('top', '100%')
        })
        $('.circle').bind('click', function () {
            var data_code = $(this).parents('li').attr('data-code');
            var data_name = $(this).parents('li').attr('data-name');
            $("[name='address[country]']").val(data_code);
            $("#country-span").text(data_name);
            $('#panel-ai-jbaa90pm').css('top', '100%')
            getStatus(data_code);
        })
    });

    function getStatus(country) {
        ajaxurl = "<?= Yii::$service->url->getUrl('customer/address/changecountry') ?>";
        $.ajax({
            async: false,
            timeout: 8000,
            dataType: 'json',
            type: 'get',
            data: {
                'country': country,
            },
            url: ajaxurl,
            success: function (data, textStatus) {
                $(".state_html").html(data.state);
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {

            }
        });
    }

    function submit_address() {
        i = 1;
        jQuery(".addressedit input").each(function () {
            type = jQuery(this).attr("type");
            if (type != "hidden") {
                value = jQuery(this).val();
                if (!value) {
                    //alert($(this).hasClass('optional'));
                    if (!$(this).hasClass('optional')) {
                        i = 0;
                    }
                }
            }
        });

        jQuery(".addressedit select").each(function () {
            value = jQuery(this).val();
            if (!value) {
                i = 0;
            }
        });
        if (i) {
            jQuery(".addressedit").submit();
        } else {
            alert("You Must Fill All Field");
            return false;
        }
    }

    <?php $this->endBlock(); ?>
    <?php $this->registerJs($this->blocks['editCustomerAddress'], \yii\web\View::POS_END);//将编写的js代码注册到页面底部 ?>

</script>


