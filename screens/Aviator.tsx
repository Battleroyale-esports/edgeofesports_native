import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const AviatorGameT: React.FC = () => {
  const [multiplier, setMultiplier] = useState<number>(1.0);
  const [isFlying, setIsFlying] = useState<boolean>(false);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);

  const startFlight = () => {
    setMultiplier(1.0);
    setIsFlying(true);

    const id = setInterval(() => {
      setMultiplier((prev) => parseFloat((prev * 1.02).toFixed(2)));
    }, 100);

    setIntervalId(id);

    // simulate random crash between 3 and 10 seconds
    const crashTime = Math.random() * 7000 + 3000;
    setTimeout(() => {
      stopFlight();
      console.log('Crashed at ' + multiplier.toFixed(2) + 'x');
    }, crashTime);
  };

  const stopFlight = () => {
    if (intervalId) {
      clearInterval(intervalId);
    }
    setIsFlying(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.multiplier}>{multiplier.toFixed(2)}x</Text>
      {!isFlying ? (
        <Button title="Start Flight" onPress={startFlight} />
      ) : (
        <Button title="Cash Out" onPress={stopFlight} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'black' },
  multiplier: { fontSize: 48, color: 'white', marginBottom: 20 },
});

export default AviatorGameT;
