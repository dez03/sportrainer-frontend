import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const newUserQuiz = () => {
  const [userName, setUserName] = useState(""); // State to store the user's name

  useEffect(() => {
    // Fetch the user's name here, using your API or local storage
    // Replace this with your actual data retrieval logic
    const fetchUserName = async () => {
      try {
        const response = await fetch(
          `https://your-api-endpoint.com/user/name`, // Replace with your actual API endpoint
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${accessToken}`,
              // Add any other required headers here
            },
          }
        );

        if (!response.ok) {
          throw new Error("Error fetching user data");
        }

        const data = await response.json();
        setUserName(data.name); // Set the user's name in the state
      } catch (error) {
        console.error("Error fetching user data", error);
      }
    };

    fetchUserName();
  }, []); // Empty dependency array ensures this effect runs only once

  // ... rest of your component code
};

export default newUserQuiz;
