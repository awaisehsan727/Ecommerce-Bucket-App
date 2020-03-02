import React from 'react';
import {StyleSheet, ScrollView, View, Text, SectionList,TouchableOpacity} from 'react-native';

export default class Topselection extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <SectionList
          sections={[
            {
              title: 'Top Google Seaches in 2018',
              data: [
                'World Cup',
                'Avicii',
                'Mac Miller',
                'Stan Lee',
                'Black Panther',
              ],
            },
            {
              title: 'Top News Trends of 2018',
              data: [
                'World Cup',
                'Hurricane Florence',
                'Mega Millions Result',
                'Royal Wedding',
                'Election Results',
              ],
            },
            {
              title: 'Top Searched Movies of 2018',
              data: [
                'Black Panther',
                'Dead Pool 2',
                'Venom',
                'Avengers: Infinity War',
                'Bohemian Rhapsody',
              ],
            },
            {
              title: 'Top Searched Athelte of 2018',
              data: [
                'Tristan Thompson',
                'Alexis Sánchez',
                'Lindsey Vonn',
                'Shaun White',
                'Khabib Nurmagomedov',
              ],
            },
          ]}
          renderItem={({item}) => <View>
            <TouchableOpacity><Text style={styles.item}>{item}</Text>
            </TouchableOpacity>
          </View>}
          
          renderSectionHeader={({section}) => (
            <Text style={styles.sectionHeader}>{section.title}</Text>
          )}
          keyExtractor={(item, index) => index}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:5
   
  },
  sectionHeader: {
    paddingTop: 2,
    paddingBottom: 2,
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    backgroundColor: '#315660',
  },

  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
    color:'black'
  },
});