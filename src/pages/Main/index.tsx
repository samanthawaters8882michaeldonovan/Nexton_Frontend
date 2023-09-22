import styled from "styled-components";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import useTonConnect from "../../hooks/useTonConnect";
import { addressState } from "../../lib/atom/address";
import Menu from "../../components/main/Menu";
import HowTo from "../../components/main/HowTo";
import SubCube from "../../assets/image/SubCube.png";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const tele = (window as any).Telegram.WebApp;

const Main = () => {
  const { address } = useTonConnect();
  const [, setTonAddress] = useRecoilState(addressState);
  const navigate = useNavigate();

  useEffect(() => {
    if (address) {
      setTonAddress(address);
    }
  }, [address]);

  useEffect(() => {
    if (tele) {
      tele.ready();
      tele.MainButton.hide();
      tele.BackButton.show();
      tele.onEvent("backButtonClicked", () => {
        navigate("/");
      });
    }

    return () => {
      tele.offEvent("backButtonClicked");
    };
  });

  return (
    <AnimatePresence>
      <motion.div
        style={{ width: "100%", height: "100%" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1.5 }}
        exit={{ opacity: 0 }}
        transition={{
          ease: "easeIn",
          duration: 0.5,
        }}
      >
        <MainWrapper>
          <MainImageBox>
            <MainImageTitle>NEXTON</MainImageTitle>
            <MainIconBox>
              <MainIcon src={SubCube} alt="subcube" />
            </MainIconBox>
            <MainImageBoxTopCircle />
            <MainImageBoxBottomCircle />
          </MainImageBox>
          <Menu />
          <HowTo />
        </MainWrapper>
      </motion.div>
    </AnimatePresence>
  );
};

export default Main;

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: auto;
  min-height: 100%;

  background-color: #f1f4f4;
`;

const MainImageBox = styled.div`
  position: relative;

  width: 100%;
  height: 22.3rem;

  background-color: #007aff;
`;

const MainImageBoxTopCircle = styled.div`
  position: absolute;
  top: 8rem;
  left: -1rem;

  width: 110%;
  height: 25.9rem;

  border-radius: 60%;
  border: 0.1rem solid rgba(255, 255, 255, 0.2);
`;

const MainImageBoxBottomCircle = styled.div`
  position: absolute;
  top: 15.5rem;
  left: -1rem;

  width: 110%;
  height: 25.9rem;

  border-radius: 60%;
  border: 0.1rem solid rgba(255, 255, 255, 0.2);
`;

const MainIconBox = styled.div`
  position: relative;

  width: 100%;
`;
const MainIcon = styled.img`
  position: absolute;
  top: 1rem;

  width: 100%;
  z-index: 1;
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
