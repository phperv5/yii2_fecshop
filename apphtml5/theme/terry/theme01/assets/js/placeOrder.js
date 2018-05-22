var placeOrderAction = function(){
  // paymentCompont
  $('#paymentCompont .select-part').on('click', function(){
    var $parents = $(this).parents('.select-item');
    $('#paymentCompont .icon-outer').removeClass('selected');
    $(this).find('.icon-outer').addClass('selected');
    $('#paymentCompont .pay_ex_desc').css('display', 'none')
    $parents.find('.pay_ex_desc').css('display', 'block');
  });
}
// init
Init({
  placeOrderAction: placeOrderAction(),
});