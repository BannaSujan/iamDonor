import React from "react";
import { StyleSheet, Text, View, Dimensions, StatusBar } from "react-native";
import Svg, { Path } from "react-native-svg";
import TextInputField from "../components/TextInputField";
import CustomButton from "../components/CustomButton";
import ArrowButton from "../components/ArrowButton";
import Colors from "../contants/Colors";
const MobileVerificationScreen = (props) => {
  return (
    <View style={styles.container}>
      {/* <View style={styles.content}>
        <ArrowButton />

        <Text style={styles.header}>Verify Number</Text>
        <View style={styles.row}>
          <View>
            <Text style={styles.circleShape}>+91</Text>
          </View>

          <TextInputField text="Enter number" keyboardType={"numeric"} />
        </View>
        <CustomButton />
      </View> */}

      <View style={styles.svg}>
        <Svg
          height="50%"
          width="100%"
          viewBox="0 0 1440 320"
          style={styles.svgCurve}
        >
          <Path
            fill="#F55353"
            // d="M0,32L80,32C160,32,320,32,480,74.7C640,117,800,203,960,245.3C1120,288,1280,288,1360,288L1440,288L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
            d="M0,288L80,261.3C160,235,320,181,480,181.3C640,181,800,235,960,234.7C1120,235,1280,181,1360,154.7L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          />
        </Svg>
        <View style={styles.below}></View>
      </View>
    </View>
  );
};

export default MobileVerificationScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },

  svg: {
    flex: 1,
  },
  svgCurve: {
    top: 50,
  },
  below: {
    backgroundColor: Colors.primary,
    height: 200,

    alignItems: "flex-end",
    alignContent: "flex-end",
    justifyContent: "flex-end",
  },
  content: {
    backgroundColor: Colors.white,
    flex: 1,

    paddingTop: "2%",
    marginLeft: "2%",
    marginRight: "2%",
  },

  header: {
    fontSize: 22,
    fontWeight: "bold",
    padding: 10,
    marginLeft: 12,
  },
  circleShape: {
    padding: 10,
    marginLeft: 22,
    height: 48,
    width: 45,
    color: "#808080",
    backgroundColor: Colors.gray,
    marginTop: 10,
    marginEnd: 6,
    marginStart: 6,
    borderRadius: 24,
    textAlign: "center",
    textAlignVertical: "center",
  },
  row: {
    flexDirection: "row",
  },
});
