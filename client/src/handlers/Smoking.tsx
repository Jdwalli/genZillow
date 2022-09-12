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

