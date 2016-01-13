$(function() {
    $( "#datePickerHidden1" ).datepicker({
       onSelect: function(dateText, inst) { 
           var currentDay = inst.currentDay;
           var currentMonth = inst.currentMonth + 1;
           var currentYear = inst.currentYear;
           $('#Field13-1').val(currentMonth);
           $('#Field13-2').val(currentDay);
           $('#Field13').val(currentYear);
       }
   });
   $("#calendarButton1").click(function(e) {
       e.preventDefault();
      $('#datePickerHidden1').datepicker("show"); 
   });
});

$(function() {
    $( "#datePickerHidden2" ).datepicker({
       onSelect: function(dateText, inst) { 
           var currentDay = inst.currentDay;
           var currentMonth = inst.currentMonth + 1;
           var currentYear = inst.currentYear;
           $('#Field23-1').val(currentMonth);
           $('#Field23-2').val(currentDay);
           $('#Field23').val(currentYear);
       }
   });
   $("#calendarButton2").click(function(e) {
       e.preventDefault();
      $('#datePickerHidden2').datepicker("show"); 
   });
});