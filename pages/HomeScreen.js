import React from 'react';
import { SearchBar } from 'react-native-elements';
//import react in our code.
import { Text, View, ImageBackground, FlatList, TouchableOpacity, StyleSheet, TouchableWithoutFeedback, Image, StatusBar } from 'react-native';

import { Keyboard } from 'react-native';
import { SliderBox } from "react-native-image-slider-box";
import FastImage from 'react-native-fast-image';
import { Card } from "react-native-elements";
import { ScrollView } from 'react-native-gesture-handler';
//import all the basic component we have used

export default class HomeScreen extends React.Component {
  //Home Screen to show in Home Option
  static navigationOptions = {
    headerShown: false
    };
  state = {
    search: '',
  };

  constructor(props) {
    super(props);
    this.state = {
      images: [
        "https://bucket.pk/wp-content/uploads/2020/01/Baby-Pools-1400x554.jpg",
        "https://bucket.pk/wp-content/uploads/2019/11/MEN’S-FOOTWEAR-1400x554.jpg",
        "https://bucket.pk/wp-content/uploads/2019/11/MEN’S-GARMENTS-1400x554.jpg",
        // "https://source.unsplash.com/1024x768/?tree",
        // "https://source.unsplash.com/1024x768/?tree",
        // "https://source.unsplash.com/1024x768/?tree",
        // "https://source.unsplash.com/1024x768/?tree", // Network image
        // Local image
      ],
      imag: [
        "https://bucket.pk/wp-content/uploads/2019/11/MEN’S-GARMENTS-1400x554.jpg",
      ],
      dataSource: {},
    };
  }
  componentDidMount() {
    var that = this;
    let items = Array.apply(null, Array(20)).map((v, i) => {
      return { id: i, src: 'https://unsplash.it/550/550?image=' + (i + 1) };
    });
    that.setState({
      dataSource: items,
    });
  }

  updateSearch = search => {
    this.setState({ search });
  };
  onSubmit() {
    console.log('something')
    this.props.navigation.navigate('Setting')
  }
  render() {
    const { search } = this.state;
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={{ flex: 1, backgroundColor: 'white' }}>
          {/* <ImageBackground source={require('../images/Back.jpg')} style={styles.BackImage}> */}
          <View style={styles.header}>
            <StatusBar backgroundColor='#42717E' barStyle="light-content" />
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
                  height: 45,
                  width: 280,
                  marginLeft: 10
                }}
                placeholder="Search ....."
                onChangeText={this.updateSearch}
                value={search}
              />
              <TouchableOpacity onPress={() => this.props.navigation.navigate('Barcode')}>
                <Image style={styles.camera} source={require('../images/camer.png')} />
              </TouchableOpacity>
            </View>
            <ScrollView>
              <View style={styles.SLider}>
                <SliderBox
                  ImageComponent={FastImage}
                  images={this.state.images}
                  sliderBoxHeight={155}
                  onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}
                  dotColor="red"
                  inactiveDotColor="white"
                  paginationBoxVerticalPadding={20}
                  autoplay
                  circleLoop
                  resizeMethod={'resize'}
                  resizeMode={'cover'}
                  paginationBoxStyle={{
                    position: "absolute",
                    bottom: 0,
                    padding: 0,
                    alignItems: "center",
                    alignSelf: "center",
                    justifyContent: "center",
                    paddingVertical: 10
                  }}
                  dotStyle={{
                    width: 10,
                    height: 10,
                    borderRadius: 5,
                    marginHorizontal: 0,
                    padding: 0,
                    margin: 0,
                    backgroundColor: "white"
                  }}
                  ImageComponentStyle={{ borderRadius: 10, width: '97%', marginTop: 2 }}
                  imageLoadingColor="#2196F3"
                />
              </View>
              <View style={styles.Iconlis}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Categories')}>
                  {/*Donute Button Image */}
                  <Image
                    source={require('../images/category.png')}
                    style={{ width: 55, height: 45 }}
                  />
                  <Text style={styles.Text}>Categories</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Offers')}>
                  {/*Donute Button Image */}
                  <Image
                    source={require('../images/offer.png')}
                    style={{ width: 55, height: 45, }}
                  />
                  <Text style={styles.Text}>Offers</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('brands')}>
                  {/*Donute Button Image */}
                  <Image
                    source={require('../images/sell.png')}
                    style={{ width: 55, height: 45, }}
                  />
                  <Text style={styles.Text}>Brands</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('FlashDetail')}>
                  {/*Donute Button Image */}
                  <Image
                    source={require('../images/Flash.png')}
                    style={{ width: 55, height: 45, }}
                  /><Text style={styles.Text}>Flash</Text>
                  <Text style={styles.Text}>Deals</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Topselection')}>
                  {/*Donute Button Image */}
                  <Image
                    source={require('../images/Top.png')}
                    style={{ width: 55, height: 45, }}
                  />
                  <Text style={styles.Text}>Top</Text>
                  <Text style={styles.Text}>Selection</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.Imag}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('CASUAL_SHOES')}>
                  {/*Donute Button Image */}
                  <Image
                    style={{
                      width: '97%',
                      height: 155,
                      justifyContent: 'center',
                      alignSelf: 'center',
                      borderRadius: 10,
                    }}
                    source={{ uri: "https://bucket.pk/wp-content/uploads/2019/11/MEN’S-FOOTWEAR-1400x554.jpg" }}
                  />
                </TouchableOpacity>
              </View>
              <FlatList
                data={this.state.dataSource}
                renderItem={({ item }) => (
                  <View style={{ flex: 1, flexDirection: 'column', margin: 1 }}>
                    <Image style={styles.imageThumbnail} source={{ uri: item.src }} />
                  </View>
                )}
                //Setting the number of column
                numColumns={2}
                keyExtractor={(item, index) => index.toString()}
              />
            </ScrollView>
          </View>

          {/* <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate('Settings')}>
            <Text>Go to settng Tab</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate('Details')}>
            <Text>Open Details Screen</Text>
          </TouchableOpacity>
        </View> */}

        </View>
      </TouchableWithoutFeedback>
    );
  }
}
const styles = StyleSheet.create({
  SearchBar:
  {
    borderRadius: 10,
    marginHorizontal: 0,
    padding: 0,
    margin: 0,
    backgroundColor: "white"
  },
  header:
  {
    flex: 1
  },
  camera:
  {
    marginTop: 9,
    marginRight: 10
  },
  SLider:
  {
    justifyContent: 'center'
  },
  BackImage:
  {
    width: '100%',
    height: '100%'
  },
  Iconlis:
  {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
    marginLeft: 5,
    marginRight: 5
  },
  Text:
  {
    color: 'black',
    fontSize: 10,
    alignSelf: 'center'
  },
  Imag:
  {
    marginTop: 10
  },
  imageThumbnail: {
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
  },
});