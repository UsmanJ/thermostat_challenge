console.log("Working")

var thermostat = new Thermostat();

$( document ).ready(function() {
  $("#temp_display").text(thermostat.temperature + " Degrees");

  $("#btnUp").click(function() {
      thermostat.upTemp();
      $("#temp_display").text(thermostat.temperature + " Degrees");
  });

  $("#btnDown").click(function() {
      thermostat.downTemp();
      $("#temp_display").text(thermostat.temperature + " Degrees");
  });

  $("#btnReset").click(function() {
      thermostat.reset();
      $("#temp_display").text(thermostat.temperature + " Degrees");
  });

  $("#cbxPowerSaving").change(function() {
      thermostat.powerSavingToggle();
      $("#temp_display").text(thermostat.temperature + " Degrees");
  });
});
