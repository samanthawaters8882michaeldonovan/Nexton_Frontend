import styled from "styled-components";
import MainImage from "../assets/image/MainImage.png";
import TonWallet from "../components/main/TonWallet";
import Menu from "../components/main/Menu";
import { useEffect } from "react";
import HowTo from "../components/main/HowTo";
import SubCube from "../assets/image/SubCube.png";

const tele = (window as any).Telegram.WebApp;

const Main = () => {
  useEffect(() => {
    if (tele) {
      tele.ready();
      tele.onEvent("themeChanged");
      tele.themeParams.secondary_bg_color = "#f2f2f7";
      tele.setHeaderColor("secondary_bg_color");
      tele.MainButton.hide();
      tele.BackButton.hide();
    }
  });

  return (
    <MainWrapper>
      <MainImageBox>
        <MainImageTitle>NEXTON</MainImageTitle>
        <MainIconBox>
          <MainIcon src={SubCube} alt="subcube" />
        </MainIconBox>
      </MainImageBox>
      <Menu />
      <HowTo />
      <Footer>
        <TonWallet />
      </Footer>
    </MainWrapper>
  );
};

export default Main;

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;
  background-color: #f1f4f4;
`;

const MainImageBox = styled.div`
  position: relative;

  width: 100%;
  height: 22.3rem;

  background-color: #007aff;
`;

const MainIconBox = styled.div`
  width: 100%;

  text-align: center;
`;
const MainIcon = styled.img`
  width: 400px;
`;

const MainImageTitle = styled.div`
  width: 100%;
  margin-top: 3.564rem;
  margin-bottom: 0.5rem;

  color: #fff;
  font-family: Montserrat;
  font-size: 3rem;
  font-style: normal;
  font-weight: 700;
  line-height: 3rem; /* 100% */

  text-align: center;
`;

const Footer = styled.div`
  position: fixed;
  bottom: 0;

  width: 100%;
  max-width: 76.8rem;
  padding: 0 1.6rem 1.4rem 1.6rem;
`;
