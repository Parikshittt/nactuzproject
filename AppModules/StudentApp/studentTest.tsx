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
  ImageSourcePropType,
  TouchableOpacity,
} from 'react-native';
import {TestsCardData} from '../../Database/Tests'; // Assuming TestsCardData is the default data

function StudentTest() {
  type typeOfTest = {
    topic: string;
    duration: string;
    totalMarks: number;
    location: string;
    seats: string;
    price: string;
    refundable: string;
  };

  const [searchQuery, setSearchQuery] = useState('');
  const [filteredTests, setFilteredTests] = useState<typeOfTest[]>([]); // Initialize filteredTests as an empty array

  // Use useEffect to initialize filteredTests with TestsCardData
  useEffect(() => {
    setFilteredTests(TestsCardData);
  }, []); // Empty dependency array ensures that it runs only once after the component mounts

  const handleSearch = () => {
    const filteredData = TestsCardData.filter(test =>
      test.topic.toLowerCase().includes(searchQuery.toLowerCase()),
    );
    setFilteredTests(filteredData);
  };

  const TestItem = ({
    icon,
    text,
  }: {
    icon: ImageSourcePropType;
    text: string;
  }) => (
    <View
      style={{
        padding: 10,
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
      }}>
      <Image
        style={{height: 20, width: 20, aspectRatio: 1, borderRadius: 50}}
        source={icon}
      />
      <Text
        style={{
          fontFamily: styles.poppinsBold.fontFamily,
          color: appTheme.textColor,
          textAlign: 'left',
          marginLeft: 10,
        }}>
        {text}
      </Text>
    </View>
  );
  const [clickedCard, setClickedCard] = useState<number | null>(null);

  const renderTestCard = ({item, index}: {item: typeOfTest; index: number}) => {
    const handleBuyTest = () => {
      if (clickedCard === index) {
        // If the clicked card is already expanded, collapse it
        setClickedCard(null);
      } else {
        // Otherwise, expand the clicked card
        setClickedCard(index);
      }
    };

    return (
      <View
        style={{
          aspectRatio: clickedCard === index ? 16 / 20 : 16 / 11,
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
          <View style={{justifyContent: 'space-evenly'}}>
            <TestItem
              icon={require('../../Assets/images/topic.png')}
              text={`${item.topic}`}
            />
            <TestItem
              icon={require('../../Assets/images/duration.png')}
              text={`${item.duration}`}
            />
            <TestItem
              icon={require('../../Assets/images/totalmarks.png')}
              text={`${item.totalMarks}`}
            />
            <TestItem
              icon={require('../../Assets/images/location.png')}
              text={`${item.location}`}
            />
            <TestItem
              icon={require('../../Assets/images/chair.png')}
              text={`${item.seats}`}
            />
            {clickedCard === index && ( // Render price only when the card is expanded
              <>
                <TestItem
                  icon={require('../../Assets/images/inr.png')}
                  text={`Price: ${item.price}`}
                />
                <TestItem
                  icon={require('../../Assets/images/refund.png')}
                  text={`${item.refundable}`}></TestItem>
                <View
                  style={{
                    width: '68%',
                    gap: 10,
                    backgroundColor: appTheme.buttonColor,
                    borderRadius: 5,
                    marginLeft: '5%',
                  }}>
                  <TouchableOpacity>
                    <Text
                      style={{
                        fontFamily: styles.poppinsBold.fontFamily,
                        color: appTheme.textColor,
                        textAlign: 'center',
                        marginTop: 3,
                        fontSize: 15,
                      }}>
                      Book A Seat
                    </Text>
                  </TouchableOpacity>
                </View>
              </>
            )}
          </View>
          <TouchableOpacity
            onPress={handleBuyTest}
            style={{
              alignSelf: 'flex-end',
              bottom: clickedCard === index ? '12%' : '25%',
            }}>
            <Image
              style={{width: 40, height: 40}}
              source={require('../../Assets/images/buyTest.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

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
          placeholder="search for tests"
          textAlign="center"
          placeholderTextColor="#FFFFFF73"
          value={searchQuery}
          onChangeText={setSearchQuery}
          onSubmitEditing={handleSearch} // Handle search on submit
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
          data={filteredTests} // Use the filtered test data
          renderItem={renderTestCard} // Render each test card
          keyExtractor={(item, index) => index.toString()} // Use index as key
          contentContainerStyle={{
            alignItems: 'flex-start',
            width: '80%',
            paddingBottom: '20%',
          }} // Align items in the center
        />
      </View>
      {/* End of FlatList */}

      {/* Common Dock Layout */}
      <CommonDock />
      {/* End of Common Dock Layout */}
    </SafeAreaView>
  );
}

export default StudentTest;
