$(document).ready(function(){

  $('form').on('submit', function(){
    var item = $('form input');
    var todo = {item: item.val(), done: false};
    $.ajax({
      type: 'POST',
      url: '/todo',
      data: todo,
      success: function(data){
        //alert('success on ajax post call');
        location.reload();
      }
    });
    return false;

  });

  $('.close').on('click', function(){
    var prev = $(this.previousSibling)[0];
    var val= prev.value.replace(/ /g, "-");
    $.ajax({
      type: 'DELETE',
      url: '/todo/'+val,
      success: function(data){
        // alert('success on ajax delete call');
        location.reload();
      }
    });
    return false;
  });
  var item;
  $('.input').on('dblclick',function(){
    var list_item = $(this)[0];
    item = list_item.value;
    $('.input').attr('readonly',false);
    list_item.focus();
  });

  $('.input').on('focusout',function(){
    var input = $(this)[0].value;
    var todo = {item: input, done: false};
    item = item.replace(/ /g, "-");
    $.ajax({
      type: 'PUT',
      url: '/todo/'+item,
      data: todo,
      success: function(data){
        //alert('success on ajax put call');
        location.reload();
      }
    });
    return false;
  });

});