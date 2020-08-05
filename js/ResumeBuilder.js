  var id_count = 1;
  $('.add').on('click', function() {
    var source = $('.form-holder:first'), clone = source.clone();
    clone.find(':input').attr('id', function(i, val) {
      return val + id_count;
    });
    clone.appendTo('.form-holder-append');
    id_count++;
  });

// Removing Form Field
$('body').on('click', '.remove', function() {
    var closest = $(this).closest('.form-holder').remove();
  });