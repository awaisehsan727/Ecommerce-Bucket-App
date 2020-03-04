import React, { Component } from 'react';
import { View, Text, FlatList, ActivityIndicator, StyleSheet } from 'react-native';
import { ListItem, SearchBar } from 'react-native-elements';
import WooCommerce from '../WooConfig';

export default class FlashDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      data: [],
    };

    this.arrayholder = [];
  }

  componentDidMount() {
    WooCommerce.get('products/Categories', { 'per_page': 100 })
      .then((responseJson) => {
        this.setState({
          data: responseJson,
          loading: false,
        })
       // console.log(responseJson)
        this.arrayholder = responseJson;
      })
      .catch((error) => {
        console.log(error.responseJson.data);
      });
  }
  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: '86%',
          backgroundColor: '#CED0CE',
          marginLeft: '14%',
        }}
      />
    );
  };

  searchFilterFunction = text => {
    this.setState({
      value: text,
    });
    const newData = this.arrayholder.filter(item => {
      const itemData = item.name.toUpperCase();
      const textData = text.toUpperCase();

      return itemData.indexOf(textData) > -1;
    });
    this.setState({
      data: newData,
    });
  };

  renderHeader = () => {
    return (
      <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
          <SearchBar
            inputContainerStyle={{
              backgroundColor: 'white', borderWidth: 1, borderBottomWidth: 1,
              borderRadius: 55, height: 35,
            }}
            searchIcon={{ color: 'black' }}
            cancelIcon={{ color: 'black' }}
            containerStyle={{
              backgroundColor: 'white', borderWidth: 0,
              borderBottomColor: 'white',
              borderLeftColor: 'white',
              borderRightColor: 'white',
              borderTopColor: 'white',
              borderRadius: 55,
              height: 50,
              width: '95%',
              marginLeft: 10
            }}
            placeholder="Search ....."
            onChangeText={text => this.searchFilterFunction(text)}
            autoCorrect={false}
            value={this.state.value}
          />
        </View>
    );
  };

  render() {
    if (this.state.loading) {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <ActivityIndicator />
        </View>
      );
    }
    return (
      <View style={{ flex: 1  }}>
        <FlatList
          data={this.state.data}
          renderItem={({ item }) => {
            if (item.image == null) {
              return (
                <ListItem style={{marginTop:5}}
                  leftAvatar={{ source: { uri: 'https://bktstaging.devzonesolutions.com/wp-content/uploads/woocommerce-placeholder.png' }}}
                  // title={item.name}
                  subtitle={item.name}
                />
              )
            }
            else {
              return (
                <ListItem style={{marginTop:5}}
                  leftAvatar={{ source: { uri: item.image.src } }}
                  // title={item.name}
                  subtitle={item.name}
                />
              )
            }

          }
          }
          keyExtractor={item => item.id.toString()}
          ItemSeparatorComponent={this.renderSeparator}
          ListHeaderComponent={this.renderHeader}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    margin: 5,
    marginTop: (Platform.OS === 'ios') ? 20 : 0,
  },
});
