import styled from "styled-components";
import IcCardDisable from "../../assets/icons/MyAsset/ic_card_disable.svg";
import IcCardActive from "../../assets/icons/MyAsset/ic_card_active.svg";
import IcCardCheckDisable from "../../assets/icons/MyAsset/ic_cardCheck_disable.svg";
import IcCardCheckActive from "../../assets/icons/MyAsset/ic_cardCheck_active.svg";
import IcCoinsDisable from "../../assets/icons/MyAsset/ic_coins_disable.svg";
import IcCoinsActive from "../../assets/icons/MyAsset/ic_coins_active.svg";

const NftHeader = () => {
  return (
    <NftHeaderWrapper>
      <NFTHeadingItem>
        <NFTHeadingImageBox>
          <img src={IcCardDisable} alt="card" />
        </NFTHeadingImageBox>
        <NFTHeadingItemText>NFT</NFTHeadingItemText>
      </NFTHeadingItem>
      <NFTHeadingItem>
        <NFTHeadingImageBox>
          <img src={IcCardCheckDisable} alt="cardCheck" />
        </NFTHeadingImageBox>
        <NFTHeadingItemText>Unstaking</NFTHeadingItemText>
      </NFTHeadingItem>
      <NFTHeadingItem>
        <NFTHeadingImageBox>
          <img src={IcCoinsDisable} alt="coins" />
        </NFTHeadingImageBox>
        <NFTHeadingItemText>Reward</NFTHeadingItemText>
      </NFTHeadingItem>
    </NftHeaderWrapper>
  );
};

export default NftHeader;

const NftHeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 3rem;

  width: 100%;
  margin: 2.4rem 0;
`;

const NFTHeadingItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;

  cursor: pointer;
`;

const NFTHeadingImageBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 5rem;
  height: 5rem;

  border: 0.1rem solid #fff;
  border-radius: 50%;
  background-color: #f2f2f7;
  box-shadow: 0px 0px 2rem rgba(198, 197, 208, 0.3);
`;

const NFTHeadingItemText = styled.span`
  color: #5e6162;
  ${({ theme }) => theme.fonts.Nexton_Label_Medium};
`;
