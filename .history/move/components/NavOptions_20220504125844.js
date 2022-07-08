import React from 'react';
import { FlatList, Text, View, TouchableOpacity, Image } from 'react-native';
import tw from 'tailwind-react-native-classnames';

const data = [
    {
        id: "123",
        title: "Get a Ride",
        image: "https://links.papareact.com/3pn",
        screen: "MapScreen",
    },
    {
        id: "456",
        title: "Get Food",
        image: "https://links.papareact.com/28w",
        screen: "EatsScreen",
    },
];

const NavOptions = () => {
    return (
        <FlatList 
            data={data}
            horizontal
            keyExtracter={(item) => item.id}
            renderItem={({ item }) => (
                <TouchableOpacity
                    style={tw`p-2`}
                >
                    <View>
                        
                        <Image 
                            style={{ width: 120, height: 120, resizeMode: "contain" }}
                            source={{uri: item.image}} 
                        />
                        <Text>{item.title}</Text>
                    </View>
                </TouchableOpacity>
            )}
        />
    );
};
    
export default NavOptions;