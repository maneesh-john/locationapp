import { StyleSheet } from "react-native";

import { colors, sizes } from "../utils/constants";

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.white
  },
  container: {
    flex: 1,
    paddingHorizontal: "3%"
  },
  header: {
    color: colors.black,
    fontSize: sizes.xxl,
    marginBottom: sizes.xs,
    fontWeight: "bold"
  },
  subHeader: {
    color: colors.text,
    fontSize: sizes.l,
    marginBottom: sizes.xs,
  },
  rowBetween: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  currentTag: {
    backgroundColor: "#d35400",
    height: sizes.s * 5,
    width: sizes.s * 5,
    borderRadius: sizes.s * 2.5,
    alignItems: "center",
    justifyContent: "center",
    marginRight: sizes.s
  },
  currentText: {
    fontSize: sizes.xxl,
    fontWeight: "bold",
    color: colors.white
  },
  textWrap: {
    flex: 1
  }
});

export default styles;