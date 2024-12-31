import React , {useState , useEffect} from "react";
import {useRouter} from "next/router";


//Internal import
import {checkIfWalletConnected , connectWallet , connectingWithContract , converTime} from '../Utils/apiFeature';

export const ChatAppContect=React.createContext();
export const ChatAppProvider=({children})=>{
    //useStates tooo store the data fomr the smart contract
    const [account , setAccount]=useState("");
    const [userName, setUserName]=useState("");
    const [friendList , setFriendList]=useState([]);
    const [friendMessage , setFriendMessage]=useState([]);
    const [loading , setLoading]=useState(false);
    const [userLists , setUserLists]=useState([]);
    const [error , setError]=useState("");

    //chat user data
    const [currentUserName , setCurrentUserName]=useState("");
    const [currentUserAddress , setCurrentUserAddress]=useState("");
    const router=useRouter();



    //functions
    //fetch data time of page load
    const fetchData=async()=>{
        try {
            //get account
            const account=await connectWallet();
            setAccount(account);

            //get contract
            const contract=await connectingWithContract();


            //get username
            const userName=await contract.getUserName(account);
            setUserName(userName);

            //getting total user
            const totalUser=await contract.getAllusers();
            setUserLists(totalUser);

            //get friendList
            const friendList=await contract.getMyFriend();
            setFriendList(friendList);




        } catch (error) {
            setError("Please connect to MetaMask");
        }
    }

    //reading messages 
    const readMessage=async(friendAddress)=>{
        try {
            const contract=await connectingWithContract();
            const message=await contract.readMessage(friendAddress);
            setFriendMessage(message);
        } catch (error) {
         setError("Currently you dont have any message");
        }
    }

    //create account
    const createAccount=async(name)=>{
    try {
        const contract=await connectingWithContract();
        const status= await contract.createAccount(name);
        setLoading(true);
        await status.wait();
        setLoading(false);
        window.location.reload();
        
    } catch (error) {
        setError("Something Went Wrong");
    }

    }


    //add friend
    const addFriend=async(friend_key , Name)=>{
       try {
        const contract=await connectingWithContract();
        const status=await contract.addFriend(friend_key , Name);
        setLoading(true);
        await status.wait();
        setLoading(false);
        router.push('/');
        window.location.reload();
        
       } catch (error) {
        setError("Something went wrong");
       }
    }

     //send messages
     const sendMessages=async(friendKey , message)=>{
        try {
            const contract=await connectingWithContract();
            const status=await contract.sendMessage(friendKey , message);
            setLoading(true);
            await status.wait();
            setLoading(false);
            window.location.reload();

            
        } catch (error) {
            setError("Message Cant sent");
        }
     }


    //getting user info
    const userInfo=async(userAddress)=>{
      try {
        const contract=await connectingWithContract();
        const name=await contract.getUserName(userAddress);
        setCurrentUserName(name);
        setCurrentUserAddress(userAddress);
      } catch (error) {
        setError("error");
      }
    }
    
    useEffect(()=>{
        fetchData();  
    },[])

    return(
        <ChatAppContect.Provider value={{readMessage , createAccount , addFriend , sendMessages , userInfo,checkIfWalletConnected ,connectWallet,
            account,
            userName,
            friendList,
            friendMessage,
            loading,
            userLists,
            error,
            currentUserName,
            currentUserAddress
        }}>
            {children}
        </ChatAppContect.Provider>
    )
}