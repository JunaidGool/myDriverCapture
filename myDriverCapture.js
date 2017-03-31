document.getElementById("vehicleDisplayBtn").addEventListener("click", vehicleDisplay);
document.getElementById("driverDisplayBtn").addEventListener("click", driverDisplay);
document.getElementById("fuelDisplayBtn").addEventListener("click", fuelDisplay);
document.getElementById("acceptInputBtn").addEventListener("click", acceptVehicles);
document.getElementById("viewResultsBtn").addEventListener("click", displayVehicleTable);
document.getElementById("acceptDriverInputBtn").addEventListener("click", acceptDrivers);
document.getElementById("viewDriverResultsBtn").addEventListener("click", displayDriverTable);
document.getElementById("viewFuelResultsBtn").addEventListener("click", myFuelChart);
document.getElementById("acceptFuelInputBtn").addEventListener("click", fuelComparison1);
document.getElementById("acceptFuelInputBtn").addEventListener("click", fuelComparison2);


var myVehiclesScript = document.getElementById("vehiclesTableTemplate").innerHTML;
var myVehiclesTemplate = Handlebars.compile(myVehiclesScript);

var myDriversScript = document.getElementById("driversTableTemplate").innerHTML;
var myDriversTemplate = Handlebars.compile(myDriversScript);

var myDriverDropDownScript =  document.getElementById("driverDropDownTemplate").innerHTML;
var myDriverDropDownTemplate = Handlebars.compile(myDriverDropDownScript);

var myDriverDropDownScript2 =  document.getElementById("driverDropDownTemplate2").innerHTML;
var myDriverDropDownTemplate2 = Handlebars.compile(myDriverDropDownScript2);


var vehicles = [];
var drivers = [];
var fuelComparison1 = [];
var fuelComparison2 = [];


function acceptVehicles(){

  var pushVehicles = vehicles.push({vehicleID:document.getElementById("vehicleIDinput").value,
                                    vehicleMake:document.getElementById("vehicleMakeInput").value,
                                    vehicleColor:document.getElementById("vehicleColorInput").value,
                                    })

  var vehicleObjects ={
    tableVehicles: vehicles
  };

  var vehicleTableData = myVehiclesTemplate(vehicleObjects);

  document.getElementById("vehiclesTableOutput").innerHTML = vehicleTableData;

  localStorage.setItem("vehicles", JSON.stringify(vehicles));
  storedVehicles = JSON.parse(localStorage.getItem("vehicles"));

}

function acceptDrivers(){

  var pushDrivers = drivers.push({driverName:document.getElementById("driverNameInput").value,
                                  driverID:document.getElementById("driverIDinput").value,
                                  driverAddress:document.getElementById("driverAddressInput").value,
                                })

  var driverObjects ={
    tableDrivers: drivers
  };

  var driverDropDownObjects = {
    dropDownDrivers: drivers
  };

  var driverDropDownObjects2 = {
    dropDownDrivers2: drivers
  };

  var driverTableData = myDriversTemplate(driverObjects);
  document.getElementById("driversTableOutput").innerHTML = driverTableData;

  var driverDropDownData = myDriverDropDownTemplate(driverDropDownObjects);
  document.getElementById("driverDropDownOutput").innerHTML = driverDropDownData;

  var driverDropDownData2 = myDriverDropDownTemplate2(driverDropDownObjects2);
  document.getElementById("driverDropDownOutput2").innerHTML = driverDropDownData2;


  localStorage.setItem("drivers", JSON.stringify(drivers));
  storedDrivers = JSON.parse(localStorage.getItem("drivers"));

}

function fuelComparison1(){

  var pushFuelComparison1 = fuelComparison1.push({driverName:document.getElementById("driverNameSelect").value,
                            week1:document.getElementById("driverFuelCostInput").value,
                            week2:document.getElementById("driverFuelCostInput2").value,
                            week3:document.getElementById("driverFuelCostInput3").value,
                            week4:document.getElementById("driverFuelCostInput4").value,
                            })

localStorage.setItem("fuelComparison1", JSON.stringify(fuelComparison1));
storedDrivers = JSON.parse(localStorage.getItem("fuelComparison1"));

}

function fuelComparison2(){

  var pushFuelComparison2 = fuelComparison2.push({driverName:document.getElementById("driverNameSelect2").value,
                            week1:document.getElementById("driver2FuelCostInput").value,
                            week2:document.getElementById("driver2FuelCostInput2").value,
                            week3:document.getElementById("driver2FuelCostInput3").value,
                            week4:document.getElementById("driver2FuelCostInput4").value,
                           })

localStorage.setItem("fuelComparison2", JSON.stringify(fuelComparison2));
storedDrivers = JSON.parse(localStorage.getItem("fuelComparison2"));

}


function displayVehicleTable(){
  document.getElementById("vehiclesTableOutput").style.visibility = "visible";
  document.getElementById("vehiclePage").style.visibility = "hidden";
  document.getElementById("fuelPage").style.visibility = "hidden";
  document.getElementById("driverPage").style.visibility = "hidden";
  document.getElementById("acceptInputBtn").style.visibility = "hidden";
  document.getElementById("viewResultsBtn").style.visibility = "hidden";
  document.getElementById("driversTableOutput").style.visibility = "hidden";

}

function displayDriverTable(){
  document.getElementById("driversTableOutput").style.visibility = "visible";
  document.getElementById("vehiclePage").style.visibility = "hidden";
  document.getElementById("fuelPage").style.visibility = "hidden";
  document.getElementById("driverPage").style.visibility = "hidden";
  document.getElementById("acceptInputBtn").style.visibility = "hidden";
  document.getElementById("acceptDriverInputBtn").style.visibility = "hidden";

}

function vehicleDisplay() {
  document.getElementById("vehiclePage").style.visibility = "visible";
  document.getElementById("fuelPage").style.visibility = "hidden";
  document.getElementById("driverPage").style.visibility = "hidden";
  document.getElementById("acceptInputBtn").style.visibility = "visible";
  document.getElementById("viewResultsBtn").style.visibility = "visible";
  document.getElementById("vehiclesTableOutput").style.visibility = "hidden";
  document.getElementById("acceptDriverInputBtn").style.visibility = "hidden";
  document.getElementById("viewDriverResultsBtn").style.visibility = "hidden";
  document.getElementById("acceptFuelInputBtn").style.visibility = "hidden";
  document.getElementById("viewFuelResultsBtn").style.visibility = "hidden";
  document.getElementById("driversTableOutput").style.visibility = "hidden";
  document.getElementById("fuelPage2").style.visibility = "hidden";

}

function driverDisplay() {
  document.getElementById("vehiclePage").style.visibility = "hidden";
  document.getElementById("fuelPage").style.visibility = "hidden";
  document.getElementById("driverPage").style.visibility = "visible";
  document.getElementById("vehiclesTableOutput").style.visibility = "hidden";
  document.getElementById("acceptInputBtn").style.visibility = "hidden";
  document.getElementById("viewResultsBtn").style.visibility = "hidden";
  document.getElementById("acceptDriverInputBtn").style.visibility = "visible";
  document.getElementById("viewDriverResultsBtn").style.visibility = "visible";
  document.getElementById("acceptFuelInputBtn").style.visibility = "hidden";
  document.getElementById("viewFuelResultsBtn").style.visibility = "hidden";
  document.getElementById("driversTableOutput").style.visibility = "hidden";
  document.getElementById("fuelPage2").style.visibility = "hidden";

}

function fuelDisplay() {
  document.getElementById("vehiclePage").style.visibility = "hidden";
  document.getElementById("fuelPage").style.visibility = "visible";
  document.getElementById("driverPage").style.visibility = "hidden";
  document.getElementById("vehiclesTableOutput").style.visibility = "hidden";
  document.getElementById("acceptInputBtn").style.visibility = "hidden";
  document.getElementById("viewResultsBtn").style.visibility = "hidden";
  document.getElementById("acceptDriverInputBtn").style.visibility = "hidden";
  document.getElementById("viewDriverResultsBtn").style.visibility = "hidden";
  document.getElementById("acceptFuelInputBtn").style.visibility = "visible";
  document.getElementById("viewFuelResultsBtn").style.visibility = "visible";
  document.getElementById("driversTableOutput").style.visibility = "hidden";
  document.getElementById("driversTableOutput").style.visibility = "hidden";
  document.getElementById("fuelPage2").style.visibility = "visible";

}


function myFuelChart(){

var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
type: 'bar',
data: {
  labels: ['week1', 'week2', 'week3', 'week4'],
  datasets: [{
    label: [document.getElementById("driverNameSelect").value],
    data: [document.getElementById("driverFuelCostInput").value,
           document.getElementById("driverFuelCostInput2").value,
           document.getElementById("driverFuelCostInput3").value,
           document.getElementById("driverFuelCostInput4").value],
    backgroundColor: "rgba(153,255,51,0.6)"
  }, {
    label: [document.getElementById("driverNameSelect2").value],
    data: [document.getElementById("driver2FuelCostInput").value,
           document.getElementById("driver2FuelCostInput2").value,
           document.getElementById("driver2FuelCostInput3").value,
           document.getElementById("driver2FuelCostInput4").value],
    backgroundColor: "rgba(255,153,0,0.6)"
  }]
}
});

}
