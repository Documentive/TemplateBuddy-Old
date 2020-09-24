$(document).ready(function() {

    $('input[type=radio][name=template]').change(function() {
      console.log($(this).attr('id'));
    })

});
