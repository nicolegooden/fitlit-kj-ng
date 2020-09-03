const chai = require('chai');
const expect = chai.expect;

const HydrationRepository = require('../src/HydrationRepository');

const hydrationData = [
  {
    "userID": 1,
    "date": "2019/06/15",
    "numOunces": 37
  },
  {
    "userID": 2,
    "date": "2019/06/15",
    "numOunces": 75
  },
  {
    "userID": 3,
    "date": "2019/06/15",
    "numOunces": 47
  },
  {
    "userID": 1,
    "date": "2019/06/16",
    "numOunces": 69
  },
  {
    "userID": 2,
    "date": "2019/06/16",
    "numOunces": 91
  },
  {
    "userID": 3,
    "date": "2019/06/16",
    "numOunces": 99
  },
  {
    "userID": 1,
    "date": "2019/06/17",
    "numOunces": 96
  },
  {
    "userID": 2,
    "date": "2019/06/17",
    "numOunces": 96
  },
  {
    "userID": 3,
    "date": "2019/06/17",
    "numOunces": 28
  },
  {
    "userID": 1,
    "date": "2019/06/18",
    "numOunces": 61
  },
  {
    "userID": 2,
    "date": "2019/06/18",
    "numOunces": 70
  },
  {
    "userID": 3,
    "date": "2019/06/18",
    "numOunces": 40
  },
  {
    "userID": 1,
    "date": "2019/06/19",
    "numOunces": 91
  },
  {
    "userID": 2,
    "date": "2019/06/19",
    "numOunces": 76
  },
  {
    "userID": 3,
    "date": "2019/06/19",
    "numOunces": 85
  },
  {
    "userID": 1,
    "date": "2019/06/20",
    "numOunces": 50
  },
  {
    "userID": 2,
    "date": "2019/06/20",
    "numOunces": 71
  },
  {
    "userID": 3,
    "date": "2019/06/20",
    "numOunces": 51
  },
  {
    "userID": 1,
    "date": "2019/06/21",
    "numOunces": 50
  },
  {
    "userID": 2,
    "date": "2019/06/21",
    "numOunces": 27
  },
  {
    "userID": 3,
    "date": "2019/06/21",
    "numOunces": 41
  },
  {
    "userID": 1,
    "date": "2019/06/22",
    "numOunces": 43
  },
  {
    "userID": 2,
    "date": "2019/06/22",
    "numOunces": 58
  },
  {
    "userID": 3,
    "date": "2019/06/22",
    "numOunces": 78
  },
  {
    "userID": 1,
    "date": "2019/06/23",
    "numOunces": 39
  },
  {
    "userID": 2,
    "date": "2019/06/23",
    "numOunces": 44
  },
  {
    "userID": 3,
    "date": "2019/06/23",
    "numOunces": 35
  }
]

describe('Hydration Repository', () => {

  it('should be a function', () => {
    expect(HydrationRepository).to.be.a('function');
  });

  it('should be an instance of HydrationRepository', () => {
    let hydrationRepository = new HydrationRepository();

    expect(hydrationRepository).to.be.an.instanceOf(HydrationRepository);
  });

  it('should take all users\'s hydration data as an argument', () => {
    let hydrationRepository = new HydrationRepository(hydrationData);

    expect(hydrationRepository.hydrationData).to.deep.equal(hydrationData);
  });

  it('should be able to find all of a user\'s data based on ID', () => {
    let hydrationRepository = new HydrationRepository(hydrationData);

    hydrationRepository.getUserHydrationData(3);

    let userData = hydrationData.filter(dataPoint => {
      return dataPoint.userID === 3;
    });

    expect(hydrationRepository.getUserHydrationData(3)).to.deep.equal(userData);
  });

  it('should calculate the average fluid ounces consumed per day for all time', () => {
    let hydrationRepository = new HydrationRepository(hydrationData);

    hydrationRepository.calculateAverageOunces(1);

    expect(hydrationRepository.calculateAverageOunces(1)).to.equal(59);
  });

  it('should determine how many fluid ounces they consumed for a specific day', () => {
    let hydrationRepository= new HydrationRepository(hydrationData);
    let specificUserDate = hydrationData[0].date;

    hydrationRepository.getUserOuncesByDate(1, specificUserDate);

    expect(hydrationRepository.getUserOuncesByDate(1, specificUserDate)).to.equal(37);
  });

  it('should determine how many fluid ounces of water are consumed each day over the course of a week', () => {
    let hydrationRepository= new HydrationRepository(hydrationData);

    let ouncesByDate = [
      { date: '2019/06/15', ounces: 37 },
      { date: '2019/06/16', ounces: 69 },
      { date: '2019/06/17', ounces: 96 },
      { date: '2019/06/18', ounces: 61 },
      { date: '2019/06/19', ounces: 91 },
      { date: '2019/06/20', ounces: 50 },
      { date: '2019/06/21', ounces: 50 }
    ];
    hydrationRepository.findOuncesForWeek(1, "2019/06/21")
    hydrationRepository.organizeOuncesForWeek(1, "2019/06/21");

    expect(hydrationRepository.organizeOuncesForWeek(1, "2019/06/21")).to.deep.equal(ouncesByDate);
    expect(hydrationRepository.organizeOuncesForWeek(1, "2019/06/21").length).to.equal(7);
  });
});
