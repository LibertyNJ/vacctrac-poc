import React from 'react';
import { StyleSheet, Text, View, SectionList } from 'react-native';

export default function Body() {
  return (
    <View style={styles.view}>
      <Text style={styles.sectionHeader}>
        What does this vaccine protect me from?
      </Text>
      <Text>
        <Text style={{ fontWeight: 'bold' }}>TETANUS (T)</Text> causes painful
        tightening of the muscles. It can cause “locking” of the jaw so you
        cannot open your mouth or swallow. About 1 person out of 5 who get
        tetanus dies.
      </Text>
      <Text>
        <Text style={{ fontWeight: 'bold' }}>DIPHTHERIA (D)</Text> can cause
        breathing problems, paralysis, and heart failure. Before vaccines,
        diphtheria killed tens of thousands of children every year in the United
        States.
      </Text>
      <Text>
        <Text style={{ fontWeight: 'bold' }}>PERTUSSIS (aP)</Text>, also known
        as Whooping Cough, causes coughing spells so bad that it is hard for
        infants and children to eat, drink, or breathe. It can cause pneumonia,
        seizures, brain damage, or death.
      </Text>
      <Text style={styles.sectionHeader}>
        What does this vaccine protect me from?
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  sectionHeader: { fontWeight: 'bold', marginBottom: 16 },
  view: { padding: 16 },
});
