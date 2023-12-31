import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Image } from "react-native";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";

const LoginScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [age, setAge] = useState("");
  const [errorMessage, setErrorMessage] = useState();
  const handleLogin = async () => {
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
    console.log(data);

    if (data.success) {
      // TODO go to different page once user sucessfully registers
    }
    setErrorMessage(data.message);
    return;
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/sporTrainerStanfordBaseballBG.png")} // Replace with your PNG file path
        style={styles.image} // Apply styles as needed
      />
      <View style={styles.topTextContainer}>
        <View style={styles.loginTextContainer}>
          <Text style={styles.loginText}>Login</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
          <View style={styles.signupTextContainer}>
            <Text style={styles.signupText}>Sign Up</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.overlayContainer}>
        <Text style={styles.baseText}>
          WELCOME BACK,<Text style={styles.innerText}> PUNK. </Text>
        </Text>

        <Text style={styles.overlayText}>
          LOG IN TO YOUR ACCOUNT TO CONTINUE TRAINING{"\n"}
          <Text style={styles.innerTextBelow}>
            {""}
            UNLESS YOU DON'T HAVE THE BALLS.{""}
          </Text>
        </Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={(text) => setEmail(text)}
          value={email}
          placeholderTextColor={"white"}
          autoCapitalize="none" // Disable capitalization
          keyboardType="email-address" // Set keyboardType to 'email-address'
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
          placeholderTextColor={"white"}
          onChangeText={(text) => setPassword(text)}
          value={password}
        />

        <TouchableOpacity
          onPress={handleLogin}
          style={styles.signupButtonContainer}
        >
          <View style={styles.signupButton}>
            <Text style={styles.signupButtonText}>Login</Text>
            <AntDesign name="caretright" size={18} color="black" />
          </View>
        </TouchableOpacity>

        {/* //TODO add a loading button and disable the button when the API is getting called, aka style this whole page */}
        <Text style={styles.signupText}>{errorMessage}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1c1c1e",
    color: "white",
  },

  image: {
    width: "100%", // Adjust the width as needed
    height: "60%", // Set the height to 60% of the screen or adjust as needed
    overflow: "hidden", // Clip the image to its container
    opacity: 0.3, // Adjust the opacity value as needed
  },
  topTextContainer: {
    marginHorizontal: 30,
    position: "absolute", // Position the text container absolutely
    top: "8%", // Place it at the top of the screen
    flexDirection: "row", // Allow text elements to be in a row
    alignItems: "center", // Center text vertically
  },
  overlayContainer: {
    marginHorizontal: 30,
    position: "absolute", // Position the overlay text container absolutely
    top: "25%", // Place it below the Login/Sign Up text
  },
  inputContainer: {
    marginHorizontal: 30,
  },
  baseText: {
    color: "white",
    fontSize: 55,
    marginBottom: 20,
  },
  innerText: {
    fontSize: 55,
    fontWeight: "bold",
  },
  overlayText: {
    color: "white",
    fontSize: 17,
  },
  innerTextBelow: {
    fontSize: 22,
    fontWeight: "bold",
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: "white",
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 16,
    height: 40,
    color: "white",
  },
  loginTextContainer: {
    borderBottomWidth: 3,
    paddingBottom: 4,
    borderBottomColor: "#d0fd3e",
  },
  loginText: {
    color: "white",
    fontSize: 18,

    fontWeight: "bold",
  },
  signupTextContainer: {
    paddingBottom: 6,
  },
  signupText: {
    paddingLeft: 35,
    color: "white",
    fontSize: 18,
  },
  signupButtonContainer: {
    alignItems: "flex-end",
  },
  signupButton: {
    textAlign: "right",
    flexDirection: "row",
    backgroundColor: "#d0fd3e", // Background color
    borderRadius: 24,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  signupButtonText: {
    color: "#1c1c1e",
    fontSize: 18,
    marginRight: 5,
  },
  APIMessage: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default LoginScreen;
