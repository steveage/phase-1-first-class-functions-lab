// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers) {
    return [drivers[0], drivers[1]];
}

const returnLastTwoDrivers = function(drivers) {
    return [drivers[drivers.length-2], drivers[drivers.length-1]];
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multiplier) {
    return multiplyFare;
}

function multiplyFare(multiplier) {
    return multiplier*multiplier;
}

function fareDoubler(fare) {
    return fare*2;
}

function fareTripler(fare) {
    return fare*3;
}

function selectDifferentDrivers(drivers, driverSelector) {
    return driverSelector(drivers);
}