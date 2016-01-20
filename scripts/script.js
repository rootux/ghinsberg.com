$(function () {
    var datePickerOptions = {  
  		format: 'MM/DD/YYYY'
  	};  
    
  	$('#datetimepicker1')
      .datetimepicker(datePickerOptions)
      .on('dp.change', function(ev) {
          var date = ev.date;
          var day = date.date();
          var month = date.month() + 1;
          var year = date.year();
          $('#date-month-1').val(month);
          $('#date-day-1').val(day);
          $('#date-year-1').val(year);
      });

    $('#datetimepicker2')
      .datetimepicker(datePickerOptions)
      .on('dp.change', function(ev) {
          var date = ev.date;
          var day = date.date();
          var month = date.month() + 1;
          var year = date.year();
          $('#date-month-2').val(month);
          $('#date-day-2').val(day);
          $('#date-year-2').val(year);
      });

    $('#form2').submit(function(e) {
      $('#saveForm').css('cursor','wait');
      $('body').css('cursor','wait');
      return true;
    });

    $('#form3').submit(function(e) {
      $('#saveForm').css('cursor','wait');
      $('body').css('cursor','wait');
      return true;
    });
});