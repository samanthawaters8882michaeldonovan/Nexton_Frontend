import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../../pages/Main";
import Leverage from "../../pages/Leverage";
import Nlp from "../../pages/Nlp";
import MyAsset from "../../pages/MyAsset";
import Detail from "../myAsset/detail/Detail";
import Loan from "../../pages/Loan";
import BorrowDetail from "../loan/borrow/BorrowDetail";
import Swap from "../../pages/Swap";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/leverage" element={<Leverage />} />
        <Route path="/loan" element={<Loan />} />
        <Route path="/loan/:id" element={<BorrowDetail />} />
        <Route path="/swap" element={<Swap />} />
        <Route path="/nlp" element={<Nlp />} />
        <Route path="/myasset" element={<MyAsset />} />
        <Route path="/myasset/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
