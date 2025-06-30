// import React, { useEffect } from 'react';
// import { View, Text, Dimensions, StyleSheet, Image } from 'react-native';
// import Animated, { useSharedValue, useAnimatedProps, withTiming, Easing } from 'react-native-reanimated';
// import Svg, { Path, Circle } from 'react-native-svg';

// const { width, height } = Dimensions.get('window');

// const DURATION = 1000; // 10 seconds
// const MAX_MULTIPLIER = 10;

// const AnimatedPath = Animated.createAnimatedComponent(Path);

// const CrashGameAnimation = () => {
//   const progress = useSharedValue(0);
//   const multiplier = useSharedValue(1);

//   useEffect(() => {
//     progress.value = withTiming(1, { duration: DURATION, easing: Easing.linear });
//     multiplier.value = withTiming(MAX_MULTIPLIER, { duration: DURATION, easing: Easing.linear });
//   }, []);

//   const animatedProps = useAnimatedProps(() => {
//     // Create exponential curve path: y = x^2
//     let path = `M0,${height}`;
//     const steps = 200;
//     for (let i = 0; i <= steps; i++) {
//       const t = (i / steps) * progress.value;
//       const x = t * width;
//       const y = height - Math.pow(t, 2) * height; // y = 1 - t^2
//       path += ` L${x},${y}`;
//     }
//     return { d: path };
//   });

//   const planeX = useSharedValue(0);
//   const planeY = useSharedValue(height);

//   useEffect(() => {
//     progress.value = withTiming(1, {
//       duration: DURATION,
//       easing: Easing.linear,
//     }, () => {
//       // animation end
//     });
//   }, []);

//   return (
//     <View style={styles.container}>
//       <Svg width={width} height={height} style={StyleSheet.absoluteFill}>
//         <AnimatedPath
//           animatedProps={animatedProps}
//           stroke="#FF0000"
//           strokeWidth={2}
//           fill="#FF000040"
//         />
//       </Svg>

//       <Animated.Text style={[styles.multiplier, {
//         transform: [{ scale: 1.2 }],
//       }]}>
//         {multiplier.value.toFixed(2)}x
//       </Animated.Text>

//       <Animated.View style={{
//         position: 'absolute',
//         left: progress.value * width - 120,
//         top: height - Math.pow(progress.value, 2) * height + 20, // Adjust for plane height
//       }}>
//         <Image
//           source={require('./../assets/plane3.png')}
//           style={{ width: 100, height: 60, tintColor: 'red' }}
//         />
//       </Animated.View>
//     </View>
//   );
// };

// export default CrashGameAnimation;

// const styles = StyleSheet.create({
//   container: {
//     // flex: 1,
//     height: 250,
//     width: '100%',
//     backgroundColor: '#0D0D0D',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   multiplier: {
//     position: 'absolute',
//     fontSize: 48,
//     color: 'white',
//     fontWeight: 'bold',
//   },
// });










































// import React, { useEffect, useState } from 'react';
// import { View, Dimensions, StyleSheet, Image, Text as RNText } from 'react-native';
// import Animated, {
//   useSharedValue,
//   useAnimatedProps,
//   useAnimatedStyle,
//   withTiming,
//   Easing,
// } from 'react-native-reanimated';
// import Svg, { Path } from 'react-native-svg';

// const { width } = Dimensions.get('window');
// const CONTAINER_HEIGHT = 250;

// const DURATION = 10000; // 10 seconds for clearer animation speed
// const MAX_MULTIPLIER = 10;

// const AnimatedPath = Animated.createAnimatedComponent(Path);
// const AnimatedText = Animated.createAnimatedComponent(RNText);

// const CrashGameAnimation = () => {
//   const progress = useSharedValue(0);
// //   const [multiplier, setMultipier] = useState(useSharedValue(1))
//   const multiplier = useSharedValue(1);

//   useEffect(() => {
//     progress.value = withTiming(1, { duration: DURATION, easing: Easing.linear });
//     multiplier.value = withTiming(MAX_MULTIPLIER, { duration: DURATION, easing: Easing.linear });
//   }, []);

//   const animatedProps = useAnimatedProps(() => {
//     let path = `M0,${CONTAINER_HEIGHT}`;
//     const steps = 200;
//     for (let i = 0; i <= steps; i++) {
//       const t = (i / steps) * progress.value;
//       const x = t * width;
//       const y = CONTAINER_HEIGHT - Math.pow(t, 2) * CONTAINER_HEIGHT;
//       path += ` L${x},${y}`;
//     }
//     return { d: path };
//   });

//   const multiplierAnimatedStyle = useAnimatedStyle(() => {
//     return {
//       transform: [{ scale: 1.2 }],
//     };
//   });

//   const animatedMultiplierText = useAnimatedStyle(() => {
//     return {
//       // This triggers the text update
//       color: 'white',
//     };
//   });

//   return (
//     <View style={styles.container}>
//       <Svg width={width} height={CONTAINER_HEIGHT} style={StyleSheet.absoluteFill}>
//         <AnimatedPath
//           animatedProps={animatedProps}
//           stroke="#FF0000"
//           strokeWidth={2}
//           fill="#FF000040"
//         />
//       </Svg>

//       <AnimatedText style={[styles.multiplier, multiplierAnimatedStyle]}>
//         {multiplier.value.toFixed(2)}x
//       </AnimatedText>

//       <Animated.View
//         style={[
//           {
//             position: 'absolute',
//             left: progress.value * width - 50,
//             top: CONTAINER_HEIGHT - Math.pow(progress.value, 2) * CONTAINER_HEIGHT - 30,
//           },
//         ]}
//       >
//         <Image
//           source={require('./../assets/plane3.png')}
//           style={{ width: 100, height: 60, tintColor: 'red' }}
//         />
//       </Animated.View>
//     </View>
//   );
// };

// export default CrashGameAnimation;

// const styles = StyleSheet.create({
//   container: {
//     height: CONTAINER_HEIGHT,
//     width: '100%',
//     backgroundColor: '#0D0D0D',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   multiplier: {
//     position: 'absolute',
//     fontSize: 48,
//     color: 'white',
//     fontWeight: 'bold',
//   },
// });



























// import React, { useEffect, useState } from 'react';
// import { View, Dimensions, StyleSheet, Image, Text } from 'react-native';
// import Animated, {
//   useSharedValue,
//   useAnimatedProps,
//   withTiming,
//   Easing,
//   useDerivedValue,
//   runOnJS,
// } from 'react-native-reanimated';
// import Svg, { Path } from 'react-native-svg';

// const { width } = Dimensions.get('window');
// const CONTAINER_HEIGHT = 250;

// const DURATION = 10000; // 10 seconds
// const MAX_MULTIPLIER = 10;

// const AnimatedPath = Animated.createAnimatedComponent(Path);

// const CrashGameAnimation = () => {
//   const progress = useSharedValue(0);
//   const multiplierShared = useSharedValue(1);

//   const [multiplier, setMultiplier] = useState(1);

//   useEffect(() => {
//     // Start the animations
//     progress.value = withTiming(1, { duration: DURATION, easing: Easing.linear });
//     multiplierShared.value = withTiming(MAX_MULTIPLIER, { duration: DURATION, easing: Easing.linear });
//   }, []);

//   // Sync shared multiplier value to React state on every frame:
//   useDerivedValue(() => {
//     runOnJS(setMultiplier)(multiplierShared.value);
//   }, [multiplierShared]);

// const animatedProps = useAnimatedProps(() => {
//   let path = `M0,${CONTAINER_HEIGHT}`; // Start from bottom-left
//   const steps = 200;
//   let lastX = 0;
//   for (let i = 0; i <= steps; i++) {
//     const t = (i / steps) * progress.value;
//     const x = t * width;
//     const y = CONTAINER_HEIGHT - Math.pow(t, 2) * CONTAINER_HEIGHT;
//     path += ` L${x},${y}`;
//     lastX = x;
//   }
//   // Close the path down to the bottom-right, then back to bottom-left:
//   path += ` L${lastX},${CONTAINER_HEIGHT}`;
//   path += ` L0,${CONTAINER_HEIGHT} Z`;
//   return { d: path };
// });

//   return (
//     <View style={styles.containerP}>
        
//     <View style={styles.container}>
//       <Svg width={width} height={CONTAINER_HEIGHT} style={StyleSheet.absoluteFill}>
//         <AnimatedPath
//           animatedProps={animatedProps}
//           stroke="#FF0000"
//           strokeWidth={2}
//           fill="#FF000040"
//         />
//       </Svg>

//       <Text style={styles.multiplier}>
//         {multiplier.toFixed(2)}x
//       </Text>

//       <Animated.View
//         style={[
//           {
//             position: 'absolute',
//             left: progress.value * width - 10,
//             top: CONTAINER_HEIGHT - Math.pow(progress.value, 2) * CONTAINER_HEIGHT - 60,
//           },
//         ]}
//       >
//         <Image
//           source={require('./../assets/plane3.png')}
//           style={{ width: 100, height: 60, tintColor: 'red' }}
//         />
//       </Animated.View>
//     </View>
    
//     </View>
//   );
// };

// export default CrashGameAnimation;

// const styles = StyleSheet.create({
//     containerP: {
//         // backgroundColor: '#0D0D0D',
//         // paddingRight: 50,
//         // paddingTop: 40
//     },
//   container: {
//     height: CONTAINER_HEIGHT,
//     width: '100%',
//     backgroundColor: '#0D0D0D',
//     justifyContent: 'center',
//     alignItems: 'center',
//     paddingRight: 30
//   },
//   multiplier: {
//     position: 'absolute',
//     fontSize: 48,
//     color: 'white',
//     fontWeight: 'bold',
//   },
// });








































// import React, { useEffect, useState } from 'react';
// import { View, Dimensions, StyleSheet, Image, Text, Button } from 'react-native';
// import Animated, {
//   useSharedValue,
//   useAnimatedProps,
//   withTiming,
//   Easing,
//   cancelAnimation,
//   runOnJS,
//   useDerivedValue,
// } from 'react-native-reanimated';
// import Svg, { Path } from 'react-native-svg';

// const { width } = Dimensions.get('window');
// const CONTAINER_HEIGHT = 250;

// const DURATION = 5000; // 10 seconds
// const MAX_MULTIPLIER = 10;

// const AnimatedPath = Animated.createAnimatedComponent(Path);

// const CrashGameAnimation = () => {
//   const progress = useSharedValue(0);
//   const multiplierShared = useSharedValue(1);
//   const [multiplier, setMultiplier] = useState(1);
//   const [isRunning, setIsRunning] = useState(false);

//   const startAnimation = () => {
//     cancelAnimation(progress);
//     cancelAnimation(multiplierShared);
//     progress.value = withTiming(1, { duration: DURATION, easing: Easing.linear });
//     multiplierShared.value = withTiming(MAX_MULTIPLIER, { duration: DURATION, easing: Easing.linear });
//     setIsRunning(true);
//   };

//   const stopAnimation = () => {
//     cancelAnimation(progress);
//     cancelAnimation(multiplierShared);
//     setIsRunning(false);
//   };

//   const resetAnimation = () => {
//     cancelAnimation(progress);
//     cancelAnimation(multiplierShared);
//     progress.value = 0;
//     multiplierShared.value = 1;
//     setMultiplier(1);
//     setIsRunning(false);
//   };

//   // Sync multiplier to React state in real time:
//   useDerivedValue(() => {
//     runOnJS(setMultiplier)(multiplierShared.value);
//   }, [multiplierShared]);

//   const animatedProps = useAnimatedProps(() => {
//     let path = `M0,${CONTAINER_HEIGHT}`; // Start from bottom-left
//     const steps = 200;
//     let lastX = 0;
//     for (let i = 0; i <= steps; i++) {
//       const t = (i / steps) * progress.value;
//       const x = t * width;
//       const y = CONTAINER_HEIGHT - Math.pow(t, 2) * CONTAINER_HEIGHT;
//       path += ` L${x},${y}`;
//       lastX = x;
//     }
//     // Close the path down to the bottom-right, then back to bottom-left:
//     path += ` L${lastX},${CONTAINER_HEIGHT}`;
//     path += ` L0,${CONTAINER_HEIGHT} Z`;
//     return { d: path };
//   });

//   return (
//     <View style={styles.containerP}>
//       <View style={styles.container}>
//         <Svg width={width} height={CONTAINER_HEIGHT} style={StyleSheet.absoluteFill}>
//           <AnimatedPath
//             animatedProps={animatedProps}
//             stroke="#FF0000"
//             strokeWidth={2}
//             fill="#FF000040"
//           />
//         </Svg>

//         <Text style={styles.multiplier}>
//           {multiplier.toFixed(2)}x
//         </Text>

//         <Animated.View
//           style={[
//             {
//               position: 'absolute',
//               left: progress.value * width - 10,
//               top: CONTAINER_HEIGHT - Math.pow(progress.value, 2) * CONTAINER_HEIGHT - 60,
//             },
//           ]}
//         >
//           <Image
//             source={require('./../assets/plane3.png')}
//             style={{ width: 100, height: 60, tintColor: 'red' }}
//           />
//         </Animated.View>
//       </View>

//       <View style={styles.buttonsContainer}>
//         <Button title={isRunning ? "Restart" : "Start"} onPress={startAnimation} />
//         <Button title="Stop" onPress={stopAnimation} disabled={!isRunning} />
//         <Button title="Reset" onPress={resetAnimation} />
//       </View>
//     </View>
//   );
// };

// export default CrashGameAnimation;

// const styles = StyleSheet.create({
//   containerP: {
//     flex: 1,
//   },
//   container: {
//     height: CONTAINER_HEIGHT,
//     width: '100%',
//     backgroundColor: '#0D0D0D',
//     justifyContent: 'center',
//     alignItems: 'center',
//     paddingRight: 30,
//   },
//   multiplier: {
//     position: 'absolute',
//     fontSize: 48,
//     color: 'white',
//     fontWeight: 'bold',
//   },
//   buttonsContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     marginTop: 20,
//     paddingHorizontal: 20,
//   },
// });















import React, { useEffect, useState } from 'react';
import { View, Dimensions, StyleSheet, Image, Text, Button } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedProps,
  withTiming,
  Easing,
  cancelAnimation,
  runOnJS,
  useDerivedValue,
} from 'react-native-reanimated';
import Svg, { Path } from 'react-native-svg';

const { width } = Dimensions.get('window');
const CONTAINER_HEIGHT = 250;

const DURATION = 10000; // 10 seconds max duration for reaching MAX_MULTIPLIER
const MAX_MULTIPLIER = 100;

const AnimatedPath = Animated.createAnimatedComponent(Path);

const CrashGameAnimation = () => {
  const progress = useSharedValue(0);
  const multiplierShared = useSharedValue(1);
  const [multiplier, setMultiplier] = useState(1);
  const [isRunning, setIsRunning] = useState(false);
  const [crashPoint, setCrashPoint] = useState<number | null>(null);

  const startAnimation = () => {
    cancelAnimation(progress);
    cancelAnimation(multiplierShared);

    // Generate new random crash point for this round (1.0x to 10.0x)
    const randomCrash = +(Math.random() * (MAX_MULTIPLIER - 1) + 1).toFixed(2);
    setCrashPoint(randomCrash);

    progress.value = withTiming(1, { duration: DURATION, easing: Easing.linear });
    multiplierShared.value = withTiming(MAX_MULTIPLIER, { duration: DURATION, easing: Easing.linear });
    setIsRunning(true);
  };

  const stopAnimation = () => {
    cancelAnimation(progress);
    cancelAnimation(multiplierShared);
    setIsRunning(false);
  };

  const resetAnimation = () => {
    cancelAnimation(progress);
    cancelAnimation(multiplierShared);
    progress.value = 0;
    multiplierShared.value = 1;
    setMultiplier(1);
    setIsRunning(false);
    setCrashPoint(null);
  };

  // Sync multiplier to React state, and check for crash point:
  useDerivedValue(() => {
    runOnJS(setMultiplier)(multiplierShared.value);

    if (crashPoint && multiplierShared.value >= crashPoint) {
      cancelAnimation(progress);
      cancelAnimation(multiplierShared);
      runOnJS(handleCrash)();
    }
  }, [multiplierShared, crashPoint]);

  const handleCrash = () => {
    setIsRunning(false);
    console.log(`💥 Game crashed at ${crashPoint?.toFixed(2)}x!`);
    setTimeout(() => {
      resetAnimation();
      startAnimation();
    }, 3000); // wait 3 seconds before restarting
  };

  const animatedProps = useAnimatedProps(() => {
    let path = `M0,${CONTAINER_HEIGHT}`; // Start from bottom-left
    const steps = 200;
    let lastX = 0;
    for (let i = 0; i <= steps; i++) {
      const t = (i / steps) * progress.value;
      const x = t * width;
      const y = CONTAINER_HEIGHT - Math.pow(t, 2) * CONTAINER_HEIGHT;
      path += ` L${x},${y}`;
      lastX = x;
    }
    // Close the path down to the bottom-right, then back to bottom-left:
    path += ` L${lastX},${CONTAINER_HEIGHT}`;
    path += ` L0,${CONTAINER_HEIGHT} Z`;
    return { d: path };
  });

  return (
    <View style={styles.containerP}>
      <View style={styles.container}>
        <Svg width={width} height={CONTAINER_HEIGHT} style={StyleSheet.absoluteFill}>
          <AnimatedPath
            animatedProps={animatedProps}
            stroke="#FF0000"
            strokeWidth={2}
            fill="#FF000040"
          />
        </Svg>

        <Text style={styles.multiplier}>
          {multiplier.toFixed(2)}x
        </Text>

        {crashPoint && (
          <Text style={styles.crashPoint}>
            Crash Point: {crashPoint.toFixed(2)}x
          </Text>
        )}

        <Animated.View
          style={[
            {
              position: 'absolute',
              left: progress.value * width - 10,
              top: CONTAINER_HEIGHT - Math.pow(progress.value, 2) * CONTAINER_HEIGHT - 60,
            },
          ]}
        >
          <Image
            source={require('./../assets/plane3.png')}
            style={{ width: 100, height: 60, tintColor: 'red' }}
          />
        </Animated.View>
      </View>

      <View style={styles.buttonsContainer}>
        <Button title={isRunning ? "Restart" : "Start"} onPress={startAnimation} />
        <Button title="Stop" onPress={stopAnimation} disabled={!isRunning} />
        <Button title="Reset" onPress={resetAnimation} />
      </View>
    </View>
  );
};

export default CrashGameAnimation;

const styles = StyleSheet.create({
  containerP: {
    flex: 1,
  },
  container: {
    height: CONTAINER_HEIGHT,
    width: '100%',
    backgroundColor: '#0D0D0D',
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: 30,
  },
  multiplier: {
    position: 'absolute',
    fontSize: 48,
    color: 'white',
    fontWeight: 'bold',
  },
  crashPoint: {
    position: 'absolute',
    top: 10,
    fontSize: 20,
    color: 'yellow',
    fontWeight: 'bold',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    paddingHorizontal: 20,
  },
});
