$(function() {
  $('.contactForm').validator({focus: false}).on('submit', function (e) {
    var $form = $(this);
    if (e.isDefaultPrevented()) {
      // handle the invalid form...
    } else {
      e.preventDefault();
      $form.find("[type=submit]").prop("disabled", true).button('loading'); //prevent submit behaviour and display preloading

       // get values from FORM
      var url                = $form.attr('action'),
          form               = $form.find('[type=submit]').val(),
          name               = $form.find('[name=name]').val(),
          names              = $form.find('[name=names]').val(),
          email              = $form.find('[name=email]').val(),
          phone              = $form.find('[name=phone]').val(),
          message            = $form.find('[name=message]').val(),
          time               = $form.find('[name=time]').val(),
          note               = new Array();

      $form.find("[name^=\"note\"]:checked").each(function() {
        if ($(this).prop("checked")) {
          var radioText = $(this).siblings().text();

          note.push($.trim(radioText));
        }
      });

      $.ajax({
        url: url,
        type: "POST",
        data: {
          form: $.trim(form),
          name: $.trim(name),
          names: $.trim(names),
          phone: $.trim(phone),
          email: $.trim(email),
          message: $.trim(message),
          time: $.trim(time),
          note: note,
        },
        cache: false,
        success: function(response) {
          // Success message
          $form.find('.success').html("<div class='alert alert-success'>");
          $form.find('.success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
            .append("</button>");
          $form.find('.success > .alert-success')
            .append("<strong>Cообщение успешно отправлено.</strong>");
          $form.find('.success > .alert-success')
            .append('</div>');
          // remove prevent submit behaviour and disable preloading
          $form.find("[type=submit]").prop("disabled", false).button('reset');  
          document.location.href="./success.html";
          //clear all fields
          $form.trigger("reset");
        },
        error: function() {
          // Fail message
          $form.find('.success').html("<div class='alert alert-danger'>");
          $form.find('.success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
            .append("</button>");
          $form.find('.success > .alert-danger').append("<strong>Письмо не отправлено. Пожалуйста, проверьте ваше интернет соединения и попробуйте еще раз!");
          $form.find('.success > .alert-danger').append('</div>');

          // remove prevent submit behaviour and disable preloading
          $form.find("[type=submit]").prop("disabled", false).button('reset'); 

          //clear all fields
          //$form.trigger("reset");
        },
      });
    }
  }); 
});
