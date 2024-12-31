const { expect } = require('chai');
const { ethers } = require('hardhat');


const tokens = (n) => {
  return ethers.utils.parseUnits(n.toString(), 'ether')
}

describe("ChatApp",  async()=> {

          // Deploy Real Estate
          let chatapp;
          let deployer,friend1,friend2 , friend3;
          beforeEach(async()=>{

        // Setup accounts
        [deployer , friend1 , friend2 , friend3] = await ethers.getSigners();


            const ChatApp = await ethers.getContractFactory('ChatApp')
            chatapp = await ChatApp.connect(deployer).deploy();
            await chatapp.deployed();


            //creating user1
            let transaction=await chatapp.connect(friend1).createAccount("kawin");
            await transaction.wait();

            //creating user2
             transaction=await chatapp.connect(friend2).createAccount("Agilan");
             await transaction.wait();

             //creating user3
             transaction=await chatapp.connect(friend3).createAccount("Hema");
             await transaction.wait();


            //adding friend
            transaction=await chatapp.connect(friend1).addFriend(friend2.address, "Agilan");  //adding friend2 with friend1;
            await transaction.wait();

            //sending messages
            transaction=await chatapp.connect(friend1).sendMessage(friend2.address , "Hi da Bunda");
            await transaction.wait();

            transaction=await chatapp.connect(friend2).sendMessage(friend1.address , "Solra Bunda");
            await transaction.wait();

          }
        )      
        
        

//----------------------->testings



            describe("create account",async()=>{
              it("user Created",async()=>{
                const user=await chatapp.userList(friend1.address);
               expect(user).to.equal("kawin");
   
              })

              it("Fetching First user",async()=>{
                const first_user=await chatapp.getAlluser(0);
               expect(first_user.name).to.equal("kawin");
   
              })

              it("Friend1 X Friend2",async()=>{
                const first_user_friend=await chatapp.connect(friend1).getMyFriend();
                 expect(first_user_friend[0].name).to.equal("Agilan");
   
              })

              it("Friend2 X Friend1",async()=>{
                const second_user_friend=await chatapp.connect(friend2).getMyFriend();
                 expect(second_user_friend[0].name).to.equal("kawin");
   
              })

              //sending message
              it("message from friend1",async()=>{ 
                const message=await chatapp.connect(friend1).readMessage(friend2.address);
                 message.map((elem)=>{
                  console.log("From: "+elem.sender);
                  console.log("Time: "+elem.timeStamp.toString());
                  console.log("Message: "+elem.msg);
                 })
   
              })

              it("message from friend2",async()=>{ 
                const message=await chatapp.connect(friend2).readMessage(friend1.address);
                message.map((elem)=>{
                  console.log("From: "+elem.sender);
                  console.log("Time: "+elem.timeStamp.toString());
                  console.log("Message: "+elem.msg);
                 })
   
              })

              it("Returning total user", async()=>{
                const totUser=await chatapp.getAllusers();
                console.log(totUser.length);
              })

            })
});
