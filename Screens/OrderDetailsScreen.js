import React, { Component } from 'react'
import { View, Text, StyleSheet, ScrollView, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import { Card, ListItem, Divider, Button } from 'react-native-elements';
import { Data } from './Data';
import StepIndicator from 'react-native-step-indicator';

const labels = ["Payment received via GoPay", "Driver assign(Go send)", "Pickup completed", "Delivery completed", "Payout completed"];
const customStyles = {
    stepIndicatorSize: 35,
    currentStepIndicatorSize: 40,
    separatorStrokeWidth: 2,
    currentStepStrokeWidth: 3,
    stepStrokeCurrentColor: '#fe7013',
    stepStrokeWidth: 3,
    stepStrokeFinishedColor: '#fe7013',
    stepStrokeUnFinishedColor: '#aaaaaa',
    separatorFinishedColor: '#fe7013',
    separatorUnFinishedColor: '#aaaaaa',
    stepIndicatorFinishedColor: '#fe7013',
    stepIndicatorUnFinishedColor: '#ffffff',
    stepIndicatorCurrentColor: '#ffffff',
    stepIndicatorLabelFontSize: 13,
    currentStepIndicatorLabelFontSize: 13,
    stepIndicatorLabelCurrentColor: '#fe7013',
    stepIndicatorLabelFinishedColor: '#ffffff',
    stepIndicatorLabelUnFinishedColor: '#aaaaaa',
    labelColor: '#999999',
    labelSize: 13,
    currentStepLabelColor: '#fe7013'
}
export default class OrderDetailsScreen extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {}
    // }
    constructor(props) {
        super(props);
        this.state = {
            currentPosition: 0
        }
    }

    render() {
        let data = Data.find(x => x.orderId === this.props.navigation.state.params.itemId);
        let status;
        if (data.status === '1') {
            status = <Text>Pickup in progress</Text>
        } else {
            status = <Text>Delivery in progress</Text>
        }
        return (

            <SafeAreaView style={styles.container}>
                <ScrollView showsVerticalScrollIndicator={false} >
                    <Card containerStyle={{ backgroundColor: '#2d8dfd', borderTopLeftRadius: 40, borderTopRightRadius: 40, padding: 0, margin: 0, marginTop: 20 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingRight: 30, }}>
                            <View style={{ padding: 15 }}>
                                <Text>OrderID: {data.orderId}</Text>
                                <Text>{data.date} {data.time}</Text>
                                <Text>{status}</Text>
                            </View>
                            <View style={{ paddingTop: 20 }}>
                                <TouchableOpacity onPress={() => this.props.navigation.navigate('OrderSummary')}>
                                    <Image source={require('./../assets/arrow.png')} style={{ height: 30 }} />
                                </TouchableOpacity>
                                {/* <Icon onPress={() => {alert('hello')}} name="arrow-down" size={20} color="black" type="entypo" /> */}
                            </View>
                        </View>
                    </Card>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
                        <View >
                            <Text>Order Description</Text>
                            <Text>Amount</Text>
                            <Text>Customer Details</Text>
                            <Text>Customer Contact</Text>
                            <Text>Delivery</Text>
                        </View>
                        <View >
                            <Text>{data.orderDiscretion}</Text>
                            <Text>{data.amount}</Text>
                            <Text>{data.customerName}</Text>
                            <Text>{data.customerNumber}</Text>
                            <Text>{data.customerEmail}</Text>
                            <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'space-between', paddingRight: 90 }}>
                                <View>
                                    <Image source={require('./../assets/Phone.png')} />
                                </View>
                                <View>
                                    <Image source={require('./../assets/icon-email.png')} />
                                </View>
                            </View>
                            <Text>Instant Delivery</Text>
                            {/* <Text>{data.customerAddress}</Text> */}
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10, paddingTop: 0 }}>
                        <View >

                        </View>
                        <View >
                            <Text>Purchase protection enabled</Text>
                            {/* <Text>{data.customerAddress}</Text> */}
                        </View>
                    </View>
                    <Divider />
                    <View>
                    <StepIndicator
                        direction="vertical"
                        customStyles={customStyles}
                        currentPosition={this.state.currentPosition}
                        labels={labels}
                    />
                    </View>
                </ScrollView>
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