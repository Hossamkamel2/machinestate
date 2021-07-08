import client from "./client";
const macState = () => client.get("encoder/api/pairing/MachineStatus");

export default {
  macState,
};
