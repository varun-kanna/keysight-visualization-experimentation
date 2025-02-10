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
