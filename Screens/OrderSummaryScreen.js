import React, { Component } from 'react'
import { Text, View, StyleSheet, ScrollView, SafeAreaView, Image } from 'react-native';
import { Card, ListItem, Divider, Button } from 'react-native-elements';
import { Data } from './Data';

export default class OrderSummaryScreen extends Component {


    render() {
        let status;
        let date = new Set();
        Data.map((item, index) => {
            status === item.status
            date.add(item.date);
        })
        return (
            <SafeAreaView style={styles.container}>
                <ScrollView showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false} style={styles.scrollView}>
                    <View style={{ flexDirection: 'row', padding: 20 }}>

                        <View style={{ width: '50%', backgroundColor: 'whitesmoke' }}>
                            <Button title={`Active (${Data.length})`} buttonStyle={{ borderRadius: 10, backgroundColor: 'white' }} type="clear" />
                        </View>
                        <View style={{ width: '50%' }}>
                            <Button buttonStyle={{ backgroundColor: 'whitesmoke' }} title="Completed" titleStyle={{ color: 'grey' }} />
                        </View>
                    </View>
                    {
                        Data.map((item, index) => {
                            return (<View key={index}>
                                <Text>{item.date}</Text>
                                <Card containerStyle={{ borderRadius: 20 }}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <View style={{ width: '70%' }}>
                                            <Text>{item.customerName}, {item.customerAddress}</Text>
                                        </View>
                                        <View style={{ width: '30%' }}>
                                            <Text>{item.orderId}</Text>
                                        </View>
                                    </View>
                                    <View><Text>{item.orderDiscretion}</Text></View>
                                    <View style={{ flexDirection: 'row' }}>
                                        <View style={{ width: '60%' }}>
                                            <Text>Received {item.time}</Text>
                                        </View>
                                        <View style={{ width: '40%' }}>
                                            <Text>{item.amount}</Text>
                                        </View>
                                    </View>
                                    <View style={{ flexDirection: 'row' }}>
                                        <View style={{ width: '60%' }}>
                                            <Text>Standard Delivery </Text>
                                        </View>
                                        <View style={{ width: '40%' }}>
                                            <Button title="See details" type="clear"
                                                onPress={() => {
                                                    this.props.navigation.navigate('OrderDetails', {
                                                        itemId: item.orderId
                                                    });
                                                }} />
                                        </View>
                                    </View>
                                    <Divider />
                                    <View>
                                        {(item.status === '1') ? (
                                            <Text style={{ color: '#2d8dfd', fontSize: 15, fontWeight: 'bold', textAlign: 'center' }}>Pickup in progress</Text>
                                        ) : (
                                                <Text style={{ color: 'green', fontSize: 15, fontWeight: 'bold', textAlign: 'center' }}>Delivery in progress</Text>
                                            )}
                                    </View>
                                </Card>
                            </View>)
                        })
                    }
                </ScrollView>
                <Card containerStyle={{ borderTopLeftRadius: 40, borderTopRightRadius: 40, padding: 0, margin: 0 }}>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 20, paddingTop: 30 }}>
                        <View>
                            <Image source={require('./../assets/Home.png')} />
                        </View>
                        <View>
                            <Text style={{
                                bottom: 25, borderBottomColor: 'blue',
                                borderBottomWidth: 1
                            }}></Text>
                            <Image style={{ bottom: 20 }} source={require('./../assets/box.png')} />
                        </View>
                        <View>
                            <Image source={require('./../assets/icon-card.png')} />
                        </View>
                        <View>
                            <Image source={require('./../assets/Profile.png')} />
                        </View>
                    </View>
                </Card>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    scrollView: {
        marginHorizontal: 20,
        marginBottom: 20
    }
});