import React, {useState, FunctionComponent} from "react";
import { RomanticStatusProps } from "../types/handlers"

export const RomanticStatus: FunctionComponent<RomanticStatusProps> = (
    props: RomanticStatusProps
  ) => {
    const [romanticStatus, setRomanticStatus] = useState("");
  
    async function updateRomanticStatus(choice: string) {
      setRomanticStatus(choice);
      setTimeout(() => 1000);
      props.setRomanticStatus(choice);
    }
    return (
      <>
        <div className="choice-component">
          <div className="choice-area">
            <button
              className={"choice"}
              onClick={() => updateRomanticStatus("I am single!")}
            >
              <small>Single</small>
            </button>
            <button
              className={"choice"}
              onClick={() => updateRomanticStatus("I am in a relationship!")}
            >
              <small>Dating</small>
            </button>
            <button
              className={"choice"}
              onClick={() => updateRomanticStatus("Right now, I prefer not to say!")}
            >
              <small>Prefer not to say</small>
            </button>
          </div>
        </div>
      </>
    );
  };