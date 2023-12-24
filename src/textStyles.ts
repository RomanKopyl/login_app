import { StyleSheet } from "react-native";

// alternative way add style to text components
export const textStyles = StyleSheet.create({
  inputHeader: {
    color: 'white',
    fontSize: 10,
    // lineHeight: 12,
    fontWeight: "400",
  },
  link: {
    color: '#EB0057',
    fontSize: 11,
    lineHeight: 13,
    fontWeight: "500",
    shadowOpacity: 0.5,
    textDecorationLine: 'underline',
  },
  body: {
    color: 'white',
    fontSize: 11,
    // lineHeight: 13,
  },
  field: {
    color: '#818181',
    fontSize: 12,
    // lineHeight: 15,
    fontWeight: "400",
  },
  button: {
    color: 'white',
    fontSize: 12,
    // lineHeight: 15,
    fontWeight: "700",
  },
  subtitle: {
    color: 'white',
    fontSize: 16,
    // lineHeight: 20,
    fontWeight: "500",
  },
  header: {
    color: 'white',
    fontSize: 18,
    lineHeight: 22,
    fontWeight: "600",
    textTransform: 'uppercase',
  },
});