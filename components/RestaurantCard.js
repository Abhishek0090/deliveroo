
import React, { useLayoutEffect } from 'react';
import { TouchableOpacity } from 'react-native';
import { Text, View, Image, TextInput, ScrollView, StyleSheet } from 'react-native';
import { ChevronDownIcon, UserIcon, AdjustmentsVerticalIcon, AdjustmentsHorizontalIcon, MagnifyingGlassIcon, ArrowRightIcon, StarIcon, MapPinIcon } from "react-native-heroicons/outline";




const RestaurantCard = ({
    id, imgUrl, rating, title, genre, address, short_description, dishes, long, lat
}) => {


    // console.log(imgUrl);
    return (
        <TouchableOpacity className="bg-white mr-3 shadow-sm" >
            <Image
                source={{ uri: imgUrl }}
                //    style={{width: 400, height: 400}}
                className="h-36 w-64 rounded-sm"
            />
            <View className="px-3 pb-4">
                <Text className="text-lg pt-2" style={{ fontWeight: 'bold'}} >{title}</Text>
                <View className="flex-row items-center space-x-1">
                    <StarIcon color="green" size={22} />
                    <Text className="text-xs text-gray-500">
                        <Text className="text-green-500">{rating}</Text> . {genre}
                    </Text>
                </View>

                <View className="flex-row items-center space-x-1">
                    <MapPinIcon color='gray' opacity={0.4} size={22} />
                    <Text className="text-xs text-gray-500">Nearby . {address}</Text>
                </View>

            </View>
        </TouchableOpacity>
    )
}

export default RestaurantCard