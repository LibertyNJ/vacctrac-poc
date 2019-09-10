import React from 'react';
import PropTypes from 'prop-types';

import { StyleSheet, Text } from 'react-native';

import { connect } from 'react-redux';

import Bold from '../../../components/Bold';
import Paragraph from '../../../components/Paragraph';

export default connect(mapStateToProps)(Counter);

function mapStateToProps(state) {
  return {
    count: state.vaccinations.filter(vaccination => !isCompleted(vaccination))
      .length,
  };
}

function isCompleted({ completed }) {
  return !!completed;
}

Counter.propTypes = {
  count: PropTypes.number,
  style: PropTypes.object,
};

function Counter({ count, style }) {
  return (
    <Paragraph last style={[styles.Paragraph, style]}>
      {count ? (
        <Text>
          You have <Bold>{count.toString()}</Bold> vaccinations remaining.
        </Text>
      ) : (
        'You have completed all required vaccinations.'
      )}
    </Paragraph>
  );
}

const styles = StyleSheet.create({
  Paragraph: {},
});
