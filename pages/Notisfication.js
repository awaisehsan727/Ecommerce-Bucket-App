import React, { Component } from 'react';
//import react in our code.

import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Platform,
  ActivityIndicator,
} from 'react-native';
//import all the components we are going to use.

export default class Notisfication extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      //Loading state used while loading the data for the first time
      serverData: [],
      //Data Source for the FlatList
      fetching_from_server: false,
      //Loading state used while loading more data
    };
    this.offset = 1;
    //Index of the offset to load from web API
  }

  componentDidMount() {
    fetch('https://aboutreact.herokuapp.com/getpost.php?offset=' + this.offset)
    //Sending the currect offset with get request
      .then(response => response.json())
      .then(responseJson => {
      //Successful response from the API Call 
        this.offset = this.offset + 1;
        //After the response increasing the offset for the next API call.
        this.setState({
          serverData: [...this.state.serverData, ...responseJson.results],
          //adding the new data with old one available in Data Source of the List
          loading: false,
          //updating the loading state to false
        });
      })
      .catch(error => {
        console.error(error);
      });
  }

  loadMoreData = () => {
  //On click of Load More button We will call the web API again
    this.setState({ fetching_from_server: true }, () => {
      fetch('https://aboutreact.herokuapp.com/getpost.php?offset=' + this.offset)
      //Sending the currect offset with get request
          .then(response => response.json())
          .then(responseJson => {
          //Successful response from the API Call 
            this.offset = this.offset + 1;
            //After the response increasing the offset for the next API call.
            this.setState({
              serverData: [...this.state.serverData, ...responseJson.results],
              //adding the new data with old one available in Data Source of the List
              fetching_from_server: false,
              //updating the loading state to false
            });
          })
          .catch(error => {
            console.error(error);
          });
    });
  };

  renderFooter() {
    return (
    //Footer View with Load More button
      <View style={styles.footer}>
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={this.loadMoreData}
          //On Click of button calling loadMoreData function to load more data
          style={styles.loadMoreBtn}>
          <Text style={styles.btnText}>Load More</Text>
          {this.state.fetching_from_server ? (
            <ActivityIndicator color="white" style={{ marginLeft: 8 }} />
          ) : null}
        </TouchableOpacity>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.loading ? (
          <ActivityIndicator size="large" />
        ) : (
          <FlatList
            style={{ width: '100%' }}
            keyExtractor={(item, index) => index.toString()}
            data={this.state.serverData}
            renderItem={({ item, index }) => (
              <View style={styles.item}>
                <Text style={styles.text}>
                  {item.id}
                  {'.'} 
                  {item.title.toUpperCase()}
                </Text>
              </View>
            )}
            ItemSeparatorComponent={() => <View style={styles.separator} />}
            ListFooterComponent={this.renderFooter.bind(this)}
            //Adding Load More button as footer component
          />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 30,
  },
  item: {
    padding: 10,
  },
  separator: {
    height: 0.5,
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  text: {
    fontSize: 15,
    color: 'black',
  },
  footer: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  loadMoreBtn: {
    padding: 10,
    backgroundColor: '#800000',
    borderRadius: 4,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    color: 'white',
    fontSize: 15,
    textAlign: 'center',
  },
});