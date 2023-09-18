import { styled } from "styled-components";
import IcDownArrow from "../../assets/icons/ic_grayArrow_down.svg";
import IcUpArrow from "../../assets/icons/ic_grayArrow_up.svg";
import IcDropdownList from "../../assets/icons/ic_dropdown_list.svg";
import { useState } from "react";

const HowTo = () => {
  const [isDropdown, setIsDropdown] = useState(false);

  const handleDropDown = () => {
    setIsDropdown((prev) => !prev);
  };

  return (
    <HowToWrapper>
      <HowToBox>
        <HowToTitleBox onClick={handleDropDown}>
          <span>How to use NEXTON</span>
          {isDropdown ? (
            <img src={IcUpArrow} alt="upArrow" />
          ) : (
            <img src={IcDownArrow} alt="downArrow" />
          )}
        </HowToTitleBox>
        {isDropdown && (
          <HowToDropdownBox>
            <img src={IcDropdownList} alt="dropdownList" />
            <HowToDropdownTextBox>
              <span>Stake TON on your preferred nominator pool.</span>
              <span>Receive NFT that proves your staked asset.</span>
              <div>
                <p>Your NFT will be enabled to borrow NXT</p>
                <p>(Loan), Liquefy your position reserving NFT</p>
                <p>(Swap) or Stake NXT to earn more profit.</p>
              </div>
            </HowToDropdownTextBox>
          </HowToDropdownBox>
        )}
      </HowToBox>
    </HowToWrapper>
  );
};

export default HowTo;

const HowToWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 0.6rem;

  background-color: #f1f4f4;
`;

const HowToBox = styled.div`
  width: 100%;
  padding: 2.4rem;

  background-color: #fff;
`;

const HowToTitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    color: #333;
    ${({ theme }) => theme.fonts.Nexton_Body_Text_Large}
  }
`;
const HowToDropdownBox = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1.3rem;

  width: 100%;
  margin-top: 2.3rem;
`;

const HowToDropdownTextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 1.6rem;

  span,
  p {
    color: #5d5e67;
    ${({ theme }) => theme.fonts.Nexton_Body_Text_Small};
  }
`;
