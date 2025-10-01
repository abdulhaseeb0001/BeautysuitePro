import React, { useRef } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import SignatureCapture from "@lagregance/react-native-signature-capture";

export default function SignatureBox() {
  const signatureRef = useRef<any>(null);

  const handleSave = (result: any) => {
    console.log("Saved signature path:", result.pathName);
  };

  const handleReset = () => {
    signatureRef.current?.reset(); // clears signature
  };

  return (
    <View style={styles.container}>
      <SignatureCapture
        style={styles.signature}
        ref={signatureRef}
        onSaveEvent={handleSave}
        onDragEvent={() => console.log("Drawing...")}
        showNativeButtons={false}
        showTitleLabel={false}
        // backgroundColor="#1C1C22"
        // strokeColor="#FFFFFF"
        // strokeWidth={3}
      />

      <TouchableOpacity onPress={handleReset} style={styles.clearBtn}>
        <Text style={{ color: "red", fontSize: 18 }}>x</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1C1C22",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  signature: {
    width: "100%",
    height: 150,
    borderBottomWidth: 2, // only bottom border
    borderColor: "#FFFFFF",
  },
  clearBtn: {
    position: "absolute",
    top: 15,
    right: 15,
  },
});

// import React, {useState, useRef} from 'react';
// import {
//   View,
//   StyleSheet,
//   Button,
//   Text,
//   Image,
//   TouchableOpacity,
// } from 'react-native';
// import {SignatureDialog} from './SignatureView';

// const ExampleApp = () => {
//   const [isOpen, setOpen] = useState(false);
//   const [data, setData] = useState(null);

//   const onSave = result => {
//     setData(`data:image/png;base64,${result.encoded}`);
//     setOpen(false);
//   };

//   return (
//     <View style={styles.container}>
//       <TouchableOpacity
//         onPress={() => {
//           setOpen(true);
//         }}>
//         <View>
//           <Text style={styles.titleText}>
//             {data ? 'Your signature:' : 'Click to sign'}
//           </Text>
//           {data && (
//             <>
//               <View style={styles.imageContainer}>
//                 <Image style={styles.previewImage} source={{uri: data}} />
//               </View>
//               <View style={{marginTop: 10}}>
//                 <Button title="Clear" onPress={() => setData(null)} />
//               </View>
//             </>
//           )}
//         </View>
//       </TouchableOpacity>
//       <SignatureDialog
//         open={isOpen}
//         onSave={onSave}
//         onClose={() => setOpen(false)}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     backgroundColor: '#F8F8F8',
//     alignItems: 'center',
//   },
//   titleText: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   imageContainer: {
//     marginTop: 10,
//     backgroundColor: 'white',
//   },
//   previewImage: {
//     width: 500,
//     height: 300,
//     resizeMode: 'contain',
//   },
// });

// export default ExampleApp;