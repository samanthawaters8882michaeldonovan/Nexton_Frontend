import { styled } from "styled-components";
import IcTonSymbol from "../../../../assets/icons/MyAsset/ic_tonSymbol.svg";
import { nftInfo } from "../../../../types/Nft";
import { numberCutter } from "../../../../utils/numberCutter";
import { expiredDateChanger } from "../../../../utils/dateChanger";

interface UnstakingInfoProps {
  item: nftInfo;
}

const UnstakingInfo = (props: UnstakingInfoProps) => {
  const { amount, leverage, lockPeriod, timeStamp } = props.item;

  const currentDate = new Date();
  const oneAndHalfDays = 1.5 * 24 * 60 * 60 * 1000;
  const newDate = new Date(currentDate.getTime() + oneAndHalfDays);
  const year = String(newDate.getFullYear()).slice(-2);
  const month = String(newDate.getMonth() + 1).padStart(2, "0");
  const day = String(newDate.getDate()).padStart(2, "0");

  return (
    <UnstakingInfoWrapper>
      <UnstakingBoldWrapper>
        <UnstakingBoldText>Principal</UnstakingBoldText>
        <UnstakingBoldText>{numberCutter(amount)} TON</UnstakingBoldText>
      </UnstakingBoldWrapper>
      <UnstakingBoldWrapper>
        <UnstakingBoldText>Rewards</UnstakingBoldText>
        <UnstakingBoldText>0.000 TON</UnstakingBoldText>
      </UnstakingBoldWrapper>
      <UnstakingInfoBottomWrapper>
        <UnstakingBottomText style={{ marginBottom: "1.4rem" }}>
          Generated from
        </UnstakingBottomText>
        <UnstakingInfoBottomBox>
          <UnstakingBottomText>staked principal</UnstakingBottomText>
          <UnstakingInfoBottomRightBox>
            <UnstakingBottomText>{numberCutter(amount)}</UnstakingBottomText>
            <img src={IcTonSymbol} alt="tonSymbol" />
            <UnstakingBottomText>TON</UnstakingBottomText>
          </UnstakingInfoBottomRightBox>
        </UnstakingInfoBottomBox>
        <UnstakingInfoBottomBox>
          <UnstakingBottomText>Leveraged amount</UnstakingBottomText>
          <UnstakingInfoBottomRightBox>
            <UnstakingBottomText>
              {leverage === 1
                ? `0.0000`
                : numberCutter(amount * leverage - amount)}
            </UnstakingBottomText>
            <img src={IcTonSymbol} alt="tonSymbol" />
            <UnstakingBottomText>TON</UnstakingBottomText>
          </UnstakingInfoBottomRightBox>
        </UnstakingInfoBottomBox>
        <UnstakingBoldWrapper
          style={{ marginTop: "3rem", marginBottom: "1.4rem" }}
        >
          <UnstakingBoldText>Available in</UnstakingBoldText>
          <UnstakingBoldText>D-day 01H/30M</UnstakingBoldText>
        </UnstakingBoldWrapper>
        <UnstakingInfoBottomBox>
          <UnstakingBottomText>Unstaking period</UnstakingBottomText>
          <UnstakingBottomText>1.5 Day</UnstakingBottomText>
        </UnstakingInfoBottomBox>
        <UnstakingInfoBottomBox>
          <UnstakingInfoBottomBox>
            <UnstakingBottomText>Date of Unstaking</UnstakingBottomText>
            <UnstakingBottomText>
              {day}.{month}.{year}
            </UnstakingBottomText>
          </UnstakingInfoBottomBox>
        </UnstakingInfoBottomBox>
      </UnstakingInfoBottomWrapper>
    </UnstakingInfoWrapper>
  );
};

export default UnstakingInfo;

const UnstakingInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  padding: 2rem 3.5rem;
`;

const UnstakingBoldWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  padding-bottom: 0.6rem;

  border-bottom: 0.1rem solid #e5e5ea;

  & + & {
    margin-top: 0.8rem;
  }
`;

const UnstakingBoldText = styled.span`
  color: #46494a;
  ${({ theme }) => theme.fonts.Nexton_Body_Text_Medium_2};
`;

const UnstakingInfoBottomWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  width: 100%;
  padding: 1.4rem 0 3rem 0;
`;

const UnstakingInfoBottomBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;

  & + & {
    margin-top: 1rem;
  }
`;

const UnstakingInfoBottomRightBox = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
`;

const UnstakingBottomText = styled.span`
  color: #5d5e67;
  ${({ theme }) => theme.fonts.Telegram_Caption_1};
`;
