import React, { useState, FunctionComponent} from "react";

import { DrinkingProps } from "../types/handlers"

export const DrinkingStatus: FunctionComponent<DrinkingProps> = (
  props: DrinkingProps
) => {
  const [drinkingStatus, setDrinkingStatus] = useState("");

  async function updateCleanlinessLevel(choice: string) {
    setDrinkingStatus(choice);
    setTimeout(() => 1000);
    props.setDrinkingStatus(choice);
  }
  return (
    <>
      <div className="goal-cont">
        <div className="body">
          <button
            className={"choice"}
            onClick={() => updateCleanlinessLevel("Yes")}
          >
            <small>Yes</small>
          </button>
          <button
            className={"choice"}
            onClick={() => updateCleanlinessLevel("No")}
          >
            <small>No</small>
          </button>
        </div>
      </div>
    </>
  );
};



  

