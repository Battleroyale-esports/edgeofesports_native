import React, { useEffect } from 'react';
import { View, StyleSheet, Dimensions, Image } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  useDerivedValue,
  withTiming,
  Easing,
} from 'react-native-reanimated';
import Svg, { Path, Rect } from 'react-native-svg';
import { Text as RNText } from 'react-native';

const { width, height } = Dimensions.get('window');

const AviatorAnimatedGame: React.FC = () => {
  const progress = useSharedValue(0);

  const multiplier = useDerivedValue<string>(() => {
    const mult = 1 + progress.value * 50;
    return mult.toFixed(2);
  });

  useEffect(() => {
    progress.value = withTiming(
      1,
      { duration: 8000, easing: Easing.linear },
      (isFinished) => {
        if (isFinished) console.log('Crashed!');
      }
    );
  }, []);

  const planeStyle = useAnimatedStyle(() => {
    const x = progress.value * width * 0.9;
    const y = height / 2 - Math.pow(progress.value, 2) * (height / 2.5);
    return { transform: [{ translateX: x }, { translateY: y }] };
  });

  const getCurvePath = (): string => {
    const points: string[] = [];
    const step = 0.01;
    for (let t = 0; t <= progress.value; t += step) {
      const x = t * width * 0.9;
      const y = height / 2 - Math.pow(t, 2) * (height / 2.5);
      points.push(`${x},${y}`);
    }
    return `M0,${height / 2} L${points.join(' ')} `;
  };

  return (
    <View style={styles.container}>
      <Svg style={StyleSheet.absoluteFill}>
        <Rect width="100%" height="100%" fill="black" />
        <Path d={getCurvePath()} stroke="red" strokeWidth={3} fill="transparent" />
      </Svg>

      <Animated.View style={[styles.plane, planeStyle]}>
        <Image
          source={{ uri: 'https://cdn-icons-png.flaticon.com/512/2933/2933896.png' }}
          style={{ width: 40, height: 40, tintColor: 'red' }}
        />
      </Animated.View>

      <AnimatedText style={styles.multiplier}>{multiplier}</AnimatedText>
    </View>
  );
};

// Animated.Text wrapper for TS compatibility
const AnimatedText = Animated.createAnimatedComponent(RNText);

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#A7A7A7', justifyContent: 'center', alignItems: 'center', margin: 20 },
  multiplier: {
    position: 'absolute',
    fontSize: 48,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  plane: { position: 'absolute' },
});

export default AviatorAnimatedGame;
