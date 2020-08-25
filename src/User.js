class User {
  constructor(userData) {
    this.userData = userData;
    this.id = userData.id;
    this.name = userData.name;
    this.address = userData.address;
    this.email = userData.email;
    this.strideLength = userData.strideLength;
    this.dailyStepGoal = userData.dailyStepGoal;
    this.friends = userData.friends;
  }

  getFirstName() {
    const allUserNames = this.name.split(' ');
    return allUserNames[0];
  }
};

if (typeof module !== 'undefined') {
  module.exports = User;
};
