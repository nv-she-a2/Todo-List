$(document).ready(function(){

  $('form').on('submit', function(){
    var item = $('form input');
    var todo = {item: item.val()};
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
    var parent = $(this.parentNode);
    var val= parent[0].textContent.replace(/ /g, "-");
    val = val.substring(0, val.length-1);
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
  $('.list').on('dblclick',function(){
    var list_item = $(this)[0];
    item = list_item.innerText.replace(/ /g, "-");
    list_item.innerText = "";
    list_item.nextElementSibling.style.display = 'block';
    list_item.nextElementSibling.focus();
  });

  $('.input').on('focusout',function(){
    var input = $(this)[0].value;
    var todo = {item: input};
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