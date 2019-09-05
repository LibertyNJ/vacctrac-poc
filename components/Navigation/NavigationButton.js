import React from 'react';
import { Button, StyleSheet, Text } from 'react-native';

export default function NavigationButton({ children, to }) {
  return (
    <Link to={to} underlayColor="#fff">
      <Text>{children}</Text>
    </Link>
  );
}

const styles = StyleSheet.create({
  button: {},
});
