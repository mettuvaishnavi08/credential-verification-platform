const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();
  console.log("Deploying with:", deployer.address);

  const Storage = await hre.ethers.getContractFactory("SimpleStorage");
  const storage = await Storage.deploy();

  await storage.deployed();
  console.log("Contract deployed to:", storage.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
