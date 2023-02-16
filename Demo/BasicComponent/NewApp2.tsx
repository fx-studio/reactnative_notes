import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import MyComponent from "./MyComponent";

const ChildComponent = ({counter, parentCallback}) => {

    const [text, onChangeText] = useState("");

    // call back
    const send = () => { parentCallback(text); }

    return (
        <View style={styles.childView}>
            <Text style={{ color: "#000000", fontWeight: "bold", fontSize: 20, }}>Bộ đếm {counter}</Text>
            <Text style={{ color: "red",fontSize: 20, }}>Gửi cho Cha già</Text>
            <TextInput value={text} placeholder="nhập vào đi" onChangeText={onChangeText} style={styles.textInput}/>
            <TouchableOpacity style={styles.buttonSend} onPress={send}>
                <Text style={{ color: "white"}}>Gửi</Text>
            </TouchableOpacity>
        </View>
    )    
};

function Welcome(props) {

    return(
      <Text>Hello, {props.name}</Text>  
    );
}

const NewApp2 = () => {

    const [count, setCount] = useState(0);

    // call back
    const [childrendContent, setChildrendContent] = useState(`Món quà từ con`);
    const callbackFunction = (childData: React.SetStateAction<string>) => { setChildrendContent(childData) }

    return (
        <View style={styles.containerView}>
            <MyComponent name={"ABC"}/>
            <Welcome name={"ABC2"} />
            <Text style={{ color: "green", fontWeight: "bold", fontSize: 15, }}>Dữ liệu từ con: {childrendContent}</Text>
            <TouchableOpacity
                style={{
                    alignItems: 'center',
                    backgroundColor: '#DDDDDD',
                    padding: 10,
                    marginBottom: 10,
                }}
                onPress={ ()=> setCount(count + 1) }>
                <Text>Tap me!</Text>
            </TouchableOpacity>
            <ChildComponent counter={count} parentCallback={callbackFunction}></ChildComponent>
        </View>
  );
};

const styles = StyleSheet.create({
    containerView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    childView: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    textInput: {
        borderWidth: 1,
        borderColor: "#be29ec",
        borderRadius: 8,
        padding: 5
    },
    buttonSend: {
        alignItems: 'center',
        backgroundColor: 'blue',
        padding: 10,
        margin: 10
    }
});

export default NewApp2;


