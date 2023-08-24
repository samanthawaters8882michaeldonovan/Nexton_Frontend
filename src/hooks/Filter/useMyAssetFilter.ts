import { useState } from "react";

const useMyAssetFilter = () => {
  // all 클릭 했을 때 나머지 리스트 opacity 관리 하는 state
  const [activeOpacity, setActiveOpacity] = useState(false);
  //클릭한 리스트 관리 하는 state
  const [checkPeriod, setCheckPeriod] = useState([false, false, false, false]);
  //ongoing,all 클릭 했을 떄 border 관리 하기 위한 state
  const [period, setPeriod] = useState("Period");

  const handleCheckPeriod = (type: string) => {
    switch (type) {
      case "Ongoing":
        setCheckPeriod([true, false, false, false]);
        setActiveOpacity(false);
        setPeriod(type);
        break;
      case "Forthcoming":
        setCheckPeriod([false, true, false, false]);
        setActiveOpacity(false);
        setPeriod(type);
        break;
      case "Expired":
        setCheckPeriod([false, false, true, false]);
        setActiveOpacity(false);
        setPeriod(type);
        break;
      case "All":
        setCheckPeriod([false, false, false, true]);
        setActiveOpacity(true);
        setPeriod(type);
        break;
    }
  };

  return { activeOpacity, checkPeriod, period, handleCheckPeriod };
};

export default useMyAssetFilter;
