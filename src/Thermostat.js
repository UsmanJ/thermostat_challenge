function Thermostat() {
  this.temperature = 20;
  this.powerSavingOn = true;
  this.maxTemp = 25
  this.minTemp = 10
};

Thermostat.prototype.powerSavingToggle = function() {
    this.powerSavingOn = !this.powerSavingOn
    this.maxTemp = this.powerSavingOn ? 25 : 32;
    if (this.temperature > this.maxTemp) {
      this.temperature = this.maxTemp
    };
};

Thermostat.prototype.reset = function() {
    this.temperature = 20;
  };

Thermostat.prototype.upTemp = function() {
    if (this.powerSavingOn === true && this.temperature >= 25) {
      throw Error("Power saving 'on', can not go above 25 degrees");
    } else if (this.powerSavingOn === false && this.temperature >= 32) {
      throw Error("Power saving 'off', can not go above 32 degrees");
    } else {
      this.temperature++;
    };
  };

Thermostat.prototype.downTemp = function() {
  if (this.temperature <= 10) {
    throw Error("Minimum temperature is 10 degrees");
  };
  this.temperature--;
};
