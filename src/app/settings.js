import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useRouter } from 'expo-router';

export default function ContactScreen() {

  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Image
          style={styles.tinyLogo}
          source={'https://reactnative.dev/img/tiny_logo.png'}
        />
        <Text style={styles.textLogo}>Orfanato Raio de Luz</Text>
        <FontAwesome style={styles.iconHome} name="home" size={32} color="white" onPress={() => router.push('/')} />
      </View>

      <ScrollView style={styles.box2} contentContainerStyle={styles.cardsContainer}>

        <View style={styles.card}>
          <Image
            style={styles.cardImage}
            source={'https://s2.glbimg.com/63hqcNFjh5efwqCFyBqqBCVyPkLYffw3GZZAjbxSJutIoz-HdGixxa_8qOZvMp3w/e.glbimg.com/og/ed/f/original/2013/10/23/rayssa2.jpg'}
          />
          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>Bia</Text>
            <Text style={styles.cardDescription}>bia@gmail.com</Text>
          </View>
        </View>

        <View style={styles.card}>
          <Image
            style={styles.cardImage}
            source={'https://img.observatoriodatv.com.br/wp-content/uploads/2020/12/thiago-pedro-henrique-chiquititas.jpg'}
          />
          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>Thiago</Text>
            <Text style={styles.cardDescription}>thiago@gmail.com</Text>
          </View>
        </View>

        <View style={styles.card}>
          <Image
            style={styles.cardImage}
            source={'https://ofuxico.com.br/img/upload/novelas_interna/2021/05/17/marian-chiquititas_19386_76.jpg'}
          />
          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>Marian</Text>
            <Text style={styles.cardDescription}>mari@gmail.com</Text>
          </View>
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
    backgroundColor: '#222222',
    padding: 20,
    gap: 20
  },
  box2: {
    flex: 1,
    backgroundColor: '#182446'
  },
  cardsContainer: {
    padding: 20,
    gap: 15,
  },
  card: {
    backgroundColor: '#ffffff',
    height: 100,
    width: '100%',
    borderRadius: 12,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
  cardImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  cardContent: {
    justifyContent: 'center',
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
  },
  iconHome: {
    marginLeft: 'auto',
  }
});
