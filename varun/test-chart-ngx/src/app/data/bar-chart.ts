export var testRunsByTester = [
  {
    name: 'Tester 1',
    value: 45,
  },
  {
    name: 'Tester 2',
    value: 20,
  },
  {
    name: 'Tester 3',
    value: 42,
  },
  {
    name: 'Tester 4',
    value: 29,
  },
  {
    name: 'Tester 5',
    value: 52,
  },
];

export var testFirstPassReTestFail = [
  {
    name: 'First Pass',
    value: 20,
  },
  {
    name: 'Re-test',
    value: 42,
  },
  {
    name: 'Fail',
    value: 29,
  },
];

export var testFailureCount = [
  {
    name: 'Test 001',
    value: 4,
  },
  {
    name: 'Test 002',
    value: 2,
  },
  {
    name: 'Test 003',
    value: 13,
  },
  {
    name: 'Test 004',
    value: 5,
  },
  {
    name: 'Test 005',
    value: 10,
  },
  {
    name: 'Test 006',
    value: 9,
  },
];

export var stationsByLocation = [
  {
    name: 'India',
    value: 41,
    percentage: 33.6,
  },
  {
    name: 'US',
    value: 45,
    percentage: 36.9,
  },
  {
    name: 'Japan',
    value: 36,
    percentage: 29.5,
  },
];

export var stationUsage = [
  {
    name: 'Station 1',
    value: 41,
    percentage: 41,
  },
  {
    name: 'Station 2',
    value: 22,
    percentage: 22,
  },
  {
    name: 'Station 3',
    value: 90,
    percentage: 90,
  },
  {
    name: 'Station 4',
    value: 0,
    percentage: 0,
  },
];

export var pendingUpdatesByStatus = [
  {
    name: 'Success',
    value: 385,
    percentage: 40.2,
  },
  {
    name: 'Failure',
    value: 53,
    percentage: 5.5,
  },
  {
    name: 'Pending Install',
    value: 407,
    percentage: 42.5,
  },
  {
    name: 'Pending User Action',
    value: 22,
    percentage: 2.3,
  },
  {
    name: 'N/A',
    value: 91,
    percentage: 9.5,
  },
];

export var updateHistoryByStatus = [
  {
    name: 'Success',
    value: 183,
    percentage: 55.1,
  },
  {
    name: 'Cancelled',
    value: 90,
    percentage: 27.1,
  },
  {
    name: 'Pending User Action',
    value: 3,
    percentage: 0.9,
  },
  {
    name: 'N/A',
    value: 56,
    percentage: 16.9,
  },
];

export var releaseByStatus = [
  {
    name: 'Alpha',
    value: 20,
    percentage: 25.3,
  },
  {
    name: 'Beta',
    value: 2,
    percentage: 2.5,
  },
  {
    name: 'Release Candidate',
    value: 9,
    percentage: 11.4,
  },
  {
    name: 'Production',
    value: 48,
    percentage: 60.8,
  },
];

export var oeeScore = [
  {
    name: 'Station 1',
    value: 53,
  },
  {
    name: 'Station 2',
    value: 52,
  },
  {
    name: 'Station 3',
    value: 81,
  },
  {
    name: 'Station 4',
    value: 64,
  },
];

export var availabilityByStationInMinutes = [
  {
    name: 'May',
    series: [
      { name: 'Available Time', value: 240 },
      { name: 'Planned Down Time', value: 720 },
      { name: 'Down Time', value: 50 },
      { name: 'Utilization Time', value: 180 },
    ],
  },
  {
    name: 'June',
    series: [
      { name: 'Available Time', value: 350 },
      { name: 'Planned Down Time', value: 550 },
      { name: 'Down Time', value: 40 },
      { name: 'Utilization Time', value: 260 },
    ],
  },
  {
    name: 'July',
    series: [
      { name: 'Available Time', value: 430 },
      { name: 'Planned Down Time', value: 640 },
      { name: 'Down Time', value: 70 },
      { name: 'Utilization Time', value: 400 },
    ],
  },
  {
    name: 'Aug',
    series: [
      { name: 'Available Time', value: 280 },
      { name: 'Planned Down Time', value: 810 },
      { name: 'Down Time', value: 80 },
      { name: 'Utilization Time', value: 250 },
    ],
  },
];

export var performanceByStationInMinutes = [
  {
    name: 'May',
    series: [
      { name: 'Ideal Cycle', value: 200 },
      { name: 'First Pass', value: 200 },
      { name: 'Re-test', value: 15 },
      { name: 'Fail', value: 10 },
    ],
  },
  {
    name: 'June',
    series: [
      { name: 'Ideal Cycle', value: 400 },
      { name: 'First Pass', value: 400 },
      { name: 'Re-test', value: 20 },
      { name: 'Fail', value: 40 },
    ],
  },
  {
    name: 'July',
    series: [
      { name: 'Ideal Cycle', value: 350 },
      { name: 'First Pass', value: 350 },
      { name: 'Re-test', value: 26 },
      { name: 'Fail', value: 30 },
    ],
  },
  {
    name: 'Aug',
    series: [
      { name: 'Ideal Cycle', value: 600 },
      { name: 'First Pass', value: 600 },
      { name: 'Re-test', value: 35 },
      { name: 'Fail', value: 20 },
    ],
  },
];

export var throughputByStation = [
  {
    name: 'Station 1',
    value: 125,
  },
  {
    name: 'Station 2',
    value: 112,
  },
  {
    name: 'Station 3',
    value: 56,
  },
  {
    name: 'Station 4',
    value: 78,
  },
];

export var calibrationInfo = [
  {
    name: 'Calibrated',
    value: 45,
  },
  {
    name: 'Overdue',
    value: 32,
  },
  {
    name: 'In maintenance',
    value: 53,
  },
  {
    name: 'Upcoming',
    value: 67,
  },
  {
    name: 'Coming due (next month)',
    value: 42,
  },
  {
    name: 'Coming due (next 3 month)',
    value: 89,
  },
];
