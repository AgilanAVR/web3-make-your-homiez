//SPDX-License-Identifier: MIT
pragma solidity >=0.7.0 < 0.9.0;
contract ChatApp{
      //creating datas structure for the chat application

      //all use struct
      struct allUser{
        string name;
        address userAddress;
      }

      allUser[] public getAlluser;

      //user struct
      struct user{
        string name;
        Friend[] friendlist;
      }

      struct Friend{
        address pubkey;
        string name;
      }

      struct message{
        address sender;
        uint256 timeStamp;
        string msg;
      }

      mapping(address => user)public userList;
      mapping(bytes32 => message[])public allMessages;

      //check user existing
      function checkUser(address pubkey)public view returns(bool){
        return bytes(userList[pubkey].name).length>0;   //length can not be calculated in string , so the type must be converted into bytes
      } 

      //create account
      function createAccount(string memory _name) public{
        require(checkUser(msg.sender) == false , "User Already Exists");
        require(bytes(_name).length >0,"Username cannot be empty");
        userList[msg.sender].name=_name;

        //adding the user to the total user
        allUser memory _user=allUser(_name , msg.sender);
        getAlluser.push(_user);

      }

      //get username
      function getUserName(address pubkey) public view returns(string memory){
        require(checkUser(pubkey)==true , "User is Not registered");
        return userList[pubkey].name;
      }

      //add friend
      function addFriend(address friend_key , string calldata name) external{
        require(checkUser(msg.sender)==true, "User is Not registered");
        require(checkUser(friend_key )==true, "User is Not registered");
        require(msg.sender != friend_key, "You Cant make u as friend");
        require(checkAlreadyFriends(msg.sender , friend_key)==false , "You both are already a friend");

        _addFriend(msg.sender , friend_key , name);
        _addFriend(friend_key , msg.sender,  userList[msg.sender].name);

      }

      function checkAlreadyFriends(address pubkey1 , address pubkey2)internal view returns(bool){   //user address , user's friend address
         for(uint256 i=0 ; i<( userList[pubkey1].friendlist).length;i++){
           if(pubkey2==userList[pubkey1].friendlist[i].pubkey) return true;
        }
         return false;
      }

      function _addFriend(address me , address friend_key , string memory name) internal{
       Friend memory newFriend= Friend(friend_key , name);
       userList[me].friendlist.push(newFriend);

      }

      //get my friendList
      function getMyFriend()public view returns(Friend[] memory){
        return userList[msg.sender].friendlist;
      }
      
       //get chat code
       function _getChatCode(address pubkey1, address pubkey2)internal pure returns(bytes32){
        if(pubkey1 < pubkey2){
          return keccak256(abi.encodePacked(pubkey1,pubkey2));
        }else return keccak256(abi.encodePacked(pubkey2,pubkey1));
       }

       //sending messages
       function sendMessage(address friend_key , string calldata _msg )public{
        require(checkUser(msg.sender)==true, "User is Not registered");
        require(checkUser(friend_key )==true, "User is Not registered");
        require(checkAlreadyFriends(msg.sender , friend_key)==true , "You both are not a friends");

        
        bytes32 chatcode=_getChatCode(msg.sender , friend_key);
        message memory _message=message(msg.sender , block.timestamp , _msg);
        allMessages[chatcode].push(_message);
       }

       //read message
       function readMessage(address friend_key)public view returns(message[] memory){
        bytes32 chatCode=_getChatCode(msg.sender , friend_key);
        return allMessages[chatCode];
       }


       //get all users
       function getAllusers()public view returns(allUser[] memory){
        return getAlluser;
       }
}















