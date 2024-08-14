import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SectionList } from 'react-native';
import { useFonts } from 'expo-font';
import { Divider } from 'react-native-paper';

export default function Justice({ }) {

  const [fontsLoaded] = useFonts({
    'NudMotoyaEx': require('../assets/fonts/NudMotoyaExCedarW6.ttf'),
    'MgOpen': require('../assets/fonts/MgOpenCosmeticaBold.ttf'),
  });

  const datamag = [
    {
      title: 'Rank 1',
      data: ['Don’t worry about it (+3)', 'I read the classics (+1)', 'I read manga (+1)', 'I’m having fun (+1)']
    },
    {
      title: 'Rank 2',
      data: ['They have no shame (+1)', 'I agree (+1)']
    },
    {
      title: 'Rank 3',
      data: ['I’m here for you (+3)']
    },
    {
      title: 'Rank 4',
      data: ['I’m all ears (+2)', 'Yeah, she’s in love (+3)', 'Happy to help (+2)', 'Hold her hand (+3)']
    },
    {
      title: 'Rank 5',
      data: ['Is it good? (+3)', 'What do you mean? (+1)']
    },
    {
      title: 'Rank 6',
      data: ['It’s gotta be a misunderstanding (+1)', 'We have to do something... (+1)']
    },
    {
      title: 'Rank 7',
      data: ['I know you’re innocent (+1) ']
    },
    {
      title: 'Rank 8',
      data: ['Don’t worry. She’ll help us (+2)','Chihiro is innocent (+1)', 'You need to tell her yourself (+1)', 'What’s gotten into you? (+1)', 'I feel the same, Chihiro (ROMANCE PATH!)','I like working with you, but... (PLATONIC PATH!)' ]
    },
    {
      title: 'Rank 9 (R-Path)',
      data: ['Thank you (+3)']
    },
    {
      title: 'Rank 9 (P-Path)',
      data: ['You can do it (+2)', 'I believe in you, Chihiro (+2)']
    },
    {
      title: 'Rank 10',
      data: ['Any options, since this is max rank']
    },
  ]

  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <Text style={styles.textheader}>Justice</Text>
        <StatusBar style="auto" />
      </View>

      <View style={styles.banner}>
        <Image
          source={require('../assets/characters/ChihiroFushimi.png')}
          style={styles.image}
        />
        <Text style={styles.textbanner}>
          Chihiro Fushimi
        </Text>
      </View>
      <View style={styles.bannerdown}>
        <Text style={styles.textdownbanner}>
          Available on Tuesday, Thursday and Saturdays
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