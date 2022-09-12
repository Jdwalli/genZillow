import React, {useState, FunctionComponent} from "react";
  import { GenderPreferenceProps } from "../types/handlers"

export const GenderPreference: FunctionComponent<GenderPreferenceProps> = (
    props: GenderPreferenceProps
  ) => {
    const [genderPreference, setGenderPreference] = useState("");

  
    async function updateGenderPreference(choice: string) {
      setGenderPreference(choice);
      setTimeout(() => 2000);
      props.setGenderPreference(choice);
    }
    return (
      <>
        <div className="goal-cont">
          <div className="body">
            <button
              className={"choice"}
              onClick={() => updateGenderPreference("Male")}
            >
              <small>Male</small>
            </button>
            <button
              className={"choice"}
              onClick={() => updateGenderPreference("Female")}
            >
              <small>Female</small>
            </button>
            <button
              className={"choice"}
              data-goal="get stronger"
              onClick={() => updateGenderPreference("No Preference")}
            >
              <small>No Preference</small>
            </button>
          </div>
        </div>
      </>
    );
  };