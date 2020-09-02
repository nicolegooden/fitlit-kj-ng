class ActivityRepository {
  constructor(activityData, userData) {
    this.activityData = activityData;
    this.userData = userData;
  }

  getUserActivityData(id) {
    let singleUserData = this.activityData.filter(dataPoint => {
      return dataPoint.userID === id;
    })
    return singleUserData;
  }

  getGeneralUserData(id) {
    let generalUserData = this.userData.find(dataPoint => {
      return dataPoint.id === id;
    })
    return generalUserData;
  }

  getActiveMinutes(id, date) {
    let singleUserData = this.getUserActivityData(id);
    let dataByDate = singleUserData.find(dataPoint => {
      return dataPoint.date === date;
    })
    return dataByDate.minutesActive;
  }

  verifyStepAchievement(id, date) {
    let singleUserActivity = this.getUserActivityData(id);
    let generalUserData = this.getGeneralUserData(id);
    let dailyStepGoal = generalUserData.dailyStepGoal;
    let dataByDate = singleUserActivity.find(dataPoint => {
      return dataPoint.date === date;
    })
    return dataByDate.numSteps >= generalUserData.dailyStepGoal ? true : false;
  }

  findRecord(id, property) {
    let singleUserActivity = this.getUserActivityData(id);
    let sortedActivityData = singleUserActivity.sort((a, b) => {
      return b[property] - a[property];
    })
    return sortedActivityData[0][property];
  }

  calculateAverageDataByDate(date, property) {
    let validDataOnDay = this.activityData.filter(dataPoint => {
      return dataPoint.date === date;
    })
    let sum = validDataOnDay.reduce((sum, dataPoint) => {
      sum += dataPoint[property];
      return sum;
    }, 0)
    return Math.floor(sum / validDataOnDay.length);
  }

  calculateAverageMinutesPerWeek(id, date) {
    let singleUserActivity = this.getUserActivityData(id);
    let validDates = singleUserActivity.map(dataPoint => {
      return dataPoint.date;
    })
    let dateIndex = validDates.indexOf(date);
    let datesForWeek = validDates.slice(dateIndex - 6,dateIndex+1);
    let filteredData = singleUserActivity.filter(dataPoint => {
      return datesForWeek.includes(dataPoint.date);
    })
    let sum = filteredData.reduce((sum, dataPoint) => {
      sum += dataPoint.minutesActive;
      return sum;
    }, 0)
    return Math.floor(sum / filteredData.length);
  }

  getUserMiles(id, date) {
    let userActivityData = this.getUserActivityData(id);
    let userStepsByDate = userActivityData.find(dataPoint => {
      return dataPoint.date === date;
    })
    let userStepsToday = userStepsByDate.numSteps;
    let userStrideLength = this.getGeneralUserData(id).strideLength;
    let milesWalked = (userStepsToday * userStrideLength)/5280;
    return parseFloat(milesWalked.toFixed(1));
  }

  verifyStepAchievementDays(id) {
    let userActivityData = this.getUserActivityData(id);
    let userStepGoal = this.getGeneralUserData(id).dailyStepGoal;
    let verifiedDataBySteps = userActivityData.filter(dataPoint => {
      return dataPoint.numSteps > userStepGoal;
    })
    let verifiedDates = verifiedDataBySteps.map(dataPoint => {
      return dataPoint.date;
    })
    return verifiedDates;
  }
}

if (typeof module !== 'undefined') {
  module.exports = ActivityRepository;
}

//add sad path test for verifyStepAchievement()
