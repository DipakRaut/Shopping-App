// import React, { Component } from "react";
// import * as Font from "expo-font";
// import {
//   AppRegistry,
//   TouchableWithoutFeedback,
//   Dimensions,
//   Modal,
//   Image,
//   View,
//   StyleSheet,
//   Text,
//   TextInput,
//   ImageBackground,
//   TouchableOpacity,
// } from "react-native";
// import { FontAwesome5 } from "@expo/vector-icons";
// import { MaterialCommunityIcons } from "@expo/vector-icons";
// import * as ImagePicker from "expo-image-picker";
// import AppText from "../components/AppText";
// import AppTextInput from "../components/AppTextInput";
// import AppButton from "../components/AppButton";
// import { Formik } from "formik";
// import ErrorMessage from "../components/ErrorMessage";
// import * as Yup from "yup";
// import StatusBarScreen from "../components/StatusBarScreen";
// import ImageViewer from "../components/ImageViewer";
// import MasonryList from "@react-native-seoul/masonry-list";

// export default class profileShop extends Component {
//   state = {
//     modalVisible: false,
//     modalImage: require("../img/image1.jpg"),
//     images: [
//       require("../img/image1.jpg"),
//       require("../img/image2.jpg"),
//       require("../img/image3.jpg"),
//       require("../img/image4.jpg"),
//       require("../img/image5.jpg"),
//       require("../img/image6.jpg"),
//     ],
//   };
//   // create function to toggle image model
//   setModalVisible(visible, imageKey) {
//     this.setState({ modalImage: this.state.images[imageKey] });
//     this.setState({ modalVisible: visible });
//   }
//   // function to get clicked image
//   getImage() {
//     return this.state.modalImage;
//   }

//   render() {
//     //loop images with map
//     let images = this.state.images.map((val, key) => {
//       return (
//         <TouchableOpacity
//           key={key}
//           onPress={() => {
//             this.setModalVisible(true, key);
//           }}
//         >
//           <View style={styles.imagewrap}>
//             <ImageViewer imgsource={val}></ImageViewer>
//           </View>
//         </TouchableOpacity>
//       );
//     });

//     return (
//       <View style={styles.container}>
//         {/* <Modal
//           style={styles.modal}
//           animationType={"fade"}
//           transparent={true}
//           visible={this.state.modalVisible}
//           onRequestClose={() => {}}
//         >
//           <View style={styles.modal}>
//             <Text
//               style={styles.text}
//               onPress={() => {
//                 this.setModalVisible(false);
//               }}
//             >
//               Close
//             </Text>
//             <ImageViewer imgsource={this.state.modalImage}></ImageViewer>
//             <AppText style={{ fontSize: 15 }}>
//               Lorem Ipsum is simply dummy text of the printing and typesetting
//               industry. Lorem Ipsum has been the industry's standard dummy text
//               ever since the 1500s
//             </AppText>
//             <AppButton title="PAYMENT" />
//           </View>
//         </Modal>
//         {images} */}
//         <MasonryList
//           data={this.state.images}
//           keyExtractor={(item, index) => index.toString()}
//           numColumns={2}
//           showsVerticalScrollIndicator={false}
//           renderItem={({ item }) => <CardItem />}
//           refreshing={isLoadingNext}
//           onRefresh={() => refetch({ first: ITEM_CNT })}
//           onEndReachedThreshold={0.1}
//           onEndReached={() => loadNext(ITEM_CNT)}
//         />
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: "row",
//     flexWrap: "wrap",
//     backgroundColor: "#eee",
//   },
//   imagewrap: {
//     margin: 2,
//     padding: 2,
//     height: Dimensions.get("window").height / 3 - 12,
//     width: Dimensions.get("window").width / 2 - 4,
//     backgroundColor: "#fff",
//   },
//   modal: {
//     flex: 1,
//     padding: 40,
//     backgroundColor: "rgba(0, 0, 0, 0.9)",
//   },
//   text: {
//     color: "#fff",
//   },
// });
