import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SectionList } from 'react-native';
import { useFonts } from 'expo-font';
import { Divider } from 'react-native-paper';

export default function Magician({ }) {

  const [fontsLoaded] = useFonts({
    'NudMotoyaEx': require('../assets/fonts/NudMotoyaExCedarW6.ttf'),
    'MgOpen': require('../assets/fonts/MgOpenCosmeticaBold.ttf'),
  });

  const datamag = [
    {
      title: 'Rank 1',
      data: ['No way (+1)', 'That’s a secret (+1)', 'Im into older women, too (+1)', 'I like them all! (+1)']
    },
    {
      title: 'Rank 2',
      data: ['What, of life? (+3)', 'Good luck! (+1)']
    },
    {
      title: 'Rank 3',
      data: ['Any Option', 'Good luck! (+3)']
    },
    {
      title: 'Rank 4',
      data: ['Okay... (+3)']
    },
    {
      title: 'Rank 5',
      data: ['Any Option', 'I’ve got plans already (+3)']
    },
    {
      title: 'Rank 6',
      data: ['What happened? (+1)', 'Bride-to-Be? (+1)', 'Congrats! (+1)']
    },
    {
      title: 'Rank 7',
      data: ['Are you in trouble? (+3)', 'You should go with her (+1)', 'You two should talk it out (+1)']
    },
    {
      title: 'Rank 8',
      data: ['Let me handle this! (+3)']
    },
    {
      title: 'Rank 9',
      data: ['You dont know when to give up... (+2)', 'You’ve got this (+2)', 'Want me to find you a girl? (+3)']
    },
    {
      title: 'Rank 10',
      data: ['Any options, since this is max rank']
    },
  ]

  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <Text style={styles.textheader}>Magician</Text>
        <StatusBar style="auto" />
      </View>

      <View style={styles.banner}>
        <Image
          source={require('../assets/characters/KenjiTomochika.png')}
          style={styles.image}
        />
        <Text style={styles.textbanner}>
          Kenji Tomochika
        </Text>
      </View>
      <View style={styles.bannerdown}>
        <Text style={styles.textdownbanner}>
          Available on Tuesday, Thursday and Fridays
        </Text>

      </View>

      <SectionList
        sections={datamag}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.title}>{item}</Text>
          </View>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <View>
            <Divider style={styles.divider} />
            <Text style={styles.headerlist}>{title}</Text>
          </View>
        )}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#303030',
  },
  header: {
    backgroundColor: '#1269cc',
  },
  textheader: {
    fontFamily: 'NudMotoyaEx',
    color: '#ffffff',
    marginTop: 90,
    marginLeft: 20,
    marginBottom: 27,
    fontSize: 27,
  },
  image: {
    width: 220,
    height: 220,
    resizeMode: 'contain',
  },
  banner: {
    backgroundColor: '#1c1c1c',
    justifyContent: 'center',
    marginTop: 30,
    alignItems: 'center',
    flexDirection: 'row',
  },
  textbanner: {
    fontFamily: 'MgOpen',
    color: '#ffffff',
    fontSize: 27,
  },
  bannerdown: {
    backgroundColor: '#1c1c1c',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  textdownbanner: {
    fontFamily: 'MgOpen',
    color: '#ffffff',
    fontSize: 20,
  },
  divider: {
    backgroundColor: '#ffffff',
    marginHorizontal: 20,
    marginTop: 10,
  },
  title: {
    fontFamily: 'MgOpen',
    marginLeft: 20,
    marginVertical: 10,
    fontSize: 16,
    color: "#ffff"
  },
  headerlist: {
    padding: 10,
    marginTop: 10,
    fontFamily: 'MgOpen',
    fontSize: 22,
    color: '#ffff'
  },
});