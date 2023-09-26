import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [age, setAge] = useState("");
  const [errorMessage, setErrorMessage] = useState();
  const handleLogin = async() => {
    const response = await fetch(
      `https://4a7vtq0f3e.execute-api.us-east-1.amazonaws.com/dev/user/signup`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
          age: age,
          firstName: firstName,
        }),
      }
    );
    const data = await response.json();
    console.log(data)

    if (data.success){
      // TODO go to different page once user sucessfully registers
    }
    setErrorMessage(data.message)
    return;
  };

  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Text style={styles.label}>Email:</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={(text) => setEmail(text)}
          value={email}
          autoCapitalize="none" // Disable capitalization
          keyboardType="email-address" // Set keyboardType to 'email-address'
        />

        <Text style={styles.label}>Password:</Text>
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
          value={password}
        />

        <Text style={styles.label}>First Name:</Text>
        <TextInput
          style={styles.input}
          placeholder="First Name"
          onChangeText={(text) => setFirstName(text)}
          value={firstName}
        />
        {/* // TODO Make age a dropdown */}
        <Text style={styles.label}>Age:</Text>
        <TextInput
          style={styles.input}
          placeholder="Age"
          keyboardType="numeric"
          onChangeText={(text) => setAge(text)}
          value={age}
        />
        {/* <Link href="/app/home"> */}
        <Button title="Sign up" onPress={handleLogin} />
        {/* </Link> */}

        {/* //TODO add loading button and disable the button when the API is getting called, aka style this whole page */}
        <Text>{errorMessage}</Text>
      </View>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 16,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 16,
    height: 40,
  },
});

export default LoginScreen;
