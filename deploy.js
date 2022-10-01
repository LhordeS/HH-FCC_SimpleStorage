const ethers = require("ethers");
const fs = require("fs-extra");

async function main() {
    //HTTP://127.0.0.1:7545
    const provider = new ethers.providers.JsonRpcProvider("HTTP://127.0.0.1:8545");
    const wallet = new ethers.Wallet("0x9d6dea9fa3e4fc4bf606f64a654f1ea00f3f4c975ec413ee2425c5c2f522cafd", provider);
    const abi = fs.readFileSync("./SimpleStorage_sol_SimpleStorage.abi", "utf8");
    const binary = fs.readFileSync("./SimpleStorage_sol_SimpleStorage.bin", "utf8");
    
    const contractFactory = new ethers.ContractFactory(abi, binary, wallet);
    console.log("Deploying, please wait...");

    const contract = await contractFactory.deploy();
    console.log(contract);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

 // 0x9d6dea9fa3e4fc4bf606f64a654f1ea00f3f4c975ec413ee2425c5c2f522cafd