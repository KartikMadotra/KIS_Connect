 import React, { useState } from "react";
 import { StatusBar } from 'expo-status-bar';
import { Button,StyleSheet, Text, View } from 'react-native';
import Component from "./components/userdata";


export default function App() {
  return (
    <View style={styles.container}>
      <Component />
    </View>
  );
}

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});



















































// import React, { useState } from "react";
// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View, Image } from "react-native";

// const EdunextTechnologiesStudentDashboard = () => {
//   const [name, setName] = useState("");
//   const [className, setClassName] = useState("");
//   const [section, setSection] = useState("");
//   const [rollNumber, setRollNumber] = useState("");

//   return (
//     <View style={styles.container}>
//       <View style={styles.header}>
//         <Image
//           source={require("./assets/favicon.png")}
//           style={styles.logo}
//         />
//         <Text style={styles.headerText}>Edunext Technologies Student Dashboard</Text>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   header: {
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "center",
//     backgroundColor: "#000080",
//     width: "100%",
//     height: 50,
//   },
//   logo: {
//     width: 50,
//     height: 50,
//   },
//   headerText: {
//     color: "#ffffff",
//     fontSize: 20,
//   },
//   body: {
//     flex: 1,
//   },
//   profile: {
//     backgroundColor: "#ffffff",
//     width: "100%",
//     height: 150,
//     padding: 10,
//   },
//   profileText: {
//     fontSize: 18,
//     fontWeight: "bold",
//   },
//   profileInfo: {
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "space-between",
//     marginVertical: 5,
//   },
//   profileInfoText: {
//     fontSize: 16,
//   },
//   studies: {
//     backgroundColor: "#ffffff",
//     width: "100%",
//     height: 150,
//     padding: 10,
//   },
//   studiesText: {
//     fontSize: 18,
//     fontWeight: "bold",
//   },
//   studiesInfo: {
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "space-between",
//     marginVertical: 5,
//   },
//   studiesInfoText: {
//     fontSize: 16,
//   },
// });

// export default EdunextTechnologiesStudentDashboard;
