import React from "react";
import { StyleSheet, Text, View, Dimensions, StatusBar } from "react-native";
import Svg, { Path } from "react-native-svg";

import Colors from "../contants/Colors";
const LoginScreen = (props) => {
  return (
    <View style={styles.container}>
      {/* code here */}

      <View style={styles.svg}>
        <Svg
          height="50%"
          width="100%"
          viewBox="0 0 1440 320"
          style={styles.svgCurve}
        >
          <Path
            fill= {Colors.primary}
            // d="M0,64L80,80C160,96,320,128,480,170.7C640,213,800,267,960,256C1120,245,1280,171,1360,133.3L1440,96L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
            d="M0,256L80,224C160,192,320,128,480,128C640,128,800,192,960,186.7C1120,181,1280,107,1360,69.3L1440,32L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
            // d="M0,0L80,32C160,64,320,128,480,165.3C640,203,800,213,960,202.7C1120,192,1280,160,1360,144L1440,128L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
          />
        </Svg>
        <View style={styles.below}></View>
      </View>
    </View>
  );
};

export default LoginScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  svgCurve: {
    position: "absolute",
    top: 342,
  },
  below: {
    backgroundColor: Colors.primary,
    height: 400,
  },
});
