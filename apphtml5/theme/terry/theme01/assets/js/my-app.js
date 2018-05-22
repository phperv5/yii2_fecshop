var sidebar = {
  toggle: function(){
    var type = $('#ms-sidebar').attr('open');
    if(type){
      sidebar.hide();
    }else{
      sidebar.open();
    }
  },
  open: function(){
    $('#ms-sidebar').css('display', '');
    setTimeout(function(){
      $('.sidebar-mask').css('display', 'block');
      $('#ms-sidebar').attr('open', '');
    }, 100);
  },
  hide: function(){
    $('#ms-sidebar').removeAttr('open');
    setTimeout(function(){
      $('.sidebar-mask').css('display', 'none');
      //$('#ms-sidebar').css('display', ' none');
    }, 223);
    
  }
};
var minidrawerToggle = function(){
  $('body').click(function(){
    $('#mini-drawer-list').attr('hidden', '');
  });
  $('#ms-minidrawer').on('click', function(event){
    event.stopPropagation();
    toggle();
  });
  function toggle(){
    var type = $('#mini-drawer-list').attr('hidden');
    if(type){
       $('#mini-drawer-list').removeAttr('hidden')
    }else{
      $('#mini-drawer-list').attr('hidden', '');
    }
  }
}
var indexFun = function(){
  var indexSwiper = new Swiper ('.index-swiper', {
    autoplay: true,
    loop: true,
    autoHeight: true,
    pagination: {
      el: '.swiper-pagination',
    }
  });
};
// quantity
function quantityChange(){
  $('.quantity-add').on('click', function(){
    var $addQuantity = $(this);
    var $minQuantity = $addQuantity.siblings('.quantity-min');
    var $quantity = $addQuantity.siblings('.quantity');
    
    $quantity.val(parseInt($quantity.val()) + 1);
    $minQuantity.prop("disabled", false);
  });
  
  $('.quantity-min').on('click', function(){
    var $minQuantity = $(this);
    var $quantity = $minQuantity.siblings('.quantity');
    
    $quantity.val(parseInt($quantity.val())-1);
    if($quantity.val()==1){
      $minQuantity.prop("disabled", true);
    }
    if($quantity.val()<=0){
      $quantity.val(parseInt($quantity.val())+1);
    }
  });
  
  $('.quantity').change(function(){
    $('.quantity').val(parseInt($('.quantity').val()));
  });
};
// panel
function showPanel(dom){
  var $panel = $(dom);
  $('.ms-panel-md').removeClass('.panel-show');
  $('.ms-panel-md').css('top', '100%');
  $panel.addClass('.panel-show');
  $panel.animate({
    top: '0%'
  }, 300);
}
function hidPanel(dom){
  var $panel = $(dom);
  $panel.animate({
    top: '100%'
  }, 300);
  $('.ms-panel-md').removeClass('.panel-show');
}

function showMask(dom){
  $mask = $(dom);
  var height = $mask.height();
  $('.ms-mask').css('display', 'block');
  $mask.css('display', 'block').css('margin-top', -height/2+'px');
}
function hideMask(dom){
  $mask = $(dom);
  $('.ms-mask').css('display', 'none');
  $mask.css('display', 'none').css('margin-top', '0px');
}
var Init = function(fn){
  window.onload = function(){
    return fn;
  };
};

Init({
  indexFun: indexFun(),
  minidrawerToggle: minidrawerToggle(),
  quantityChange: quantityChange(),
});