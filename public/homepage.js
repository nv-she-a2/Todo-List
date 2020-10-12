$(document).ready(function(){
    const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');
    const container = document.getElementById('container');
    
    signUpButton.addEventListener('click', () => {
        container.classList.add('right-panel-active');
    });
    
    signInButton.addEventListener('click', () => {
        container.classList.remove('right-panel-active');
    });
    $('.sign-up-container').on('submit', function(){
        var name = $('form input')[0].value;
        var email = $('form input')[1].value;
        var pwd = $('form input')[2].value;
      $.ajax({
        type: 'GET',
        url: '/',
        success: function(data){
          // alert('success on ajax get call');
          location.reload();
        }
      });
      return false;
    });
    
    $('.sign-in-container').on('submit', function(){
        var email = $('form input')[0].value;
        var pwd = $('form input')[1].value;
        $.ajax({
          type: 'GET',
          url: '/',
          success: function(data){
            // alert('success on ajax get call');
            location.reload();
          }
        });
        return false;
      });
 
  });