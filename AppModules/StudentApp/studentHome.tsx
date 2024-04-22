import React, {useState} from 'react';
import {appTheme, styles} from '../../Themes';
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Button,
  Image,
  TouchableOpacity,
  FlexStyle,
  FlatList,
} from 'react-native';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {TextInput} from 'react-native';
import CommonDock from '../../ReusableComponents/CommonDock';
import {VideosData} from '../../Database/VIdeos';

function StudentHomePage() {
  const videoData = VideosData;
  const [searchCourseQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState(VideosData);

  const handleCourseSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleSearchSubmit = () => {
    const filtered = videoData.filter(
      video =>
        video.title.toLowerCase().includes(searchCourseQuery.toLowerCase()) ||
        video.name.toLowerCase().includes(searchCourseQuery.toLowerCase()),
    );
    setFilteredData(filtered);
  };

  return (
    <SafeAreaView style={{backgroundColor: appTheme.mainColor, flex: 1}}>
      {/* search bar with search icon and filter icon */}
      <View
        style={{
          backgroundColor: appTheme.searchBackgroundColor,
          borderRadius: 30,
          borderColor: appTheme.buttonColor,
          borderWidth: 2,
          width: '80%',
          height: 55,
          alignSelf: 'center',
          top: '12%',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Image
          style={{
            height: 30,
            width: 30,
            marginLeft: '5%',
            marginTop: 10,
          }}
          source={require('../../Assets/images/search.png')}
        />
        <TextInput
          placeholder="search for courses"
          textAlign="center"
          placeholderTextColor="#FFFFFF73"
          value={searchCourseQuery}
          onChangeText={handleCourseSearch}
          onSubmitEditing={handleSearchSubmit}
          style={{
            fontFamily: styles.poppinsBold.fontFamily,
            fontSize: 16,
            color: '#fff',
            marginTop: 6,
            width: '65%',
          }}
        />
        <Image
          style={{height: 30, width: 30, marginRight: '5%', marginTop: 10}}
          source={require('../../Assets/images/filter.png')}
        />
      </View>
      {/* search bar with search icon and filter icon */}

      {/* Videos Whole Scroll View */}
      <View
        style={{
          flex: 1,
          width: '80%',
          alignSelf: 'center',
          marginTop: '20%',
        }}>
        <View style={{flex: 1}}>
          <FlatList
            data={filteredData}
            renderItem={({item}) => (
              <View
                style={{
                  flex: 1,
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: 20,
                }}>
                <View
                  style={{
                    width: '100%',
                    aspectRatio: 16 / 9,
                    borderRadius: 10,
                    overflow: 'hidden',
                    borderColor: appTheme.textColor,
                    borderWidth: 2,
                  }}>
                  <Image
                    source={{uri: item.thumbnailUri}}
                    style={{width: '100%', height: '100%'}}
                  />
                </View>
                <View
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                    gap: 10,
                    marginTop: 10,
                  }}>
                  <View
                    style={{
                      width: '13%',
                      aspectRatio: 1,
                      borderRadius: 20,
                      overflow: 'hidden',
                      alignSelf: 'flex-start',
                      borderColor: appTheme.textColor,
                      borderWidth: 1,
                    }}>
                    <Image
                      source={{uri: item.profilePictureUri}}
                      style={{width: '100%', height: '100%'}}
                    />
                  </View>
                  <View
                    style={{
                      flex: 1,
                      flexDirection: 'column',
                      width: '75%',
                      gap: -3,
                      marginTop: 3,
                    }}>
                    <View style={{width: '100%'}}>
                      <Text
                        style={{
                          fontFamily: styles.poppinsBold.fontFamily,
                          fontSize: 14,
                          color: appTheme.textColor,
                        }}>
                        {item.title}
                      </Text>
                    </View>
                    <View style={{width: '100%'}}>
                      <Text
                        style={{
                          fontFamily: styles.poppinsMedium.fontFamily,
                          fontSize: 10,
                          color: appTheme.textColor,
                        }}>
                        {`${item.name} \u2022 ${item.rating} Rating \u2022 ${item.daysAgo}`}
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            )}
            keyExtractor={item => item.id}
            contentContainerStyle={{paddingBottom: 100}} // Adjust paddingBottom to ensure the last item is fully visible
          />
        </View>
      </View>
      {/* Videos Whole Scroll View */}

      {/* Common Dock Layout */}
      <CommonDock />
      {/* Common Dock Layout */}
    </SafeAreaView>
  );
}

export default StudentHomePage;
