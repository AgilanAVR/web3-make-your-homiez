const hre = require("hardhat");

async function main() {

  let friend1;
  [friend1] = await ethers.getSigners();

  const ChatApp = await hre.ethers.getContractFactory("ChatApp");
  const chatApp = await ChatApp.deploy();

  await chatApp.deployed();

  console.log(` Contract Address: ${chatApp.address}`);



}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
