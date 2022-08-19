// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = function(drivers){
    const firstTwoDrivers =drivers.slice(0, 2);
    return firstTwoDrivers;
}
    
const returnLastTwoDrivers = function(drivers){
    const lastTwoDrivers = drivers.slice(2);

    return lastTwoDrivers;

}


const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];


const createFareMultiplier = function(x){
    return function(fare){
    return  x* fare
    }
    }

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);


function selectDifferentDrivers(drivers, returnFirstTwoDrivers){
    let result = returnFirstTwoDrivers(drivers);

    return result;
}

function selectDifferentDrivers(drivers, returnLastTwoDrivers){
    let result = returnLastTwoDrivers(drivers);

    return result;
}

