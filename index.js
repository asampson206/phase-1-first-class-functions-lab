const returnFirstTwoDrivers = function([name1, name2]){
return [name1, name2]
}

const returnLastTwoDrivers = function([name1, name2, name3, name4]){
    return [name3, name4]
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(Number){
    return function(number){return number * number}
}
const fareDoubler = function(fare){return fare * 2}
const fareTripler = function(fare){return fare * 3}

function selectDifferentDrivers(driverArray, callBack){
if(callBack === returnFirstTwoDrivers){return [driverArray[0], driverArray[1]]}
if (callBack === returnLastTwoDrivers){return [driverArray[2], driverArray[3]]}
}