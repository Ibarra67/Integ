// screens/CreateEventPortfolio.js

import React, { useState,  } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";


const Portfolio = ({ navigation }) => {
  const [editEmail, setEditEmail] = useState("");
  const [editUsername, setEditUsername] = useState("");
  const [enterPassword, setEnterPassword] = useState("");
  const [addNumber, setAddNumber] = useState("");

  const handleCreateEvent = () => {
    // Add logic to create event
    console.log("Event Created:", { editEmail, editUsername, enterPassword, addNumber });
  };

  return (
    <ScrollView style={styles.container}>
      <Image
        style={[styles.orgimage, { alignSelf: 'center' }]}
        source={{
          uri: 'https://plus.unsplash.com/premium_photo-1713720664394-26c796720ed6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        }}
      />
      <Text style={styles.title}>Organizer Name </Text>
      <View style={styles.form}>
        <Text style={styles.label}>Account Details</Text>

        <Text style={styles.labelsubheader}>Edit Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your Email"
          placeholderTextColor="#999"
          value={editEmail}
          onChangeText={setEditEmail}
        />

        <Text style={styles.labelsubheader}>Edit Username</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your Username"
          placeholderTextColor="#999"
          value={editUsername}
          onChangeText={setEditUsername}
        />

        <Text style={styles.labelsubheader}>Enter Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your Password"
          placeholderTextColor="#999"
          value={enterPassword}
          onChangeText={setEnterPassword}
        />

        <Text style={styles.labelsubheader}>Edit Contact Number</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your Phone Number"
          placeholderTextColor="#999"
          value={addNumber}
          onChangeText={setAddNumber}
        />
        
        <TouchableOpacity style={styles.button} onPress={handleCreateEvent}>
          <Text style={styles.buttonText}>Create New Event Portfolio</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonsumbit} onPress={handleCreateEvent}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    padding: 20,
  },
  orgimage:{
    alignItems: 'center',
    height: 130,
    width: 130,
    borderRadius: 150,
  },
  title: {
    color: "#FFD700",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    paddingTop: 10,
    textDecorationLine: 'underline'
  },
  coverPhotoText: {
    color: "#FFD700",
    fontSize: 18,
  },
  form: {
    flex: 1,
    padding: 10,
  },
  label: {
    color: "#FFD700",
    fontSize: 18,
    marginBottom: 10,
  },
  labelsubheader: {
    fontSize: 10,
    marginBottom: 5,
    color: "#FFD700",
  },
  input: {
    backgroundColor: "#333",
    borderRadius: 10,
    height: 40,
    paddingHorizontal: 10,
    marginBottom: 10,
    color: "#FFF",
  },
  datePicker: {
    backgroundColor: "#333",
    borderRadius: 10,
    height: 40,
    justifyContent: "center",
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  datePickerText: {
    color: "#FFF",
  },
  button: {
    backgroundColor: "#daa520",
    borderRadius: 10,
    height: 45,
    width: 250,
    justifyContent: "center",
    alignItems: "center",
    margin: 'auto',

  },

  buttonsumbit: {
    backgroundColor: "#daa520",
    borderRadius: 10,
    height: 45,
    width: 150,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    margin: 'auto',

  },

  buttonText: {
    color: "#000",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Portfolio;