const mockedRequest = {
  protocols: [
    'prioritize-mech',
    'furthest-enemies',
    'assist-allies'],
  scan: [
    {
      coordinates: { x: 0, y: 40 },
      enemies: { type: 'soldier', number: 10 }
    },
    {
      coordinates: { x: 95, y: 80 },
      allies: 5,
      enemies: { type: 'mech', number: 1 }
    },
    {
      coordinates: { x: 0, y: 90 },
      allies: 5,
      enemies: { type: 'mech', number: 1 }
    }
  ]
};

module.exports = mockedRequest;
