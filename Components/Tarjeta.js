import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

export default class Tarjeta extends React.Component {

    constructor(props){
        super(props);
    }

    render() {
        // Trim message
        let messageToShow = this.props.question;
        if (this.props.info.question.length > 90) {
            messageToShow = this.props.info.question.substring(0, 90) + '...';
        }
        // Calculate dates
        const createDate = new Date(this.props.info.createdAt);
        const today = new Date();
        const timeDiff = Math.abs(createDate.getTime() - today.getTime());
        const dayDiff = Math.ceil(timeDiff / (1000 * 3600 *24));
        // Get name
        let name = "Anonymous";
        if (!this.props.info.is_anonymous) {
            name = this.props.info.created_by_user.full_name;
        }
        return(
            <TouchableOpacity
                style={styles.container}
                onPress={ () => this.props.navigation.navigate('Detalle', {info: this.props.info}) }
            >
                <View style={styles.header}>
                    <Text>{name}</Text>
                    <Text>{dayDiff} days ago</Text>
                    <Text>Q: {this.props.info.question_id}</Text>
                </View>
                <View style={styles.content}>
                    <Text style={styles.base}>{messageToShow}</Text>
                </View>
                <View style={styles.footer}>
                    <Text style={styles.footerElement}>Likes: {this.props.info.Votes}</Text>
                    <Text style={styles.footerElement}>Comments: {this.props.info.numComments}</Text>
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
    },
    footerElement: {
        margin: 3,
    }
})
