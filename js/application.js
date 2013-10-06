$(function() {
  $('a[href*=#]:not([href=#]).smoth_scroll').click(function() {
    console.log("application js called");
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
        || location.hostname == this.hostname) {

      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });

  $("#feedback").feedBackBox();

  $('a[rel*=facebox]').facebox();

  $('.carousel').carousel({
    interval: 100
  });

  $(".upload_artwork_form").submit(function() {
      console.log($(this).attr("action"));
        $.ajax({
          url: $(this).attr("action"),
          type: 'POST',
          data: $(this).serialize(),
          beforeSend: function() {
             console.log('before send');
             $(".form_status").hide();
             $(".form_loader").show();
          },
          success: function(data) {
            $(".form_loader").hide();
            $(".form_status").empty().show();
            $(".form_status").html(data);
            console.log('data');
            console.log(data);
          }
        });
        return false;
  });
});