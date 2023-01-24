import React from "react";
import { CheckBox, View, Text, StyleSheet } from "react-native";
import { SIZES, FONTS, COLORS } from "../main";

const styles = StyleSheet.create({
  view: {
    width: "100%",
    paddindVertical: 5,
    paddingHorizontal: SIZES.padding,
    borderRadius: SIZES.borderRadius,
    elevation: 12,
    shadowColor: COLORS.secondary,
    shadowOffset: { width: 2, height: 12 },
    shadowRadius: 12,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    ...FONTS.h2_semiBold,
    color: COLORS.primary,
  },
  checkbox: {
    height: 25,
    width: 25,
    borderRadius: 5,
    backgroundColor: COLORS.primary,
    marginRight: 15,
  }
});

export default function Card(props) {
  return (
    <View style={styles.view}>
      <CheckBox style={styles.checkbox} />
      <Text style={styles.text}>{props.text}</Text>
    </View>
  );
}
