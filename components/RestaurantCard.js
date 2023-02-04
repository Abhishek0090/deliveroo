
import React, { useLayoutEffect } from 'react';
import { TouchableOpacity } from 'react-native';
import { Text, View, Image, TextInput, ScrollView, _ScrollView, StyleSheet } from 'react-native';
import { ChevronDownIcon, UserIcon, AdjustmentsVerticalIcon, AdjustmentsHorizontalIcon, MagnifyingGlassIcon, ArrowRightIcon } from "react-native-heroicons/outline";




const RestaurantCard = ({
    id, imgUrl, title, genre, address, short_description, dishes, long, lat
}) => {
    return (
        <TouchableOpacity>
            <Image
                source={{uri : ""}}
            />
            <Text>RestaurantCard</Text>
        </TouchableOpacity>
    )
}

export default RestaurantCard