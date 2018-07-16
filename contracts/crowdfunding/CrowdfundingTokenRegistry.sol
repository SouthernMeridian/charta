pragma solidity 0.4.18;

import "./CrowdfundingToken.sol";
import "./Controlled.sol";

contract CrowdfundingTokenRegistry {
    /**
     * Creates a new CrowdfundingToken
     */
    function createCrowdfundingToken(
        address _owner,
        string _tokenName,
        uint8 _decimalUnits,
        string _tokenSymbol,
        address _repaymentToken,
        bool _transfersEnabled
    )
        external
        returns (address crowdfundingToken)
    {
        crowdfundingToken =
            new CrowdfundingToken(
                _tokenName,
                _decimalUnits,
                _tokenSymbol,
                _repaymentToken,
                _transfersEnabled
            );

        Controlled(crowdfundingToken).changeController(_owner);

        return crowdfundingToken;
    }
}