import React from 'react';
import { FlatList, Text, View, TouchableOpacity, Image } from 'react-native';

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
            
            keyExtracter={(item) => item.id}
            renderItem={({ item }) => (
                <TouchableOpacity>
                    <View>
                        
                        <Image 
                            style={{
                                width: 100, 
                                height: 100,
                                resizeMode: "contain",
                              }}
                            source={{uri: item.image}} 
                        />
                    </View>
                </TouchableOpacity>
            )}
        />
    );
};
    
export default NavOptions;