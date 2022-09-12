
import React, {useState, FunctionComponent } from "react";

import { LifeStyleProps } from "../types/handlers"

export const LifestyleLevel: FunctionComponent<LifeStyleProps> = (props: LifeStyleProps) => {
    const [preferedLifestyle, setPreferedLifestyle] = useState("");
  
    async function updateCleanlinessLevel(choice: string) {
      setPreferedLifestyle(choice);
      setTimeout(() => 2000);
      props.setPreferedLifestyle(choice);
      console.log(choice);
    }
    return (
      <>
        <div className="goal-cont">

          <div className="body">
            <button
              className={"choice"}
              onClick={() => updateCleanlinessLevel("Social")}
            >
              <small>Social</small>
            </button>
            <button
              className={"choice"}
              onClick={() => updateCleanlinessLevel("Homebody")}
            >
              <small>Homebody</small>
            </button>
            <button
              className={"choice"}
              onClick={() => updateCleanlinessLevel("Morning Person")}
            >
              <small>Morning Person</small>
            </button>
            <button
              className={"choice"}
              onClick={() => updateCleanlinessLevel("Night Owl")}
            >
              <small>Night Owl</small>
            </button>
          </div>
        </div>
      </>
    );
  };