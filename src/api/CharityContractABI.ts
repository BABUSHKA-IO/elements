import Web3 from "web3";

const CharityContractABI: any = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "description",
        type: "string",
      },
      {
        internalType: "string",
        name: "imageUri",
        type: "string",
      },
    ],
    name: "addEvent",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "eventId",
        type: "uint256",
      },
    ],
    name: "fundEvent",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "charityEvents",
    outputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "description",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "money",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "imageUri",
        type: "string",
      },
      {
        internalType: "address payable",
        name: "owner",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getEvents",
    outputs: [
      {
        components: [
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "description",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "money",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "imageUri",
            type: "string",
          },
          {
            internalType: "address payable",
            name: "owner",
            type: "address",
          },
        ],
        internalType: "struct CharityEvent[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export function getCharityContract(web3: Web3) {
  const contract = new web3.eth.Contract(
    CharityContractABI,
    "0x38e4349934b59CD48F7A1917a93d8F84d1feFAe4"
  );
  return contract;
}
