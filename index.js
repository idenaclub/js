async function connectWallet() {
   accounts = await window.ethereum.request({method: "eth_requestAccounts"}).catch((err)=>{
        console.log(err.code)
    })
    console.log(accounts)
}

async function checkBalance(){
    let balance = await window.ethereum.request({method: "eth_getBalance",
        params:[
            ethereum.selectedAddress
        ]
    }).catch((err)=>{
        console.log(err.code)
    })
    console.log(parseInt(balance) / Math.pow(10,18))
}

async function sendTransaction() {
    let params = [{
        "from": ethereum.selectedAddress,
        "to": "0xF512B1e8acc96Baf05b470182f1814Bfb14DF563",
        "gas": Number(96583).toString(16),
        "gasPrice": Number(1000000000).toString(16),
        "value": Number(0).toString(16),
        "data": "0xf0acd7d5"
      }]

    let result = await window.ethereum.request({method: "eth_sendTransaction", params}).catch((err)=>{
        console.log(err)
    })
    
}
