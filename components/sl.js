import React from 'react';
import { StyleSheet, View, Image, Button, handlePress, item, screen } from 'react-native';

const SL = ({ imagePath, buttonText, screen, navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={imagePath}
      />
      <View style={styles.buttonContainer}>
        <Button
          title={buttonText}
          color="#1269cc"

          onPress={() => {
            
            if (screen) {
              navigation.navigate(screen);
            } else {
              console.log('Nenhuma tela especificada');
            }
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  image: {
    marginTop: 20,
    width: 163,
    height: 133,
    resizeMode: 'contain',
  },
  buttonContainer: {
    marginTop: 4,
    width: 110,
    height: 40,
  },
});

export default SL;