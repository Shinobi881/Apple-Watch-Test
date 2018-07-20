import AppleHealthKit from 'rn-apple-healthkit';

const d = new Date(2016, 7, 14);
const options = {
  startDate: (d).toISOString(), // required
  endDate: (new Date()).toISOString(), // optional; default now
};

/* eslint no-console: off */
export default () => AppleHealthKit
  .getActiveEnergyBurned(options, (err, res) => {
    if (err) {
      return;
    }


    console.log('Activity data: ', res);
  });
