//0x5FbDB2315678afecb367f032d93F642f64180aa3
//0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512
export const ChatAppContractAddress="0xe73a89d133edb3871a7890075eaD52A55cd7Af7e";
//0xe73a89d133edb3871a7890075eaD52A55cd7Af7e
// export const  ChatAppABI= [
//   {
//     "inputs": [
//       {
//         "internalType": "address",
//         "name": "friend_key",
//         "type": "address"
//       },
//       {
//         "internalType": "string",
//         "name": "name",
//         "type": "string"
//       }
//     ],
//     "name": "addFriend",
//     "outputs": [],
//     "stateMutability": "nonpayable",
//     "type": "function"
//   },
//   {
//     "inputs": [
//       {
//         "internalType": "bytes32",
//         "name": "",
//         "type": "bytes32"
//       },
//       {
//         "internalType": "uint256",
//         "name": "",
//         "type": "uint256"
//       }
//     ],
//     "name": "allMessages",
//     "outputs": [
//       {
//         "internalType": "address",
//         "name": "sender",
//         "type": "address"
//       },
//       {
//         "internalType": "uint256",
//         "name": "timeStamp",
//         "type": "uint256"
//       },
//       {
//         "internalType": "string",
//         "name": "msg",
//         "type": "string"
//       }
//     ],
//     "stateMutability": "view",
//     "type": "function"
//   },
//   {
//     "inputs": [
//       {
//         "internalType": "address",
//         "name": "pubkey",
//         "type": "address"
//       }
//     ],
//     "name": "checkUser",
//     "outputs": [
//       {
//         "internalType": "bool",
//         "name": "",
//         "type": "bool"
//       }
//     ],
//     "stateMutability": "view",
//     "type": "function"
//   },
//   {
//     "inputs": [
//       {
//         "internalType": "string",
//         "name": "_name",
//         "type": "string"
//       }
//     ],
//     "name": "createAccount",
//     "outputs": [],
//     "stateMutability": "nonpayable",
//     "type": "function"
//   },
//   {
//     "inputs": [
//       {
//         "internalType": "uint256",
//         "name": "",
//         "type": "uint256"
//       }
//     ],
//     "name": "getAlluser",
//     "outputs": [
//       {
//         "internalType": "string",
//         "name": "name",
//         "type": "string"
//       },
//       {
//         "internalType": "address",
//         "name": "userAddress",
//         "type": "address"
//       }
//     ],
//     "stateMutability": "view",
//     "type": "function"
//   },
//   {
//     "inputs": [],
//     "name": "getAllusers",
//     "outputs": [
//       {
//         "components": [
//           {
//             "internalType": "string",
//             "name": "name",
//             "type": "string"
//           },
//           {
//             "internalType": "address",
//             "name": "userAddress",
//             "type": "address"
//           }
//         ],
//         "internalType": "struct ChatApp.allUser[]",
//         "name": "",
//         "type": "tuple[]"
//       }
//     ],
//     "stateMutability": "view",
//     "type": "function"
//   },
//   {
//     "inputs": [],
//     "name": "getMyFriend",
//     "outputs": [
//       {
//         "components": [
//           {
//             "internalType": "address",
//             "name": "pubkey",
//             "type": "address"
//           },
//           {
//             "internalType": "string",
//             "name": "name",
//             "type": "string"
//           }
//         ],
//         "internalType": "struct ChatApp.Friend[]",
//         "name": "",
//         "type": "tuple[]"
//       }
//     ],
//     "stateMutability": "view",
//     "type": "function"
//   },
//   {
//     "inputs": [
//       {
//         "internalType": "address",
//         "name": "pubkey",
//         "type": "address"
//       }
//     ],
//     "name": "getUserName",
//     "outputs": [
//       {
//         "internalType": "string",
//         "name": "",
//         "type": "string"
//       }
//     ],
//     "stateMutability": "view",
//     "type": "function"
//   },
//   {
//     "inputs": [
//       {
//         "internalType": "address",
//         "name": "friend_key",
//         "type": "address"
//       }
//     ],
//     "name": "readMessage",
//     "outputs": [
//       {
//         "components": [
//           {
//             "internalType": "address",
//             "name": "sender",
//             "type": "address"
//           },
//           {
//             "internalType": "uint256",
//             "name": "timeStamp",
//             "type": "uint256"
//           },
//           {
//             "internalType": "string",
//             "name": "msg",
//             "type": "string"
//           }
//         ],
//         "internalType": "struct ChatApp.message[]",
//         "name": "",
//         "type": "tuple[]"
//       }
//     ],
//     "stateMutability": "view",
//     "type": "function"
//   },
//   {
//     "inputs": [
//       {
//         "internalType": "address",
//         "name": "friend_key",
//         "type": "address"
//       },
//       {
//         "internalType": "string",
//         "name": "_msg",
//         "type": "string"
//       }
//     ],
//     "name": "sendMessage",
//     "outputs": [],
//     "stateMutability": "nonpayable",
//     "type": "function"
//   },
//   {
//     "inputs": [
//       {
//         "internalType": "address",
//         "name": "",
//         "type": "address"
//       }
//     ],
//     "name": "userList",
//     "outputs": [
//       {
//         "internalType": "string",
//         "name": "name",
//         "type": "string"
//       }
//     ],
//     "stateMutability": "view",
//     "type": "function"
//   }
// ]



export const ChatAppABI=[
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "friend_key",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			}
		],
		"name": "addFriend",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "",
				"type": "bytes32"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "allMessages",
		"outputs": [
			{
				"internalType": "address",
				"name": "sender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "timeStamp",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "msg",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "pubkey",
				"type": "address"
			}
		],
		"name": "checkUser",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_name",
				"type": "string"
			}
		],
		"name": "createAccount",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "getAlluser",
		"outputs": [
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "userAddress",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getAllusers",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "name",
						"type": "string"
					},
					{
						"internalType": "address",
						"name": "userAddress",
						"type": "address"
					}
				],
				"internalType": "struct ChatApp.allUser[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getMyFriend",
		"outputs": [
			{
				"components": [
					{
						"internalType": "address",
						"name": "pubkey",
						"type": "address"
					},
					{
						"internalType": "string",
						"name": "name",
						"type": "string"
					}
				],
				"internalType": "struct ChatApp.Friend[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "pubkey",
				"type": "address"
			}
		],
		"name": "getUserName",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "friend_key",
				"type": "address"
			}
		],
		"name": "readMessage",
		"outputs": [
			{
				"components": [
					{
						"internalType": "address",
						"name": "sender",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "timeStamp",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "msg",
						"type": "string"
					}
				],
				"internalType": "struct ChatApp.message[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "friend_key",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "_msg",
				"type": "string"
			}
		],
		"name": "sendMessage",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "userList",
		"outputs": [
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]