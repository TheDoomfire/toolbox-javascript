//import { ObjectUtils } from './src/objects/index.js';
import { StringUtils } from './src/strings/index.js';


const testString = "Hardware wallets like {{this.company.name}} keep your keys offline, even when your crypto is staked. {{product.safe5}}{{product.safe5.price}} or {{product.model1}}{{products.model1.price}} are perfect for long-term holders.";
const testRegex = /\{\{([\w.]+)\}\}/g;


const result = StringUtils.find(testString, testRegex);
console.log(result);


const testObject = {
    "crypto": {
        "wallets": {
            "hardware": {
                "trezor": {
                    "trezor_wallet_comparison": {
                        "name": "Trezor Wallets",
                        "offer_id": 240
                    },
                    "safe5": {
                        "name": "Trezor Safe 5",
                        "offer_id": 241,
                        "price": {
                            "type": "premium",
                            "currencies":
                            {
                                "usd": 169,
                                "eur": 169
                            }
                        }
                    },
                    "safe5_bitcoin": {
                        "name": "Trezor Safe 5 Bitcoin-only",
                        "offer_id": 242,
                        "price": {
                            "type": "premium",
                            "currencies":
                            {
                                "usd": 169,
                                "eur": 169
                            }
                        }
                    },
                    "safe3": {
                        "name": "Trezor Safe 3",
                        "offer_id": 243,
                        "price": {
                            "type": "midrange",
                            "currencies":
                            {
                                "usd": 79,
                                "eur": 79
                            }
                        }
                    },
                    "model1": {
                        "name": "Trezor Model One",
                        "offer_id": 244,
                        "price": {
                            "type": "budget",
                            "currencies":
                            {
                                "usd": 49,
                                "eur": 49
                            }
                        }
                    }
                }
            }
        }
        
    }
};
const testKey = "safe5";


/* const resultObj = ObjectUtils.find(testObject, testKey);
console.log(resultObj); */
