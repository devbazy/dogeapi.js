define({ api: [
  {
    "type": "get",
    "url": "/wow/?api_key=API_KEY&a=get_address_by_label&address_label=ADDRESS_LABEL",
    "title": "Get Address By Label",
    "version": "0.0.1",
    "name": "GetAddressByLabel",
    "group": "DogeCoin",
    "permission": {
      "name": "user",
      "title": "Authenticated access is required.",
      "description": ""
    },
    "description": "Returns the payment address for the given ADDRESS_LABEL",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "apikey",
            "optional": false,
            "description": "The user's api key"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "a",
            "optional": false,
            "description": "The action to perform"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "address_label",
            "optional": false,
            "description": "The address label to check the amount with"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "CURL example:",
        "content": "    curl -X GET 'https://dogeapi.com/wow/?api_key=API_KEY&a=get_address_by_label&address_label=ADDRESS_LABEL'\n"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "field": "address",
            "optional": false,
            "description": "The addresses on your account."
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response (example):",
          "content": "   HTTP/1.1 200 OK\n   \"DQ6eccdPZ4n3Hi6orzyD6XZ6XF24ndBFRX\"\n"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "InvalidAPIKey",
            "optional": false,
            "description": "The user's API key is either missing or invalid."
          },
          {
            "group": "Error 4xx",
            "field": "InvalidAddress",
            "optional": false,
            "description": "The user's address key is invalid."
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response (example):",
          "content": "   HTTP/1.1 200 OK\n   \"Invalid API Key\"\n"
        }
      ]
    },
    "filename": "src/index.js"
  },
  {
    "type": "",
    "url": "{get}/wow/?api_key=API_KEY&a=get_address_received&payment_address=PAYMENT_ADDRESS",
    "title": "Get Address Received",
    "version": "0.0.1",
    "name": "GetAddressReceived",
    "group": "DogeCoin",
    "permission": {
      "name": "user",
      "title": "Authenticated access is required.",
      "description": ""
    },
    "description": "Returns the current amount received to all addresses with ADDRESS_LABEL or PAYMENT_ADDRESS.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "apikey",
            "optional": false,
            "description": "The user's api key"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "a",
            "optional": false,
            "description": "The action to perform"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "payment_address",
            "optional": false,
            "description": "The payment address to check the amount with"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "address_label",
            "optional": false,
            "description": "The address label to check the amount with"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "CURL example:",
        "content": "    curl -X GET 'https://dogeapi.com/wow/?api_key=API_KEY&a=get_address_received&payment_address=PAYMENT_ADDRESS'\n"
      },
      {
        "title": "CURL example:",
        "content": "    curl -X GET 'https://dogeapi.com/wow/?api_key=API_KEY&a=get_address_received&address_label=ADDRESS_LABEL'\n"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "field": "addresses",
            "optional": false,
            "description": "The list of addresses on your account."
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response (example):",
          "content": "   HTTP/1.1 200 OK\n   [\"DQ6eccdPZ4n3Hi6orzyD6XZ6XF24ndBFRX\", \"DQrzy5eci6oZ4n9HD6XFRX4dnBZ4ncdPdB\"]\n"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "InvalidAPIKey",
            "optional": false,
            "description": "The user's API key is either missing or invalid."
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response (example):",
          "content": "   HTTP/1.1 200 OK\n   \"Invalid API Key\"\n"
        }
      ]
    },
    "filename": "src/index.js"
  },
  {
    "type": "get",
    "url": "/wow/?api_key=API_KEY&a=get_balance",
    "title": "Get Balance",
    "version": "0.0.1",
    "name": "GetBalance",
    "group": "DogeCoin",
    "permission": {
      "name": "user",
      "title": "Authenticated access is required.",
      "description": ""
    },
    "description": "Returns the DOGE balance of your entire account to 8 decimal places.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "apikey",
            "optional": false,
            "description": "The user's api key"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "a",
            "optional": false,
            "description": "The action to perform"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "CURL example:",
        "content": "    curl -X GET 'https://dogeapi.com/wow/?api_key=API_KEY&a=get_balance'\n"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "field": "amount",
            "optional": false,
            "description": "The amount in the entire account"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response (example):",
          "content": "   HTTP/1.1 200 OK\n   18.95245109\n"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "InvalidAPIKey",
            "optional": false,
            "description": "The user's API key is either missing or invalid."
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response (example):",
          "content": "   HTTP/1.1 200 OK\n   \"Invalid API Key\"\n"
        }
      ]
    },
    "filename": "src/index.js"
  },
  {
    "type": "get",
    "url": "/wow/?a=get_difficulty",
    "title": "Get Difficulty",
    "version": "0.0.1",
    "name": "GetDifficulty",
    "group": "DogeCoin",
    "permission": {
      "name": "public",
      "title": "Public access for anyone.",
      "description": ""
    },
    "description": "Returns the current difficulty. This doesn't require an API key.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "a",
            "optional": false,
            "description": "The action to perform"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "CURL example:",
        "content": "    curl -X GET 'https://dogeapi.com/wow/?a=get_difficulty'\n"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "field": "difficulty",
            "optional": false,
            "description": "The current difficulty"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response (example):",
          "content": "   HTTP/1.1 200 OK\n   321.8045805\n"
        }
      ]
    },
    "filename": "src/index.js"
  },
  {
    "type": "get",
    "url": "/wow/?api_key=API_KEY&a=get_my_addresses",
    "title": "Get My Addresses",
    "version": "0.0.1",
    "name": "GetMyAddresses",
    "group": "DogeCoin",
    "permission": {
      "name": "user",
      "title": "Authenticated access is required.",
      "description": ""
    },
    "description": "Returns all payment addresses/address_ids for your account.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "apikey",
            "optional": false,
            "description": "The user's api key"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "a",
            "optional": false,
            "description": "The action to perform"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "CURL example:",
        "content": "    curl -X GET 'https://dogeapi.com/wow/?api_key=API_KEY&a=get_my_addresses'\n"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "field": "addresses",
            "optional": false,
            "description": "The list of addresses on your account."
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response (example):",
          "content": "   HTTP/1.1 200 OK\n   [\"DQ6eccdPZ4n3Hi6orzyD6XZ6XF24ndBFRX\", \"DQrzy5eci6oZ4n9HD6XFRX4dnBZ4ncdPdB\"]\n"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "InvalidAPIKey",
            "optional": false,
            "description": "The user's API key is either missing or invalid."
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response (example):",
          "content": "   HTTP/1.1 200 OK\n   \"Invalid API Key\"\n"
        }
      ]
    },
    "filename": "src/index.js"
  },
  {
    "type": "get",
    "url": "/wow/?api_key=API_KEY&a=get_new_address&address_label=ADDRESS_LABEL",
    "title": "Get New Address",
    "version": "0.0.1",
    "name": "GetNewAddress",
    "group": "DogeCoin",
    "permission": {
      "name": "user",
      "title": "Authenticated access is required.",
      "description": ""
    },
    "description": "Returns a new payment address for your account. You can pass an optional alphanumeric ADDRESS_LABEL as a label for the address.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "apikey",
            "optional": false,
            "description": "The user's api key"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "a",
            "optional": false,
            "description": "The action to perform"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "address_label",
            "optional": false,
            "description": "The optional, alphanumerical address label for the wallet"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "CURL example:",
        "content": "    curl -X GET 'https://dogeapi.com/wow/?api_key={API_KEY}&a=get_new_address&address_label=ADDRESS_LABEL'\n"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "field": "amount",
            "optional": false,
            "description": "The amount in the entire account"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response (example):",
          "content": "   HTTP/1.1 200 OK\n   \"DQrzy6eccdPZ4n3Hi6oD6XZ4ndBFRX\"\n"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "InvalidAPIKey",
            "optional": false,
            "description": "The user's API key is either missing or invalid."
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response (example):",
          "content": "   HTTP/1.1 200 OK\n   \"Invalid API Key\"\n"
        }
      ]
    },
    "filename": "src/index.js"
  },
  {
    "type": "get",
    "url": "/wow/?a=get_current_block",
    "title": "Get Current Block",
    "version": "0.0.1",
    "name": "Get_Current_Block",
    "group": "DogeCoin",
    "permission": {
      "name": "public",
      "title": "Public access for anyone.",
      "description": ""
    },
    "description": "Returns the current block. This doesn't require an API key.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "a",
            "optional": false,
            "description": "The action to perform"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "CURL example:",
        "content": "    curl -X GET 'https://dogeapi.com/wow/?a=get_current_block'\n"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "field": "currentBlock",
            "optional": false,
            "description": "The current block"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response (example):",
          "content": "   HTTP/1.1 200 OK\n   39405\n"
        }
      ]
    },
    "filename": "src/index.js"
  },
  {
    "type": "get",
    "url": "/wow/?api_key=API_KEY&a=withdraw&amount=AMOUNT&payment_address=PAYMENT_ADDRESS",
    "title": "Withdraw",
    "version": "0.0.1",
    "name": "Withdraw",
    "group": "DogeCoin",
    "permission": {
      "name": "user",
      "title": "Authenticated access is required.",
      "description": ""
    },
    "description": "Withdraws AMOUNT doge to a PAYMENT_ADDRESS you specify.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "apikey",
            "optional": false,
            "description": "The user's api key"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "a",
            "optional": false,
            "description": "The action to perform"
          },
          {
            "group": "Parameter",
            "type": "int",
            "field": "amount",
            "optional": false,
            "description": "The amount to withdraw"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "payment_address",
            "optional": false,
            "description": "The account to withdraw to"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "CURL example:",
        "content": "    curl -X GET 'https://dogeapi.com/wow/?api_key=API_KEY&a=withdraw&amount=AMOUNT&payment_address=PAYMENT_ADDRESS'\n"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "field": "transaction",
            "optional": false,
            "description": "The unique transaction id on the market"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response (example):",
          "content": "   HTTP/1.1 200 OK\n   \"52c5a2923b113ef07c47b077ba8bf3a03381c687f218f6b326773892565d6963\"\n"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "InvalidAPIKey",
            "optional": false,
            "description": "The user's API key is either missing or invalid."
          },
          {
            "group": "Error 4xx",
            "field": "NotEnoughDoge",
            "optional": false,
            "description": "The user does not have enough Doge in their account."
          },
          {
            "group": "Error 4xx",
            "field": "BadQuery",
            "optional": false,
            "description": "The query was invalid, probably indicated a missing parameter"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response (example):",
          "content": "   HTTP/1.1 200 OK\n   \"Invalid API Key\"\n"
        },
        {
          "title": "Error-Response (example):",
          "content": "   HTTP/1.1 200 OK\n   \"Not enough Doge\"\n"
        },
        {
          "title": "Error-Response (example):",
          "content": "   HTTP/1.1 200 OK\n   \"Bad Query\"\n"
        }
      ]
    },
    "filename": "src/index.js"
  },
  {
    "version": "0.0.1",
    "group": "index.js",
    "type": "",
    "url": "",
    "filename": "src/index.js"
  },
  {
    "version": "0.0.1",
    "group": "index.js",
    "type": "",
    "url": "",
    "filename": "src/index.js"
  }
] });