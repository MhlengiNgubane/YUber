import React from 'react';
import { StyleSheet, Text, SafeAreaView , View, TouchableOpacity  } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { Icon, Image } from '@rneui/base';
import { useNavigation } from '@react-navigation/native';
import { FlatList } from 'react-native-gesture-handler';

const data = [
  {
    id: "Uber-X-123",
    title: "Uber X",
    multiplier: 1,
    image: "https://links.papareact.com/3pn",
  },
  {
    id: "Uber-XL-456",
    title: "Uber XL",
    multiplier: 1.2,
    image: "https://links.papareact.com/5w8",
  },
  {
    id: "Uber-LUX-789",
    title: "Uber LUX",
    multiplier: 1.75,
    image: "https://links.papareact.com/7pf",
  },
];

const RideOptionsCard = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={tw`bg-white flex-grow`}>
      <View>
      <TouchableOpacity  
          onPress={() => navigation.navigate('NavigateCard')}
          style={tw`absolute top-3 left-5 z-50 p-3 rounded-full`}
        >
          <Icon name="chevron-left" type="fontawesome"/>
        </TouchableOpacity>
        <Text style={tw`text-center py-5 text-xl`}>Select a Ride</Text>
      </View>
      <FlatList 
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item: {id, title, multiplier, image}, item }) => (
          <TouchableOpacity>
            <Image 
              style={{
                width: 100,
                height: 100,
                resizeMode: "contain",
              }}
              source={{ uri: image }}
            />
            <View>
              <Text>{</Text>
              <Text></Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
    
  );
};

export default RideOptionsCard;

const styles = StyleSheet.create({});