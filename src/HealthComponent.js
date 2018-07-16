import React, { Component } from 'react';
import { View, Text } from 'react-native';
import AppleHealthKit from 'rn-apple-healthkit';

const options = {
  permissions: {
    read: ['Height', 'Weight', 'StepCount', 'DateOfBirth', 'BodyMassIndex', 'ActiveEnergyBurned'],
    write: ['Height', 'Weight', 'StepCount', 'BodyMassIndex', 'Biotin', 'Caffeine', 'Calcium', 'Carbohydrates', 'Chloride', 'Cholesterol', 'Copper', 'EnergyConsumed', 'FatMonounsaturated', 'FatPolyunsaturated', 'FatSaturated', 'FatTotal', 'Fiber', 'Folate', 'Iodine', 'Iron', 'Magnesium', 'Manganese', 'Molybdenum', 'Niacin', 'PantothenicAcid', 'Phosphorus', 'Potassium', 'Protein', 'Riboflavin', 'Selenium', 'Sodium', 'Sugar', 'Thiamin', 'VitaminA', 'VitaminB12', 'VitaminB6', 'VitaminC', 'VitaminD', 'VitaminE', 'VitaminK', 'Zinc', 'Water'],
  },
};

/* eslint no-console: off */
AppleHealthKit.initHealthKit(options, (err, results) => {
  if (err) {
    console.log('error initializing Healthkit: ', err);
    return;
  }

  // Height Example
  AppleHealthKit.getDateOfBirth(null, (err2, results2) => {
    console.log('Seeing what this is: ', results2);
    /*
    if (this._handleHealthkitError(err2, 'getDateOfBirth')) {
      return;
    }
    */
    console.log(results2);
  });

  console.log(results);
});

class HealthComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { data: 'React app view' };
  }

  render() {
    const { data } = this.state;

    return (
      <View>
        <Text>{data}</Text>
      </View>
    );
  }
}

HealthComponent.displayName = 'HealthComponent';

export default HealthComponent;
