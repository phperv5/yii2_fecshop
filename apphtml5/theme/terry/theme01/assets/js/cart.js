var cartAction = function(){
  $('#coupon-code .coupon-item').on('click', function(){
    $(this).addClass('selected').siblings('.coupon-item').removeClass('selected');
    $(this).find('.coupon-textfield').focus();
  });
  $('#free-shipping .coupon-item').on('click', function(){
    $(this).addClass('selected').siblings('.coupon-item').removeClass('selected');
  });
};
// init
Init({
  cartAction: cartAction(),
});