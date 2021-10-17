import "react-native-gesture-handler";
import React from "react";
import Main from "./src";
import { NavigationContainer } from "@react-navigation/native";

export default () => {
    return (
        <NavigationContainer>
            <Main />
        </NavigationContainer>
    );
}