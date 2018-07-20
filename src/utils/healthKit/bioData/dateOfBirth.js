/* eslint no-console: off */
import AppleHealthKit from 'rn-apple-healthkit';

export default () => AppleHealthKit
  .getDateOfBirth(null, (err, dob) => {
    if (err) console.log('Error: ', err);

    console.log('Date of birth: ', dob);
  });
