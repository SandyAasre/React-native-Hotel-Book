import React, { useLayoutEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Home = () => {
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);
  return (
    <SafeAreaView style={styles.mainContainer}>
        <View style={styles.conatainer}>
            <View style={styles.logo}>
                <Text style={styles.conatainerText}>Go</Text>
            </View>
            <Text style={styles.conatainerText}>Travel</Text>
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: '#fff',
        flex: 1,
        position: 'relative',
    },
    conatainerText: {
        color: '#fff'
    },
    conatainer: {
        flexDirection: 'row',
        paddingHorizontal: 15,
        marginTop: 10,
       /*  alignItems: 'center', */
        textAlign: 'center',
        justifyContent: 'space-between',
    },
    logo: {
        height: 50,
        width: 50,
        backgroundColor: '#000',
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
})

export default Home

