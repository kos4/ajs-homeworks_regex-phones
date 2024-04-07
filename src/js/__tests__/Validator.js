import Validator from '../classes/Validator';

test.each([
  ['8 (927) 000-00-00', '+79270000000'],
  ['+7 960 000 00 00', '+79600000000'],
  ['+86 000 000 0000', '+860000000000'],
])('conversion phone "%s" to "%s"', (phone, expected) => {
  const validator = new Validator(phone);
  expect(validator.conversionPhones()).toBe(expected);
});
