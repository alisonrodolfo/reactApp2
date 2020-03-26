import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import { Ionicons } from "@expo/vector-icons";

export default ({ route }) => {
  const contactInfo = route.params.contact;
  const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "transparent",
        alignItems: "center",
        justifyContent: "center"
    },
    image: {
      width: 150,
      height: 150,
      borderRadius: 20,
      alignItems: "center",
      marginBottom: 20
    },
    content: {
      alignItems: "flex-start",
      justifyContent: "center"
    },
    title: {
      fontSize: 18,
      fontWeight: "600",
      color: "#3a3a3a"
    },
    subtitle: {
      color: "#666",
      fontSize: 16,
      marginTop: 2
    },
    separator: {
      backgroundColor: "#ececec",
      height: 1
    },
    right: {
      alignItems: "flex-end",
      flex: 1
    }
  });

  return <TouchableOpacity style={styles.container}>
  <View>
    <Image source={{ uri: contactInfo.picture.large }} style={styles.image} />
  </View>
  <View style={styles.content}>
    <Text style={styles.title}><Ionicons name="ios-contact" color="#666" size={20} /> Nome: {contactInfo.name.first} {contactInfo.name.last}</Text>
    <Text style={styles.subtitle}><Ionicons name="ios-at" color="#666" size={20} /> Email: {contactInfo.email}</Text>
    <Text style={styles.subtitle}><Ionicons name="ios-call" color="#666" size={20} /> Telefone: {contactInfo.phone}</Text>
    <Text style={styles.subtitle}><Ionicons name="ios-chatbubbles" color="#666" size={20} /> Celular: {contactInfo.cell}</Text>
  </View>
</TouchableOpacity>;
};


/*
const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: "transparent",
      alignItems: "center",
      justifyContent: "center"
  }
  image: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10
  },
  content: {
    alignItems: "flex-start",
    justifyContent: "center"
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    color: "#3a3a3a"
  },
  subtitle: {
    color: "#666",
    fontSize: 16,
    marginTop: 2
  },
  separator: {
    backgroundColor: "#ececec",
    height: 1
  },
  right: {
    alignItems: "flex-end",
    flex: 1
  }
});

*/