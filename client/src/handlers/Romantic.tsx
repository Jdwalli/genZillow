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
        <div className="goal-cont">
          <div className="body">
            <button
              className={"choice"}
              onClick={() => updateRomanticStatus("Single")}
            >
              <small>Single</small>
            </button>
            <button
              className={"choice"}
              onClick={() => updateRomanticStatus("Dating")}
            >
              <small>Dating</small>
            </button>
            <button
              className={"choice"}
              onClick={() => updateRomanticStatus("Prefer not to say")}
            >
              <small>Prefer not to say</small>
            </button>
          </div>
        </div>
      </>
    );
  };