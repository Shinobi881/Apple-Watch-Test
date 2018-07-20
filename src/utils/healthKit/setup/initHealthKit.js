import AppleHealthKit from 'rn-apple-healthkit';
import dateOfBirth from '../bioData/dateOfBirth';
import activeEnergyBurned from '../activityData/getActiveEnergyBurned';
import perms from './permissions';

/* eslint no-console: off */
export default () => AppleHealthKit
  .initHealthKit(perms, (err, results) => {
    if (err) {
      console.log('error initializing Healthkit: ', err);
      return;
    }

    dateOfBirth();
    activeEnergyBurned();

    console.log(results);
  });
