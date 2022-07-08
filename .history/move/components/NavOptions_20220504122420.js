import React from 'react';
import { FlatList, Text, View, TouchableOpacity } from 'react-native';

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
            keyExtracter={}
            renderItem={({ item }) => (
                <TouchableOpacity>
                    <Text>{item.title}</Text>
                </TouchableOpacity>
            )}
        />
    );
};
    
export default NavOptions;