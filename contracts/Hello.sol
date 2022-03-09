// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.4;

import "hardhat/console.sol";

contract Hello {
    string name;

    constructor(){
        console.log("Hello World");
    }

    function greet() public{
        console.log("This is a greeting for you %s , How are you doing today?", name);
    }

    function update(string memory newName) public {
        name = newName;
    }
}
