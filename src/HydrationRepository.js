class HydrationRepository {
  constructor(hydrationData) {
    this.hydrationData = hydrationData;
  }

  getUserHydrationData(id) {
    let userData = this.hydrationData.filter(dataPoint => {
      return dataPoint.userID === id;
    });
    return userData;
  }

  calculateAverageOunces(id) {
    let sumOfOunces = this.calculateSumOfOunces(id);
    let average = Math.floor(sumOfOunces / this.getAllOunces(id).length);
    return average;
  }

  getAllOunces(id) {
    let userData = this.getUserHydrationData(id);
    let collectiveOunces = userData.map(user => {
      return user.numOunces;
    })
    return collectiveOunces;
  }

  calculateSumOfOunces(id) {
    let allOunces = this.getAllOunces(id);
    let sumOfOunces = allOunces.reduce((sum, ounces) => {
      sum += ounces;
      return sum;
    })
    return sumOfOunces;
  }

  getUserOuncesByDate(id, date) {
    let userData = this.getUserHydrationData(id);
    let dataByDate = userData.find(dataPoint => {
      return dataPoint.date === date;
    })
    return dataByDate.numOunces;
  }

  findOuncesForWeek(id, date) {
    let ouncesData = this.getUserHydrationData(id);
    let ouncesDataDates = ouncesData.map(dataPoint => {
      return dataPoint.date;
    })
    let dateIndex = ouncesDataDates.indexOf(date);
    let datesForWeek = ouncesDataDates.slice(dateIndex - 6, dateIndex + 1);
    if (dateIndex <= 5) {
      datesForWeek = ouncesDataDates.slice(dateIndex - dateIndex, dateIndex + 1);
    }
    let filteredData = ouncesData.filter(dataPoint => {
      return datesForWeek.includes(dataPoint.date);
    })
    return filteredData;
  }

  organizeOuncesForWeek(id, date) {
    let ouncesByWeek = this.findOuncesForWeek(id, date);
    return ouncesByWeek.map(dataPoint => {
      let ouncesByDate = {
        date: dataPoint.date,
        ounces: dataPoint.numOunces
      }
      return ouncesByDate;
    })
  }
}

if (typeof module !== 'undefined') {
  module.exports = HydrationRepository;
}
