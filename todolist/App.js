import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  TextInput,
  Platform,
  TouchableOpacity,
} from "react-native";
import Task from "./components/Task";

export default function App() {
  return (
    <View style={styles.container}>
      {/* Today's Tasks */}
      <View style={styles.Taskwrapper}>
        <Text style={styles.sectionTitle}>Today's Tasks</Text>

        <View style={styles.items}>
          {/* This is where the tasks will go*/}
          <Task text={"Task 1"} />
          <Task text={"Task 2"} />
        </View>
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writerTaskWrapper}
      >
        <TextInput style={styles.input} placeholder={"Write a task"} />

        <TouchableOpacity>
          <View style={styles.addWrapper}>
            <Text>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EAED",
    position: "relative",
  },

  Taskwrapper: {
    paddingTop: 40,
    paddingHorizontal: 20,
  },

  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },

  items: {
    marginTop: 30,
  },

  writerTaskWrapper: {
    position: "absolute",
    bottom: 60,
    left: 20,
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    width: 250,
    backgroundColor: "white",
    borderRadius: 60,
    textAlign: "center",
    borderColor: "#c0c0c0",
    borderWidth: 1,
  },

  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: "white",
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#c0c0c0",
    borderWidth: 1,
  },
});
