// $(document).ready(function() {

 var thermostat = new Thermostat();

 $("#temperature").html(thermostat.temperature());


 $( "#up" ).click(function() {
    thermostat.up(); 
 $("#temperature").text(thermostat.temperature());
  });

 $( "#down" ).click(function() {
    thermostat.down(); 
 $("#temperature").text(thermostat.temperature());
  });
// });