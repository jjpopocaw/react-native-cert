import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

export default class Tarjeta extends React.Component {

    constructor(props){
        super(props);
    }

    render() {
        let messageToShow = "";
        if (this.props.info.question.length > 90) {
            messageToShow = this.props.info.question.substring(0, 90) + '...';
        }
        else {
            messageToShow = this.props.question;
        }
        return(
            <TouchableOpacity
                style={styles.container}
                onPress={ () => this.props.navigation.navigate('Detalle', {info: this.props.info}) }
            >
                <View style={styles.header}>
                    <Text>Anonymous</Text>
                    <Text>7 days</Text>
                    <Text>Q: {this.props.info.question_id}</Text>
                </View>
                <View style={styles.content}>
                    <Text style={styles.base}>{messageToShow}</Text>
                </View>
                <View style={styles.footer}>
                    <Text>{this.props.info.Votes}</Text>
                    <Text>{this.props.info.numComments}</Text>
                </View>
            </TouchableOpacity>
        );
    }

}

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection: 'column',
        width: 350,
        height: 100,
        margin:8,
        borderWidth: 1,
        borderColor: '#bcbcbc',
        backgroundColor: '#eaeaea'
    },
    header:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    content: {
        height: 50,
    },
    footer:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-end',
    }
})
