// import { useEffect, useState } from "react";
// import { contracts } from "@nymproject/contract-clients";
// import { SigningCosmWasmClient } from "@cosmjs/cosmwasm-stargate";
// import { settings } from "../settings";
// import Box from "@mui/material/Box";
// import CircularProgress from "@mui/material/CircularProgress";

// const getClient = async () => {
//   const cosmWasmClient = await SigningCosmWasmClient.connect(settings.url);

//   const client = new contracts.Mixnet.MixnetQueryClient(
//     cosmWasmClient,
//     settings.mixnetContractAddress
//   );
//   return client;
// };
export const Mixnodes = () => {
  return <div>hello</div>;
};
// export const Mixnodes = () => {
//   const [mixnodes, setMixnodes] = useState<any>();

//   const getMixnodes = async () => {
//     const client = await getClient();
//     const { nodes } = await client.getMixNodesDetailed({});
//     setMixnodes(nodes);
//   };

//   useEffect(() => {
//     getMixnodes();
//   }, []);

//   if (!mixnodes) {
//     return (
//       <Box sx={{ display: "flex" }}>
//         <CircularProgress />
//       </Box>
//     );
//   }

//   return (
//     <div style={{ marginTop: "1rem" }}>
//       {mixnodes?.length &&
//         mixnodes.map((mixnode: any) => (
//           <Box className="codeBox" key={mixnode.bond_information.mix_id}>
//             <span
//               style={{ marginRight: "1rem" }}
//             >{`id: ${mixnode.bond_information.mix_id}`}</span>
//             <span>{`owner: ${mixnode.bond_information.owner}`}</span>
//           </Box>
//         ))}
//     </div>
//   );
// };
