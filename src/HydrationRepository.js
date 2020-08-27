let moment = require('moment');

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
    let myDate = moment(date).add(1, 'd');
    let olderDate = myDate.clone().subtract(8, 'd');
    let userData = this.getUserHydrationData(id);
    return userData.filter(dataPoint => {
      return moment(dataPoint.date).isBetween(olderDate, myDate);
    })
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

module.exports = HydrationRepository;
