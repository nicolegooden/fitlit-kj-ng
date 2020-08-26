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
};

module.exports = HydrationRepository;
