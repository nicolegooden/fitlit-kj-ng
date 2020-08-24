const chai = require('chai');
const expect = chai.expect;

const User = require('../src/User');

const allUserData = [
  {
    "id": 1,
    "name": "Kathryn Jackson",
    "address": "100 E Belleview Avenue, Manhattan NY 19901-1697",
    "email": "Kathryn.Jackson1@hotmail.com",
    "strideLength": 4.9,
    "dailyStepGoal": 20000,
    "friends": [
      2,
      3,
      4
    ]
  },
  {
    "id": 2,
    "name": "Nicole Gooden",
    "address": "3456 Cheerful View, Seattle WA 07273",
    "email": "Nicole.Gooden1@gmail.com",
    "strideLength": 1.5,
    "dailyStepGoal": 3500,
    "friends": [
      1,
      3,
      5
    ]
  },
  {
    "id": 3,
    "name": "Bob Gu",
    "address": "578 Cotton Creek Dr, Boston MA 85126-5660",
    "email": "BobIsCool@yahoo.com",
    "strideLength": 2.5,
    "dailyStepGoal": 4000,
    "friends": [
      1,
      2,
      4,
      5
    ]
  },
  {
    "id": 4,
    "name": "Travis Rollins",
    "address": "300 Maple Avenue, San Diego CA 23720-3230",
    "email": "TravisIsDope@hotmail.com",
    "strideLength": 4.6,
    "dailyStepGoal": 4500,
    "friends": [
      1,
      2,
      3
    ]
  },
  {
    "id": 5,
    "name": "Brigette Doelp",
    "address": "981 Fun Lane, Denver CO 55023-6523",
    "email": "BrigettesFloops@gmail.com",
    "strideLength": 2.8,
    "dailyStepGoal": 7000,
    "friends": [
      3,
      4
    ]
  }
];

describe('User', () => {

  it.skip('should be a function', () => {
    expect(User).to.be.a('function');
  });

  it.skip('should be an instance of User', () => {
    const user = new User();

    expect(user).to.be.an.instanceOf(User);
  });

  it.skip('should take user\'s data as an argument', () => {
    const userData = allUserData[1];
    const user = new User(userData);

    expect(user.userData).to.deep.equal(userData);
  });

  it.skip('should hold on to the user properties from userData object', () => {
    const userData = allUserData[2];
    const user = new User(userData);

    expect(user.id).to.equal(userData.id);
    expect(user.name).to.equal(userData.name);
    expect(user.address).to.equal(userData.address);
    expect(user.email).to.equal(userData.email);
    expect(user.strideLength).to.equal(userData.strideLength);
    expect(user.dailyStepGoal).to.equal(userData.dailyStepGoal);
    expect(user.friends).to.deep.equal(userData.friends);
  });

  it.skip('should return user\'s first name', () => {
    //will use split method to separate the first and last name
    //return the first[0] index of that new array
    const userData = allUserData[4];
    const user = new User(userData);

    user.getFirstName();

    expect(user.getFirstName()).to.equal('Brigette')
  });
});
