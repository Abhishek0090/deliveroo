import React, { useEffect, useLayoutEffect, useState } from 'react';
import { Text, View, Image, TextInput, ScrollView, _ScrollView, StyleSheet } from 'react-native';
import { styled } from 'nativewind';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context'
import { ChevronDownIcon, UserIcon, AdjustmentsVerticalIcon, AdjustmentsHorizontalIcon, MagnifyingGlassIcon } from "react-native-heroicons/outline";
import Categories from '../components/Categories';
import Featured from '../components/Featured';
import { client as sanityClient } from '../sanitydb/sanity';


 
const HomeScreen = () => {


    const navigation = useNavigation();

    const [featuredCategories, setFeaturedCategories] = useState([])


    //when UI loads
    useLayoutEffect(() => {
        //for changing header 
        navigation.setOptions({
            headerShown: false
        });

    }, [])

    //when component loads
    useEffect(() => {
        sanityClient.fetch(`
        *[_type == "featured"]{
            ...,
            restaurants[]->{
                ...,
                dishes[]->
            }
          
        }`).then((data) => {
            setFeaturedCategories(data);
        });
    }, []);

    console.log(featuredCategories);

    return (
        <SafeAreaView className='bg-white pt-5'>
            {/* Header style */}
            <View className='flex-row pb-3 items-center mx-2 space-x-2 px-2'>

                <Image
                    source={{
                        uri: 'https://links.papareact.com/wru'
                    }}
                    className='h-7 w-7 bg-gray-300 p-4  rounded-full'
                />

                <View className='flex-1'>
                    <Text className='font-bold text-gray-400 text-xs'>
                        Deliver now!
                    </Text>
                    <Text className='text-xl font-bold'>
                        Current Location
                        <ChevronDownIcon size={20} color='#00CCBB' />
                    </Text>
                </View>
                <UserIcon size={30} color='#00CCBB' />
            </View>

            {/* {Search} */}

            <View className='flex-row items-center space-x-2 pb-2  px-3 mx-2'>
                <View className='flex-row space-x-2 bg-gray-200 p-2 items-center' style={styles.container} >
                    <MagnifyingGlassIcon size={20} color='gray' />
                    <TextInput placeholder='Restaurants and cuisines ' className="placeholder-gray-400 placeholder-opacity-75" keyboardType='default' />
                </View>
                <AdjustmentsHorizontalIcon size={20} color="#00CCBB" />
            </View>

            {/* Content */}

            <ScrollView contentContainerStyle={{
                paddingBottom: 15
            }} classname="bg-gray-200">

                {/* Categories */}

                <Categories />

                {/* Featured Rows */}

                <Featured
                    id={1}
                    title="Featured"
                    description="UWU Scibri doop dopp yes yes"
                />

                <Featured
                    id={2}
                    title="Tasty Discounts"
                    description="UWU Scibri doop dopp yes yes"
                />

                <Featured
                    id={3}
                    title="Offer Near You"
                    description="UWU Scibri doop dopp yes yes"
                />

            </ScrollView>


        </SafeAreaView>
    );
}

export default HomeScreen;




const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    bigBlue: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 30,
    },
    red: {
        color: 'red',
    },
    bgcolor: {
        // backgroundColor : '##d3d3d3'
    }
});