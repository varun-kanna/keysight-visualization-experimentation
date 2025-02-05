export var testRunsByStats = [
  {
    name: 'Pass',
    value: 189,
    percentage: 48.5,
  },
  {
    name: 'Error',
    value: 57,
    percentage: 14.6,
  },
  {
    name: 'Aborted',
    value: 41,
    percentage: 10.5,
  },
  {
    name: 'Not Set',
    value: 103,
    percentage: 26.4,
  },
];

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

export var testTimeDistribution = [
  {
    name: 'Minimum',
    series: [
      { name: 'Test 001', value: 230 },
      { name: 'Test 002', value: 220 },
      { name: 'Test 003', value: 225 },
      { name: 'Test 004', value: 235 },
      { name: 'Test 005', value: 230 },
      { name: 'Test 006', value: 240 },
    ],
  },
  {
    name: 'Lower Quartile',
    series: [
      { name: 'Test 001', value: 245 },
      { name: 'Test 002', value: 235 },
      { name: 'Test 003', value: 245 },
      { name: 'Test 004', value: 238 },
      { name: 'Test 005', value: 247 },
      { name: 'Test 006', value: 250 },
    ],
  },
  {
    name: 'Median',
    series: [
      { name: 'Test 001', value: 255 },
      { name: 'Test 002', value: 250 },
      { name: 'Test 003', value: 248 },
      { name: 'Test 004', value: 252 },
      { name: 'Test 005', value: 258 },
      { name: 'Test 006', value: 260 },
    ],
  },
  {
    name: 'Upper Quartile',
    series: [
      { name: 'Test 001', value: 260 },
      { name: 'Test 002', value: 265 },
      { name: 'Test 003', value: 255 },
      { name: 'Test 004', value: 270 },
      { name: 'Test 005', value: 272 },
      { name: 'Test 006', value: 268 },
    ],
  },
  {
    name: 'Maximum',
    series: [
      { name: 'Test 001', value: 280 },
      { name: 'Test 002', value: 285 },
      { name: 'Test 003', value: 275 },
      { name: 'Test 004', value: 282 },
      { name: 'Test 005', value: 286 },
      { name: 'Test 006', value: 278 },
    ],
  },
  {
    name: 'Outlier',
    series: [
      { name: 'Test 001', value: 360 },
      { name: 'Test 002', value: 420 },
      { name: 'Test 004', value: 400 },
    ],
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

export var testFirstPassFinalYieldRate = [
  {
    name: 'First Pass Yield',
    series: [
      { name: 'May', value: 39 },
      { name: 'June', value: 30 },
      { name: 'July', value: 42 },
      { name: 'Aug', value: 52 },
    ],
  },
  {
    name: 'Final Yield',
    series: [
      { name: 'May', value: 45 },
      { name: 'June', value: 50 },
      { name: 'July', value: 45 },
      { name: 'Aug', value: 34 },
    ],
  },
];

export var testLimitTest = [
  {
    name: 'Upper Limit',
    value: 10,
  },
  {
    name: 'Pass',
    value: 5,
  },
  {
    name: 'Fail',
    value: 12,
  },
  {
    name: 'Anomaly',
    value: 17,
  },
  {
    name: 'False Failure',
    value: 9.5,
  },
  {
    name: 'Lower Limit',
    value: 1,
  },
];

export var testCPK = [
  {
    name: 'Test 001',
    value: 3.4,
  },
  {
    name: 'Test 002',
    value: 4,
  },
  {
    name: 'Test 003',
    value: 3.7,
  },
  {
    name: 'Test 004',
    value: 3.2,
  },
  {
    name: 'Test 005',
    value: 4.1,
  },
  {
    name: 'Test 006',
    value: 3.6,
  },
];

export var stationsByStatus = [
  {
    name: 'Online',
    value: 41,
    percentage: 25.5,
  },
  {
    name: 'Offline',
    value: 45,
    percentage: 28.0,
  },
  {
    name: 'Idle',
    value: 36,
    percentage: 22.4,
  },
  {
    name: 'Error',
    value: 18,
    percentage: 11.2,
  },
  {
    name: 'No Station',
    value: 19,
    percentage: 11.8,
  },
  {
    name: 'Post Install Action Required',
    value: 2,
    percentage: 1.2,
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

export var instrumentsByStatus = [
  {
    name: 'Online',
    value: 174,
    percentage: 79.1,
  },
  {
    name: 'Offline',
    value: 12,
    percentage: 5.5,
  },
  {
    name: 'Down for Maintenance',
    value: 7,
    percentage: 3.2,
  },
  {
    name: 'Due for Calibration',
    value: 5,
    percentage: 2.3,
  },
  {
    name: 'Unknown',
    value: 22,
    percentage: 10.0,
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

export var numStationsByStatus = [
  {
    name: 'Online',
    value: 41,
    percentage: 25.5,
  },
  {
    name: 'Offline',
    value: 45,
    percentage: 28.0,
  },
  {
    name: 'Idle',
    value: 36,
    percentage: 22.4,
  },
  {
    name: 'Error',
    value: 18,
    percentage: 11.2,
  },
  {
    name: 'No Station',
    value: 21,
    percentage: 13.0,
  },
];

export var instrumentsByStatus = [
  {
    name: 'Online',
    value: 174,
    percentage: 79.1,
  },
  {
    name: 'Offline',
    value: 12,
    percentage: 5.5,
  },
  {
    name: 'Down for Maintenance',
    value: 7,
    percentage: 3.2,
  },
  {
    name: 'Due for Calibration',
    value: 5,
    percentage: 2.3,
  },
  {
    name: 'Unknown',
    value: 22,
    percentage: 10.0,
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

export var availQuantPerfOEE = [
  {
    name: 'Availability',
    series: [
      { name: 'May', value: 78 },
      { name: 'June', value: 90 },
      { name: 'July', value: 75 },
      { name: 'Aug', value: 53 },
    ],
  },
  {
    name: 'Quality',
    series: [
      { name: 'May', value: 75 },
      { name: 'June', value: 73 },
      { name: 'July', value: 95 },
      { name: 'Aug', value: 52 },
    ],
  },
  {
    name: 'Performance',
    series: [
      { name: 'May', value: 92 },
      { name: 'June', value: 90 },
      { name: 'July', value: 98 },
      { name: 'Aug', value: 81 },
    ],
  },
  {
    name: 'OEE',
    series: [
      { name: 'May', value: 89 },
      { name: 'June', value: 96 },
      { name: 'July', value: 75 },
      { name: 'Aug', value: 64 },
    ],
  },
];

export var availabilityByStationInMinutes = [
  {
    name: 'Available Time',
    series: [
      { name: 'May', value: 240 },
      { name: 'June', value: 350 },
      { name: 'July', value: 430 },
      { name: 'Aug', value: 280 },
    ],
  },
  {
    name: 'Planned Down Time',
    series: [
      { name: 'May', value: 720 },
      { name: 'June', value: 550 },
      { name: 'July', value: 640 },
      { name: 'Aug', value: 810 },
    ],
  },
  {
    name: 'Down Time',
    series: [
      { name: 'May', value: 50 },
      { name: 'June', value: 40 },
      { name: 'July', value: 70 },
      { name: 'Aug', value: 80 },
    ],
  },
  {
    name: 'Utilization Time',
    series: [
      { name: 'May', value: 180 },
      { name: 'June', value: 260 },
      { name: 'July', value: 400 },
      { name: 'Aug', value: 250 },
    ],
  },
];

export var performanceByStationInMinutes = [
  {
    name: 'Ideal Cycle',
    series: [
      { name: 'May', value: 200 },
      { name: 'June', value: 400 },
      { name: 'July', value: 350 },
      { name: 'Aug', value: 600 },
    ],
  },
  {
    name: 'First Pass',
    series: [
      { name: 'May', value: 200 },
      { name: 'June', value: 400 },
      { name: 'July', value: 350 },
      { name: 'Aug', value: 600 },
    ],
  },
  {
    name: 'Re-test',
    series: [
      { name: 'May', value: 15 },
      { name: 'June', value: 20 },
      { name: 'July', value: 26 },
      { name: 'Aug', value: 35 },
    ],
  },
  {
    name: 'Fail',
    series: [
      { name: 'May', value: 10 },
      { name: 'June', value: 40 },
      { name: 'July', value: 30 },
      { name: 'Aug', value: 20 },
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

export var assetStatus = [
  {
    name: 'Connected',
    value: 798,
  },
  {
    name: 'Non-detectable',
    value: 20,
  },
  {
    name: 'Disconnected',
    value: 7,
  },
];

export var instrumentAlarms = [
  {
    name: 'Measurement/general alarms',
    backgroundColor: '#FFE4E1',
    series: [
      {
        name: 'Frequency out of range',
        value: {
          severity: 'Critical',
          severityColor: '#FF6B6B',
          type: 'Window Alarm - High-high/low-low',
          networkAnalyzer: true,
          signalGenerator: true,
          signalAnalyzer: true,
          powerSupply: false,
        },
      },
      {
        name: 'Frequency threshold',
        value: {
          severity: 'Medium',
          severityColor: '#FFD700',
          type: 'Window Alarm - High/low',
          networkAnalyzer: true,
          signalGenerator: true,
          signalAnalyzer: true,
          powerSupply: false,
        },
      },
      {
        name: 'Frequency deviation',
        value: {
          severity: 'Medium',
          severityColor: '#FFD700',
          type: 'Rate-of-Change Alarm',
          networkAnalyzer: true,
          signalGenerator: true,
          signalAnalyzer: true,
          powerSupply: false,
        },
      },
      {
        name: 'Frequency instability',
        value: {
          severity: 'Medium',
          severityColor: '#FFD700',
          type: 'Input Fault Alarm',
          networkAnalyzer: true,
          signalGenerator: true,
          signalAnalyzer: true,
          powerSupply: false,
        },
      },
      {
        name: 'Voltage out of range',
        value: {
          severity: 'Hard',
          severityColor: '#FA8072',
          type: 'Window Alarm - High-high/low-low',
          networkAnalyzer: false,
          signalGenerator: false,
          signalAnalyzer: false,
          powerSupply: true,
        },
      },
      {
        name: 'Voltage threshold',
        value: {
          severity: 'Soft',
          severityColor: '#87CEEB',
          type: 'Window Alarm - High/low',
          networkAnalyzer: false,
          signalGenerator: false,
          signalAnalyzer: false,
          powerSupply: true,
        },
      },
      {
        name: 'Voltage deviation',
        value: {
          severity: 'Soft',
          severityColor: '#87CEEB',
          type: 'Rate-of-Change Alarm',
          networkAnalyzer: false,
          signalGenerator: false,
          signalAnalyzer: false,
          powerSupply: true,
        },
      },
      {
        name: 'Voltage instability',
        value: {
          severity: 'Soft',
          severityColor: '#87CEEB',
          type: 'Input Fault Alarm',
          networkAnalyzer: false,
          signalGenerator: false,
          signalAnalyzer: false,
          powerSupply: true,
        },
      },
      {
        name: 'Power out of range',
        value: {
          severity: 'Hard',
          severityColor: '#FA8072',
          type: 'Window Alarm - High-high/low-low',
          networkAnalyzer: false,
          signalGenerator: false,
          signalAnalyzer: false,
          powerSupply: true,
        },
      },
      {
        name: 'Power threshold',
        value: {
          severity: 'Soft',
          severityColor: '#87CEEB',
          type: 'Window Alarm - High/low',
          networkAnalyzer: false,
          signalGenerator: false,
          signalAnalyzer: false,
          powerSupply: true,
        },
      },
    ],
  },
  {
    name: 'Device related',
    backgroundColor: '#90EE90',
    series: [
      {
        name: 'Thermal shutdown',
        value: {
          severity: 'Hard',
          severityColor: '#FA8072',
          type: 'Limit Alarm',
          networkAnalyzer: false,
          signalGenerator: false,
          signalAnalyzer: false,
          powerSupply: true,
        },
      },
      {
        name: 'Temperature out of range',
        value: {
          severity: 'Hard',
          severityColor: '#FA8072',
          type: 'Window Alarm - High-high/low-low',
          networkAnalyzer: true,
          signalGenerator: true,
          signalAnalyzer: true,
          powerSupply: true,
        },
      },
      {
        name: 'Temperature threshold',
        value: {
          severity: 'Soft',
          severityColor: '#87CEEB',
          type: 'Window Alarm - High/low',
          networkAnalyzer: true,
          signalGenerator: true,
          signalAnalyzer: true,
          powerSupply: true,
        },
      },
      {
        name: 'Fan/cooling failure',
        value: {
          severity: 'Hard',
          severityColor: '#FA8072',
          type: 'Input Fault Alarm',
          networkAnalyzer: false,
          signalGenerator: false,
          signalAnalyzer: true,
          powerSupply: false,
        },
      },
    ],
  },
  {
    name: 'System related',
    backgroundColor: '#98FB98',
    series: [
      {
        name: 'Network connectivity',
        value: {
          severity: 'Soft',
          severityColor: '#87CEEB',
          type: 'Input Fault Alarm',
          networkAnalyzer: true,
          signalGenerator: true,
          signalAnalyzer: true,
          powerSupply: false,
        },
      },
      {
        name: 'Disconnected cable',
        value: {
          severity: 'Soft',
          severityColor: '#87CEEB',
          type: 'Input Fault Alarm',
          networkAnalyzer: true,
          signalGenerator: true,
          signalAnalyzer: true,
          powerSupply: true,
        },
      },
      {
        name: 'Open/short circuit',
        value: {
          severity: 'Hard',
          severityColor: '#FA8072',
          type: 'Input Fault Alarm',
          networkAnalyzer: true,
          signalGenerator: true,
          signalAnalyzer: true,
          powerSupply: true,
        },
      },
      {
        name: 'Signal loss',
        value: {
          severity: 'Soft',
          severityColor: '#87CEEB',
          type: 'Input Fault Alarm',
          networkAnalyzer: true,
          signalGenerator: true,
          signalAnalyzer: true,
          powerSupply: false,
        },
      },
      {
        name: 'On Instrument Errors',
        value: {
          severity: 'Soft',
          severityColor: '#87CEEB',
          type: 'Self-Diagnostic Alarm',
          networkAnalyzer: true,
          signalGenerator: true,
          signalAnalyzer: true,
          powerSupply: true,
        },
      },
    ],
  },
];

export var alarmsRules = [
  {
    name: 'Device related',
    backgroundColor: '#FFE4E1',
    series: [
      {
        name: 'Thermal shutdown',
        value: {
          severity: 'Hard',
          severityColor: '#FA8072',
          type: 'Limit Alarm',
          alertRule: '',
        },
      },
      {
        name: 'Temperature out of range',
        value: {
          severity: 'Hard',
          severityColor: '#FA8072',
          type: 'Window Alarm - High-high/low-low',
          alertRule: '',
        },
      },
      {
        name: 'Temperature threshold',
        value: {
          severity: 'Soft',
          severityColor: '#87CEEB',
          type: 'Window Alarm - High/low',
          alertRule: '',
        },
      },
      {
        name: 'Temperature deviation',
        value: {
          severity: 'Soft',
          severityColor: '#87CEEB',
          type: 'Rate-of-Change Alarm',
          alertRule: '',
        },
      },
      {
        name: 'Fan/cooling failure',
        value: {
          severity: 'Hard',
          severityColor: '#FA8072',
          type: 'Input Fault Alarm',
          alertRule: '',
        },
      },
      {
        name: 'Cal status',
        value: {
          severity: 'Soft',
          severityColor: '#87CEEB',
          type: 'Self-Diagnostic Alarm',
          alertRule: '',
        },
      },
      {
        name: 'Over-load (current/voltage)',
        value: {
          severity: 'Hard',
          severityColor: '#FA8072',
          type: 'Self-Diagnostic Alarm',
          alertRule: '',
        },
      },
      {
        name: 'Firmware update',
        value: {
          severity: 'Soft',
          severityColor: '#87CEEB',
          type: 'Self-Diagnostic Alarm',
          alertRule: '',
        },
      },
      {
        name: 'Internal components (pc board/conductor/...) failures',
        value: {
          severity: 'Hard',
          severityColor: '#FA8072',
          type: 'Self-Diagnostic Alarm',
          alertRule: '',
        },
      },
      {
        name: 'File save error',
        value: {
          severity: 'Soft',
          severityColor: '#87CEEB',
          type: 'Self-Diagnostic Alarm',
          alertRule: '',
        },
      },
      {
        name: 'Self-test failure',
        value: {
          severity: 'Hard',
          severityColor: '#FA8072',
          type: 'Self-Diagnostic Alarm',
          alertRule: '',
        },
      },
      {
        name: 'Usage',
        value: {
          severity: 'Soft',
          severityColor: '#87CEEB',
          type: '',
          alertRule: '',
        },
      },
    ],
  },
  {
    name: 'System related',
    backgroundColor: '#FFE4E1',
    series: [
      {
        name: 'Network connectivity',
        value: {
          severity: 'Soft',
          severityColor: '#87CEEB',
          type: 'Input Fault Alarm',
          alertRule: '',
        },
      },
      {
        name: 'Disconnected cable',
        value: {
          severity: 'Soft',
          severityColor: '#87CEEB',
          type: 'Input Fault Alarm',
          alertRule: '',
        },
      },
      {
        name: 'Open/short circuit',
        value: {
          severity: 'Hard',
          severityColor: '#FA8072',
          type: 'Input Fault Alarm',
          alertRule: '',
        },
      },
      {
        name: 'Signal loss',
        value: {
          severity: 'Soft',
          severityColor: '#87CEEB',
          type: 'Input Fault Alarm',
          alertRule: '',
        },
      },
    ],
  },
];
