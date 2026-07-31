import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Image
          style={styles.tinyLogo}
          source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
          }}
        />
        <Text style={styles.textLogo}>APP Legal</Text>
      </View>

      <ScrollView style={styles.box2} contentContainerStyle={styles.cardsContainer}>

        <View style={styles.card}>
          <Image 
            style={styles.cardImage} 
            source={{ uri: 'https://picsum.photos/300/150' }} 
          />
          <Text style={styles.cardTitle}>Ana Julia</Text>
          <Text style={styles.cardDescription}>ana@gmail.com</Text>
        </View>

        <View style={styles.card}>
          <Image 
            style={styles.cardImage} 
            source={{ uri: 'https://picsum.photos/300/150' }} 
          />
          <Text style={styles.cardTitle}>Joao</Text>
          <Text style={styles.cardDescription}>joao@gmail.com</Text>
        </View>

        <View style={styles.card}>
          <Image 
            style={styles.cardImage} 
            source={{ uri: 'https://picsum.photos/300/150' }} 
          />
          <Text style={styles.cardTitle}>Carla</Text>
          <Text style={styles.cardDescription}>carla@gmail.com</Text>
        </View>

      </ScrollView>

       <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffdf4f',
  },
  box: {
    height: 100,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#345678',
    padding: 20,
    gap: 20
  },
  box2: {
    flex: 1,
    backgroundColor: '#5fbb21'
  },
  cardsContainer: {
    padding: 20, 
    gap: 15,    
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 12,     
    padding: 16,   
    flexDirection: 'row', 
    alignItems: 'center', 
    gap: 15,         
  },
  cardImage: {
    width: '100%',        
    height: 150,          
    borderRadius: 8,   
    marginBottom: 10,    
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 6,
  },
  cardDescription: {
    fontSize: 14,
    color: '#666',
  },
  tinyLogo: {
    width: 60,
    height: 60,
  },
  textLogo: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  }
});
