var vire_uxRecorder = require('../lib/app');
var a=10, b=5;
test('Mytestfunction_add1', () => {
  expect(vire_uxRecorder.mytestfunction_add1(a,b)).toBe(15);
});

