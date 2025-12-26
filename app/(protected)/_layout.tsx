import { Stack } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

export default function ProtectedLayout() {
  return (
    
    <Stack screenOptions={{headerShown:false}}/>
  );
}
