describe("Thermostat", function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it("should start off at 20 degrees", function() {
    expect(thermostat.temperature).toEqual(20);
  });

  it("temperature increases by 1 degree using up function", function() {
    thermostat.upTemp();
    expect(thermostat.temperature).toEqual(21);
  });

  it("temperature decreases by 1 degree using down function", function() {
    thermostat.downTemp();
    expect(thermostat.temperature).toEqual(19);
  });

  it("temperature can not do below 10 degrees", function() {
    thermostat.temperature = 10
    expect(function() { thermostat.downTemp();
  }).toThrowError("Minimum temperature is 10 degrees");
  });

  it("power saving to be on when initialized", function() {
    expect(thermostat.powerSavingOn).toBe(true);
  });

  it("power saving to be off when turned off", function() {
    thermostat.powerSavingToggle();
    expect(thermostat.powerSavingOn).toBe(false);
  });

  it("when power saving is on, max temp is 25", function() {
    thermostat.temperature = 25
    expect(function() { thermostat.upTemp();
  }).toThrowError("Power saving 'on', can not go above 25 degrees");
  });

  it("when power saving is off, max temp is 32", function() {
    thermostat.powerSavingToggle();
    thermostat.temperature = 32
    expect(function() { thermostat.upTemp();
  }).toThrowError("Power saving 'off', can not go above 32 degrees");
  });

  it("will reset temperature to 20 when resetting", function() {
    thermostat.temperature = 25
    thermostat.reset();
    expect(thermostat.temperature).toEqual(20);
  });

  it("will return to 25 degrees if power saving is turned on", function() {
    thermostat.powerSavingToggle();
    thermostat.temperature = 30
    thermostat.powerSavingToggle();
    expect(thermostat.temperature).toEqual(25);
  });
});
