import React, {useState, useEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {appTheme, styles} from '../../Themes';
import CommonDock from '../../ReusableComponents/CommonDock';
import {
  View,
  Image,
  TextInput,
  Text,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {DoubtSessionsData} from '../../Database/DoubtSessionsData';

function formatTimeRange(startTime: string, endTime: string) {
  const formatTime = (time: string) => {
    const [hours, minutes] = time.split(':');
    const formattedHours = parseInt(hours, 10) % 12 || 12;
    return `${formattedHours}:${minutes} ${
      parseInt(hours, 10) >= 12 ? 'PM' : 'AM'
    }`;
  };

  return `${formatTime(startTime)} - ${formatTime(endTime)}`;
}

function getTextColor(startTime: string) {
  const hour = parseInt(startTime.split(':')[0], 10);
  if (hour >= 4 && hour < 12) {
    return '#5F84CF';
  } else if (hour >= 12 && hour < 18) {
    return '#FF9A62';
  } else {
    return '#000000';
  }
}

function getIconSource(startTime: string) {
  const hour = parseInt(startTime.split(':')[0], 10);
  if (hour >= 4 && hour < 12) {
    return require('../../Assets/images/morning.png');
  } else if (hour >= 12 && hour < 18) {
    return require('../../Assets/images/fullSunEvening.png');
  } else {
    return require('../../Assets/images/night.png');
  }
}

function StudentDoubts() {
  type DoubtType = {
    subject: string;
    name: string;
    sessionStartTime: string;
    sessionEndTime: string;
    location: string;
    seats: string;
  };

  const [searchQuery, setSearchQuery] = useState('');
  const [filteredDoubts, setFilteredDoubts] = useState<DoubtType[]>([]);

  useEffect(() => {
    const formattedData = DoubtSessionsData.map(item => ({
      ...item,
      time: `${item.sessionStartTime} - ${item.sessionEndTime}`, // Combine sessionStartTime and sessionEndTime into time
    }));

    setFilteredDoubts(formattedData);
  }, []);

  const handleSearch = () => {
    const filteredData: DoubtType[] = DoubtSessionsData.map(item => ({
      subject: item.subject,
      name: item.name,
      sessionStartTime: item.sessionStartTime, // Use sessionStartTime instead of time.split(' - ')[0]
      sessionEndTime: item.sessionEndTime, // Use sessionEndTime instead of time.split(' - ')[1]
      location: item.location,
      seats: item.seats,
    }));

    setFilteredDoubts(filteredData);
  };

  const renderDoubtCard = ({item}: {item: DoubtType}) => (
    <View
      style={{
        aspectRatio: 16 / 9,
        width: '100%',
        backgroundColor: appTheme.searchBackgroundColor,
        borderRadius: 5,
        borderColor: appTheme.buttonColor,
        borderWidth: 1,
        paddingHorizontal: 10,
        paddingVertical: 10,
        marginBottom: 20,
        flexDirection: 'row',
      }}>
      <View style={{flex: 1, justifyContent: 'space-between'}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
          }}>
          <Image
            style={{height: 20, width: 20, aspectRatio: 1, borderRadius: 50}}
            source={require('../../Assets/images/topic.png')}
          />
          <Text
            style={{
              fontFamily: styles.poppinsBold.fontFamily,
              color: appTheme.textColor,
              textAlign: 'left',
              marginLeft: 10,
            }}>
            {item.subject}
          </Text>
        </View>

        {/* Name */}
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
          }}>
          <Image
            style={{height: 20, width: 20, aspectRatio: 1, borderRadius: 50}}
            source={require('../../Assets/images/teacherIcon.png')}
          />
          <Text
            style={{
              fontFamily: styles.poppinsBold.fontFamily,
              color: appTheme.textColor,
              textAlign: 'left',
              marginLeft: 10,
            }}>
            {item.name}
          </Text>
        </View>

        {/* Time */}
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
          }}>
          <Image
            style={{height: 20, width: 20, aspectRatio: 1, borderRadius: 50}}
            source={getIconSource(item.sessionStartTime)}
          />
          <Text
            style={{
              fontFamily: styles.poppinsBold.fontFamily,
              color: getTextColor(item.sessionStartTime),
              textAlign: 'left',
              marginLeft: 10,
              textShadowColor: 'rgba(255, 255, 255, 0.5)',
              textShadowRadius: 5,
            }}>
            {formatTimeRange(item.sessionStartTime, item.sessionEndTime)}
          </Text>
        </View>

        {/* Location */}
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
          }}>
          <Image
            style={{height: 20, width: 20, aspectRatio: 1, borderRadius: 50}}
            source={require('../../Assets/images/location.png')}
          />
          <Text
            style={{
              fontFamily: styles.poppinsBold.fontFamily,
              color: appTheme.textColor,
              textAlign: 'left',
              marginLeft: 10,
            }}>
            {item.location}
          </Text>
        </View>

        {/* Seats */}
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
          }}>
          <Image
            style={{height: 20, width: 20, aspectRatio: 1, borderRadius: 50}}
            source={require('../../Assets/images/chair.png')}
          />
          <Text
            style={{
              fontFamily: styles.poppinsBold.fontFamily,
              color: appTheme.textColor,
              textAlign: 'left',
              marginLeft: 10,
            }}>
            {item.seats}
          </Text>
        </View>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={{backgroundColor: appTheme.mainColor, flex: 1}}>
      {/* Search bar */}
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
          style={{height: 30, width: 30, marginLeft: '5%', marginTop: 10}}
          source={require('../../Assets/images/search.png')}
        />
        <TextInput
          placeholder="Search for doubts"
          textAlign="center"
          placeholderTextColor="#FFFFFF73"
          value={searchQuery}
          onChangeText={setSearchQuery}
          onSubmitEditing={handleSearch}
          style={{
            fontFamily: styles.poppinsBold.fontFamily,
            fontSize: 16,
            color: '#fff',
            marginTop: 6,
            width: '65%',
          }}
        />
        <TouchableOpacity onPress={handleSearch}>
          <Image
            style={{height: 30, width: 30, marginRight: '5%', marginTop: 10}}
            source={require('../../Assets/images/filter.png')}
          />
        </TouchableOpacity>
      </View>
      {/* End of Search bar */}

      {/* FlatList */}
      <View style={{flex: 1, alignItems: 'center', marginTop: '20%'}}>
        <FlatList
          data={filteredDoubts}
          renderItem={renderDoubtCard}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={{
            alignItems: 'flex-start',
            width: '80%',
            paddingBottom: '20%',
          }}
        />
      </View>
      {/* End of FlatList */}

      {/* Common Dock Layout */}
      <CommonDock />
      {/* End of Common Dock Layout */}
    </SafeAreaView>
  );
}

export default StudentDoubts;
