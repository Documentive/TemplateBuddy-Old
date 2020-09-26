$(document).ready(function() {

    $('#generate-resume').click(function() {
      $.ajax({
          url: "/templateselect",
          type: "post",
          data: {"id": $('input[type=radio][name=template]:checked').attr('id')},
          dataType: "json",
          success: function(result) {
            Swal.fire({
              icon: result.icon,
              title: result.title,
              text: result.text
            });
          }
      });
    });

    $("#logout").click(function() {
      $.ajax({
        url: "/logout",
        type: "get",
        success: function(result) {
          Swal.fire({
            icon: result.icon,
            title: result.title,
            text: result.text
          }).then(function() {
            if(result.icon == 'success')
              location.href = '/';
          });
        }
      });
    });

});
