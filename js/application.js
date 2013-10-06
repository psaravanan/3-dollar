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
     $(this).ajaxSubmit({
        type: $(this).attr("method"),
        url: $(this).attr("action"),
        data: $(this).serialize(),
        beforeSubmit: function() {
            //if (!confirm("Are you sure?")){
             // return false;
            //}
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


  $(".rwrupload_artwork_form").submit(function() {
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


  $(".feedback_form").submit(function() {
      console.log($(this).attr("action"));
        $.ajax({
          url: $(this).attr("action"),
          type: 'POST',
          data: $(this).serialize(),
          beforeSend: function() {
             console.log('before send');
             //$(".form_status").hide();
             //$(".form_loader").show();
          },
          success: function(data) {
            //$(".form_loader").hide();
            //$(".form_status").empty().show();
            //$(".form_status").html(data);
            $(".feedback_form")[0].reset();
            $('#fpi_title').click();
            alert("Thank You for your valuable feedback.");
            console.log('data');
            console.log(data);
          }
        });
        return false;
  });  
});