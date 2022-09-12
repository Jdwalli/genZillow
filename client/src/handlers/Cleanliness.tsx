import React, {useState, FunctionComponent} from "react";
  import { CleanlinessProps } from "../types/handlers"

export const CleanlinessLevel: FunctionComponent<CleanlinessProps> = (
    props: CleanlinessProps
  ) => {
    const [cleanlinessLevel, setCleanlinessLevel] = useState("");
  
    async function updateCleanlinessLevel(choice: string) {
      setCleanlinessLevel(choice);
      setTimeout(() => 2000);
      props.setPreferedCleanliness(choice);
    }
    return (
      <>
        <div className="goal-cont">
          <div className="body">
            <button
              className={"choice"}
              data-goal="build muscle"
              onClick={() => updateCleanlinessLevel("Clean")}
            >
              <small>Clean</small>
            </button>
            <button
              className={"choice"}
              data-goal="loose fat"
              onClick={() => updateCleanlinessLevel("Messy")}
            >
              <small>Messy</small>
            </button>
            <button
              className={"choice"}
              data-goal="get stronger"
              onClick={() => updateCleanlinessLevel("Very Clean")}
            >
              <small>Very Clean</small>
            </button>
            <button
              className={"choice"}
              data-goal="get stronger"
              onClick={() => updateCleanlinessLevel("Very Messy")}
            >
              <small>Very Messy</small>
            </button>
          </div>
        </div>
      </>
    );
  };