import Icon from '@expo/vector-icons/FontAwesome5';
import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

import Bold from '../../components/Bold';
import Paragraph from '../../components/Paragraph';
import Screen from '../../components/Screen';
import Section from '../../components/Section';

Home.navigationOptions = {
  tabBarIcon: ({ tintColor }) => (
    <Icon color={tintColor} name="question" size={24} />
  ),
};

export default function Home() {
  return (
    <Screen heading="About VaccTrac">
      <ScrollView style={styles.ScrollView}>
        <Section heading="Intent">
          <Paragraph>
            VaccTrac is a convenient way for heart transplant patients keep
            track of vaccinations they need to receive before their procedure,
            and get information about vaccines.
          </Paragraph>
          <Paragraph last>
            VaccTrac is not a replacement for advice from a licensed health care
            provider. A licensed health care provider should be consulted as the
            final authority regarding your vaccination schedule.
          </Paragraph>
        </Section>
        <Section heading="Disclaimer">
          <Paragraph>
            Last updated: <Bold>September 5, 2019</Bold>
          </Paragraph>
          <Paragraph>
            The information contained on VaccTrac is for general information
            purposes only. VaccTrac is not endorsed by any pharmaceutical
            company, and all images or mentions of specific vaccine brands are
            for general informational purposes only.
          </Paragraph>
          <Paragraph>
            The developer assumes no responsibility for errors or omissions in
            the contents of VaccTrac.
          </Paragraph>
          <Paragraph>
            In no event shall the developer be liable for any special, direct,
            indirect, consequential, or incidental damages or any damages
            whatsoever, whether in an action of contract, negligence or other
            tort, arising out of or in connection with the use of VaccTrac or
            the contents of VaccTrac. The developer reserves the right to make
            additions, deletions, or modification to the contents of VaccTrac at
            any time without prior notice.
          </Paragraph>
          <Paragraph>
            The developer does not warrant that the mobile app is free of
            viruses or other harmful components.
          </Paragraph>
          <Paragraph>
            VaccTrac may contain links to external resources that are not
            provided or maintained by or in any way affiliated with the
            developer.
          </Paragraph>
          <Paragraph last>
            Please note that the developer does not guarantee the accuracy,
            relevance, timeliness, or completeness of any information of these
            external resources.
          </Paragraph>
        </Section>
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  ScrollView: {
    paddingHorizontal: 20,
  },
});
