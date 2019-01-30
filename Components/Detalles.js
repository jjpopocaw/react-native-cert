import React from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput } from 'react-native';
import { State } from 'react-native-gesture-handler';

class Detalles extends React.Component{

    constructor (props){
        super(props);
        this.state = {
            comments: [
                "Good",
                "Thanks!",
                ";p",
                "LGTM"
            ],
            text: "Add Comment"
        }
    }

    static navigationOptions = {
        title: 'Question',
      };

    render(){
        const questionObject = this.props.navigation.getParam('info');
        return(
            <View style={styles.container}>
                <Text style={{ margin: 15,}}>
                    {questionObject.question}
                </Text>
                <Text style={styles.titles}>
                    Answer by {questionObject.Answer.user.full_name}
                </Text>
                <Text style={styles.answerContainer}>
                    {questionObject.Answer.answer}
                </Text>
                <Text style={styles.titles}>
                    Comments
                </Text>
                <ScrollView>
                    {this.state.comments.map((value, index) =>
                        <Text style={styles.comments} key={index}>{value}</Text> 
                    )}
                </ScrollView> 
                <TextInput 
                    value={this.state.text} 
                    style={styles.addComent}
                    onTouchStart={() => this.setState({text: ""})}
                    onChangeText={(value) => this.setState({text: value})}
                    onEndEditing={() => {
                        let comments = this.state.comments;
                        comments.push(this.state.text);
                        this.setState({ comments: comments, text: "Add Comment" });
                    }}
                />
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'flex-end',
    },
    answerContainer:{
        borderWidth: 1,
        margin: 15,
        marginTop: 2,
        padding: 5,
        borderColor: '#bcbcbc',
        backgroundColor: '#eaeaea'
    },
    titles:{
        marginLeft: 15,
        fontWeight: 'bold',
    },
    commentsContainer:{
        flex: 1,
        justifyContent: 'flex-end',
    },
    comments:{
        width: 150,
        margin: 5,
        padding: 8,
        backgroundColor: '#c1bfbf',
        borderWidth: 2,
        borderColor: '#5e5e5e',
    },
    addComent:{
        height: 40,
        marginBottom: 30,
        borderWidth: 5,
        borderColor: '#5e5e5e',
    }
})

export default Detalles;
