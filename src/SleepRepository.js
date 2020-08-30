class SleepRepository {
  constructor(sleepData) {
    this.sleepData = sleepData;
  }

  getUserSleepData(id) {
    let userData = this.sleepData.filter(dataPoint => {
      return dataPoint.userID === id;
    })
    return userData;
  }

  calculateAverageHoursOrQuality(id, property) {
    let data = this.getUserSleepData(id);
    let propertyData = data.map(dataPoint => {
      return dataPoint[property];
    })
    let totalProperty = propertyData.reduce((sum, propertyPerDay) => {
      sum += propertyPerDay;
      return sum;
    })
    let average = totalProperty / propertyData.length;
    return parseFloat(average.toFixed(1));
  }

  getHoursOrQualityByDate(id, date, property) {
    let userData = this.getUserSleepData(id);
    let dataByDate = userData.find(dataPoint => {
      return dataPoint.date === date;
    })
    return dataByDate[property];
  }

  findWeeklySleepData(date, id) {
    let propertyData = this.getUserSleepData(id);
    let propertyDataDates = propertyData.map(dataPoint => {
      return dataPoint.date;
    })
    let dateIndex = propertyDataDates.indexOf(date);
    let datesForWeek = propertyDataDates.slice(dateIndex - 6,dateIndex+1);
    let filteredData = propertyData.filter(dataPoint => {
      return datesForWeek.includes(dataPoint.date);
    })
    return filteredData;
  }

  getHoursOrQualityPerWeek(date, id, property) {
    let dataByWeek = this.findWeeklySleepData(date, id);
    return dataByWeek.map(dataPoint => {
      let dataByDate = {
        date: dataPoint.date,
        [property]: dataPoint[property]
      }
      return dataByDate;
    })
  }

  calculateAverageQualityForAll() {
    let allSleepQuality = this.sleepData.map(dataPoint => {
      return dataPoint.sleepQuality;
    })
    let totalQuality = allSleepQuality.reduce((sum, quality) => {
      sum += quality;
      return sum;
    })
    let average = totalQuality / allSleepQuality.length;
    return parseFloat(average.toFixed(1));
  }

  findUsersWithGoodQuality(date) {
    //dataset: this.sleepData (all users)
    //grab dates from date + past week
    //get full object of data in an array (length 7)
    //filter (sleep quality > 3)
    //return user IDs in an array
    let validDates = [];
    this.sleepData.forEach(dataPoint => {
      if (!(validDates.includes(dataPoint.date))) {
        validDates.push(dataPoint.date);
      }
    })
    let dateIndex = validDates.indexOf(date);
    let datesForWeek = validDates.slice(dateIndex - 6,dateIndex+1);
    let filteredData = this.sleepData.filter(dataPoint => {
      return datesForWeek.includes(dataPoint.date);
    })
    let allUserID = [];
    this.sleepData.forEach(dataPoint => {
      if (!(allUserID.includes(dataPoint.userID))) {
        allUserID.push(dataPoint.userID);
      }
    })
    let averages = allUserID.map(dataPoint => {
      return this.calculateAverageHoursOrQuality(dataPoint, 'sleepQuality');
    })
    let averagesGreaterThanThree = averages.filter(average => {
      return average > 3;
    })
    console.log(averagesGreaterThanThree)
  }
}
//we want the data to stay withing an object that lists the ID and sleep quality
//then for each ID, add up the sleep quality value
//then we will find the average of the user's sleep quality by diving by entries.length
//the sleep quality property reassigned to be the average.
//then return the ID of the object based on whether or not the sleep qiality value
  //which is now the average, is over 3. 


if (typeof module !== 'undefined') {
  module.exports = SleepRepository;
}
