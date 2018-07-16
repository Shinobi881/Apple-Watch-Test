/* eslint no-console: off */
import AppleHealthKit from 'rn-apple-healthkit';

export default () => AppleHealthKit.getDateOfBirth(null, (err2, results2) => {
  console.log('Seeing what this is: ', results2);
  console.log('Test: ', AppleHealthKit);
  console.log('This: ', this);
  /*
  if (this._handleHealthkitError(err2, 'getDateOfBirth')) {
    return;
  }
  */
  console.log(results2);
});
