import { Image, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Splash = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.imageOne}>
                <Image source={require('../../Designers/assets/mermaid.jpeg')} style={styles.img1} />
                <Image source={require('../../Designers/assets/mermaid2.jpeg')} style={styles.img2} />
            </View>

            <View style={styles.imagetwo}>
                <Image source={require('../../Designers/assets/sunju.jpeg')} style={styles.img3} />
                <Image source={require('../../Designers/assets/mermaid2.jpeg')} style={styles.img4} />
            </View>
            <TouchableOpacity onPress={() => {navigation.navigate('Blue')}}>
                <Text>Signin</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Splash

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 200,
        backgroundColor: 'green'
    },
    img1: {
        width: 200,
        height: 200,
        resizeMode: 'contain',

    },
    img2: {
        width: 200,
        height: 200,
        resizeMode: 'contain',
        top: -100

    },
    img3: {
        width: 200,
        height: 200,
        resizeMode: 'contain',

    },
    img4: {
        width: 200,
        height: 200,
        resizeMode: 'contain',
        top: -70

    },

    imageOne: {
        flexDirection: 'row',
        marginBottom: 30
    },
    imagetwo: {
        flexDirection: 'row'
    }
})