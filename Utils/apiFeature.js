import {ethers} from "ethers";
import web3Modal from "web3modal";

import {ChatAppContractAddress , ChatAppABI} from '../Context/constants';




//here we are not using the hardhat configuration , we are connecting the separate network
const networks = {
    sepolia: {
      chainId: `0x${Number(11155111).toString(16)}`,
      chainName: "Sepolia",
      nativeCurrency: {
        name: "SepoliaETH",
        symbol: "SepoliaETH",
        decimals: 18,
      },
      rpcUrls: ["https://sepolia.infura.io/v3/"],
      blockExplorerUrls: ["https://sepolia.etherscan.io"],
    },
    holesky: {
      chainId: `0x${Number(17000).toString(16)}`,
      chainName: "Holesky",
      nativeCurrency: {
        name: "holesky",
        symbol: "ETH",
        decimals: 18,
      },
      rpcUrls: ["https://rpc.ankr.com/eth_holesky"],
      blockExplorerUrls: ["https://holesky.etherscan.io/"],
    },
    polygon_amoy: {
      chainId: `0x${Number(80002).toString(16)}`,
      chainName: "Polygon Amoy",
      nativeCurrency: {
        name: "MATIC",
        symbol: "MATIC",
        decimals: 18,
      },
      rpcUrls: ["https://rpc-amoy.polygon.technology/"],
      blockExplorerUrls: ["https://www.oklink.com/amoy"],
    },
    polygon_mumbai: {
      chainId: `0x${Number(80001).toString(16)}`,
      chainName: "Polygon Mumbai",
      nativeCurrency: {
        name: "MATIC",
        symbol: "MATIC",
        decimals: 18,
      },
      rpcUrls: ["https://rpc.ankr.com/polygon_mumbai"],
      blockExplorerUrls: ["https://mumbai.polygonscan.com/"],
    },
    polygon: {
      chainId: `0x${Number(137).toString(16)}`,
      chainName: "Polygon Mainnet",
      nativeCurrency: {
        name: "MATIC",
        symbol: "MATIC",
        decimals: 18,
      },
      rpcUrls: ["https://rpc.ankr.com/polygon"],
      blockExplorerUrls: ["https://polygonscan.com/"],
    },
    bsc: {
      chainId: `0x${Number(56).toString(16)}`,
      chainName: "Binance Smart Chain Mainnet",
      nativeCurrency: {
        name: "Binance Chain Native Token",
        symbol: "BNB",
        decimals: 18,
      },
      rpcUrls: ["https://rpc.ankr.com/bsc"],
      blockExplorerUrls: ["https://bscscan.com"],
    },
    base_mainnet: {
      chainId: `0x${Number(8453).toString(16)}`,
      chainName: "Base Mainnet",
      nativeCurrency: {
        name: "ETH",
        symbol: "ETH",
        decimals: 18,
      },
      rpcUrls: ["https://mainnet.base.org/"],
      blockExplorerUrls: ["https://bscscan.com"],
    },
    base_sepolia: {
      chainId: `0x${Number(84532).toString(16)}`,
      chainName: "Base Sepolia",
      nativeCurrency: {
        name: "ETH",
        symbol: "ETH",
        decimals: 18,
      },
      rpcUrls: ["https://sepolia.base.org"],
      blockExplorerUrls: ["https://bscscan.com"],
    },
    localhost: {
      chainId: `0x${Number(31337).toString(16)}`,
      chainName: "localhost",
      nativeCurrency: {
        name: "GO",
        symbol: "GO",
        decimals: 18,
      },
      rpcUrls: ["http://127.0.0.1:8545/"],
      blockExplorerUrls: ["https://bscscan.com"],
    },
  };
  
  
  //function to chmage the network
  const changeNetwork = async ({ networkName }) => {  
    try {
      //we are going to check , if the crypto wallrt is present in the computer or not , if the user install any of teh wallet , the etherum onbect will be pushed in the computer
      if (!window.ethereum) throw new Error("No Crtpto Wallet is Found");
      await window.ethereum.request({
        method: "wallet_addEthereumChain",
        params: [
          {
            ...networks[networkName],
          },
        ],
      });
    } catch (error) {
      console.log(error.message);
    }
  };
  
  export const handleNetworkSwitch = async () => {
    const networkName = "holesky";
    await changeNetwork({ networkName });
  };








//connecting with metamask and retrivig the function

export const checkIfWalletConnected=async()=>{
    try{
        if(!window.ethereum) return console.log("Install Metamask");
        await handleNetworkSwitch();
        
        const accounts=await window.ethereum.request({
            method:"eth_accounts",
        })
        const firstAccount=accounts[0];
        return firstAccount;

    }catch(error){
        console.log("Install Metamask");
    }
}


export const connectWallet = async () => {
    try {
        if (!window.ethereum) {
            console.log("Install Metamask");
            return;
        }
        await handleNetworkSwitch();
        const accounts = await window.ethereum.request({
            method: "eth_requestAccounts",
        });
        const firstAccount = accounts[0];
        return firstAccount;
    } catch (error) {
        if (error.code === -32002) {
            console.log("Already processing eth_requestAccounts. Please wait.");
        } else {
            console.log("An error occurred:", error.message);
        }
    }
};

//connecting the contract  (Method -1)

export const connectingWithContract=async()=>{
    try{
        const web3modal=new web3Modal();
        const connection=await web3modal.connect();
        const provider=new ethers.providers.Web3Provider(connection);
        const signer=provider.getSigner();
        const contract=fetchContract(signer);
        return contract;

    }catch(error){
     console.log("error");
    }
}

//--------------->>
const fetchContract=(signerOrProvider)=>{
    return new ethers.Contract(ChatAppContractAddress , ChatAppABI , signerOrProvider);
  }


//-----------> Method 2
// const provider = new ethers.providers.Web3Provider(window.ethereum)
// setProvider(provider)
// const network = await provider.getNetwork()
// const realEstate = new ethers.Contract(config[network.chainId].realEstate.address, RealEstate, provider)
// Method 1 is suitable for DApps that require transaction signing.
// Method 2 is suitable for read-only operations (fetching data from the contract).


//function for the  conversion of the time stamp from the contract
export const converTime=(time)=>{
const newTime=new Date(time.toNumber());  //time*1000
const realTime = newTime.getHours()+":"+newTime.getMinutes()+":"+newTime.getSeconds()+" Date:"+newTime.getDate()+"/"+(newTime.getMonth()+1)+"/"+newTime.getFullYear();  //  12:34:56 date : 26/3/2023
return realTime;
}