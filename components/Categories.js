import { Text, View, Image, TextInput, ScrollView } from 'react-native';
import React from 'react'


import CategoryCard from './CategoryCard';

const Categories = () => {
    return (
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{
            paddingHorizontal: 20,
            paddingTop: 10,
        }}>
            {/* Category Card */}
            <CategoryCard imgUrl="https://thumbs.dreamstime.com/b/pizza-rustic-italian-mozzarella-cheese-basil-leaves-35669930.jpg" title="Pizza" />
            <CategoryCard imgUrl="https://content3.jdmagicbox.com/comp/mumbai/g6/022pxx22.xx22.190920191150.c6g6/catalogue/burger-nation-andheri-west-mumbai-burger-joints-bfj00ads8q.jpg" title="Burger" />
            <CategoryCard imgUrl="https://www.thespruceeats.com/thmb/X_JGM04VusvkuGqTVan4QmBRqjI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/how-to-make-homemade-french-fries-2215971-hero-01-02f62a016f3e4aa4b41d0c27539885c3.jpg" title="French Fries" />
            <CategoryCard imgUrl="https://www.cookwithmanali.com/wp-content/uploads/2018/04/Vada-Pav-500x500.jpg" title="Vada Pav" />
            <CategoryCard imgUrl="https://www.indianhealthyrecipes.com/wp-content/uploads/2020/12/fried-rice.jpg" title="Fried Rice" />
        </ScrollView>
    )
}

export default Categories