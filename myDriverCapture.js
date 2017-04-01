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
document.getElementById("acceptFuelInputBtn").addEventListener("click", fuelCompareDuplication);


var myVehiclesScript = document.getElementById("vehiclesTableTemplate").innerHTML;
var myVehiclesTemplate = Handlebars.compile(myVehiclesScript);

var myDriversScript = document.getElementById("driversTableTemplate").innerHTML;
var myDriversTemplate = Handlebars.compile(myDriversScript);

var myDriverDropDownScript =  document.getElementById("driverDropDownTemplate").innerHTML;
var myDriverDropDownTemplate = Handlebars.compile(myDriverDropDownScript);

var myDriverDropDownScript2 =  document.getElementById("driverDropDownTemplate2").innerHTML;
var myDriverDropDownTemplate2 = Handlebars.compile(myDriverDropDownScript2);

var myVehicleDropDownScript =  document.getElementById("vehicleDropDownFilterTemplate").innerHTML;
var myVehicleDropDownTemplate = Handlebars.compile(myVehicleDropDownScript);

var myDriverFilterDropDownScript =  document.getElementById("driverDropDownFilterTemplate").innerHTML;
var myDriverFilterDropDownTemplate = Handlebars.compile(myDriverFilterDropDownScript);


var vehicles = [];
var drivers = [];
var fuelComparison1 = [];
var fuelComparison2 = [];

 var vehiclesTableLocation = document.getElementById("vehiclesTableOutput");
 var vehicles = "";
 if (localStorage.getItem("vehicles")){
     vehicles = JSON.parse(localStorage.getItem("vehicles"));
 }
 vehiclesTableLocation.innerHTML = myVehiclesTemplate({
       tableVehicles: vehicles
 });


 var driversTableLocation = document.getElementById("driversTableOutput");
 var drivers = "";
 if (localStorage.getItem("drivers")){
     drivers = JSON.parse(localStorage.getItem("drivers"));
 }
 driversTableLocation.innerHTML = myDriversTemplate({
       tableDrivers: drivers
 });

 var dropDownLocation = document.getElementById("driverDropDownOutput");
 // var fuelComparison1 = "";
 if (localStorage.getItem("drivers")){
     drivers = JSON.parse(localStorage.getItem("drivers"));
 }
 dropDownLocation.innerHTML = myDriverDropDownTemplate({
       dropDownDrivers: drivers
 });


 var dropDownLocation2 = document.getElementById("driverDropDownOutput2");
 // var fuelComparison2 = "";
 if (localStorage.getItem("drivers")){
     drivers = JSON.parse(localStorage.getItem("drivers"));
 }
 dropDownLocation2.innerHTML = myDriverDropDownTemplate2({
       dropDownDrivers2: drivers
 });

 var vehicleIdDropDownLocation = document.getElementById("vehicleDropDownOutput");
 if (localStorage.getItem("vehicles")){
     vehicles = JSON.parse(localStorage.getItem("vehicles"));
 }
 vehicleIdDropDownLocation.innerHTML = myVehicleDropDownTemplate({
       dropDownVehicles: vehicles
 });

 var driverNameDropDownLocation = document.getElementById("driverFilterDropDownOutput");
 if (localStorage.getItem("drivers")){
     drivers = JSON.parse(localStorage.getItem("drivers"));
 }
 driverNameDropDownLocation.innerHTML = myDriverFilterDropDownTemplate({
       driverDropDownFilter: drivers
 });





 // var fuelComparison1Location = document.getElementById("chartTemp");
 // var fuelComparison1 = "";
 // if (localStorage.getItem("fuelComparison1")){
 //     fuelComparison1 = JSON.parse(localStorage.getItem("fuelComparison1"));
 // }
 // fuelComparison1Location.innerHTML = document.getElementById("chartTemp")
 //
 //
 // var fuelComparison2Location = document.getElementById("chartTemp");
 // var fuelComparison2 = "";
 // if (localStorage.getItem("fuelComparison2")){
 //     fuelComparison2 = JSON.parse(localStorage.getItem("fuelComparison2"));
 // }
 // fuelComparison2Location.innerHTML = document.getElementById("chartTemp")





function acceptVehicles(){

  var pushVehicles = vehicles.push({vehicleID:document.getElementById("vehicleIDinput").value,
                                    vehicleMake:document.getElementById("vehicleMakeInput").value,
                                    vehicleColor:document.getElementById("vehicleColorInput").value,
                                    })

  var vehicleObjects ={
    tableVehicles: vehicles
  };

  var vehicleDropDownObjects ={
    dropDownVehicles: vehicles
  };


  var vehicleTableData = myVehiclesTemplate(vehicleObjects);
  document.getElementById("vehiclesTableOutput").innerHTML = vehicleTableData;

  var vehicleDropDownData = myVehicleDropDownTemplate(vehicleDropDownObjects);
  document.getElementById("vehicleDropDownOutput").innerHTML = vehicleDropDownData;

  document.getElementById("vehicleIDinput").value = "";
  document.getElementById("vehicleMakeInput").value = "";
  document.getElementById("vehicleColorInput").value = "";

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

  var driverDropDownFilterObjects = {
    driverDropDownFilter: drivers
  };



  var driverTableData = myDriversTemplate(driverObjects);
  document.getElementById("driversTableOutput").innerHTML = driverTableData;

  var driverDropDownData = myDriverDropDownTemplate(driverDropDownObjects);
  document.getElementById("driverDropDownOutput").innerHTML = driverDropDownData;

  var driverDropDownData2 = myDriverDropDownTemplate2(driverDropDownObjects2);
  document.getElementById("driverDropDownOutput2").innerHTML = driverDropDownData2;

  var driverFilterDropDownData = myDriverFilterDropDownTemplate(driverDropDownFilterObjects);
  document.getElementById("driverFilterDropDownOutput").innerHTML = driverFilterDropDownData;


  document.getElementById("driverNameInput").value = "";
  document.getElementById("driverIDinput").value = "";
  document.getElementById("driverAddressInput").value = "";

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

document.getElementById("vehicleDropDownOutput").addEventListener("change", displayVehicleTable);

function displayVehicleTable(evt){

  document.getElementById("vehiclesTableOutput").style.visibility = "visible";
  document.getElementById("vehiclePage").style.visibility = "hidden";
  document.getElementById("fuelPage").style.visibility = "hidden";
  document.getElementById("driverPage").style.visibility = "hidden";
  document.getElementById("acceptInputBtn").style.visibility = "hidden";
  document.getElementById("viewResultsBtn").style.visibility = "hidden";
  document.getElementById("driversTableOutput").style.visibility = "hidden";
  document.getElementById("vehicleDropDownOutput").style.visibility = "visible";

  var vehicleIdFilterSelect = document.getElementById("vehicleIdFilterSelect").value;

  var filteredVehicles = vehicles.filter(function(tableVehicles){
    var  match = true;



    if (evt.target.id === 'vehicleIdFilterSelect'){
        return tableVehicles.vehicleID === evt.target.value;
    }

    return true;
  });

  vehiclesTableLocation.innerHTML = myVehiclesTemplate({
        tableVehicles: filteredVehicles
  });

};


document.getElementById("driverFilterDropDownOutput").addEventListener("change", displayDriverTable);

function displayDriverTable(evt){
  document.getElementById("driversTableOutput").style.visibility = "visible";
  document.getElementById("vehiclePage").style.visibility = "hidden";
  document.getElementById("fuelPage").style.visibility = "hidden";
  document.getElementById("driverPage").style.visibility = "hidden";
  document.getElementById("acceptInputBtn").style.visibility = "hidden";
  document.getElementById("acceptDriverInputBtn").style.visibility = "hidden";
  document.getElementById("viewDriverResultsBtn").style.visibility = "hidden";
  document.getElementById("driverFilterDropDownOutput").style.visibility = "visible";

  var driverFilterSelect = document.getElementById("driverFilterSelect").value;

  var filteredDrivers = drivers.filter(function(tableDrivers){
    var  match = true;

    if (evt.target.id === 'driverFilterSelect'){
        return tableDrivers.driverName === evt.target.value;
    }

    return true;
  });

  driversTableLocation.innerHTML = myDriversTemplate({
        tableDrivers: filteredDrivers
  });

};

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
  document.getElementById("chartTemp").style.visibility = "hidden";
  document.getElementById("vehicleDropDownOutput").style.visibility = "hidden";
  document.getElementById("driverFilterDropDownOutput").style.visibility = "hidden";

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
  document.getElementById("chartTemp").style.visibility = "hidden";
  document.getElementById("vehicleDropDownOutput").style.visibility = "hidden";
  document.getElementById("driverFilterDropDownOutput").style.visibility = "hidden";

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
  document.getElementById("chartTemp").style.visibility = "hidden";
  document.getElementById("vehicleDropDownOutput").style.visibility = "hidden";
  document.getElementById("driverFilterDropDownOutput").style.visibility = "hidden";

  // document.getElementById("driverNameSelect").value = "";
  document.getElementById("driverFuelCostInput").value = "";
  document.getElementById("driverFuelCostInput2").value = "";
  document.getElementById("driverFuelCostInput3").value = "";
  document.getElementById("driverFuelCostInput4").value = "";

  // document.getElementById("driverNameSelect2").value = "";
  document.getElementById("driver2FuelCostInput").value = "";
  document.getElementById("driver2FuelCostInput2").value = "";
  document.getElementById("driver2FuelCostInput3").value = "";
  document.getElementById("driver2FuelCostInput4").value = "";

};

function fuelCompareDuplication (){

  if (document.getElementById("driverNameSelect").value == document.getElementById("driverNameSelect2").value) {
      document.getElementById("chartTemp").style.visibility = "hidden";

      document.getElementById("driverNameSelect").value = "";
      document.getElementById("driverNameSelect2").value = "";

      alert ("invalid - Duplicate Driver Names")
       }
};


function myFuelChart(){

  document.getElementById("vehiclePage").style.visibility = "hidden";
  document.getElementById("fuelPage").style.visibility = "hidden";
  document.getElementById("driverPage").style.visibility = "hidden";
  document.getElementById("vehiclesTableOutput").style.visibility = "hidden";
  document.getElementById("acceptInputBtn").style.visibility = "hidden";
  document.getElementById("viewResultsBtn").style.visibility = "hidden";
  document.getElementById("acceptDriverInputBtn").style.visibility = "hidden";
  document.getElementById("viewDriverResultsBtn").style.visibility = "hidden";
  document.getElementById("acceptFuelInputBtn").style.visibility = "hidden";
  document.getElementById("viewFuelResultsBtn").style.visibility = "hidden";
  document.getElementById("driversTableOutput").style.visibility = "hidden";
  document.getElementById("driversTableOutput").style.visibility = "hidden";
  document.getElementById("fuelPage2").style.visibility = "hidden";
  document.getElementById("chartTemp").style.visibility = "visible";




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

// if (document.getElementById("driverNameSelect").value == document.getElementById("driverNameSelect2").value) {
//   document.getElementById("chartTemp").style.visibility = "hidden";
//   alert ("invalid")
// }

};
