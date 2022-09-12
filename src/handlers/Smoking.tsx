import React, {useState, FunctionComponent} from "react";

import { SmokingProps } from "../types/handlers"

export const SmokingStatus: FunctionComponent<SmokingProps> = (
  props: SmokingProps
) => {
  const [smokingStatus, setSmokingStatus] = useState("");

  async function updateCleanlinessLevel(choice: string) {
    setSmokingStatus(choice);
    setTimeout(() => 2000);
    props.setSmokingStatus(choice);
  }
  return (
    <>
      <div className="choice-component">

        <div className="choice-area">
          <button
            className={"choice"}
            onClick={() => updateCleanlinessLevel("do")}
          >
            <small>Yes</small>
          </button>
          <button
            className={"choice"}
            onClick={() => updateCleanlinessLevel("do not")}
          >
            <small>No</small>
          </button>
        </div>
      </div>
    </>
  );
};

