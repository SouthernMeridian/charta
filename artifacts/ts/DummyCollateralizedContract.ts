export const DummyCollateralizedContract =
{
  "contractName": "DummyCollateralizedContract",
  "abi": [
    {
      "constant": true,
      "inputs": [
        {
          "name": "agreementId",
          "type": "bytes32"
        }
      ],
      "name": "getValueRepaidToDate",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "agreementId",
          "type": "bytes32"
        },
        {
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "setDummyExpectedRepaymentValue",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "agreementId",
          "type": "bytes32"
        }
      ],
      "name": "registerTermStart",
      "outputs": [
        {
          "name": "_success",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "debtRegistry",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "agreementID",
          "type": "bytes32"
        }
      ],
      "name": "returnCollateral",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "agreementId",
          "type": "bytes32"
        },
        {
          "name": "payer",
          "type": "address"
        },
        {
          "name": "beneficiary",
          "type": "address"
        },
        {
          "name": "unitsOfRepayment",
          "type": "uint256"
        },
        {
          "name": "tokenAddress",
          "type": "address"
        }
      ],
      "name": "registerRepayment",
      "outputs": [
        {
          "name": "_success",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "agreementId",
          "type": "bytes32"
        },
        {
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "mockDummyValueRepaid",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "agreementID",
          "type": "bytes32"
        },
        {
          "name": "collateralizer",
          "type": "address"
        },
        {
          "name": "token",
          "type": "address"
        },
        {
          "name": "amount",
          "type": "uint256"
        },
        {
          "name": "lockupPeriodEndTimestamp",
          "type": "uint256"
        },
        {
          "name": "withdrawn",
          "type": "bool"
        }
      ],
      "name": "setDummyCollateral",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "bytes32"
        }
      ],
      "name": "collateralForAgreementID",
      "outputs": [
        {
          "name": "collateralizer",
          "type": "address"
        },
        {
          "name": "token",
          "type": "address"
        },
        {
          "name": "amount",
          "type": "uint256"
        },
        {
          "name": "lockupPeriod",
          "type": "uint256"
        },
        {
          "name": "withdrawn",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "agreementId",
          "type": "bytes32"
        },
        {
          "name": "timestamp",
          "type": "uint256"
        }
      ],
      "name": "getExpectedRepaymentValue",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "agreementID",
          "type": "bytes32"
        },
        {
          "name": "token",
          "type": "address"
        },
        {
          "name": "amount",
          "type": "uint256"
        },
        {
          "name": "lockupPeriodEndTimestamp",
          "type": "uint256"
        }
      ],
      "name": "collateralize",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "agreementID",
          "type": "bytes32"
        }
      ],
      "name": "seizeCollateral",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "name": "_debtRegistry",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "agreementID",
          "type": "bytes32"
        },
        {
          "indexed": false,
          "name": "token",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "CollateralLocked",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "agreementID",
          "type": "bytes32"
        },
        {
          "indexed": true,
          "name": "collateralizer",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "token",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "CollateralReturned",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "agreementID",
          "type": "bytes32"
        },
        {
          "indexed": true,
          "name": "beneficiary",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "token",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "CollateralSeized",
      "type": "event"
    }
  ],
  "bytecode": "0x6060604052341561000f57600080fd5b6040516020806113ff8339810160405280805190602001909190505080806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050506113828061007d6000396000f3006060604052600436106100ba576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806303a896a1146100bf578063109f4600146100fa578063282b34051461012a5780632f866f731461016957806344c4ea95146101be5780635f0280ba146101e55780635f6eb71e1461028a57806375cedbc5146102ba57806378f522bb1461033c57806399114d84146103ef578063e9f7a9dc14610433578063ed8e52bd1461048b575b600080fd5b34156100ca57600080fd5b6100e46004808035600019169060200190919050506104b2565b6040518082815260200191505060405180910390f35b341561010557600080fd5b6101286004808035600019169060200190919080359060200190919050506104d7565b005b341561013557600080fd5b61014f6004808035600019169060200190919050506104fb565b604051808215151515815260200191505060405180910390f35b341561017457600080fd5b61017c610506565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34156101c957600080fd5b6101e360048080356000191690602001909190505061052b565b005b34156101f057600080fd5b61027060048080356000191690602001909190803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803590602001909190803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610837565b604051808215151515815260200191505060405180910390f35b341561029557600080fd5b6102b8600480803560001916906020019091908035906020019091905050610845565b005b34156102c557600080fd5b61033a60048080356000191690602001909190803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff169060200190919080359060200190919080359060200190919080351515906020019091905050610869565b005b341561034757600080fd5b6103616004808035600019169060200190919050506109a7565b604051808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001848152602001838152602001821515151581526020019550505050505060405180910390f35b34156103fa57600080fd5b61041d600480803560001916906020019091908035906020019091905050610a2a565b6040518082815260200191505060405180910390f35b341561043e57600080fd5b61048960048080356000191690602001909190803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091908035906020019091905050610a50565b005b341561049657600080fd5b6104b0600480803560001916906020019091905050610f35565b005b6000600260008360001916600019168152602001908152602001600020549050919050565b80600360008460001916600019168152602001908152602001600020819055505050565b600060019050919050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6105336112f8565b60016000836000191660001916815260200190815260200160002060a060405190810160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200160028201548152602001600382015481526020016004820160009054906101000a900460ff16151515158152505090506000816060015111151561064a57600080fd5b80606001514211151561065c57600080fd5b806080015115151561066d57600080fd5b610676826104b2565b6106808342610a2a565b1115151561068d57600080fd5b6001806000846000191660001916815260200190815260200160002060040160006101000a81548160ff021916908315150217905550806020015173ffffffffffffffffffffffffffffffffffffffff1663a9059cbb826000015183604001516000604051602001526040518363ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b151561077a57600080fd5b6102c65a03f1151561078b57600080fd5b5050506040518051905015156107a057600080fd5b806000015173ffffffffffffffffffffffffffffffffffffffff1682600019167f2621540e2b91ca10330d6a7cbd6fb8cab2396f91c4935ad76b1183770819fa1f83602001518460400151604051808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019250505060405180910390a35050565b600080905095945050505050565b80600260008460001916600019168152602001908152602001600020819055505050565b60a0604051908101604052808673ffffffffffffffffffffffffffffffffffffffff1681526020018573ffffffffffffffffffffffffffffffffffffffff16815260200184815260200183815260200182151581525060016000886000191660001916815260200190815260200160002060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550604082015181600201556060820151816003015560808201518160040160006101000a81548160ff021916908315150217905550905050505050505050565b60016020528060005260406000206000915090508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060020154908060030154908060040160009054906101000a900460ff16905085565b600060036000846000191660001916815260200190815260200160002054905092915050565b6000806000610a5d6112f8565b600086111515610a6c57600080fd5b4285111515610a7a57600080fd5b6000600160008a6000191660001916815260200190815260200160002060030154141515610aa757600080fd5b869350339250309150858473ffffffffffffffffffffffffffffffffffffffff166370a08231856000604051602001526040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001915050602060405180830381600087803b1515610b5457600080fd5b6102c65a03f11515610b6557600080fd5b5050506040518051905010151515610b7c57600080fd5b858473ffffffffffffffffffffffffffffffffffffffff1663dd62ed3e85856000604051602001526040518363ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200192505050602060405180830381600087803b1515610c5457600080fd5b6102c65a03f11515610c6557600080fd5b5050506040518051905010151515610c7c57600080fd5b8373ffffffffffffffffffffffffffffffffffffffff166323b872dd8484896000604051602001526040518463ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019350505050602060405180830381600087803b1515610d5b57600080fd5b6102c65a03f11515610d6c57600080fd5b505050604051805190501515610d8157600080fd5b60a0604051908101604052803373ffffffffffffffffffffffffffffffffffffffff1681526020018873ffffffffffffffffffffffffffffffffffffffff16815260200187815260200186815260200160001515815250905080600160008a6000191660001916815260200190815260200160002060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550604082015181600201556060820151816003015560808201518160040160006101000a81548160ff02191690831515021790555090505087600019167f38f12634ebefbe7f6767652aae05e220f95e0ca8ef8353c9c9c5ae439a592aec8888604051808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019250505060405180910390a25050505050505050565b610f3d6112f8565b600060016000846000191660001916815260200190815260200160002060a060405190810160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200160028201548152602001600382015481526020016004820160009054906101000a900460ff16151515158152505091506000826060015111151561105657600080fd5b81606001514211151561106857600080fd5b816080015115151561107957600080fd5b611082836104b2565b61108c8442610a2a565b11151561109857600080fd5b6001806000856000191660001916815260200190815260200160002060040160006101000a81548160ff0219169083151502179055506000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663ba20dda4846000604051602001526040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808260001916600019168152602001915050602060405180830381600087803b151561116e57600080fd5b6102c65a03f1151561117f57600080fd5b505050604051805190509050816020015173ffffffffffffffffffffffffffffffffffffffff1663a9059cbb8284604001516000604051602001526040518363ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b151561123e57600080fd5b6102c65a03f1151561124f57600080fd5b50505060405180519050151561126457600080fd5b8073ffffffffffffffffffffffffffffffffffffffff1683600019167f50d195a4b80a950617a8e0e18ac9dd4c0236ac72d5e12355d881443823870d3984602001518560400151604051808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019250505060405180910390a3505050565b60a060405190810160405280600073ffffffffffffffffffffffffffffffffffffffff168152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001600081526020016000815260200160001515815250905600a165627a7a72305820d6f926e58909b455e8e271270b5b5b365eb596de3eb07741f92a3262c3e4d6ab0029",
  "deployedBytecode": "0x6060604052600436106100ba576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806303a896a1146100bf578063109f4600146100fa578063282b34051461012a5780632f866f731461016957806344c4ea95146101be5780635f0280ba146101e55780635f6eb71e1461028a57806375cedbc5146102ba57806378f522bb1461033c57806399114d84146103ef578063e9f7a9dc14610433578063ed8e52bd1461048b575b600080fd5b34156100ca57600080fd5b6100e46004808035600019169060200190919050506104b2565b6040518082815260200191505060405180910390f35b341561010557600080fd5b6101286004808035600019169060200190919080359060200190919050506104d7565b005b341561013557600080fd5b61014f6004808035600019169060200190919050506104fb565b604051808215151515815260200191505060405180910390f35b341561017457600080fd5b61017c610506565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34156101c957600080fd5b6101e360048080356000191690602001909190505061052b565b005b34156101f057600080fd5b61027060048080356000191690602001909190803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803590602001909190803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610837565b604051808215151515815260200191505060405180910390f35b341561029557600080fd5b6102b8600480803560001916906020019091908035906020019091905050610845565b005b34156102c557600080fd5b61033a60048080356000191690602001909190803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff169060200190919080359060200190919080359060200190919080351515906020019091905050610869565b005b341561034757600080fd5b6103616004808035600019169060200190919050506109a7565b604051808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001848152602001838152602001821515151581526020019550505050505060405180910390f35b34156103fa57600080fd5b61041d600480803560001916906020019091908035906020019091905050610a2a565b6040518082815260200191505060405180910390f35b341561043e57600080fd5b61048960048080356000191690602001909190803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091908035906020019091905050610a50565b005b341561049657600080fd5b6104b0600480803560001916906020019091905050610f35565b005b6000600260008360001916600019168152602001908152602001600020549050919050565b80600360008460001916600019168152602001908152602001600020819055505050565b600060019050919050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6105336112f8565b60016000836000191660001916815260200190815260200160002060a060405190810160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200160028201548152602001600382015481526020016004820160009054906101000a900460ff16151515158152505090506000816060015111151561064a57600080fd5b80606001514211151561065c57600080fd5b806080015115151561066d57600080fd5b610676826104b2565b6106808342610a2a565b1115151561068d57600080fd5b6001806000846000191660001916815260200190815260200160002060040160006101000a81548160ff021916908315150217905550806020015173ffffffffffffffffffffffffffffffffffffffff1663a9059cbb826000015183604001516000604051602001526040518363ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b151561077a57600080fd5b6102c65a03f1151561078b57600080fd5b5050506040518051905015156107a057600080fd5b806000015173ffffffffffffffffffffffffffffffffffffffff1682600019167f2621540e2b91ca10330d6a7cbd6fb8cab2396f91c4935ad76b1183770819fa1f83602001518460400151604051808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019250505060405180910390a35050565b600080905095945050505050565b80600260008460001916600019168152602001908152602001600020819055505050565b60a0604051908101604052808673ffffffffffffffffffffffffffffffffffffffff1681526020018573ffffffffffffffffffffffffffffffffffffffff16815260200184815260200183815260200182151581525060016000886000191660001916815260200190815260200160002060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550604082015181600201556060820151816003015560808201518160040160006101000a81548160ff021916908315150217905550905050505050505050565b60016020528060005260406000206000915090508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060020154908060030154908060040160009054906101000a900460ff16905085565b600060036000846000191660001916815260200190815260200160002054905092915050565b6000806000610a5d6112f8565b600086111515610a6c57600080fd5b4285111515610a7a57600080fd5b6000600160008a6000191660001916815260200190815260200160002060030154141515610aa757600080fd5b869350339250309150858473ffffffffffffffffffffffffffffffffffffffff166370a08231856000604051602001526040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001915050602060405180830381600087803b1515610b5457600080fd5b6102c65a03f11515610b6557600080fd5b5050506040518051905010151515610b7c57600080fd5b858473ffffffffffffffffffffffffffffffffffffffff1663dd62ed3e85856000604051602001526040518363ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200192505050602060405180830381600087803b1515610c5457600080fd5b6102c65a03f11515610c6557600080fd5b5050506040518051905010151515610c7c57600080fd5b8373ffffffffffffffffffffffffffffffffffffffff166323b872dd8484896000604051602001526040518463ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019350505050602060405180830381600087803b1515610d5b57600080fd5b6102c65a03f11515610d6c57600080fd5b505050604051805190501515610d8157600080fd5b60a0604051908101604052803373ffffffffffffffffffffffffffffffffffffffff1681526020018873ffffffffffffffffffffffffffffffffffffffff16815260200187815260200186815260200160001515815250905080600160008a6000191660001916815260200190815260200160002060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550604082015181600201556060820151816003015560808201518160040160006101000a81548160ff02191690831515021790555090505087600019167f38f12634ebefbe7f6767652aae05e220f95e0ca8ef8353c9c9c5ae439a592aec8888604051808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019250505060405180910390a25050505050505050565b610f3d6112f8565b600060016000846000191660001916815260200190815260200160002060a060405190810160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200160028201548152602001600382015481526020016004820160009054906101000a900460ff16151515158152505091506000826060015111151561105657600080fd5b81606001514211151561106857600080fd5b816080015115151561107957600080fd5b611082836104b2565b61108c8442610a2a565b11151561109857600080fd5b6001806000856000191660001916815260200190815260200160002060040160006101000a81548160ff0219169083151502179055506000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663ba20dda4846000604051602001526040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808260001916600019168152602001915050602060405180830381600087803b151561116e57600080fd5b6102c65a03f1151561117f57600080fd5b505050604051805190509050816020015173ffffffffffffffffffffffffffffffffffffffff1663a9059cbb8284604001516000604051602001526040518363ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b151561123e57600080fd5b6102c65a03f1151561124f57600080fd5b50505060405180519050151561126457600080fd5b8073ffffffffffffffffffffffffffffffffffffffff1683600019167f50d195a4b80a950617a8e0e18ac9dd4c0236ac72d5e12355d881443823870d3984602001518560400151604051808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019250505060405180910390a3505050565b60a060405190810160405280600073ffffffffffffffffffffffffffffffffffffffff168152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001600081526020016000815260200160001515815250905600a165627a7a72305820d6f926e58909b455e8e271270b5b5b365eb596de3eb07741f92a3262c3e4d6ab0029",
  "sourceMap": "128:1952:25:-;;;334:99;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;416:13;1651::8;1623:12;;:42;;;;;;;;;;;;;;;;;;1559:113;334:99:25;128:1952;;;;;;",
  "deployedSourceMap": "128:1952:25:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1061:144;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1286:164;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;498:121;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1024:32:8;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3762:1369;;;;;;;;;;;;;;;;;;;;;;;;;;;;;625:238:25;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1456:143;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1605:472;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1063:62:8;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;869:186:25;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1678:2078:8;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5137:1428;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1061:144:25;1147:7;1173:12;:25;1186:11;1173:25;;;;;;;;;;;;;;;;;;1166:32;;1061:144;;;:::o;1286:164::-;1437:6;1399:22;:35;1422:11;1399:35;;;;;;;;;;;;;;;;;:44;;;;1286:164;;:::o;498:121::-;576:13;608:4;601:11;;498:121;;;:::o;1024:32:8:-;;;;;;;;;;;;;:::o;3762:1369::-;3899:28;;:::i;:::-;3930:24;:37;3955:11;3930:37;;;;;;;;;;;;;;;;;3899:68;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4087:1;4061:10;:23;;;:27;4053:36;;;;;;;;4194:10;:23;;;4176:15;:41;4168:50;;;;;;;;4312:10;:20;;;4311:21;4303:30;;;;;;;;4474:33;4495:11;4474:20;:33::i;:::-;4403:55;4429:11;4442:15;4403:25;:55::i;:::-;:104;;4382:135;;;;;;;;4619:4;4569:24;:37;4594:11;4569:37;;;;;;;;;;;;;;;;;:47;;;:54;;;;;;;;;;;;;;;;;;4748:10;:16;;;4742:32;;;4792:10;:25;;;4835:10;:17;;;4742:124;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4721:155;;;;;;;;5028:10;:25;;;4971:153;;5003:11;4971:153;;;;5067:10;:16;;;5097:10;:17;;;4971:153;;;;;;;;;;;;;;;;;;;;;;;;;;;;3762:1369;;:::o;625:238:25:-;819:13;851:5;844:12;;625:238;;;;;;;:::o;1456:143::-;1586:6;1558:12;:25;1571:11;1558:25;;;;;;;;;;;;;;;;;:34;;;;1456:143;;:::o;1605:472::-;1864:206;;;;;;;;;1905:14;1864:206;;;;;;1940:5;1864:206;;;;;;1967:6;1864:206;;;;2001:24;1864:206;;;;2050:9;1864:206;;;;;1824:24;:37;1849:11;1824:37;;;;;;;;;;;;;;;;;:246;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1605:472;;;;;;:::o;1063:62:8:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;869:186:25:-;987:7;1013:22;:35;1036:11;1013:35;;;;;;;;;;;;;;;;;;1006:42;;869:186;;;;:::o;1678:2078:8:-;2474:16;2515:22;2560:17;3308:28;;:::i;:::-;1930:1;1921:6;:10;1913:19;;;;;;;;2047:15;2020:24;:42;2012:51;;;;;;;;2461:1;2407:24;:37;2432:11;2407:37;;;;;;;;;;;;;;;;;:50;;;:55;2399:64;;;;;;;;2499:5;2474:31;;2540:10;2515:35;;2588:4;2560:33;;2803:6;2763:10;:20;;;2784:14;2763:36;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:46;;2755:55;;;;;;;;3050:6;2999:10;:20;;;3020:14;3036:9;2999:47;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:57;;2991:66;;;;;;;;3153:10;:23;;;3190:14;3218:9;3241:6;3153:104;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3145:113;;;;;;;;3339:198;;;;;;;;;3380:10;3339:198;;;;;;3411:5;3339:198;;;;;;3438:6;3339:198;;;;3472:24;3339:198;;;;3521:5;3339:198;;;;;3308:229;;3628:10;3588:24;:37;3613:11;3588:37;;;;;;;;;;;;;;;;;:50;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3722:11;3705:44;;;;3735:5;3742:6;3705:44;;;;;;;;;;;;;;;;;;;;;;;;;;;;1678:2078;;;;;;;;:::o;5137:1428::-;5273:28;;:::i;:::-;6105:19;5304:24;:37;5329:11;5304:37;;;;;;;;;;;;;;;;;5273:68;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5461:1;5435:10;:23;;;:27;5427:36;;;;;;;;5559:10;:23;;;5541:15;:41;5533:50;;;;;;;;5680:10;:20;;;5679:21;5671:30;;;;;;;;5858:33;5879:11;5858:20;:33::i;:::-;5788:55;5814:11;5827:15;5788:25;:55::i;:::-;:103;5767:134;;;;;;;;6031:4;5981:24;:37;6006:11;5981:37;;;;;;;;;;;;;;;;;:47;;;:54;;;;;;;;;;;;;;;;;;6127:12;;;;;;;;;;;:27;;;6155:11;6127:40;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;6105:62;;6262:10;:16;;;6256:32;;;6306:11;6335:10;:17;;;6256:110;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;6235:141;;;;;;;;6476:11;6421:137;;6451:11;6421:137;;;;6501:10;:16;;;6531:10;:17;;;6421:137;;;;;;;;;;;;;;;;;;;;;;;;;;;;5137:1428;;;:::o;128:1952:25:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o",
  "source": "pragma solidity 0.4.18;\n\nimport \"zeppelin-solidity/contracts/math/SafeMath.sol\";\n\nimport \"../../examples/Collateralized.sol\";\n\n\ncontract DummyCollateralizedContract is Collateralized {\n    using SafeMath for uint;\n\n    mapping(bytes32 => uint) internal amountRepaid;\n    mapping(bytes32 => uint) internal expectedRepaymentValue;\n\n    function DummyCollateralizedContract(address _debtRegistry) public Collateralized(_debtRegistry) {}\n\n    /* Naive `TermsContract` interface implementation. */\n\n    function registerTermStart(\n        bytes32 agreementId\n    ) public returns (bool _success) {\n        return true;\n    }\n\n    function registerRepayment(\n        bytes32 agreementId,\n        address payer,\n        address beneficiary,\n        uint256 unitsOfRepayment,\n        address tokenAddress\n    ) public returns (bool _success) {\n        return false;\n    }\n\n    function getExpectedRepaymentValue(\n        bytes32 agreementId,\n        uint256 timestamp\n    ) public view returns (uint256) {\n        return expectedRepaymentValue[agreementId];\n    }\n\n    function getValueRepaidToDate(\n        bytes32 agreementId\n    ) public view returns (uint256) {\n        return amountRepaid[agreementId];\n    }\n\n    /* Dummy functionality used to mock behavior for testing purposes. */\n\n    function setDummyExpectedRepaymentValue(\n        bytes32 agreementId,\n        uint amount\n    ) public {\n        expectedRepaymentValue[agreementId] = amount;\n    }\n\n    function mockDummyValueRepaid(\n        bytes32 agreementId,\n        uint amount\n    ) public {\n        amountRepaid[agreementId] = amount;\n    }\n\n    function setDummyCollateral(\n        bytes32 agreementID,\n        address collateralizer,\n        address token,\n        uint amount,\n        uint lockupPeriodEndTimestamp,\n        bool withdrawn\n    ) public {\n        collateralForAgreementID[agreementID] = Collateral({\n            collateralizer: collateralizer,\n            token: token,\n            amount: amount,\n            lockupPeriod: lockupPeriodEndTimestamp,\n            withdrawn: withdrawn\n        });\n    }\n\n}\n",
  "sourcePath": "/Users/nadavhollander/Documents/Dharma/Development/charta/contracts/test/terms_contracts/DummyCollateralizedContract.sol",
  "ast": {
    "attributes": {
      "absolutePath": "/Users/nadavhollander/Documents/Dharma/Development/charta/contracts/test/terms_contracts/DummyCollateralizedContract.sol",
      "exportedSymbols": {
        "DummyCollateralizedContract": [
          4391
        ]
      }
    },
    "children": [
      {
        "attributes": {
          "literals": [
            "solidity",
            "0.4",
            ".18"
          ]
        },
        "id": 4256,
        "name": "PragmaDirective",
        "src": "0:23:15"
      },
      {
        "attributes": {
          "SourceUnit": 5333,
          "absolutePath": "zeppelin-solidity/contracts/math/SafeMath.sol",
          "file": "zeppelin-solidity/contracts/math/SafeMath.sol",
          "scope": 4392,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 4257,
        "name": "ImportDirective",
        "src": "25:55:15"
      },
      {
        "attributes": {
          "SourceUnit": 2592,
          "absolutePath": "/Users/nadavhollander/Documents/Dharma/Development/charta/contracts/examples/Collateralized.sol",
          "file": "../../examples/Collateralized.sol",
          "scope": 4392,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 4258,
        "name": "ImportDirective",
        "src": "82:43:15"
      },
      {
        "attributes": {
          "contractDependencies": [
            2092,
            2591
          ],
          "contractKind": "contract",
          "documentation": null,
          "fullyImplemented": true,
          "linearizedBaseContracts": [
            4391,
            2591,
            2092
          ],
          "name": "DummyCollateralizedContract",
          "scope": 4392
        },
        "children": [
          {
            "attributes": {
              "arguments": [
                null
              ]
            },
            "children": [
              {
                "attributes": {
                  "contractScope": null,
                  "name": "Collateralized",
                  "referencedDeclaration": 2591,
                  "type": "contract Collateralized"
                },
                "id": 4259,
                "name": "UserDefinedTypeName",
                "src": "168:14:15"
              }
            ],
            "id": 4260,
            "name": "InheritanceSpecifier",
            "src": "168:14:15"
          },
          {
            "children": [
              {
                "attributes": {
                  "contractScope": null,
                  "name": "SafeMath",
                  "referencedDeclaration": 5332,
                  "type": "library SafeMath"
                },
                "id": 4261,
                "name": "UserDefinedTypeName",
                "src": "195:8:15"
              },
              {
                "attributes": {
                  "name": "uint",
                  "type": "uint256"
                },
                "id": 4262,
                "name": "ElementaryTypeName",
                "src": "208:4:15"
              }
            ],
            "id": 4263,
            "name": "UsingForDirective",
            "src": "189:24:15"
          },
          {
            "attributes": {
              "constant": false,
              "name": "amountRepaid",
              "scope": 4391,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "mapping(bytes32 => uint256)",
              "value": null,
              "visibility": "internal"
            },
            "children": [
              {
                "attributes": {
                  "type": "mapping(bytes32 => uint256)"
                },
                "children": [
                  {
                    "attributes": {
                      "name": "bytes32",
                      "type": "bytes32"
                    },
                    "id": 4264,
                    "name": "ElementaryTypeName",
                    "src": "227:7:15"
                  },
                  {
                    "attributes": {
                      "name": "uint",
                      "type": "uint256"
                    },
                    "id": 4265,
                    "name": "ElementaryTypeName",
                    "src": "238:4:15"
                  }
                ],
                "id": 4266,
                "name": "Mapping",
                "src": "219:24:15"
              }
            ],
            "id": 4267,
            "name": "VariableDeclaration",
            "src": "219:46:15"
          },
          {
            "attributes": {
              "constant": false,
              "name": "expectedRepaymentValue",
              "scope": 4391,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "mapping(bytes32 => uint256)",
              "value": null,
              "visibility": "internal"
            },
            "children": [
              {
                "attributes": {
                  "type": "mapping(bytes32 => uint256)"
                },
                "children": [
                  {
                    "attributes": {
                      "name": "bytes32",
                      "type": "bytes32"
                    },
                    "id": 4268,
                    "name": "ElementaryTypeName",
                    "src": "279:7:15"
                  },
                  {
                    "attributes": {
                      "name": "uint",
                      "type": "uint256"
                    },
                    "id": 4269,
                    "name": "ElementaryTypeName",
                    "src": "290:4:15"
                  }
                ],
                "id": 4270,
                "name": "Mapping",
                "src": "271:24:15"
              }
            ],
            "id": 4271,
            "name": "VariableDeclaration",
            "src": "271:56:15"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": true,
              "name": "DummyCollateralizedContract",
              "payable": false,
              "scope": 4391,
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_debtRegistry",
                      "scope": 4280,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 4272,
                        "name": "ElementaryTypeName",
                        "src": "371:7:15"
                      }
                    ],
                    "id": 4273,
                    "name": "VariableDeclaration",
                    "src": "371:21:15"
                  }
                ],
                "id": 4274,
                "name": "ParameterList",
                "src": "370:23:15"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 4278,
                "name": "ParameterList",
                "src": "431:0:15"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "overloadedDeclarations": [
                        null
                      ],
                      "referencedDeclaration": 2591,
                      "type": "type(contract Collateralized)",
                      "value": "Collateralized"
                    },
                    "id": 4275,
                    "name": "Identifier",
                    "src": "401:14:15"
                  },
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "overloadedDeclarations": [
                        null
                      ],
                      "referencedDeclaration": 4273,
                      "type": "address",
                      "value": "_debtRegistry"
                    },
                    "id": 4276,
                    "name": "Identifier",
                    "src": "416:13:15"
                  }
                ],
                "id": 4277,
                "name": "ModifierInvocation",
                "src": "401:29:15"
              },
              {
                "attributes": {
                  "statements": [
                    null
                  ]
                },
                "children": [],
                "id": 4279,
                "name": "Block",
                "src": "431:2:15"
              }
            ],
            "id": 4280,
            "name": "FunctionDefinition",
            "src": "334:99:15"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "registerTermStart",
              "payable": false,
              "scope": 4391,
              "stateMutability": "nonpayable",
              "superFunction": 2060,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "agreementId",
                      "scope": 4290,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "bytes32",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bytes32",
                          "type": "bytes32"
                        },
                        "id": 4281,
                        "name": "ElementaryTypeName",
                        "src": "534:7:15"
                      }
                    ],
                    "id": 4282,
                    "name": "VariableDeclaration",
                    "src": "534:19:15"
                  }
                ],
                "id": 4283,
                "name": "ParameterList",
                "src": "524:35:15"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_success",
                      "scope": 4290,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "bool",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bool",
                          "type": "bool"
                        },
                        "id": 4284,
                        "name": "ElementaryTypeName",
                        "src": "576:4:15"
                      }
                    ],
                    "id": 4285,
                    "name": "VariableDeclaration",
                    "src": "576:13:15"
                  }
                ],
                "id": 4286,
                "name": "ParameterList",
                "src": "575:15:15"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 4286
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "hexvalue": "74727565",
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "subdenomination": null,
                          "token": "bool",
                          "type": "bool",
                          "value": "true"
                        },
                        "id": 4287,
                        "name": "Literal",
                        "src": "608:4:15"
                      }
                    ],
                    "id": 4288,
                    "name": "Return",
                    "src": "601:11:15"
                  }
                ],
                "id": 4289,
                "name": "Block",
                "src": "591:28:15"
              }
            ],
            "id": 4290,
            "name": "FunctionDefinition",
            "src": "498:121:15"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "registerRepayment",
              "payable": false,
              "scope": 4391,
              "stateMutability": "nonpayable",
              "superFunction": 2075,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "agreementId",
                      "scope": 4308,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "bytes32",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bytes32",
                          "type": "bytes32"
                        },
                        "id": 4291,
                        "name": "ElementaryTypeName",
                        "src": "661:7:15"
                      }
                    ],
                    "id": 4292,
                    "name": "VariableDeclaration",
                    "src": "661:19:15"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "payer",
                      "scope": 4308,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 4293,
                        "name": "ElementaryTypeName",
                        "src": "690:7:15"
                      }
                    ],
                    "id": 4294,
                    "name": "VariableDeclaration",
                    "src": "690:13:15"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "beneficiary",
                      "scope": 4308,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 4295,
                        "name": "ElementaryTypeName",
                        "src": "713:7:15"
                      }
                    ],
                    "id": 4296,
                    "name": "VariableDeclaration",
                    "src": "713:19:15"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "unitsOfRepayment",
                      "scope": 4308,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 4297,
                        "name": "ElementaryTypeName",
                        "src": "742:7:15"
                      }
                    ],
                    "id": 4298,
                    "name": "VariableDeclaration",
                    "src": "742:24:15"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "tokenAddress",
                      "scope": 4308,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 4299,
                        "name": "ElementaryTypeName",
                        "src": "776:7:15"
                      }
                    ],
                    "id": 4300,
                    "name": "VariableDeclaration",
                    "src": "776:20:15"
                  }
                ],
                "id": 4301,
                "name": "ParameterList",
                "src": "651:151:15"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_success",
                      "scope": 4308,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "bool",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bool",
                          "type": "bool"
                        },
                        "id": 4302,
                        "name": "ElementaryTypeName",
                        "src": "819:4:15"
                      }
                    ],
                    "id": 4303,
                    "name": "VariableDeclaration",
                    "src": "819:13:15"
                  }
                ],
                "id": 4304,
                "name": "ParameterList",
                "src": "818:15:15"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 4304
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "hexvalue": "66616c7365",
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "subdenomination": null,
                          "token": "bool",
                          "type": "bool",
                          "value": "false"
                        },
                        "id": 4305,
                        "name": "Literal",
                        "src": "851:5:15"
                      }
                    ],
                    "id": 4306,
                    "name": "Return",
                    "src": "844:12:15"
                  }
                ],
                "id": 4307,
                "name": "Block",
                "src": "834:29:15"
              }
            ],
            "id": 4308,
            "name": "FunctionDefinition",
            "src": "625:238:15"
          },
          {
            "attributes": {
              "constant": true,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "getExpectedRepaymentValue",
              "payable": false,
              "scope": 4391,
              "stateMutability": "view",
              "superFunction": 2084,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "agreementId",
                      "scope": 4322,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "bytes32",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bytes32",
                          "type": "bytes32"
                        },
                        "id": 4309,
                        "name": "ElementaryTypeName",
                        "src": "913:7:15"
                      }
                    ],
                    "id": 4310,
                    "name": "VariableDeclaration",
                    "src": "913:19:15"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "timestamp",
                      "scope": 4322,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 4311,
                        "name": "ElementaryTypeName",
                        "src": "942:7:15"
                      }
                    ],
                    "id": 4312,
                    "name": "VariableDeclaration",
                    "src": "942:17:15"
                  }
                ],
                "id": 4313,
                "name": "ParameterList",
                "src": "903:62:15"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 4322,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 4314,
                        "name": "ElementaryTypeName",
                        "src": "987:7:15"
                      }
                    ],
                    "id": 4315,
                    "name": "VariableDeclaration",
                    "src": "987:7:15"
                  }
                ],
                "id": 4316,
                "name": "ParameterList",
                "src": "986:9:15"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 4316
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "type": "uint256"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 4271,
                              "type": "mapping(bytes32 => uint256)",
                              "value": "expectedRepaymentValue"
                            },
                            "id": 4317,
                            "name": "Identifier",
                            "src": "1013:22:15"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 4310,
                              "type": "bytes32",
                              "value": "agreementId"
                            },
                            "id": 4318,
                            "name": "Identifier",
                            "src": "1036:11:15"
                          }
                        ],
                        "id": 4319,
                        "name": "IndexAccess",
                        "src": "1013:35:15"
                      }
                    ],
                    "id": 4320,
                    "name": "Return",
                    "src": "1006:42:15"
                  }
                ],
                "id": 4321,
                "name": "Block",
                "src": "996:59:15"
              }
            ],
            "id": 4322,
            "name": "FunctionDefinition",
            "src": "869:186:15"
          },
          {
            "attributes": {
              "constant": true,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "getValueRepaidToDate",
              "payable": false,
              "scope": 4391,
              "stateMutability": "view",
              "superFunction": 2091,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "agreementId",
                      "scope": 4334,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "bytes32",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bytes32",
                          "type": "bytes32"
                        },
                        "id": 4323,
                        "name": "ElementaryTypeName",
                        "src": "1100:7:15"
                      }
                    ],
                    "id": 4324,
                    "name": "VariableDeclaration",
                    "src": "1100:19:15"
                  }
                ],
                "id": 4325,
                "name": "ParameterList",
                "src": "1090:35:15"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 4334,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 4326,
                        "name": "ElementaryTypeName",
                        "src": "1147:7:15"
                      }
                    ],
                    "id": 4327,
                    "name": "VariableDeclaration",
                    "src": "1147:7:15"
                  }
                ],
                "id": 4328,
                "name": "ParameterList",
                "src": "1146:9:15"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 4328
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "type": "uint256"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 4267,
                              "type": "mapping(bytes32 => uint256)",
                              "value": "amountRepaid"
                            },
                            "id": 4329,
                            "name": "Identifier",
                            "src": "1173:12:15"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 4324,
                              "type": "bytes32",
                              "value": "agreementId"
                            },
                            "id": 4330,
                            "name": "Identifier",
                            "src": "1186:11:15"
                          }
                        ],
                        "id": 4331,
                        "name": "IndexAccess",
                        "src": "1173:25:15"
                      }
                    ],
                    "id": 4332,
                    "name": "Return",
                    "src": "1166:32:15"
                  }
                ],
                "id": 4333,
                "name": "Block",
                "src": "1156:49:15"
              }
            ],
            "id": 4334,
            "name": "FunctionDefinition",
            "src": "1061:144:15"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "setDummyExpectedRepaymentValue",
              "payable": false,
              "scope": 4391,
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "agreementId",
                      "scope": 4348,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "bytes32",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bytes32",
                          "type": "bytes32"
                        },
                        "id": 4335,
                        "name": "ElementaryTypeName",
                        "src": "1335:7:15"
                      }
                    ],
                    "id": 4336,
                    "name": "VariableDeclaration",
                    "src": "1335:19:15"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "amount",
                      "scope": 4348,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint",
                          "type": "uint256"
                        },
                        "id": 4337,
                        "name": "ElementaryTypeName",
                        "src": "1364:4:15"
                      }
                    ],
                    "id": 4338,
                    "name": "VariableDeclaration",
                    "src": "1364:11:15"
                  }
                ],
                "id": 4339,
                "name": "ParameterList",
                "src": "1325:56:15"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 4340,
                "name": "ParameterList",
                "src": "1389:0:15"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "=",
                          "type": "uint256"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": true,
                              "type": "uint256"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 4271,
                                  "type": "mapping(bytes32 => uint256)",
                                  "value": "expectedRepaymentValue"
                                },
                                "id": 4341,
                                "name": "Identifier",
                                "src": "1399:22:15"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 4336,
                                  "type": "bytes32",
                                  "value": "agreementId"
                                },
                                "id": 4342,
                                "name": "Identifier",
                                "src": "1422:11:15"
                              }
                            ],
                            "id": 4343,
                            "name": "IndexAccess",
                            "src": "1399:35:15"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 4338,
                              "type": "uint256",
                              "value": "amount"
                            },
                            "id": 4344,
                            "name": "Identifier",
                            "src": "1437:6:15"
                          }
                        ],
                        "id": 4345,
                        "name": "Assignment",
                        "src": "1399:44:15"
                      }
                    ],
                    "id": 4346,
                    "name": "ExpressionStatement",
                    "src": "1399:44:15"
                  }
                ],
                "id": 4347,
                "name": "Block",
                "src": "1389:61:15"
              }
            ],
            "id": 4348,
            "name": "FunctionDefinition",
            "src": "1286:164:15"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "mockDummyValueRepaid",
              "payable": false,
              "scope": 4391,
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "agreementId",
                      "scope": 4362,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "bytes32",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bytes32",
                          "type": "bytes32"
                        },
                        "id": 4349,
                        "name": "ElementaryTypeName",
                        "src": "1494:7:15"
                      }
                    ],
                    "id": 4350,
                    "name": "VariableDeclaration",
                    "src": "1494:19:15"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "amount",
                      "scope": 4362,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint",
                          "type": "uint256"
                        },
                        "id": 4351,
                        "name": "ElementaryTypeName",
                        "src": "1523:4:15"
                      }
                    ],
                    "id": 4352,
                    "name": "VariableDeclaration",
                    "src": "1523:11:15"
                  }
                ],
                "id": 4353,
                "name": "ParameterList",
                "src": "1484:56:15"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 4354,
                "name": "ParameterList",
                "src": "1548:0:15"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "=",
                          "type": "uint256"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": true,
                              "type": "uint256"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 4267,
                                  "type": "mapping(bytes32 => uint256)",
                                  "value": "amountRepaid"
                                },
                                "id": 4355,
                                "name": "Identifier",
                                "src": "1558:12:15"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 4350,
                                  "type": "bytes32",
                                  "value": "agreementId"
                                },
                                "id": 4356,
                                "name": "Identifier",
                                "src": "1571:11:15"
                              }
                            ],
                            "id": 4357,
                            "name": "IndexAccess",
                            "src": "1558:25:15"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 4352,
                              "type": "uint256",
                              "value": "amount"
                            },
                            "id": 4358,
                            "name": "Identifier",
                            "src": "1586:6:15"
                          }
                        ],
                        "id": 4359,
                        "name": "Assignment",
                        "src": "1558:34:15"
                      }
                    ],
                    "id": 4360,
                    "name": "ExpressionStatement",
                    "src": "1558:34:15"
                  }
                ],
                "id": 4361,
                "name": "Block",
                "src": "1548:51:15"
              }
            ],
            "id": 4362,
            "name": "FunctionDefinition",
            "src": "1456:143:15"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "setDummyCollateral",
              "payable": false,
              "scope": 4391,
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "agreementID",
                      "scope": 4390,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "bytes32",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bytes32",
                          "type": "bytes32"
                        },
                        "id": 4363,
                        "name": "ElementaryTypeName",
                        "src": "1642:7:15"
                      }
                    ],
                    "id": 4364,
                    "name": "VariableDeclaration",
                    "src": "1642:19:15"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "collateralizer",
                      "scope": 4390,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 4365,
                        "name": "ElementaryTypeName",
                        "src": "1671:7:15"
                      }
                    ],
                    "id": 4366,
                    "name": "VariableDeclaration",
                    "src": "1671:22:15"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "token",
                      "scope": 4390,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 4367,
                        "name": "ElementaryTypeName",
                        "src": "1703:7:15"
                      }
                    ],
                    "id": 4368,
                    "name": "VariableDeclaration",
                    "src": "1703:13:15"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "amount",
                      "scope": 4390,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint",
                          "type": "uint256"
                        },
                        "id": 4369,
                        "name": "ElementaryTypeName",
                        "src": "1726:4:15"
                      }
                    ],
                    "id": 4370,
                    "name": "VariableDeclaration",
                    "src": "1726:11:15"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "lockupPeriodEndTimestamp",
                      "scope": 4390,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint",
                          "type": "uint256"
                        },
                        "id": 4371,
                        "name": "ElementaryTypeName",
                        "src": "1747:4:15"
                      }
                    ],
                    "id": 4372,
                    "name": "VariableDeclaration",
                    "src": "1747:29:15"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "withdrawn",
                      "scope": 4390,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "bool",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bool",
                          "type": "bool"
                        },
                        "id": 4373,
                        "name": "ElementaryTypeName",
                        "src": "1786:4:15"
                      }
                    ],
                    "id": 4374,
                    "name": "VariableDeclaration",
                    "src": "1786:14:15"
                  }
                ],
                "id": 4375,
                "name": "ParameterList",
                "src": "1632:174:15"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 4376,
                "name": "ParameterList",
                "src": "1814:0:15"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "=",
                          "type": "struct Collateralized.Collateral storage ref"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": true,
                              "type": "struct Collateralized.Collateral storage ref"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 2293,
                                  "type": "mapping(bytes32 => struct Collateralized.Collateral storage ref)",
                                  "value": "collateralForAgreementID"
                                },
                                "id": 4377,
                                "name": "Identifier",
                                "src": "1824:24:15"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 4364,
                                  "type": "bytes32",
                                  "value": "agreementID"
                                },
                                "id": 4378,
                                "name": "Identifier",
                                "src": "1849:11:15"
                              }
                            ],
                            "id": 4379,
                            "name": "IndexAccess",
                            "src": "1824:37:15"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "isStructConstructorCall": true,
                              "lValueRequested": false,
                              "names": [
                                "collateralizer",
                                "token",
                                "amount",
                                "lockupPeriod",
                                "withdrawn"
                              ],
                              "type": "struct Collateralized.Collateral memory",
                              "type_conversion": false
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 2287,
                                  "type": "type(struct Collateralized.Collateral storage pointer)",
                                  "value": "Collateral"
                                },
                                "id": 4380,
                                "name": "Identifier",
                                "src": "1864:10:15"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 4366,
                                  "type": "address",
                                  "value": "collateralizer"
                                },
                                "id": 4381,
                                "name": "Identifier",
                                "src": "1905:14:15"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 4368,
                                  "type": "address",
                                  "value": "token"
                                },
                                "id": 4382,
                                "name": "Identifier",
                                "src": "1940:5:15"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 4370,
                                  "type": "uint256",
                                  "value": "amount"
                                },
                                "id": 4383,
                                "name": "Identifier",
                                "src": "1967:6:15"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 4372,
                                  "type": "uint256",
                                  "value": "lockupPeriodEndTimestamp"
                                },
                                "id": 4384,
                                "name": "Identifier",
                                "src": "2001:24:15"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 4374,
                                  "type": "bool",
                                  "value": "withdrawn"
                                },
                                "id": 4385,
                                "name": "Identifier",
                                "src": "2050:9:15"
                              }
                            ],
                            "id": 4386,
                            "name": "FunctionCall",
                            "src": "1864:206:15"
                          }
                        ],
                        "id": 4387,
                        "name": "Assignment",
                        "src": "1824:246:15"
                      }
                    ],
                    "id": 4388,
                    "name": "ExpressionStatement",
                    "src": "1824:246:15"
                  }
                ],
                "id": 4389,
                "name": "Block",
                "src": "1814:263:15"
              }
            ],
            "id": 4390,
            "name": "FunctionDefinition",
            "src": "1605:472:15"
          }
        ],
        "id": 4391,
        "name": "ContractDefinition",
        "src": "128:1952:15"
      }
    ],
    "id": 4392,
    "name": "SourceUnit",
    "src": "0:2081:15"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.18+commit.9cf6e910.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "1.0.1",
  "updatedAt": "2018-03-19T22:46:09.667Z"
}
