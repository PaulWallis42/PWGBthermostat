describe('Thermostat', function() {

  beforeEach(function(){
      jasmine.getFixtures().fixturesPath = '.';
      loadFixtures('index.html');
    });

  it('displays default temperature', function(){
    expect('#temperature').toContainText('20');
  });

  it('increases temperature with up button', function(){
   $("#up").click();
   expect('#temperature').toContainText('21');
  });

  it('decreases temperature with down button', function(){
    $("#down").click();
    expect('#temperature').toContainText('19');
  });

  it('can reset the temperature to 20 by hitting the reset button', function(){
    $("#up").click();
    $("#up").click();
    $("#reset").click()
    expect('#temperature').toContainText('20');
  });

  it ("should css check colour", function() {
    expect($('#temperature').css("color")).toEqual('rgb(255, 255, 0)');

  });

});
