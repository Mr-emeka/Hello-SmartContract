const main = async () => {
  const helloContractFactory = await hre.ethers.getContractFactory("Hello");
  const helloContract = await helloContractFactory.deploy();

  await helloContract.deployed();
  console.log("Contract deployed to :", helloContract.address);
}


const runMain = async () => {
  try {
    await main()
    process.exit(0);
  } catch (e) {
    console.log(e);
    process.exit(1)
  }
}
