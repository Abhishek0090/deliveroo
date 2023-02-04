import React, { useLayoutEffect } from 'react';
import { Text, View, Image } from 'react-native';
import { styled } from 'nativewind';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context'

//tailwind variable for css //-> new version 

const StyledView = styled(View)
const StyledText = styled(Text)
const StyledImage = styled(Image)

const HomeScreen = () => {

    const navigation = useNavigation();


    useLayoutEffect(() => {
        //for changing header 
        navigation.setOptions({
            headerShown: false
        });

    }, [])


    return (
        <SafeAreaView>
            {/* Header style */}
            <StyledView>
                {/* <StyledText className='text-red-500'>Header</StyledText> */}

                <StyledImage
                    source={{
                        uri: 'https://links.papareact.com/wru'
                    }}
                    className="h-7 w-7 bg-gray-300 p-4 m-1 rounded-full"
                />
            </StyledView>
            <StyledView>
                <StyledText>
                    Deliver now!
                </StyledText>
                <StyledText>
                    Current Location
                </StyledText>
            </StyledView>
        </SafeAreaView>
    );
}

export default HomeScreen;