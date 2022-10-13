// Code your solution in this file!
const returnFirstTwoDrivers = driversArray => driversArray.slice(0, 2);

const returnLastTwoDrivers = driversArray => driversArray.slice(-2);

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(intValue) {
    return fareForRide => fareForRide * intValue;
}

const functionReturnedFareMultiplier  = createFareMultiplier(anyValue);
function fareDoubler(functionReturnedFareMultiplier){
    return functionReturnedFareMultiplier * 2;
}

function fareTripler(functionReturnedFareMultiplier){
    return functionReturnedFareMultiplier * 3;
}


function selectDifferentDrivers(arrayNamesOfDrivers, driverFunctions) {
    if (driverFunctions === returnFirstTwoDrivers) {
        return arrayNamesOfDrivers.slice(0, 2);
    } else {
        return arrayNamesOfDrivers.slice(-2);
    }
}
