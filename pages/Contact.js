import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, Image } from 'react-native';
import React from 'react';

const Contact = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View>
        <Image source={{ uri: 'https://plus.unsplash.com/premium_photo-1713720664394-26c796720ed6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }} style={styles.backgroundImage} />
        <View style={styles.overlay} />
      </View>
      <View style={styles.header}>
        <Text style={styles.headerText}>CONTACT US</Text>
      </View>

      {/* Form */}
      <View style={styles.form}>
        <View style={styles.row}>
          <TextInput
            style={styles.textInputHalf}
            placeholder="Name"
            placeholderTextColor="#A9A9A9"
          />
          <TextInput
            style={styles.textInputHalf}
            placeholder="Email"
            placeholderTextColor="#A9A9A9"
          />
        </View>
        <View style={styles.row}>
          <TextInput
            style={styles.textInputHalf}
            placeholder="Phone Number"
            placeholderTextColor="#A9A9A9"
          />
        </View>
        <TextInput
          style={styles.messageInput}
          placeholder="Write us a message."
          multiline={true}
          placeholderTextColor="#A9A9A9"
        />
        <TouchableOpacity style={styles.submitButton}>
          <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: 'black',
  },
  header: {
    alignItems: 'center',
    marginBottom: 24,
    paddingTop: 70,
  },
  headerText: {
    fontSize: 32,
    color: 'white',
    textDecorationLine: 'underline',
  },
  form: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingTop: 100,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  textInputHalf: {
    backgroundColor: 'white',
    padding: 12,
    borderRadius: 4,
    fontSize: 16,
    flex: 1,
    marginRight: 8,
  },
  messageInput: {
    backgroundColor: '#FFFFFF',
    padding: 12,
    borderRadius: 4,
    fontSize: 16,
    marginBottom: 16,
    height: 100,
  },
  submitButton: {
    backgroundColor: '#daa520',
    padding: 12,
    borderRadius: 4,
    alignItems: 'center',
  },
  submitButtonText: {
    fontSize: 16,
    color: '#000',
  },
  backgroundImage:{
    width: '100%',
    height: 200,
    position: 'absolute',
    top: 0,
  },
  overlay:{
    position: 'absolute',
    top: 0,
    width: '100%',
    height: 200,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
});

export default Contact;