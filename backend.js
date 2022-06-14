

// Connect Wallet to DApp and Connect to Eth Blockchain

let mood_contract ;
let signer;
// Define Deployed Contract Smart Address
const contract_address = "0x94a69D93cc5587f3D286f9C8406032d283577de2"; 
// Define Deployed Contract Smart ABI
const contract_abi = [
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_text",
				"type": "string"
			}
		],
		"name": "set",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "get",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];

const provider = new ethers.providers.Web3Provider(window.ethereum, "ropsten");
provider.send("eth_requestAccounts", []).then(() => {
	provider.listAccounts().then((accounts) => 
	{
		signer = provider.getSigner(accounts[0]);
		mood_contract = new ethers.Contract(contract_address,contract_abi,signer);
	});
  });



  async function getMood(){
	const getMoodPromise = mood_contract.get();
	const Mood  = await getMoodPromise;
	document.getElementById('show_mood').innerHTML = Mood;
  }

  async function setMood() {
	const mood = document.getElementById("mood").value;
	const setMoodPromise = mood_contract.set(mood);
	await setMoodPromise;
  }



