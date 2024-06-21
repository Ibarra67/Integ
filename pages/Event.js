import { StyleSheet, Text, View, ScrollView, Image, FlatList, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

const events = [
  {
    id: '1',
    title: 'EVENT 1',
    place: 'EVENT PLACE',
    date: 'May 19, 2024',
    host: ['Conchür Regina', 'Ileana Mai'],
    guest: ['Hiroki Augusta', 'Tadgh Masaharu'],
    vip: ['Raphael Gioacchino'],
    image: 'https://plus.unsplash.com/premium_photo-1713720664394-26c796720ed6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Replace with actual image URL
  },
  {
    id: '2',
    title: 'EVENT 2',
    place: 'EVENT PLACE',
    date: 'June 5, 2024',
    host: ['Host Name 1', 'Host Name 2'],
    guest: ['Guest Name 1', 'Guest Name 2'],
    vip: ['VIP Name 1'],
    image: 'https://plus.unsplash.com/premium_photo-1713720664394-26c796720ed6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Replace with actual image URL
  },
  {
    id: '3',
    title: 'EVENT 3',
    place: 'EVENT PLACE',
    date: 'July 10, 2024',
    host: ['Host Name 3', 'Host Name 4'],
    guest: ['Guest Name 3', 'Guest Name 4'],
    vip: ['VIP Name 2'],
    image: 'https://plus.unsplash.com/premium_photo-1713720664394-26c796720ed6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Replace with actual image URL
  },
];

const Event = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleEventPress = (event) => {
    setSelectedEvent(event === selectedEvent ? null : event);
  };

  return (
    <ScrollView style={styles.container}>
      <View>
        <Image source={{ uri: 'https://plus.unsplash.com/premium_photo-1713720664394-26c796720ed6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }} style={styles.backgroundImage} />
        <View style={styles.overlay} />
      </View>
      <View style={styles.eventTitleContainer}>
        <Text style={styles.eventTitle}>EVENT</Text>
        <Text style={styles.eventSubheading}>Never missing an occasion with EventWise</Text>
      </View>

      <View style={styles.currentEventsContainer}>
        <Text style={styles.currentEventsTitle}>CURRENT EVENTS</Text>
        <Text style={styles.currentEventsSubtitle}>Ongoing and upcoming events</Text>
        <FlatList
          data={events}
          horizontal
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handleEventPress(item)} style={styles.eventItem}>
              <Image source={{ uri: item.image }} style={styles.eventImage} />
              <Text style={styles.eventItemTitle}>{item.title}</Text>
              <Text style={styles.eventItemPlace}>{item.place}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
        />
      </View>

      {selectedEvent && (
        <View style={styles.detailsContainer}>
          <View style={styles.eventDetailsContainer}>
            <Text style={styles.eventDetails}>Date: {selectedEvent.date}</Text>
          </View>

          <View style={styles.infoContainer}>
            <View style={styles.infoCategory}>
              <Text style={styles.infoLabel}>HOST</Text>
              {selectedEvent.host.map((host, index) => (
                <Text key={index} style={styles.infoText}>{host}</Text>
              ))}
            </View>
            <View style={styles.infoCategory}>
              <Text style={styles.infoLabel}>GUEST</Text>
              {selectedEvent.guest.map((guest, index) => (
                <Text key={index} style={styles.infoText}>{guest}</Text>
              ))}
            </View>
            <View style={styles.infoCategory}>
              <Text style={styles.infoLabel}>VIP</Text>
              {selectedEvent.vip.map((vip, index) => (
                <Text key={index} style={styles.infoText}>{vip}</Text>
              ))}
            </View>
          </View>
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  backgroundImage: {
    width: '100%',
    height: 200,
    position: 'absolute',
    top: 0,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: 200,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  eventTitleContainer: {
    alignItems: 'center',
    padding: 20,
    marginTop: 100,
  },
  eventTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
  },
  eventSubheading: {
    fontSize: 16,
    color: 'white',
  },
  currentEventsContainer: {
    padding: 20,
  },
  currentEventsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 8,
  },
  currentEventsSubtitle: {
    fontSize: 16,
    color: 'white',
    marginBottom: 16,
  },
  eventItem: {
    marginRight: 16,
    width: 150,
    alignItems: 'center',
  },
  eventImage: {
    width: 150,
    height: 150,
    borderRadius: 10,
  },
  eventItemTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 8,
  },
  eventItemPlace: {
    fontSize: 14,
    color: 'white',
  },
  detailsContainer: {
    padding: 20,
  },
  eventDetailsContainer: {
    backgroundColor: '#333',
    borderRadius: 10,
    marginBottom: 20,
    padding: 20,
  },
  eventDetails: {
    fontSize: 16,
    color: 'white',
  },
  infoContainer: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: '#333',
    borderRadius: 10,
    padding: 20,
    marginBottom: 50,
  },
  infoCategory: {
    alignItems: 'center',
  },
  infoLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 8,
    textDecorationLine: 'underline',
  },
  infoText: {
    fontSize: 16,
    color: 'white',
    
  },
});

export default Event;
