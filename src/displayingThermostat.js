// $(document).ready(function() {

 var thermostat = new Thermostat();

 $("#temperature").text(thermostat.temperature());

 $("#temperature").css({'color' : 'rgb(255, 255, 0)', 'font-size' : '200%'});

 $("#up").click(function() {
    thermostat.up();
    if (thermostat.colour() === 'green' ) {
      $("#temperature").css({'color' : 'rgb(0, 255, 0)', 'font-size' : '200%'});
    } else if (thermostat.colour() === 'yellow') {
      $("#temperature").css({'color' : 'rgb(255, 255, 0)', 'font-size' : '200%'});
    } else {
      $("#temperature").css({'color' : 'rgb(0, 255, 255)', 'font-size' : '200%'});
    }
    $("#temperature").text(thermostat.temperature());
  });

  $("#down").click(function() {
    thermostat.down();
    if (thermostat.colour() === 'green' ) {
      $("#temperature").css({'color' : 'rgb(0, 255, 0)', 'font-size' : '200%'});
    } else if (thermostat.colour() === 'yellow') {
      $("#temperature").css({'color' : 'rgb(255, 255, 0)', 'font-size' : '200%'});
    } else {
      $("#temperature").css({'color' : 'rgb(0, 255, 255)', 'font-size' : '200%'});
    }
    $("#temperature").text(thermostat.temperature());
  });

  $("#reset").click(function() {
     thermostat.resetTemp();
     if (thermostat.colour() === 'green' ) {
        $("#temperature").css({'color' : 'rgb(0, 255, 0)', 'font-size' : '200%'});
    } else if (thermostat.colour() === 'yellow') {
        $("#temperature").css({'color' : 'rgb(255, 255, 0)', 'font-size' : '200%'});
    } else {
        $("#temperature").css({'color' : 'rgb(0, 255, 255)', 'font-size' : '200%'});
    }
    $("#temperature").text(thermostat.temperature());
   });


  // if (thermostat.colour() === 'green' ) {
  //   $("#temperature").css({'color' : 'rgb(0, 255, 0)', 'font-size' : '200%'});
  // } else if (thermostat.colour() === 'yellow') {
  //   $("#temperature").css({'color' : 'rgb(255, 255, 0)', 'font-size' : '200%'});
  // } else {
  //   $("#temperature").css({'color' : 'rgb(0, 255, 255)', 'font-size' : '200%'});
  // }


// });
