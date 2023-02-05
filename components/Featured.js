
import React, { useLayoutEffect } from 'react';
import { Text, View, Image, TextInput, ScrollView, _ScrollView, StyleSheet } from 'react-native';
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestaurantCard from './RestaurantCard';



//tailwind variable for css //-> new version 


const Featured = ({ title, description, id, featuredCategory }) => {
    return (
        <View>
            <View className='mt-4 flex-row items-center justify-between p-4'>
                <Text className='font-bold text-lg'>{title}</Text>
                <ArrowRightIcon color="#00CCB" />
        
            </View>

            <Text className="text-xs text-gray-500" style={{paddingLeft : '15px'}}>{description}</Text>

            <ScrollView horizontal contentContainerStyle={{
                paddingHorizontal: 15
            }}
                showsHorizontalScrollIndicator={false}
                className="pt-4"
            >

                {/* Restaurants..Card */}
                <RestaurantCard
                    id={123}
                    imgUrl="https://links.papareact.com/gn7"
                    title="Yo ! Boi"
                    rating={4.5}
                    genre="Japanese"
                    address="123 Main St"
                    short_description="This is me"
                    dishes={[]}
                    long={20}
                    lat={0}
                />
                
                <RestaurantCard
                    id={123}
                    imgUrl="https://links.papareact.com/gn7"
                    title="Yo ! Boi"
                    rating={4.5}
                    genre="Japanese"
                    address="123 Main St"
                    short_description="This is me"
                    dishes={[]}
                    long={20}
                    lat={0}
                />

                <RestaurantCard
                    id={123}
                    imgUrl="https://links.papareact.com/gn7"
                    title="Yo ! Boi"
                    rating={4.5}
                    genre="Japanese"
                    address="123 Main St"
                    short_description="This is me"
                    dishes={[]}
                    long={20}
                    lat={0}
                />

                <RestaurantCard
                    id={123}
                    imgUrl="https://links.papareact.com/gn7"
                    title="Yo ! Boi"
                    rating={4.5}
                    genre="Japanese"
                    address="123 Main St"
                    short_description="This is me"
                    dishes={[]}
                    long={20}
                    lat={0}
                />

            </ScrollView>

        </View>
    )
}

export default Featured