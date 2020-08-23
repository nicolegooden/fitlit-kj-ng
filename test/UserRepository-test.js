const chai = require('chai');
const expect = chai.expect;

const UserRepository = require('../src/UserRepository');

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

describe('UserRepository', () => {

  it('should be a function', () => {
    expect(UserRepository).to.be.a('function');
  });

  it('should be an instance of UserRepository', () => {
    const userRepository = new UserRepository();
    expect(userRepository).to.be.an.instanceOf(UserRepository);
  });

  it('should take a single user\'s data as an argument', () => {
    const userRepository = new UserRepository(allUserData);
    expect(userRepository.allUserData).to.deep.equal(allUserData);
  });

  it('should be able to determine user data given ID', () => {
    const userRepository = new UserRepository(allUserData);

    userRepository.getUserData(3);
    expect(userRepository.getUserData(3)).to.deep.equal(allUserData[2]);

    userRepository.getUserData(5);
    expect(userRepository.getUserData(5)).to.deep.equal(allUserData[4]);
  });

  it('should calculate the average step goal amongst all users', () => {
    const userRepository = new UserRepository(allUserData);

    userRepository.calculateAverageSteps();

    expect(userRepository.calculateAverageSteps()).to.equal(7800);
  });
});
