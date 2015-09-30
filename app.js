console.log("Working")

var thermostat = new Thermostat();

$( document ).ready(function() {
  $("#temp_display").text(thermostat.temperature);

  $( "#cbxPowerSaving" ).prop( "checked", true );

  $("#btnUp").click(function() {
      thermostat.upTemp();
      $("#temp_display").text(thermostat.temperature);
  });

  $("#btnDown").click(function() {
      thermostat.downTemp();
      $("#temp_display").text(thermostat.temperature);
  });

  $("#btnReset").click(function() {
      thermostat.reset();
      $("#temp_display").text(thermostat.temperature);
  });

  $("#cbxPowerSaving").click(function() {
      thermostat.powerSavingToggle();
      $("#temp_display").text(thermostat.temperature);
  });
});
