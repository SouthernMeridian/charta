export const Collateralized = 
{
  "contractName": "Collateralized",
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
  "bytecode": "0x",
  "deployedBytecode": "0x",
  "sourceMap": "",
  "deployedSourceMap": "",
  "source": "/*\n\n  Copyright 2017 Dharma Labs Inc.\n\n  Licensed under the Apache License, Version 2.0 (the \"License\");\n  you may not use this file except in compliance with the License.\n  You may obtain a copy of the License at\n\n    http://www.apache.org/licenses/LICENSE-2.0\n\n  Unless required by applicable law or agreed to in writing, software\n  distributed under the License is distributed on an \"AS IS\" BASIS,\n  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n  See the License for the specific language governing permissions and\n  limitations under the License.\n\n*/\n\npragma solidity 0.4.18;\n\nimport \"zeppelin-solidity/contracts/math/SafeMath.sol\";\nimport \"zeppelin-solidity/contracts/token/ERC20/ERC20.sol\";\n\nimport \"../TermsContract.sol\";\nimport \"../DebtRegistry.sol\";\n\n\ncontract Collateralized is TermsContract {\n    using SafeMath for uint;\n\n    struct Collateral {\n        address collateralizer;\n        address token;\n        uint amount;\n        uint lockupPeriod;\n        bool withdrawn;\n    }\n\n    DebtRegistry public debtRegistry;\n\n    mapping(bytes32 => Collateral) public collateralForAgreementID;\n\n    event CollateralLocked(\n        bytes32 indexed agreementID,\n        address token,\n        uint amount\n    );\n\n    event CollateralReturned(\n        bytes32 indexed agreementID,\n        address indexed collateralizer,\n        address token,\n        uint amount\n    );\n\n    event CollateralSeized(\n        bytes32 indexed agreementID,\n        address indexed beneficiary,\n        address token,\n        uint amount\n    );\n\n    function Collateralized(address _debtRegistry) public {\n        debtRegistry = DebtRegistry(_debtRegistry);\n    }\n\n    function collateralize(\n        bytes32 agreementID,\n        address token,\n        uint amount,\n        uint lockupPeriodEndTimestamp\n    )\n        public\n    {\n        // the amount being put up for collateral must exceed 0.\n        require(amount > 0);\n\n        // the lockup period must occur at some point in the future.\n        require(lockupPeriodEndTimestamp > block.timestamp);\n\n        /*\n        Ensure that the agreement has not already been collateralized.\n\n        If the agreement has already been collateralized, this check will fail\n        because any valid form of collateral will have a non-zero lockupPeriod.\n        Only an uncollateralized agreement would meet this requirement.\n        */\n        require(collateralForAgreementID[agreementID].lockupPeriod == 0);\n\n        ERC20 erc20token = ERC20(token);\n        address collateralizer = msg.sender;\n        address custodian = address(this);\n\n        /*\n        The collateralizer must have sufficient balance equal to or greater\n        than the amount being put up for collateral.\n        */\n        require(erc20token.balanceOf(collateralizer) >= amount);\n\n        /*\n        The custodian must have an allowance granted by the collateralizer equal\n        to or greater than the amount being put up for collateral.\n        */\n        require(erc20token.allowance(collateralizer, custodian) >= amount);\n\n        // the collateral must be successfully transferred to this contract.\n        require(erc20token.transferFrom(\n            collateralizer,\n            custodian,\n            amount\n        ));\n\n        // create collateral instance.\n        Collateral memory collateral = Collateral({\n            collateralizer: msg.sender,\n            token: token,\n            amount: amount,\n            lockupPeriod: lockupPeriodEndTimestamp,\n            withdrawn: false\n        });\n\n        // store collateral in mapping.\n        collateralForAgreementID[agreementID] = collateral;\n\n        // emit event that collateral has been secured.\n        CollateralLocked(agreementID, token, amount);\n    }\n\n    function returnCollateral(\n        bytes32 agreementID\n    )\n        public\n    {\n        // fetch relevant collateral instance.\n        Collateral memory collateral = collateralForAgreementID[agreementID];\n\n        // Ensure a valid form of collateral is tied to this agreement id.\n        require(collateral.lockupPeriod > 0);\n\n        // Collateral can only be returned after the lockup period.\n        require(block.timestamp > collateral.lockupPeriod);\n\n        // Collateral can only be returned if it has yet to be withdrawn.\n        require(!collateral.withdrawn);\n\n        // ensure sufficient payment.\n        require(\n            getExpectedRepaymentValue(agreementID, block.timestamp) <=\n            getValueRepaidToDate(agreementID)\n        );\n\n        // mark collateral as withdrawn.\n        collateralForAgreementID[agreementID].withdrawn = true;\n\n        // transfer the collateral this contract was holding in escrow back to sender.\n        require(\n            ERC20(collateral.token).transfer(\n                collateral.collateralizer,\n                collateral.amount\n            )\n        );\n\n        // log that the collateral has been succesfully returned to collateralizer.\n        CollateralReturned(\n            agreementID,\n            collateral.collateralizer,\n            collateral.token,\n            collateral.amount\n        );\n    }\n\n    function seizeCollateral(\n        bytes32 agreementID\n    )\n        public\n    {\n        // fetch relevant collateral instance.\n        Collateral memory collateral = collateralForAgreementID[agreementID];\n\n        // Ensure a valid form of collateral is tied to this agreement id.\n        require(collateral.lockupPeriod > 0);\n\n        // Seizure can only occur after the lockup period.\n        require(block.timestamp > collateral.lockupPeriod);\n\n        // Seizure can only occur if the collateral has yet to be withdrawn.\n        require(!collateral.withdrawn);\n\n        // ensure debtor is in violation of the terms.\n        require(\n            getExpectedRepaymentValue(agreementID, block.timestamp) >\n            getValueRepaidToDate(agreementID)\n        );\n\n        // mark collateral as withdrawn once transfer has succeeded.\n        collateralForAgreementID[agreementID].withdrawn = true;\n\n        // determine beneficiary of the seized collateral.\n        address beneficiary = debtRegistry.getBeneficiary(agreementID);\n\n        // seize collateral and transfer to beneficiary.\n        require(\n            ERC20(collateral.token).transfer(\n                beneficiary,\n                collateral.amount\n            )\n        );\n\n        // log the seizure event.\n        CollateralSeized(\n            agreementID,\n            beneficiary,\n            collateral.token,\n            collateral.amount\n        );\n    }\n}\n",
  "sourcePath": "/Users/nadavhollander/Documents/Dharma/Development/charta/contracts/examples/Collateralized.sol",
  "ast": {
    "attributes": {
      "absolutePath": "/Users/nadavhollander/Documents/Dharma/Development/charta/contracts/examples/Collateralized.sol",
      "exportedSymbols": {
        "Collateralized": [
          2591
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
        "id": 2267,
        "name": "PragmaDirective",
        "src": "584:23:7"
      },
      {
        "attributes": {
          "SourceUnit": 5333,
          "absolutePath": "zeppelin-solidity/contracts/math/SafeMath.sol",
          "file": "zeppelin-solidity/contracts/math/SafeMath.sol",
          "scope": 2592,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 2268,
        "name": "ImportDirective",
        "src": "609:55:7"
      },
      {
        "attributes": {
          "SourceUnit": 5432,
          "absolutePath": "zeppelin-solidity/contracts/token/ERC20/ERC20.sol",
          "file": "zeppelin-solidity/contracts/token/ERC20/ERC20.sol",
          "scope": 2592,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 2269,
        "name": "ImportDirective",
        "src": "665:59:7"
      },
      {
        "attributes": {
          "SourceUnit": 2093,
          "absolutePath": "/Users/nadavhollander/Documents/Dharma/Development/charta/contracts/TermsContract.sol",
          "file": "../TermsContract.sol",
          "scope": 2592,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 2270,
        "name": "ImportDirective",
        "src": "726:30:7"
      },
      {
        "attributes": {
          "SourceUnit": 1653,
          "absolutePath": "/Users/nadavhollander/Documents/Dharma/Development/charta/contracts/DebtRegistry.sol",
          "file": "../DebtRegistry.sol",
          "scope": 2592,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 2271,
        "name": "ImportDirective",
        "src": "757:29:7"
      },
      {
        "attributes": {
          "contractDependencies": [
            2092
          ],
          "contractKind": "contract",
          "documentation": null,
          "fullyImplemented": false,
          "linearizedBaseContracts": [
            2591,
            2092
          ],
          "name": "Collateralized",
          "scope": 2592
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
                  "name": "TermsContract",
                  "referencedDeclaration": 2092,
                  "type": "contract TermsContract"
                },
                "id": 2272,
                "name": "UserDefinedTypeName",
                "src": "816:13:7"
              }
            ],
            "id": 2273,
            "name": "InheritanceSpecifier",
            "src": "816:13:7"
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
                "id": 2274,
                "name": "UserDefinedTypeName",
                "src": "842:8:7"
              },
              {
                "attributes": {
                  "name": "uint",
                  "type": "uint256"
                },
                "id": 2275,
                "name": "ElementaryTypeName",
                "src": "855:4:7"
              }
            ],
            "id": 2276,
            "name": "UsingForDirective",
            "src": "836:24:7"
          },
          {
            "attributes": {
              "canonicalName": "Collateralized.Collateral",
              "name": "Collateral",
              "scope": 2591,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "constant": false,
                  "name": "collateralizer",
                  "scope": 2287,
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
                    "id": 2277,
                    "name": "ElementaryTypeName",
                    "src": "894:7:7"
                  }
                ],
                "id": 2278,
                "name": "VariableDeclaration",
                "src": "894:22:7"
              },
              {
                "attributes": {
                  "constant": false,
                  "name": "token",
                  "scope": 2287,
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
                    "id": 2279,
                    "name": "ElementaryTypeName",
                    "src": "926:7:7"
                  }
                ],
                "id": 2280,
                "name": "VariableDeclaration",
                "src": "926:13:7"
              },
              {
                "attributes": {
                  "constant": false,
                  "name": "amount",
                  "scope": 2287,
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
                    "id": 2281,
                    "name": "ElementaryTypeName",
                    "src": "949:4:7"
                  }
                ],
                "id": 2282,
                "name": "VariableDeclaration",
                "src": "949:11:7"
              },
              {
                "attributes": {
                  "constant": false,
                  "name": "lockupPeriod",
                  "scope": 2287,
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
                    "id": 2283,
                    "name": "ElementaryTypeName",
                    "src": "970:4:7"
                  }
                ],
                "id": 2284,
                "name": "VariableDeclaration",
                "src": "970:17:7"
              },
              {
                "attributes": {
                  "constant": false,
                  "name": "withdrawn",
                  "scope": 2287,
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
                    "id": 2285,
                    "name": "ElementaryTypeName",
                    "src": "997:4:7"
                  }
                ],
                "id": 2286,
                "name": "VariableDeclaration",
                "src": "997:14:7"
              }
            ],
            "id": 2287,
            "name": "StructDefinition",
            "src": "866:152:7"
          },
          {
            "attributes": {
              "constant": false,
              "name": "debtRegistry",
              "scope": 2591,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "contract DebtRegistry",
              "value": null,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "contractScope": null,
                  "name": "DebtRegistry",
                  "referencedDeclaration": 1652,
                  "type": "contract DebtRegistry"
                },
                "id": 2288,
                "name": "UserDefinedTypeName",
                "src": "1024:12:7"
              }
            ],
            "id": 2289,
            "name": "VariableDeclaration",
            "src": "1024:32:7"
          },
          {
            "attributes": {
              "constant": false,
              "name": "collateralForAgreementID",
              "scope": 2591,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "mapping(bytes32 => struct Collateralized.Collateral storage ref)",
              "value": null,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "type": "mapping(bytes32 => struct Collateralized.Collateral storage ref)"
                },
                "children": [
                  {
                    "attributes": {
                      "name": "bytes32",
                      "type": "bytes32"
                    },
                    "id": 2290,
                    "name": "ElementaryTypeName",
                    "src": "1071:7:7"
                  },
                  {
                    "attributes": {
                      "contractScope": null,
                      "name": "Collateral",
                      "referencedDeclaration": 2287,
                      "type": "struct Collateralized.Collateral storage pointer"
                    },
                    "id": 2291,
                    "name": "UserDefinedTypeName",
                    "src": "1082:10:7"
                  }
                ],
                "id": 2292,
                "name": "Mapping",
                "src": "1063:30:7"
              }
            ],
            "id": 2293,
            "name": "VariableDeclaration",
            "src": "1063:62:7"
          },
          {
            "attributes": {
              "anonymous": false,
              "name": "CollateralLocked"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": true,
                      "name": "agreementID",
                      "scope": 2301,
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
                        "id": 2294,
                        "name": "ElementaryTypeName",
                        "src": "1164:7:7"
                      }
                    ],
                    "id": 2295,
                    "name": "VariableDeclaration",
                    "src": "1164:27:7"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": false,
                      "name": "token",
                      "scope": 2301,
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
                        "id": 2296,
                        "name": "ElementaryTypeName",
                        "src": "1201:7:7"
                      }
                    ],
                    "id": 2297,
                    "name": "VariableDeclaration",
                    "src": "1201:13:7"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": false,
                      "name": "amount",
                      "scope": 2301,
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
                        "id": 2298,
                        "name": "ElementaryTypeName",
                        "src": "1224:4:7"
                      }
                    ],
                    "id": 2299,
                    "name": "VariableDeclaration",
                    "src": "1224:11:7"
                  }
                ],
                "id": 2300,
                "name": "ParameterList",
                "src": "1154:87:7"
              }
            ],
            "id": 2301,
            "name": "EventDefinition",
            "src": "1132:110:7"
          },
          {
            "attributes": {
              "anonymous": false,
              "name": "CollateralReturned"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": true,
                      "name": "agreementID",
                      "scope": 2311,
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
                        "id": 2302,
                        "name": "ElementaryTypeName",
                        "src": "1282:7:7"
                      }
                    ],
                    "id": 2303,
                    "name": "VariableDeclaration",
                    "src": "1282:27:7"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": true,
                      "name": "collateralizer",
                      "scope": 2311,
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
                        "id": 2304,
                        "name": "ElementaryTypeName",
                        "src": "1319:7:7"
                      }
                    ],
                    "id": 2305,
                    "name": "VariableDeclaration",
                    "src": "1319:30:7"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": false,
                      "name": "token",
                      "scope": 2311,
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
                        "id": 2306,
                        "name": "ElementaryTypeName",
                        "src": "1359:7:7"
                      }
                    ],
                    "id": 2307,
                    "name": "VariableDeclaration",
                    "src": "1359:13:7"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": false,
                      "name": "amount",
                      "scope": 2311,
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
                        "id": 2308,
                        "name": "ElementaryTypeName",
                        "src": "1382:4:7"
                      }
                    ],
                    "id": 2309,
                    "name": "VariableDeclaration",
                    "src": "1382:11:7"
                  }
                ],
                "id": 2310,
                "name": "ParameterList",
                "src": "1272:127:7"
              }
            ],
            "id": 2311,
            "name": "EventDefinition",
            "src": "1248:152:7"
          },
          {
            "attributes": {
              "anonymous": false,
              "name": "CollateralSeized"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": true,
                      "name": "agreementID",
                      "scope": 2321,
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
                        "id": 2312,
                        "name": "ElementaryTypeName",
                        "src": "1438:7:7"
                      }
                    ],
                    "id": 2313,
                    "name": "VariableDeclaration",
                    "src": "1438:27:7"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": true,
                      "name": "beneficiary",
                      "scope": 2321,
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
                        "id": 2314,
                        "name": "ElementaryTypeName",
                        "src": "1475:7:7"
                      }
                    ],
                    "id": 2315,
                    "name": "VariableDeclaration",
                    "src": "1475:27:7"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": false,
                      "name": "token",
                      "scope": 2321,
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
                        "id": 2316,
                        "name": "ElementaryTypeName",
                        "src": "1512:7:7"
                      }
                    ],
                    "id": 2317,
                    "name": "VariableDeclaration",
                    "src": "1512:13:7"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": false,
                      "name": "amount",
                      "scope": 2321,
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
                        "id": 2318,
                        "name": "ElementaryTypeName",
                        "src": "1535:4:7"
                      }
                    ],
                    "id": 2319,
                    "name": "VariableDeclaration",
                    "src": "1535:11:7"
                  }
                ],
                "id": 2320,
                "name": "ParameterList",
                "src": "1428:124:7"
              }
            ],
            "id": 2321,
            "name": "EventDefinition",
            "src": "1406:147:7"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": true,
              "modifiers": [
                null
              ],
              "name": "Collateralized",
              "payable": false,
              "scope": 2591,
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
                      "scope": 2333,
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
                        "id": 2322,
                        "name": "ElementaryTypeName",
                        "src": "1583:7:7"
                      }
                    ],
                    "id": 2323,
                    "name": "VariableDeclaration",
                    "src": "1583:21:7"
                  }
                ],
                "id": 2324,
                "name": "ParameterList",
                "src": "1582:23:7"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 2325,
                "name": "ParameterList",
                "src": "1613:0:7"
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
                          "type": "contract DebtRegistry"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2289,
                              "type": "contract DebtRegistry",
                              "value": "debtRegistry"
                            },
                            "id": 2326,
                            "name": "Identifier",
                            "src": "1623:12:7"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "isStructConstructorCall": false,
                              "lValueRequested": false,
                              "names": [
                                null
                              ],
                              "type": "contract DebtRegistry",
                              "type_conversion": true
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  ],
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 1652,
                                  "type": "type(contract DebtRegistry)",
                                  "value": "DebtRegistry"
                                },
                                "id": 2327,
                                "name": "Identifier",
                                "src": "1638:12:7"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 2323,
                                  "type": "address",
                                  "value": "_debtRegistry"
                                },
                                "id": 2328,
                                "name": "Identifier",
                                "src": "1651:13:7"
                              }
                            ],
                            "id": 2329,
                            "name": "FunctionCall",
                            "src": "1638:27:7"
                          }
                        ],
                        "id": 2330,
                        "name": "Assignment",
                        "src": "1623:42:7"
                      }
                    ],
                    "id": 2331,
                    "name": "ExpressionStatement",
                    "src": "1623:42:7"
                  }
                ],
                "id": 2332,
                "name": "Block",
                "src": "1613:59:7"
              }
            ],
            "id": 2333,
            "name": "FunctionDefinition",
            "src": "1559:113:7"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "collateralize",
              "payable": false,
              "scope": 2591,
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
                      "scope": 2435,
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
                        "id": 2334,
                        "name": "ElementaryTypeName",
                        "src": "1710:7:7"
                      }
                    ],
                    "id": 2335,
                    "name": "VariableDeclaration",
                    "src": "1710:19:7"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "token",
                      "scope": 2435,
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
                        "id": 2336,
                        "name": "ElementaryTypeName",
                        "src": "1739:7:7"
                      }
                    ],
                    "id": 2337,
                    "name": "VariableDeclaration",
                    "src": "1739:13:7"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "amount",
                      "scope": 2435,
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
                        "id": 2338,
                        "name": "ElementaryTypeName",
                        "src": "1762:4:7"
                      }
                    ],
                    "id": 2339,
                    "name": "VariableDeclaration",
                    "src": "1762:11:7"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "lockupPeriodEndTimestamp",
                      "scope": 2435,
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
                        "id": 2340,
                        "name": "ElementaryTypeName",
                        "src": "1783:4:7"
                      }
                    ],
                    "id": 2341,
                    "name": "VariableDeclaration",
                    "src": "1783:29:7"
                  }
                ],
                "id": 2342,
                "name": "ParameterList",
                "src": "1700:118:7"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 2343,
                "name": "ParameterList",
                "src": "1838:0:7"
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
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 5478,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 2344,
                            "name": "Identifier",
                            "src": "1913:7:7"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": ">",
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 2339,
                                  "type": "uint256",
                                  "value": "amount"
                                },
                                "id": 2345,
                                "name": "Identifier",
                                "src": "1921:6:7"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "hexvalue": "30",
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "subdenomination": null,
                                  "token": "number",
                                  "type": "int_const 0",
                                  "value": "0"
                                },
                                "id": 2346,
                                "name": "Literal",
                                "src": "1930:1:7"
                              }
                            ],
                            "id": 2347,
                            "name": "BinaryOperation",
                            "src": "1921:10:7"
                          }
                        ],
                        "id": 2348,
                        "name": "FunctionCall",
                        "src": "1913:19:7"
                      }
                    ],
                    "id": 2349,
                    "name": "ExpressionStatement",
                    "src": "1913:19:7"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 5478,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 2350,
                            "name": "Identifier",
                            "src": "2012:7:7"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": ">",
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 2341,
                                  "type": "uint256",
                                  "value": "lockupPeriodEndTimestamp"
                                },
                                "id": 2351,
                                "name": "Identifier",
                                "src": "2020:24:7"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "timestamp",
                                  "referencedDeclaration": null,
                                  "type": "uint256"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 5467,
                                      "type": "block",
                                      "value": "block"
                                    },
                                    "id": 2352,
                                    "name": "Identifier",
                                    "src": "2047:5:7"
                                  }
                                ],
                                "id": 2353,
                                "name": "MemberAccess",
                                "src": "2047:15:7"
                              }
                            ],
                            "id": 2354,
                            "name": "BinaryOperation",
                            "src": "2020:42:7"
                          }
                        ],
                        "id": 2355,
                        "name": "FunctionCall",
                        "src": "2012:51:7"
                      }
                    ],
                    "id": 2356,
                    "name": "ExpressionStatement",
                    "src": "2012:51:7"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 5478,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 2357,
                            "name": "Identifier",
                            "src": "2399:7:7"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": "==",
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "lockupPeriod",
                                  "referencedDeclaration": 2284,
                                  "type": "uint256"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": true,
                                      "isPure": false,
                                      "lValueRequested": false,
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
                                        "id": 2358,
                                        "name": "Identifier",
                                        "src": "2407:24:7"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 2335,
                                          "type": "bytes32",
                                          "value": "agreementID"
                                        },
                                        "id": 2359,
                                        "name": "Identifier",
                                        "src": "2432:11:7"
                                      }
                                    ],
                                    "id": 2360,
                                    "name": "IndexAccess",
                                    "src": "2407:37:7"
                                  }
                                ],
                                "id": 2361,
                                "name": "MemberAccess",
                                "src": "2407:50:7"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "hexvalue": "30",
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "subdenomination": null,
                                  "token": "number",
                                  "type": "int_const 0",
                                  "value": "0"
                                },
                                "id": 2362,
                                "name": "Literal",
                                "src": "2461:1:7"
                              }
                            ],
                            "id": 2363,
                            "name": "BinaryOperation",
                            "src": "2407:55:7"
                          }
                        ],
                        "id": 2364,
                        "name": "FunctionCall",
                        "src": "2399:64:7"
                      }
                    ],
                    "id": 2365,
                    "name": "ExpressionStatement",
                    "src": "2399:64:7"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        2367
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "erc20token",
                          "scope": 2435,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "contract ERC20",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "contractScope": null,
                              "name": "ERC20",
                              "referencedDeclaration": 5431,
                              "type": "contract ERC20"
                            },
                            "id": 2366,
                            "name": "UserDefinedTypeName",
                            "src": "2474:5:7"
                          }
                        ],
                        "id": 2367,
                        "name": "VariableDeclaration",
                        "src": "2474:16:7"
                      },
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "contract ERC20",
                          "type_conversion": true
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 5431,
                              "type": "type(contract ERC20)",
                              "value": "ERC20"
                            },
                            "id": 2368,
                            "name": "Identifier",
                            "src": "2493:5:7"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2337,
                              "type": "address",
                              "value": "token"
                            },
                            "id": 2369,
                            "name": "Identifier",
                            "src": "2499:5:7"
                          }
                        ],
                        "id": 2370,
                        "name": "FunctionCall",
                        "src": "2493:12:7"
                      }
                    ],
                    "id": 2371,
                    "name": "VariableDeclarationStatement",
                    "src": "2474:31:7"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        2373
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "collateralizer",
                          "scope": 2435,
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
                            "id": 2372,
                            "name": "ElementaryTypeName",
                            "src": "2515:7:7"
                          }
                        ],
                        "id": 2373,
                        "name": "VariableDeclaration",
                        "src": "2515:22:7"
                      },
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "member_name": "sender",
                          "referencedDeclaration": null,
                          "type": "address"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 5475,
                              "type": "msg",
                              "value": "msg"
                            },
                            "id": 2374,
                            "name": "Identifier",
                            "src": "2540:3:7"
                          }
                        ],
                        "id": 2375,
                        "name": "MemberAccess",
                        "src": "2540:10:7"
                      }
                    ],
                    "id": 2376,
                    "name": "VariableDeclarationStatement",
                    "src": "2515:35:7"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        2378
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "custodian",
                          "scope": 2435,
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
                            "id": 2377,
                            "name": "ElementaryTypeName",
                            "src": "2560:7:7"
                          }
                        ],
                        "id": 2378,
                        "name": "VariableDeclaration",
                        "src": "2560:17:7"
                      },
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "address",
                          "type_conversion": true
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_contract$_Collateralized_$2591",
                                  "typeString": "contract Collateralized"
                                }
                              ],
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "type": "type(address)",
                              "value": "address"
                            },
                            "id": 2379,
                            "name": "ElementaryTypeNameExpression",
                            "src": "2580:7:7"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 5520,
                              "type": "contract Collateralized",
                              "value": "this"
                            },
                            "id": 2380,
                            "name": "Identifier",
                            "src": "2588:4:7"
                          }
                        ],
                        "id": 2381,
                        "name": "FunctionCall",
                        "src": "2580:13:7"
                      }
                    ],
                    "id": 2382,
                    "name": "VariableDeclarationStatement",
                    "src": "2560:33:7"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 5478,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 2383,
                            "name": "Identifier",
                            "src": "2755:7:7"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": ">=",
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "isStructConstructorCall": false,
                                  "lValueRequested": false,
                                  "names": [
                                    null
                                  ],
                                  "type": "uint256",
                                  "type_conversion": false
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": [
                                        {
                                          "typeIdentifier": "t_address",
                                          "typeString": "address"
                                        }
                                      ],
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "member_name": "balanceOf",
                                      "referencedDeclaration": 5445,
                                      "type": "function (address) view external returns (uint256)"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 2367,
                                          "type": "contract ERC20",
                                          "value": "erc20token"
                                        },
                                        "id": 2384,
                                        "name": "Identifier",
                                        "src": "2763:10:7"
                                      }
                                    ],
                                    "id": 2385,
                                    "name": "MemberAccess",
                                    "src": "2763:20:7"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 2373,
                                      "type": "address",
                                      "value": "collateralizer"
                                    },
                                    "id": 2386,
                                    "name": "Identifier",
                                    "src": "2784:14:7"
                                  }
                                ],
                                "id": 2387,
                                "name": "FunctionCall",
                                "src": "2763:36:7"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 2339,
                                  "type": "uint256",
                                  "value": "amount"
                                },
                                "id": 2388,
                                "name": "Identifier",
                                "src": "2803:6:7"
                              }
                            ],
                            "id": 2389,
                            "name": "BinaryOperation",
                            "src": "2763:46:7"
                          }
                        ],
                        "id": 2390,
                        "name": "FunctionCall",
                        "src": "2755:55:7"
                      }
                    ],
                    "id": 2391,
                    "name": "ExpressionStatement",
                    "src": "2755:55:7"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 5478,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 2392,
                            "name": "Identifier",
                            "src": "2991:7:7"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": ">=",
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "isStructConstructorCall": false,
                                  "lValueRequested": false,
                                  "names": [
                                    null
                                  ],
                                  "type": "uint256",
                                  "type_conversion": false
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": [
                                        {
                                          "typeIdentifier": "t_address",
                                          "typeString": "address"
                                        },
                                        {
                                          "typeIdentifier": "t_address",
                                          "typeString": "address"
                                        }
                                      ],
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "member_name": "allowance",
                                      "referencedDeclaration": 5402,
                                      "type": "function (address,address) view external returns (uint256)"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 2367,
                                          "type": "contract ERC20",
                                          "value": "erc20token"
                                        },
                                        "id": 2393,
                                        "name": "Identifier",
                                        "src": "2999:10:7"
                                      }
                                    ],
                                    "id": 2394,
                                    "name": "MemberAccess",
                                    "src": "2999:20:7"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 2373,
                                      "type": "address",
                                      "value": "collateralizer"
                                    },
                                    "id": 2395,
                                    "name": "Identifier",
                                    "src": "3020:14:7"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 2378,
                                      "type": "address",
                                      "value": "custodian"
                                    },
                                    "id": 2396,
                                    "name": "Identifier",
                                    "src": "3036:9:7"
                                  }
                                ],
                                "id": 2397,
                                "name": "FunctionCall",
                                "src": "2999:47:7"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 2339,
                                  "type": "uint256",
                                  "value": "amount"
                                },
                                "id": 2398,
                                "name": "Identifier",
                                "src": "3050:6:7"
                              }
                            ],
                            "id": 2399,
                            "name": "BinaryOperation",
                            "src": "2999:57:7"
                          }
                        ],
                        "id": 2400,
                        "name": "FunctionCall",
                        "src": "2991:66:7"
                      }
                    ],
                    "id": 2401,
                    "name": "ExpressionStatement",
                    "src": "2991:66:7"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 5478,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 2402,
                            "name": "Identifier",
                            "src": "3145:7:7"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "isStructConstructorCall": false,
                              "lValueRequested": false,
                              "names": [
                                null
                              ],
                              "type": "bool",
                              "type_conversion": false
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    },
                                    {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    },
                                    {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  ],
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "transferFrom",
                                  "referencedDeclaration": 5413,
                                  "type": "function (address,address,uint256) external returns (bool)"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 2367,
                                      "type": "contract ERC20",
                                      "value": "erc20token"
                                    },
                                    "id": 2403,
                                    "name": "Identifier",
                                    "src": "3153:10:7"
                                  }
                                ],
                                "id": 2404,
                                "name": "MemberAccess",
                                "src": "3153:23:7"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 2373,
                                  "type": "address",
                                  "value": "collateralizer"
                                },
                                "id": 2405,
                                "name": "Identifier",
                                "src": "3190:14:7"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 2378,
                                  "type": "address",
                                  "value": "custodian"
                                },
                                "id": 2406,
                                "name": "Identifier",
                                "src": "3218:9:7"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 2339,
                                  "type": "uint256",
                                  "value": "amount"
                                },
                                "id": 2407,
                                "name": "Identifier",
                                "src": "3241:6:7"
                              }
                            ],
                            "id": 2408,
                            "name": "FunctionCall",
                            "src": "3153:104:7"
                          }
                        ],
                        "id": 2409,
                        "name": "FunctionCall",
                        "src": "3145:113:7"
                      }
                    ],
                    "id": 2410,
                    "name": "ExpressionStatement",
                    "src": "3145:113:7"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        2412
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "collateral",
                          "scope": 2435,
                          "stateVariable": false,
                          "storageLocation": "memory",
                          "type": "struct Collateralized.Collateral memory",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "contractScope": null,
                              "name": "Collateral",
                              "referencedDeclaration": 2287,
                              "type": "struct Collateralized.Collateral storage pointer"
                            },
                            "id": 2411,
                            "name": "UserDefinedTypeName",
                            "src": "3308:10:7"
                          }
                        ],
                        "id": 2412,
                        "name": "VariableDeclaration",
                        "src": "3308:28:7"
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
                            "id": 2413,
                            "name": "Identifier",
                            "src": "3339:10:7"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "sender",
                              "referencedDeclaration": null,
                              "type": "address"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 5475,
                                  "type": "msg",
                                  "value": "msg"
                                },
                                "id": 2414,
                                "name": "Identifier",
                                "src": "3380:3:7"
                              }
                            ],
                            "id": 2415,
                            "name": "MemberAccess",
                            "src": "3380:10:7"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2337,
                              "type": "address",
                              "value": "token"
                            },
                            "id": 2416,
                            "name": "Identifier",
                            "src": "3411:5:7"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2339,
                              "type": "uint256",
                              "value": "amount"
                            },
                            "id": 2417,
                            "name": "Identifier",
                            "src": "3438:6:7"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2341,
                              "type": "uint256",
                              "value": "lockupPeriodEndTimestamp"
                            },
                            "id": 2418,
                            "name": "Identifier",
                            "src": "3472:24:7"
                          },
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
                            "id": 2419,
                            "name": "Literal",
                            "src": "3521:5:7"
                          }
                        ],
                        "id": 2420,
                        "name": "FunctionCall",
                        "src": "3339:198:7"
                      }
                    ],
                    "id": 2421,
                    "name": "VariableDeclarationStatement",
                    "src": "3308:229:7"
                  },
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
                                "id": 2422,
                                "name": "Identifier",
                                "src": "3588:24:7"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 2335,
                                  "type": "bytes32",
                                  "value": "agreementID"
                                },
                                "id": 2423,
                                "name": "Identifier",
                                "src": "3613:11:7"
                              }
                            ],
                            "id": 2424,
                            "name": "IndexAccess",
                            "src": "3588:37:7"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2412,
                              "type": "struct Collateralized.Collateral memory",
                              "value": "collateral"
                            },
                            "id": 2425,
                            "name": "Identifier",
                            "src": "3628:10:7"
                          }
                        ],
                        "id": 2426,
                        "name": "Assignment",
                        "src": "3588:50:7"
                      }
                    ],
                    "id": 2427,
                    "name": "ExpressionStatement",
                    "src": "3588:50:7"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bytes32",
                                  "typeString": "bytes32"
                                },
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2301,
                              "type": "function (bytes32,address,uint256)",
                              "value": "CollateralLocked"
                            },
                            "id": 2428,
                            "name": "Identifier",
                            "src": "3705:16:7"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2335,
                              "type": "bytes32",
                              "value": "agreementID"
                            },
                            "id": 2429,
                            "name": "Identifier",
                            "src": "3722:11:7"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2337,
                              "type": "address",
                              "value": "token"
                            },
                            "id": 2430,
                            "name": "Identifier",
                            "src": "3735:5:7"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2339,
                              "type": "uint256",
                              "value": "amount"
                            },
                            "id": 2431,
                            "name": "Identifier",
                            "src": "3742:6:7"
                          }
                        ],
                        "id": 2432,
                        "name": "FunctionCall",
                        "src": "3705:44:7"
                      }
                    ],
                    "id": 2433,
                    "name": "ExpressionStatement",
                    "src": "3705:44:7"
                  }
                ],
                "id": 2434,
                "name": "Block",
                "src": "1838:1918:7"
              }
            ],
            "id": 2435,
            "name": "FunctionDefinition",
            "src": "1678:2078:7"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "returnCollateral",
              "payable": false,
              "scope": 2591,
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
                      "scope": 2510,
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
                        "id": 2436,
                        "name": "ElementaryTypeName",
                        "src": "3797:7:7"
                      }
                    ],
                    "id": 2437,
                    "name": "VariableDeclaration",
                    "src": "3797:19:7"
                  }
                ],
                "id": 2438,
                "name": "ParameterList",
                "src": "3787:35:7"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 2439,
                "name": "ParameterList",
                "src": "3842:0:7"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "assignments": [
                        2441
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "collateral",
                          "scope": 2510,
                          "stateVariable": false,
                          "storageLocation": "memory",
                          "type": "struct Collateralized.Collateral memory",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "contractScope": null,
                              "name": "Collateral",
                              "referencedDeclaration": 2287,
                              "type": "struct Collateralized.Collateral storage pointer"
                            },
                            "id": 2440,
                            "name": "UserDefinedTypeName",
                            "src": "3899:10:7"
                          }
                        ],
                        "id": 2441,
                        "name": "VariableDeclaration",
                        "src": "3899:28:7"
                      },
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
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
                            "id": 2442,
                            "name": "Identifier",
                            "src": "3930:24:7"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2437,
                              "type": "bytes32",
                              "value": "agreementID"
                            },
                            "id": 2443,
                            "name": "Identifier",
                            "src": "3955:11:7"
                          }
                        ],
                        "id": 2444,
                        "name": "IndexAccess",
                        "src": "3930:37:7"
                      }
                    ],
                    "id": 2445,
                    "name": "VariableDeclarationStatement",
                    "src": "3899:68:7"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 5478,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 2446,
                            "name": "Identifier",
                            "src": "4053:7:7"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": ">",
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "lockupPeriod",
                                  "referencedDeclaration": 2284,
                                  "type": "uint256"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 2441,
                                      "type": "struct Collateralized.Collateral memory",
                                      "value": "collateral"
                                    },
                                    "id": 2447,
                                    "name": "Identifier",
                                    "src": "4061:10:7"
                                  }
                                ],
                                "id": 2448,
                                "name": "MemberAccess",
                                "src": "4061:23:7"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "hexvalue": "30",
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "subdenomination": null,
                                  "token": "number",
                                  "type": "int_const 0",
                                  "value": "0"
                                },
                                "id": 2449,
                                "name": "Literal",
                                "src": "4087:1:7"
                              }
                            ],
                            "id": 2450,
                            "name": "BinaryOperation",
                            "src": "4061:27:7"
                          }
                        ],
                        "id": 2451,
                        "name": "FunctionCall",
                        "src": "4053:36:7"
                      }
                    ],
                    "id": 2452,
                    "name": "ExpressionStatement",
                    "src": "4053:36:7"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 5478,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 2453,
                            "name": "Identifier",
                            "src": "4168:7:7"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": ">",
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "timestamp",
                                  "referencedDeclaration": null,
                                  "type": "uint256"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 5467,
                                      "type": "block",
                                      "value": "block"
                                    },
                                    "id": 2454,
                                    "name": "Identifier",
                                    "src": "4176:5:7"
                                  }
                                ],
                                "id": 2455,
                                "name": "MemberAccess",
                                "src": "4176:15:7"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "lockupPeriod",
                                  "referencedDeclaration": 2284,
                                  "type": "uint256"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 2441,
                                      "type": "struct Collateralized.Collateral memory",
                                      "value": "collateral"
                                    },
                                    "id": 2456,
                                    "name": "Identifier",
                                    "src": "4194:10:7"
                                  }
                                ],
                                "id": 2457,
                                "name": "MemberAccess",
                                "src": "4194:23:7"
                              }
                            ],
                            "id": 2458,
                            "name": "BinaryOperation",
                            "src": "4176:41:7"
                          }
                        ],
                        "id": 2459,
                        "name": "FunctionCall",
                        "src": "4168:50:7"
                      }
                    ],
                    "id": 2460,
                    "name": "ExpressionStatement",
                    "src": "4168:50:7"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 5478,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 2461,
                            "name": "Identifier",
                            "src": "4303:7:7"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": "!",
                              "prefix": true,
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "withdrawn",
                                  "referencedDeclaration": 2286,
                                  "type": "bool"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 2441,
                                      "type": "struct Collateralized.Collateral memory",
                                      "value": "collateral"
                                    },
                                    "id": 2462,
                                    "name": "Identifier",
                                    "src": "4312:10:7"
                                  }
                                ],
                                "id": 2463,
                                "name": "MemberAccess",
                                "src": "4312:20:7"
                              }
                            ],
                            "id": 2464,
                            "name": "UnaryOperation",
                            "src": "4311:21:7"
                          }
                        ],
                        "id": 2465,
                        "name": "FunctionCall",
                        "src": "4303:30:7"
                      }
                    ],
                    "id": 2466,
                    "name": "ExpressionStatement",
                    "src": "4303:30:7"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 5478,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 2467,
                            "name": "Identifier",
                            "src": "4382:7:7"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": "<=",
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "isStructConstructorCall": false,
                                  "lValueRequested": false,
                                  "names": [
                                    null
                                  ],
                                  "type": "uint256",
                                  "type_conversion": false
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": [
                                        {
                                          "typeIdentifier": "t_bytes32",
                                          "typeString": "bytes32"
                                        },
                                        {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        }
                                      ],
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 2084,
                                      "type": "function (bytes32,uint256) view returns (uint256)",
                                      "value": "getExpectedRepaymentValue"
                                    },
                                    "id": 2468,
                                    "name": "Identifier",
                                    "src": "4403:25:7"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 2437,
                                      "type": "bytes32",
                                      "value": "agreementID"
                                    },
                                    "id": 2469,
                                    "name": "Identifier",
                                    "src": "4429:11:7"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "member_name": "timestamp",
                                      "referencedDeclaration": null,
                                      "type": "uint256"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 5467,
                                          "type": "block",
                                          "value": "block"
                                        },
                                        "id": 2470,
                                        "name": "Identifier",
                                        "src": "4442:5:7"
                                      }
                                    ],
                                    "id": 2471,
                                    "name": "MemberAccess",
                                    "src": "4442:15:7"
                                  }
                                ],
                                "id": 2472,
                                "name": "FunctionCall",
                                "src": "4403:55:7"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "isStructConstructorCall": false,
                                  "lValueRequested": false,
                                  "names": [
                                    null
                                  ],
                                  "type": "uint256",
                                  "type_conversion": false
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": [
                                        {
                                          "typeIdentifier": "t_bytes32",
                                          "typeString": "bytes32"
                                        }
                                      ],
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 2091,
                                      "type": "function (bytes32) view returns (uint256)",
                                      "value": "getValueRepaidToDate"
                                    },
                                    "id": 2473,
                                    "name": "Identifier",
                                    "src": "4474:20:7"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 2437,
                                      "type": "bytes32",
                                      "value": "agreementID"
                                    },
                                    "id": 2474,
                                    "name": "Identifier",
                                    "src": "4495:11:7"
                                  }
                                ],
                                "id": 2475,
                                "name": "FunctionCall",
                                "src": "4474:33:7"
                              }
                            ],
                            "id": 2476,
                            "name": "BinaryOperation",
                            "src": "4403:104:7"
                          }
                        ],
                        "id": 2477,
                        "name": "FunctionCall",
                        "src": "4382:135:7"
                      }
                    ],
                    "id": 2478,
                    "name": "ExpressionStatement",
                    "src": "4382:135:7"
                  },
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
                          "type": "bool"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": true,
                              "member_name": "withdrawn",
                              "referencedDeclaration": 2286,
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
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
                                    "id": 2479,
                                    "name": "Identifier",
                                    "src": "4569:24:7"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 2437,
                                      "type": "bytes32",
                                      "value": "agreementID"
                                    },
                                    "id": 2480,
                                    "name": "Identifier",
                                    "src": "4594:11:7"
                                  }
                                ],
                                "id": 2481,
                                "name": "IndexAccess",
                                "src": "4569:37:7"
                              }
                            ],
                            "id": 2482,
                            "name": "MemberAccess",
                            "src": "4569:47:7"
                          },
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
                            "id": 2483,
                            "name": "Literal",
                            "src": "4619:4:7"
                          }
                        ],
                        "id": 2484,
                        "name": "Assignment",
                        "src": "4569:54:7"
                      }
                    ],
                    "id": 2485,
                    "name": "ExpressionStatement",
                    "src": "4569:54:7"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 5478,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 2486,
                            "name": "Identifier",
                            "src": "4721:7:7"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "isStructConstructorCall": false,
                              "lValueRequested": false,
                              "names": [
                                null
                              ],
                              "type": "bool",
                              "type_conversion": false
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    },
                                    {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  ],
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "transfer",
                                  "referencedDeclaration": 5454,
                                  "type": "function (address,uint256) external returns (bool)"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "isStructConstructorCall": false,
                                      "lValueRequested": false,
                                      "names": [
                                        null
                                      ],
                                      "type": "contract ERC20",
                                      "type_conversion": true
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": [
                                            {
                                              "typeIdentifier": "t_address",
                                              "typeString": "address"
                                            }
                                          ],
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 5431,
                                          "type": "type(contract ERC20)",
                                          "value": "ERC20"
                                        },
                                        "id": 2487,
                                        "name": "Identifier",
                                        "src": "4742:5:7"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "isConstant": false,
                                          "isLValue": true,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "member_name": "token",
                                          "referencedDeclaration": 2280,
                                          "type": "address"
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 2441,
                                              "type": "struct Collateralized.Collateral memory",
                                              "value": "collateral"
                                            },
                                            "id": 2488,
                                            "name": "Identifier",
                                            "src": "4748:10:7"
                                          }
                                        ],
                                        "id": 2489,
                                        "name": "MemberAccess",
                                        "src": "4748:16:7"
                                      }
                                    ],
                                    "id": 2490,
                                    "name": "FunctionCall",
                                    "src": "4742:23:7"
                                  }
                                ],
                                "id": 2491,
                                "name": "MemberAccess",
                                "src": "4742:32:7"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "collateralizer",
                                  "referencedDeclaration": 2278,
                                  "type": "address"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 2441,
                                      "type": "struct Collateralized.Collateral memory",
                                      "value": "collateral"
                                    },
                                    "id": 2492,
                                    "name": "Identifier",
                                    "src": "4792:10:7"
                                  }
                                ],
                                "id": 2493,
                                "name": "MemberAccess",
                                "src": "4792:25:7"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "amount",
                                  "referencedDeclaration": 2282,
                                  "type": "uint256"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 2441,
                                      "type": "struct Collateralized.Collateral memory",
                                      "value": "collateral"
                                    },
                                    "id": 2494,
                                    "name": "Identifier",
                                    "src": "4835:10:7"
                                  }
                                ],
                                "id": 2495,
                                "name": "MemberAccess",
                                "src": "4835:17:7"
                              }
                            ],
                            "id": 2496,
                            "name": "FunctionCall",
                            "src": "4742:124:7"
                          }
                        ],
                        "id": 2497,
                        "name": "FunctionCall",
                        "src": "4721:155:7"
                      }
                    ],
                    "id": 2498,
                    "name": "ExpressionStatement",
                    "src": "4721:155:7"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bytes32",
                                  "typeString": "bytes32"
                                },
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2311,
                              "type": "function (bytes32,address,address,uint256)",
                              "value": "CollateralReturned"
                            },
                            "id": 2499,
                            "name": "Identifier",
                            "src": "4971:18:7"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2437,
                              "type": "bytes32",
                              "value": "agreementID"
                            },
                            "id": 2500,
                            "name": "Identifier",
                            "src": "5003:11:7"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "collateralizer",
                              "referencedDeclaration": 2278,
                              "type": "address"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 2441,
                                  "type": "struct Collateralized.Collateral memory",
                                  "value": "collateral"
                                },
                                "id": 2501,
                                "name": "Identifier",
                                "src": "5028:10:7"
                              }
                            ],
                            "id": 2502,
                            "name": "MemberAccess",
                            "src": "5028:25:7"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "token",
                              "referencedDeclaration": 2280,
                              "type": "address"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 2441,
                                  "type": "struct Collateralized.Collateral memory",
                                  "value": "collateral"
                                },
                                "id": 2503,
                                "name": "Identifier",
                                "src": "5067:10:7"
                              }
                            ],
                            "id": 2504,
                            "name": "MemberAccess",
                            "src": "5067:16:7"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "amount",
                              "referencedDeclaration": 2282,
                              "type": "uint256"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 2441,
                                  "type": "struct Collateralized.Collateral memory",
                                  "value": "collateral"
                                },
                                "id": 2505,
                                "name": "Identifier",
                                "src": "5097:10:7"
                              }
                            ],
                            "id": 2506,
                            "name": "MemberAccess",
                            "src": "5097:17:7"
                          }
                        ],
                        "id": 2507,
                        "name": "FunctionCall",
                        "src": "4971:153:7"
                      }
                    ],
                    "id": 2508,
                    "name": "ExpressionStatement",
                    "src": "4971:153:7"
                  }
                ],
                "id": 2509,
                "name": "Block",
                "src": "3842:1289:7"
              }
            ],
            "id": 2510,
            "name": "FunctionDefinition",
            "src": "3762:1369:7"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "seizeCollateral",
              "payable": false,
              "scope": 2591,
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
                      "scope": 2590,
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
                        "id": 2511,
                        "name": "ElementaryTypeName",
                        "src": "5171:7:7"
                      }
                    ],
                    "id": 2512,
                    "name": "VariableDeclaration",
                    "src": "5171:19:7"
                  }
                ],
                "id": 2513,
                "name": "ParameterList",
                "src": "5161:35:7"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 2514,
                "name": "ParameterList",
                "src": "5216:0:7"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "assignments": [
                        2516
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "collateral",
                          "scope": 2590,
                          "stateVariable": false,
                          "storageLocation": "memory",
                          "type": "struct Collateralized.Collateral memory",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "contractScope": null,
                              "name": "Collateral",
                              "referencedDeclaration": 2287,
                              "type": "struct Collateralized.Collateral storage pointer"
                            },
                            "id": 2515,
                            "name": "UserDefinedTypeName",
                            "src": "5273:10:7"
                          }
                        ],
                        "id": 2516,
                        "name": "VariableDeclaration",
                        "src": "5273:28:7"
                      },
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
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
                            "id": 2517,
                            "name": "Identifier",
                            "src": "5304:24:7"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2512,
                              "type": "bytes32",
                              "value": "agreementID"
                            },
                            "id": 2518,
                            "name": "Identifier",
                            "src": "5329:11:7"
                          }
                        ],
                        "id": 2519,
                        "name": "IndexAccess",
                        "src": "5304:37:7"
                      }
                    ],
                    "id": 2520,
                    "name": "VariableDeclarationStatement",
                    "src": "5273:68:7"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 5478,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 2521,
                            "name": "Identifier",
                            "src": "5427:7:7"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": ">",
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "lockupPeriod",
                                  "referencedDeclaration": 2284,
                                  "type": "uint256"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 2516,
                                      "type": "struct Collateralized.Collateral memory",
                                      "value": "collateral"
                                    },
                                    "id": 2522,
                                    "name": "Identifier",
                                    "src": "5435:10:7"
                                  }
                                ],
                                "id": 2523,
                                "name": "MemberAccess",
                                "src": "5435:23:7"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "hexvalue": "30",
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "subdenomination": null,
                                  "token": "number",
                                  "type": "int_const 0",
                                  "value": "0"
                                },
                                "id": 2524,
                                "name": "Literal",
                                "src": "5461:1:7"
                              }
                            ],
                            "id": 2525,
                            "name": "BinaryOperation",
                            "src": "5435:27:7"
                          }
                        ],
                        "id": 2526,
                        "name": "FunctionCall",
                        "src": "5427:36:7"
                      }
                    ],
                    "id": 2527,
                    "name": "ExpressionStatement",
                    "src": "5427:36:7"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 5478,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 2528,
                            "name": "Identifier",
                            "src": "5533:7:7"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": ">",
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "timestamp",
                                  "referencedDeclaration": null,
                                  "type": "uint256"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 5467,
                                      "type": "block",
                                      "value": "block"
                                    },
                                    "id": 2529,
                                    "name": "Identifier",
                                    "src": "5541:5:7"
                                  }
                                ],
                                "id": 2530,
                                "name": "MemberAccess",
                                "src": "5541:15:7"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "lockupPeriod",
                                  "referencedDeclaration": 2284,
                                  "type": "uint256"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 2516,
                                      "type": "struct Collateralized.Collateral memory",
                                      "value": "collateral"
                                    },
                                    "id": 2531,
                                    "name": "Identifier",
                                    "src": "5559:10:7"
                                  }
                                ],
                                "id": 2532,
                                "name": "MemberAccess",
                                "src": "5559:23:7"
                              }
                            ],
                            "id": 2533,
                            "name": "BinaryOperation",
                            "src": "5541:41:7"
                          }
                        ],
                        "id": 2534,
                        "name": "FunctionCall",
                        "src": "5533:50:7"
                      }
                    ],
                    "id": 2535,
                    "name": "ExpressionStatement",
                    "src": "5533:50:7"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 5478,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 2536,
                            "name": "Identifier",
                            "src": "5671:7:7"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": "!",
                              "prefix": true,
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "withdrawn",
                                  "referencedDeclaration": 2286,
                                  "type": "bool"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 2516,
                                      "type": "struct Collateralized.Collateral memory",
                                      "value": "collateral"
                                    },
                                    "id": 2537,
                                    "name": "Identifier",
                                    "src": "5680:10:7"
                                  }
                                ],
                                "id": 2538,
                                "name": "MemberAccess",
                                "src": "5680:20:7"
                              }
                            ],
                            "id": 2539,
                            "name": "UnaryOperation",
                            "src": "5679:21:7"
                          }
                        ],
                        "id": 2540,
                        "name": "FunctionCall",
                        "src": "5671:30:7"
                      }
                    ],
                    "id": 2541,
                    "name": "ExpressionStatement",
                    "src": "5671:30:7"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 5478,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 2542,
                            "name": "Identifier",
                            "src": "5767:7:7"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": ">",
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "isStructConstructorCall": false,
                                  "lValueRequested": false,
                                  "names": [
                                    null
                                  ],
                                  "type": "uint256",
                                  "type_conversion": false
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": [
                                        {
                                          "typeIdentifier": "t_bytes32",
                                          "typeString": "bytes32"
                                        },
                                        {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        }
                                      ],
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 2084,
                                      "type": "function (bytes32,uint256) view returns (uint256)",
                                      "value": "getExpectedRepaymentValue"
                                    },
                                    "id": 2543,
                                    "name": "Identifier",
                                    "src": "5788:25:7"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 2512,
                                      "type": "bytes32",
                                      "value": "agreementID"
                                    },
                                    "id": 2544,
                                    "name": "Identifier",
                                    "src": "5814:11:7"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "member_name": "timestamp",
                                      "referencedDeclaration": null,
                                      "type": "uint256"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 5467,
                                          "type": "block",
                                          "value": "block"
                                        },
                                        "id": 2545,
                                        "name": "Identifier",
                                        "src": "5827:5:7"
                                      }
                                    ],
                                    "id": 2546,
                                    "name": "MemberAccess",
                                    "src": "5827:15:7"
                                  }
                                ],
                                "id": 2547,
                                "name": "FunctionCall",
                                "src": "5788:55:7"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "isStructConstructorCall": false,
                                  "lValueRequested": false,
                                  "names": [
                                    null
                                  ],
                                  "type": "uint256",
                                  "type_conversion": false
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": [
                                        {
                                          "typeIdentifier": "t_bytes32",
                                          "typeString": "bytes32"
                                        }
                                      ],
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 2091,
                                      "type": "function (bytes32) view returns (uint256)",
                                      "value": "getValueRepaidToDate"
                                    },
                                    "id": 2548,
                                    "name": "Identifier",
                                    "src": "5858:20:7"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 2512,
                                      "type": "bytes32",
                                      "value": "agreementID"
                                    },
                                    "id": 2549,
                                    "name": "Identifier",
                                    "src": "5879:11:7"
                                  }
                                ],
                                "id": 2550,
                                "name": "FunctionCall",
                                "src": "5858:33:7"
                              }
                            ],
                            "id": 2551,
                            "name": "BinaryOperation",
                            "src": "5788:103:7"
                          }
                        ],
                        "id": 2552,
                        "name": "FunctionCall",
                        "src": "5767:134:7"
                      }
                    ],
                    "id": 2553,
                    "name": "ExpressionStatement",
                    "src": "5767:134:7"
                  },
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
                          "type": "bool"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": true,
                              "member_name": "withdrawn",
                              "referencedDeclaration": 2286,
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
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
                                    "id": 2554,
                                    "name": "Identifier",
                                    "src": "5981:24:7"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 2512,
                                      "type": "bytes32",
                                      "value": "agreementID"
                                    },
                                    "id": 2555,
                                    "name": "Identifier",
                                    "src": "6006:11:7"
                                  }
                                ],
                                "id": 2556,
                                "name": "IndexAccess",
                                "src": "5981:37:7"
                              }
                            ],
                            "id": 2557,
                            "name": "MemberAccess",
                            "src": "5981:47:7"
                          },
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
                            "id": 2558,
                            "name": "Literal",
                            "src": "6031:4:7"
                          }
                        ],
                        "id": 2559,
                        "name": "Assignment",
                        "src": "5981:54:7"
                      }
                    ],
                    "id": 2560,
                    "name": "ExpressionStatement",
                    "src": "5981:54:7"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        2562
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "beneficiary",
                          "scope": 2590,
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
                            "id": 2561,
                            "name": "ElementaryTypeName",
                            "src": "6105:7:7"
                          }
                        ],
                        "id": 2562,
                        "name": "VariableDeclaration",
                        "src": "6105:19:7"
                      },
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "address",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bytes32",
                                  "typeString": "bytes32"
                                }
                              ],
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "getBeneficiary",
                              "referencedDeclaration": 1527,
                              "type": "function (bytes32) view external returns (address)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 2289,
                                  "type": "contract DebtRegistry",
                                  "value": "debtRegistry"
                                },
                                "id": 2563,
                                "name": "Identifier",
                                "src": "6127:12:7"
                              }
                            ],
                            "id": 2564,
                            "name": "MemberAccess",
                            "src": "6127:27:7"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2512,
                              "type": "bytes32",
                              "value": "agreementID"
                            },
                            "id": 2565,
                            "name": "Identifier",
                            "src": "6155:11:7"
                          }
                        ],
                        "id": 2566,
                        "name": "FunctionCall",
                        "src": "6127:40:7"
                      }
                    ],
                    "id": 2567,
                    "name": "VariableDeclarationStatement",
                    "src": "6105:62:7"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 5478,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 2568,
                            "name": "Identifier",
                            "src": "6235:7:7"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "isStructConstructorCall": false,
                              "lValueRequested": false,
                              "names": [
                                null
                              ],
                              "type": "bool",
                              "type_conversion": false
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    },
                                    {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  ],
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "transfer",
                                  "referencedDeclaration": 5454,
                                  "type": "function (address,uint256) external returns (bool)"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "isStructConstructorCall": false,
                                      "lValueRequested": false,
                                      "names": [
                                        null
                                      ],
                                      "type": "contract ERC20",
                                      "type_conversion": true
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": [
                                            {
                                              "typeIdentifier": "t_address",
                                              "typeString": "address"
                                            }
                                          ],
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 5431,
                                          "type": "type(contract ERC20)",
                                          "value": "ERC20"
                                        },
                                        "id": 2569,
                                        "name": "Identifier",
                                        "src": "6256:5:7"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "isConstant": false,
                                          "isLValue": true,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "member_name": "token",
                                          "referencedDeclaration": 2280,
                                          "type": "address"
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 2516,
                                              "type": "struct Collateralized.Collateral memory",
                                              "value": "collateral"
                                            },
                                            "id": 2570,
                                            "name": "Identifier",
                                            "src": "6262:10:7"
                                          }
                                        ],
                                        "id": 2571,
                                        "name": "MemberAccess",
                                        "src": "6262:16:7"
                                      }
                                    ],
                                    "id": 2572,
                                    "name": "FunctionCall",
                                    "src": "6256:23:7"
                                  }
                                ],
                                "id": 2573,
                                "name": "MemberAccess",
                                "src": "6256:32:7"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 2562,
                                  "type": "address",
                                  "value": "beneficiary"
                                },
                                "id": 2574,
                                "name": "Identifier",
                                "src": "6306:11:7"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "amount",
                                  "referencedDeclaration": 2282,
                                  "type": "uint256"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 2516,
                                      "type": "struct Collateralized.Collateral memory",
                                      "value": "collateral"
                                    },
                                    "id": 2575,
                                    "name": "Identifier",
                                    "src": "6335:10:7"
                                  }
                                ],
                                "id": 2576,
                                "name": "MemberAccess",
                                "src": "6335:17:7"
                              }
                            ],
                            "id": 2577,
                            "name": "FunctionCall",
                            "src": "6256:110:7"
                          }
                        ],
                        "id": 2578,
                        "name": "FunctionCall",
                        "src": "6235:141:7"
                      }
                    ],
                    "id": 2579,
                    "name": "ExpressionStatement",
                    "src": "6235:141:7"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bytes32",
                                  "typeString": "bytes32"
                                },
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2321,
                              "type": "function (bytes32,address,address,uint256)",
                              "value": "CollateralSeized"
                            },
                            "id": 2580,
                            "name": "Identifier",
                            "src": "6421:16:7"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2512,
                              "type": "bytes32",
                              "value": "agreementID"
                            },
                            "id": 2581,
                            "name": "Identifier",
                            "src": "6451:11:7"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2562,
                              "type": "address",
                              "value": "beneficiary"
                            },
                            "id": 2582,
                            "name": "Identifier",
                            "src": "6476:11:7"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "token",
                              "referencedDeclaration": 2280,
                              "type": "address"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 2516,
                                  "type": "struct Collateralized.Collateral memory",
                                  "value": "collateral"
                                },
                                "id": 2583,
                                "name": "Identifier",
                                "src": "6501:10:7"
                              }
                            ],
                            "id": 2584,
                            "name": "MemberAccess",
                            "src": "6501:16:7"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "amount",
                              "referencedDeclaration": 2282,
                              "type": "uint256"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 2516,
                                  "type": "struct Collateralized.Collateral memory",
                                  "value": "collateral"
                                },
                                "id": 2585,
                                "name": "Identifier",
                                "src": "6531:10:7"
                              }
                            ],
                            "id": 2586,
                            "name": "MemberAccess",
                            "src": "6531:17:7"
                          }
                        ],
                        "id": 2587,
                        "name": "FunctionCall",
                        "src": "6421:137:7"
                      }
                    ],
                    "id": 2588,
                    "name": "ExpressionStatement",
                    "src": "6421:137:7"
                  }
                ],
                "id": 2589,
                "name": "Block",
                "src": "5216:1349:7"
              }
            ],
            "id": 2590,
            "name": "FunctionDefinition",
            "src": "5137:1428:7"
          }
        ],
        "id": 2591,
        "name": "ContractDefinition",
        "src": "789:5778:7"
      }
    ],
    "id": 2592,
    "name": "SourceUnit",
    "src": "584:5984:7"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.18+commit.9cf6e910.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "1.0.1",
  "updatedAt": "2018-03-19T22:46:09.638Z"
}