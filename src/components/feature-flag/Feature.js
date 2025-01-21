import React, {useContext} from "react";
import LightDarMode from "../light-dark-mode/LightDarMode";
import TicTacToe from "../tic-tac-toe/TicTacToe";
import Random from "../random-color/Random";
import Accordian from "../accordian/Accordian";
import { featureFlagsContext } from "./context";
import dummyApiResponse from './data'

const Feature = () => {
  const { loading, enabledFlags } = useContext(featureFlagsContext);
  const {showLightAndDarkMode,showTicTacToeBoard, showRandomColorGenerator, showAccordiaon } = dummyApiResponse
  const componentsToRender = [
    {
      key: showLightAndDarkMode,
      component: <LightDarMode />,
    },
    {
      key: showTicTacToeBoard,
      component: <TicTacToe />,
    },
    {
      key: showRandomColorGenerator,
      component: <Random />,
    },
    {
      key: showAccordiaon,
      component: <Accordian />,
    },
  ];

  function checkEnabledFlags(getCurrentKey) {
    return enabledFlags[getCurrentKey];
  }

  if (loading) {
    return <h1>Loading data... Please wait</h1>;
  }
  return (
    <div>
      <h1>Feature Flags</h1>
      {componentsToRender.map((componentItem) =>
        checkEnabledFlags(componentItem.key) ? componentItem.component : null
      )}
    </div>
  );
};

export default Feature;
