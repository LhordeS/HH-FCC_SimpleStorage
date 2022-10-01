//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SimpleStorage {
    uint256 favoriteNumber;
    //  People public person = People({favoriteNumber: 666, name: "Lucius"});

    mapping(string => uint256) public nameToFavoriteNumber;

    struct People {
        uint256 favoriteNumber;
        string name;
    }

    function store(uint256 _favoriteNumber) public virtual {
        favoriteNumber = _favoriteNumber;
    }

    function retrieve() public view returns (uint256) {
        return favoriteNumber;
    }

    People[] public people;

    function addPerson(string memory _name, uint256 _favoriteNumber) public {
        //  people.push(People(_favoriteNumber, _name));
        // People memory newPerson = People({favoriteNumber: _favoriteNumber, name: _name});
        People memory newPerson = People(_favoriteNumber, _name);
        people.push(newPerson);
        nameToFavoriteNumber[_name] = _favoriteNumber;
    }
}
