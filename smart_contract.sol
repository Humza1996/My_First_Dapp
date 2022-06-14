pragma solidity ^0.8;


contract dapp
{
    string mood = "Hello Users !!";

    function set(string memory _text) public 
    {
        mood = _text;
    }

    function get() public view returns(string memory)
    {
        return mood;
    }
}