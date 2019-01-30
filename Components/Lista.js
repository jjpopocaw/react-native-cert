import React from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import Tarjeta from './Tarjeta'
import mock from '../mock'

export default class Lista extends React.Component {

    constructor(props){
        super(props);
    }

    static navigationOptions = {
        title: 'WizeQ',
      };

    render() {
        return (
            <View style={styles.container}>
                {/* <ScrollView>
                    {
                    keyMap.map((value) => <Tarjeta key={value} />)
                    }
                </ScrollView> */}
                <FlatList 
                    data={mock.questions}
                    keyExtractor={(item, index) => index.toString() }
                    renderItem={({item}) => <Tarjeta 
                                                navigation={this.props.navigation} 
                                                info={item}
                                            />}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    baseTextBla: {
      color: "red",
    },
});
