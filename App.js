import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native'; // Ensure Image is imported from react-native
import QRCode from 'react-native-qrcode-svg';
import { Feather } from '@expo/vector-icons';

const App = () => {
  return (
    <View style={styles.container}>
      {/* Heading */}
      <View style={styles.headingContainer}>
        <Text style={styles.headingText}>Share my card</Text>
      </View>

      {/* QR Code */}
      <View style={styles.qrCodeContainer}>
        <QRCode value="https://nexalink.co" size={200} />
      </View>

      {/* Options Box */}
      <View style={styles.optionsContainer}>
        <View style={styles.option}>
          <Feather name="check-circle" size={24} color="black" />
          <Text style={styles.optionText}>Share my card</Text>
        </View>
        <View style={styles.option}>
          <Feather name="credit-card" size={24} color="black" />
          <Text style={styles.optionText}>Add card to wallet</Text>
        </View>
        <View style={styles.option}>
          <Feather name="home" size={24} color="black" />
          <Text style={styles.optionText}>Add card to homescreen</Text>
        </View>
        <View style={styles.option}>
          <Feather name="mail" size={24} color="black" />
          <Text style={styles.optionText}>Create email signature</Text>
        </View>
        <View style={styles.option}>
          <Feather name="image" size={24} color="black" />
          <Text style={styles.optionText}>Create virtual background</Text>
        </View>
      </View>

      {/* Share with Airdrop Button */}
      <View style={styles.buttonContainer}>
        {/* <Image source={require('./assets/airdrop.png')} style={styles.icon} /> */}
        <Text style={styles.buttonText}>Share with Airdrop</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headingContainer: {
    backgroundColor: 'rgb(238, 122, 60)',
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom: 20,
  },
  headingText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  qrCodeContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  optionsContainer: {
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    width: '80%',
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  optionText: {
    marginLeft: 10,
    fontSize: 16,
    color: 'black',
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgb(238, 122, 60)',
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default App;
