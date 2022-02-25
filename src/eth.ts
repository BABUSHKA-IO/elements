import Web3 from "web3";
declare var window: any;

export const getWeb3 = async () => {
  if (window.ethereum) {
    await window.ethereum.request({ method: "eth_requestAccounts" });
    return new Web3(window.ethereum);
  }
  return false;
};
