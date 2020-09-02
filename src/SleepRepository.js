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

  findDatesForWeek(date) {
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
    return filteredData;
  }

  getValidID(date) {
    let filteredData = this.findDatesForWeek(date);
    let userIDS = [];
    filteredData.forEach(object => {
      if (!(userIDS.includes(object.userID))) {
        userIDS.push(object.userID);
      }
    })
    return userIDS;
  }

  organizeSleepQualityPerUser(date) {
    let filteredData = this.findDatesForWeek(date);
    let sleepQualityByUser = filteredData.reduce((finalData, entry) => {
      let key = entry.userID;
      if (!finalData[key]) {
        finalData[key] = [entry.sleepQuality];
      } else {
        finalData[key].push(entry.sleepQuality);
      }
      return finalData;
    }, {})
    return sleepQualityByUser;
  }

  calculateAverageUserQuality(date, id) {
    let validIDList = this.getValidID(date);
    let sleepQualityByUser = this.organizeSleepQualityPerUser(date);
    validIDList.forEach(id => {
      let individualData = sleepQualityByUser[id];
      let total = individualData.reduce((sum, index) => {
        sum += index;
        return sum;
      }, 0)
      let average = total / individualData.length;
      sleepQualityByUser[id] = parseFloat(average.toFixed(1));
    })
    return sleepQualityByUser[id];
  }


  findUsersWithGoodQuality(date) {
    let filteredData = this.findDatesForWeek(date);
    let validIDList = this.getValidID(date);
    let sleepQualityByUser = this.organizeSleepQualityPerUser(date);
    validIDList.forEach(id => {
      let individualData = sleepQualityByUser[id];
      let total = individualData.reduce((sum, index) => {
        sum += index;
        return sum;
      }, 0)
      let average = total / individualData.length;
      sleepQualityByUser[id] = parseFloat(average.toFixed(1));
    })
    let bestSleepers = [];
    validIDList.forEach(id => {
      if (sleepQualityByUser[id] > 3) {
        bestSleepers.push(id);
      }
    })
    return bestSleepers;
  }

  findUserWithBestDataByDate(date, property) {
    let userIDS = [];
    this.sleepData.forEach(dataPoint => {
      if (!(userIDS.includes(dataPoint.userID))) {
        userIDS.push(dataPoint.userID);
      }
    })
    const filteredSleepData = this.sleepData.filter( dataPoint => {
      return dataPoint.date === date;
    })
    let sortedSleepData = filteredSleepData.sort((sleepDataA,sleepDataB) => {
      return sleepDataB[property] - sleepDataA[property];
    })
    let winners = sortedSleepData.filter(dataPoint => {
      return dataPoint[property] === sortedSleepData[0][property];
    })
    return winners.map(winner => {
      return winner.userID;
    })
  }
}


if (typeof module !== 'undefined') {
  module.exports = SleepRepository;
}
