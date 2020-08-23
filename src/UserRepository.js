class UserRepository {
  constructor(allUserData) {
    this.allUserData = allUserData;
  }

  getUserData(id) {
    const matchingID = this.allUserData.find(data => {
      return data.id === id;
    });
    return matchingID;
  }

  calculateAverageSteps() {
    const goalTotal = this.getStepGoalSum();
    const averageGoal = goalTotal / this.allUserData.length;
    return averageGoal;
  }

  getStepGoals() {
    const userInfo = this.allUserData.map(data => {
      const userStepGoalNumber = "dailyStepGoal";
      return data[userStepGoalNumber];
    });
    return userInfo;
  }

  getStepGoalSum() {
    const userStepGoals = this.getStepGoals();
    const allStepGoals = userStepGoals.reduce((sum, userStepGoal) => {
      sum += userStepGoal;
      return sum;
    });
    return allStepGoals;
  }
};

module.exports = UserRepository;
