import React, { useLayoutEffect } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
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
                <Text style={styles.conatainerText}>A</Text>
            </View>
            <Text style={styles.travelText}>Ankur</Text>
        </View>

        <View style={styles.enjoyText}>
            <Text style={{color:'#3C6072', fontSize: 30}}>Enjoy the trip with</Text>
            <Text style={{color:'#00BCC9', fontSize: 30, fontWeight: 'bold'}}>Good Moments</Text>
            <Text style={{color:'#3C6072', fontSize: 15}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
        </View>
        
        <View style={styles.circle}></View>
        <View style={styles.newcircle}></View>
        
        <View style={styles.mainImage}>
           {/*  <Image source={ {url: "../assets/main.png" }}/> */}
           <Image
                style={styles.headerImage}
                resizeMode="contain"
                source={require('../assets/fashion-boy.png')}
            />
        </View>

        <View style={styles.goBtn}>
            <View>
                <Text>Go</Text>
            </View>
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
        color: '#4DABB7',
        fontSize: 25,
        fontWeight: 'bold'
    },
    conatainer: {
        flexDirection: 'row',
        paddingHorizontal: 15,
        marginTop: 10,
       /* alignItems: 'center', */
        textAlign: 'center',
    },
    logo: {
        height: 50,
        width: 50,
        backgroundColor: '#000',
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    travelText: {
        color: '#2A2B4B',
        fontSize: 25,
        fontWeight: 'bold',
        marginTop: 10,
        marginLeft: 10,
    },
    enjoyText: {
        marginTop: 20,
        paddingHorizontal: 20,
    },
    circle: {
        height: 320,
        width: 320,
        backgroundColor: '#00BCC9',
        borderRadius: 900,
        position: 'absolute',
        bottom: 160,
        right: -80,
    },
    newcircle: {
        height: 320,
        width: 320,
        backgroundColor: '#E99265',
        borderRadius: 900,
        position: 'absolute',
        bottom: -100,
        left: -80,
    },
    mainImage: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
    },
    headerImage: {
        height: undefined,
        width: '160%',
        aspectRatio: 1,
        marginTop: 20,
      },
      goBtn: {
        position: 'absolute',
        bottom: 60, 
        height: 60, 
        width: 60, 
        borderColor: '#00BCC9',
        alignItems: 'center',
        justifyContent: 'center',
        borderLeftColor: '#000'
      }
})

export default Home

