import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import stateService from "../services/stateService";

function state(props) {
  const [machineDetail, setmachineDetail] = useState();
  const handlePress = async () => {
    console.log("In func");
    const responce = await stateService.macState();
    //console.log(responce);
    if (responce.ok) {
      let r = responce.data;
      setmachineDetail(r);
    } else alert(responce.problem);
  };
  useEffect(() => {
    handlePress();
    console.log(machineDetail);
  }, []);
  return (
    <View style={styles.containers}>
      <View style={styles.container}>
        {machineDetail && machineDetail[0].state1 != 1 && (
          <AntDesign name="closecircle" size={80} color="black" />
        )}
        {machineDetail && machineDetail[0].state1 == 1 && (
          <AntDesign name="check" size={80} color="black" />
        )}
        {machineDetail && (
          <Text style={styles.text}>{machineDetail[0].machineId1}</Text>
        )}
      </View>
      <View style={styles.container}>
        {machineDetail && machineDetail[1].state2 != 1 && (
          <AntDesign name="closecircle" size={80} color="black" />
        )}
        {machineDetail && machineDetail[1].state2 == 1 && (
          <AntDesign name="check" size={80} color="black" />
        )}
        {machineDetail && (
          <Text style={styles.text}>{machineDetail[1].machineId2}</Text>
        )}
      </View>
      <View style={styles.container}>
        {machineDetail && machineDetail[2].state1 != 1 && (
          <AntDesign name="closecircle" size={80} color="black" />
        )}
        {machineDetail && machineDetail[2].state1 == 1 && (
          <AntDesign name="check" size={80} color="black" />
        )}
        {machineDetail && (
          <Text style={styles.text}>{machineDetail[2].machineId1}</Text>
        )}
      </View>
      <View style={styles.container}>
        {machineDetail && machineDetail[3].state1 != 1 && (
          <AntDesign name="closecircle" size={80} color="black" />
        )}
        {machineDetail && machineDetail[3].state1 == 1 && (
          <AntDesign name="check" size={80} color="black" />
        )}
        {machineDetail && (
          <Text style={styles.text}>{machineDetail[3].machineId1}</Text>
        )}
      </View>
      <Button
        title="Refresh"
        color="#841584"
        onPress={async () => {
          const responce = await stateService.macState();
          if (responce.ok) {
            setmachineDetail(responce.data);
            console.log(responce.data);
          }
        }}
      ></Button>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: "48%",
    height: "46%",
    alignItems: "center",
    margin: 3,
    borderColor: "black",
    borderWidth: 1,
    justifyContent: "center",
  },
  containers: {
    flex: 1,
    backgroundColor: "#fff",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  text: {
    fontSize: 25,
    fontWeight: "700",
    marginTop: 15,
  },
});
export default state;
