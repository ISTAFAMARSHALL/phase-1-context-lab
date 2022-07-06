/* Your Code Here */

function createEmployeeRecord(array){
        
    const obj = {

        firstName:array[0],
        familyName:array[1],
        title:array[2],
        payPerHour:array[3],
        timeInEvents: [],
        timeOutEvents: [],
    }

    // console.log(obj)
    return obj 

}

function createEmployeeRecords(array){

    // console.log(array.map((e) => createEmployeeRecord(e)))
    
return array.map((e) => createEmployeeRecord(e))


}

function createTimeInEvent(dateStamp){

    let [date, hour] = dateStamp.split(' ')
    
    const obj = {
        
        type: "TimeIn",
        hour: parseInt(hour, 10),
        date: date,
        
    };

    // console.log(obj)
    this.timeInEvents.push(obj)
    // console.log(this.timeInEvents)
    // console.log(this)
    return this

}

// let bpRecord = createEmployeeRecord(["Byron", "Poodle", "Mascot", 3])
// createTimeInEvent.call(bpRecord, "2014-02-28 1400")

function createTimeOutEvent(dateStamp){
 
    let [date, hour] = dateStamp.split(' ')
    
    const obj = {
        
        type: "TimeOut",
        hour: parseInt(hour, 10),
        date: date,
        
    };

    this.timeOutEvents.push(obj)

    return this

}

function hoursWorkedOnDate(dateStamp){

    const timeIn = this.timeInEvents.find(function (e) {
        return e.date == dateStamp
    })

    const timeOut = this.timeOutEvents.find(function (e) {
        return e.date == dateStamp
    })

    const  hours = ((timeOut.hour - timeIn.hour) / 100)

    return hours

}

// cRecord = createEmployeeRecord(["Julius", "Caesar", "General", 1000])
// createTimeInEvent.call(cRecord, "2044-03-14 0900")
// createTimeOutEvent.call(cRecord, "2044-03-14 1500")
// hoursWorkedOnDate.call(cRecord, "2044-03-14")
// cRecord = createEmployeeRecord(["Julius", "Caesar", "General", 27])
// createTimeInEvent.call(cRecord, "2044-03-15 0900")
// createTimeOutEvent.call(cRecord, "2044-03-15 2300")
// wagesEarnedOnDate.call(cRecord, "2044-03-15")


function wagesEarnedOnDate(dateStamp) {

    return ((hoursWorkedOnDate.call(this,dateStamp)) * this.payPerHour)

}

// cRecord = createEmployeeRecord(["Julius", "Caesar", "General", 27])
// createTimeInEvent.call(cRecord, "2044-03-15 0900")
// createTimeOutEvent.call(cRecord, "2044-03-15 1100")
// wagesEarnedOnDate.call(cRecord, "2044-03-15")

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })
    
    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!
    return payable
}

// cRecord = createEmployeeRecord(["Julius", "Caesar", "General", 27])
// // Earns 324
// // createTimeInEvent.call(cRecord, "2044-03-14 0900")
// // createTimeOutEvent.call(cRecord, "2044-03-14 2100")
// // Earns 54
// createTimeInEvent.call(cRecord, "2044-03-15 0900")
// createTimeOutEvent.call(cRecord, "2044-03-15 1100")
// // 324 + 54
// allWagesFor.call(cRecord)


function findEmployeeByFirstName(rec,fn){

    const emp = rec.find(function (e) {
        return e.firstName == fn
    })

    return emp

}

function calculatePayroll(array) {



    for (const items of array) {

        const d = items.timeInEvents.map((e) => e.date)

        const wages = d.reduce(function(total, d) {

        console.log(total + wagesEarnedOnDate.call(items, d))

        return total + wagesEarnedOnDate.call(items, d)

        })
    
        

    }


}


const csvDataEmployees = [
    ["Thor", "Odinsson", "Electrical Engineer", 45],
    ["Loki", "Laufeysson-Odinsson", "HR Representative", 35],
    ["Natalia", "Romanov", "CEO", 150],
    ["Darcey", "Lewis", "Intern", 15],
    ["Jarvis", "Stark", "CIO", 125],
    ["Anthony", "Stark", "Angel Investor", 300]
  ]

  const csvTimesIn = [
    ["Thor", ["2018-01-01 0800", "2018-01-02 0800", "2018-01-03 0800"]],
    ["Loki", ["2018-01-01 0700", "2018-01-02 0700", "2018-01-03 0600"]],
    ["Natalia", ["2018-01-03 1700", "2018-01-05 1800", "2018-01-03 1300"]],
    ["Darcey", ["2018-01-01 0700", "2018-01-02 0800", "2018-01-03 0800"]],
    ["Jarvis", ["2018-01-01 0500", "2018-01-02 0500", "2018-01-03 0500"]],
    ["Anthony", ["2018-01-01 1400", "2018-01-02 1400", "2018-01-03 1400"]]
  ]

  const csvTimesOut = [
    ["Thor", ["2018-01-01 1600", "2018-01-02 1800", "2018-01-03 1800"]],
    ["Loki", ["2018-01-01 1700", "2018-01-02 1800", "2018-01-03 1800"]],
    ["Natalia", ["2018-01-03 2300", "2018-01-05 2300", "2018-01-03 2300"]],
    ["Darcey", ["2018-01-01 1300", "2018-01-02 1300", "2018-01-03 1300"]],
    ["Jarvis", ["2018-01-01 1800", "2018-01-02 1800", "2018-01-03 1800"]],
    ["Anthony", ["2018-01-01 1600", "2018-01-02 1600", "2018-01-03 1600"]]
  ]

  let employeeRecords = createEmployeeRecords(csvDataEmployees)
            employeeRecords.forEach(function (rec) {
              let timesInRecordRow = csvTimesIn.find(function (row) {
                return rec.firstName === row[0]
              })

              let timesOutRecordRow = csvTimesOut.find(function (row) {
                return rec.firstName === row[0]
              })

              timesInRecordRow[1].forEach(function(timeInStamp){
                createTimeInEvent.call(rec, timeInStamp)
              })

              timesOutRecordRow[1].forEach(function(timeOutStamp){
                createTimeOutEvent.call(rec, timeOutStamp)
              })
            }) 
            calculatePayroll(employeeRecords)