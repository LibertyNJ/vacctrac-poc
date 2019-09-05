import React from 'react';
import { Button, StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import { addVaccinationDose } from '../../../../../actions/creators';

export default connect(
  null,
  mapDispatchToProps
)(AddDoseButton);

function mapDispatchToProps(dispatch, ownProps) {
  return {
    handlePress: () => dispatch(addVaccinationDose(ownProps.id)),
  };
}

function AddDoseButton({ handlePress }) {
  return (
    <View>
      <Button
        onPress={handlePress}
        style={styles.button}
        title="I need another dose"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  button: {},
});
