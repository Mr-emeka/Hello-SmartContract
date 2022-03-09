const main = async () => {
  const [owner, randomPerson] = await hre.ethers.getSigners();
  const helloContractFactory = await hre.ethers.getContractFactory("Hello");
  const helloContract = await helloContractFactory.deploy();

  await helloContract.deployed();
  console.log("Contract deployed to :", helloContract.address);
  console.log("Contract deployed by :", owner.address);
  let greetings;

  let helloTxn = await helloContract.update("Uche");
  await helloTxn.wait();

  greetings = await  helloContract.greet();


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


runMain();
