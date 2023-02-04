import { Text, View, Image, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react'

import { styled } from 'nativewind';

const ViewContent = styled(View)
const TextContent = styled(Text)
const ImageContent = styled(Image)
const InputContent = styled(TextInput)
const ScrollContent = styled(ScrollView)
const TouchButton = styled(TouchableOpacity)


const CategoryCard = ({ title, imgUrl }) => {
    return (
        <TouchButton className='relative mr-2'>
            <ImageContent source={{uri : imgUrl}} className= 'h-20 w-20 rounded' /> 
            <TextContent className='absolute bottom-1 left-1 text-white font-bold' >{title}</TextContent>
        </TouchButton>
    )
}

export default CategoryCard