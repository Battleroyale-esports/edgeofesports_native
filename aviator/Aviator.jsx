import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, Animated, TouchableOpacity, Dimensions, Image } from 'react-native';

const AviatorGame = () => {
  const screenHeight = Dimensions.get('window').height;
  const [gameState, setGameState] = useState('idle'); // idle, flying, crashed, cashedOut
  const [multiplier, setMultiplier] = useState(1.00);
  const [cashedOutAt, setCashedOutAt] = useState(0);
  const positionAnim = useRef(new Animated.Value(0)).current;
  const crashPointRef = useRef(null);

  // Generate random crash point between 1.5x-10x
  useEffect(() => {
    crashPointRef.current = (Math.random() * 8.5) + 1.5;
  }, []);

  const startGame = () => {
    setGameState('flying');
    setMultiplier(1.00);
    setCashedOutAt(0);
    
    positionAnim.setValue(0);
    Animated.timing(positionAnim, {
      toValue: 1,
      duration: 10000,
      easing: t => t * t, // Quadratic easing for acceleration
      useNativeDriver: true,
    }).start(({ finished }) => {
      if (finished) {
        setGameState('crashed');
      }
    });
  };

  const cashOut = () => {
    positionAnim.stopAnimation(value => {
      const currentMultiplier = 1 + (value * 9); // 1x-10x range
      setCashedOutAt(currentMultiplier);
      setGameState('cashedOut');
    });
  };

  const planePosition = positionAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [screenHeight * 0.7, -200] // Start at bottom, fly off top
  });

  const currentMultiplier = positionAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 10]
  });

  return (
    <View style={styles.container}>
      {/* Sky Background */}
      <View style={styles.sky} />
      
      {/* Cloud Decorations */}
      <View style={styles.cloud1} />
      <View style={styles.cloud2} />
      
      {/* Multiplier Display */}
      <View style={styles.multiplierContainer}>
        <Text style={styles.multiplierText}>
          {gameState === 'cashedOut' 
            ? `${cashedOutAt.toFixed(2)}x` 
            : gameState === 'crashed'
              ? '0.00x'
              : currentMultiplier.interpolate({
                  inputRange: [1, 10],
                  outputRange: ['1.00x', '10.00x']
                })
          }
        </Text>
      </View>
      
      {/* Plane Animation */}
      <Animated.View 
        style={[
          styles.plane, 
          { transform: [{ translateY: planePosition }] }
        ]}
      >
        <Image 
          source={require('./../plane.png')} // Replace with your plane image
          style={styles.planeImage}
        />
      </Animated.View>
      
      {/* Runway */}
      <View style={styles.runway} />
      
      {/* Control Buttons */}
      <View style={styles.controls}>
        {gameState === 'idle' || gameState === 'crashed' || gameState === 'cashedOut' ? (
          <TouchableOpacity style={styles.button} onPress={startGame}>
            <Text style={styles.buttonText}>
              {gameState === 'idle' ? 'START GAME' : 'PLAY AGAIN'}
            </Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.button} onPress={cashOut}>
            <Text style={styles.buttonText}>CASH OUT</Text>
          </TouchableOpacity>
        )}
      </View>
      
      {/* Status Message */}
      {gameState === 'crashed' && (
        <Text style={styles.crashText}>Plane crashed!</Text>
      )}
      {gameState === 'cashedOut' && (
        <Text style={styles.successText}>Cashed out at {cashedOutAt.toFixed(2)}x!</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#87CEEB',
  },
  sky: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#87CEEB',
  },
  cloud1: {
    position: 'absolute',
    top: 100,
    left: 50,
    width: 80,
    height: 30,
    backgroundColor: 'white',
    borderRadius: 40,
  },
  cloud2: {
    position: 'absolute',
    top: 150,
    right: 30,
    width: 100,
    height: 40,
    backgroundColor: 'white',
    borderRadius: 50,
  },
  multiplierContainer: {
    position: 'absolute',
    top: 50,
    alignSelf: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 15,
    borderRadius: 10,
  },
  multiplierText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
  },
  plane: {
    position: 'absolute',
    left: Dimensions.get('window').width / 2 - 50,
  },
  planeImage: {
    width: 100,
    height: 60,
    resizeMode: 'contain',
  },
  runway: {
    position: 'absolute',
    bottom: 0,
    height: 100,
    width: '100%',
    backgroundColor: '#2F4F4F',
    borderTopWidth: 2,
    borderTopColor: 'white',
  },
  controls: {
    position: 'absolute',
    bottom: 120,
    alignSelf: 'center',
  },
  button: {
    backgroundColor: '#FFD700',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 30,
    elevation: 5,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  crashText: {
    position: 'absolute',
    top: 120,
    alignSelf: 'center',
    color: 'red',
    fontSize: 24,
    fontWeight: 'bold',
  },
  successText: {
    position: 'absolute',
    top: 120,
    alignSelf: 'center',
    color: 'green',
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default AviatorGame;