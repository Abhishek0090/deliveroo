import React, { useLayoutEffect } from 'react';
import { Text, View, Image, TextInput, ScrollView } from 'react-native';
import { styled } from 'nativewind';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context'
import { ChevronDownIcon, UserIcon, AdjustmentsVerticalIcon, AdjustmentsHorizontalIcon, MagnifyingGlassIcon } from "react-native-heroicons/outline";




//tailwind variable for css //-> new version 

const ViewContent = styled(View)
const TextContent = styled(Text)
const ImageContent = styled(Image)
const InputContent = styled(TextInput)
const ScrollContent = styled(ScrollView)

const HomeScreen = () => {


    const navigation = useNavigation();


    useLayoutEffect(() => {
        //for changing header 
        navigation.setOptions({
            headerShown: false
        });

    }, [])


    return (
        <SafeAreaView className="bg-white pt-5">
            {/* Header style */}
            <ViewContent className='flex-row pb-3 items-center mx-4 space-x-2 px-2'>

                <ImageContent
                    source={{
                        uri: 'https://links.papareact.com/wru'
                    }}
                    className="h-7 w-7 bg-gray-300 p-4  rounded-full"
                />

                <ViewContent className='flex-1'>
                    <TextContent className='font-bold text-gray-400 text-xs'>
                        Deliver now!
                    </TextContent>
                    <TextContent className='text-xl font-bold'>
                        Current Location
                        <ChevronDownIcon size={20} color="#00CCBB" />
                    </TextContent>
                </ViewContent>
                <UserIcon size={30} color="#00CCBB" />
            </ViewContent>

            {/* {Search} */}
            <ViewContent className="flex-row items-center space-x-2 pb-2 mx-4 px-3">
                <ViewContent className="flex-row space-x-2 bg-gray-200 p-2 items-center flex-1" >
                    <MagnifyingGlassIcon size={20} color="gray" />
                    <InputContent placeholder='Restaurants and cuisines' keyboardType='default' />
                </ViewContent>
                <AdjustmentsHorizontalIcon size={20} color="#00CCBB" />
            </ViewContent>

            {/* Content */}

            <ScrollContent>

                {/* Categories */}

                {/* Featured Rows */}
            </ScrollContent>


        </SafeAreaView>
    );
}

export default HomeScreen;