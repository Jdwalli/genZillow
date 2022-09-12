import React, {useState, FunctionComponent} from "react";
import { PetProps, PetTypeProps } from "../types/handlers"

export const PetsStatus: FunctionComponent<PetProps> = (
    props: PetProps
  ) => {
    const [petStatus, setPetStatus] = useState("");

  
    async function updatePetStatus(choice: string) {
      setPetStatus(choice);
      setTimeout(() => 1000);
      props.setPetStatus(choice);
    }
    return (
      <>
        <div className="choice-component">
          <div className="choice-area">
            <button
              className={"choice"}
              onClick={() => updatePetStatus("Yes!")}
            >
              <small>Yup!</small>
            </button>
            <button
              className={"choice"}
              onClick={() => updatePetStatus("None!")}
            >
              <small>None!</small>
            </button>
          </div>
        </div>
      </>
    );
  };


  export const PetType: FunctionComponent<PetTypeProps> = (
    props: PetTypeProps
  ) => {
    const [petType, setPetType] = useState("");

  
    async function updatePetType(choice: string) {
      setPetType(choice);
      setTimeout(() => 1000);
      props.setPetType(choice);
    }
    return (
      <>
        <div className="choice-component">
          <div className="choice-area">
            <button
              className={"choice"}
              onClick={() => updatePetType("Dogs")}
            >
              <small>Dogs</small>
            </button>
            <button
              className={"choice"}
              onClick={() => updatePetType("Cats")}
            >
              <small>Cats</small>
            </button>
            <button
              className={"choice"}
              onClick={() => updatePetType("Fish")}
            >
              <small>Fish</small>
            </button>
            <button
              className={"choice"}
              onClick={() => updatePetType("Birds")}
            >
              <small>Birds</small>
            </button>
            <button
              className={"choice"}
              onClick={() => updatePetType("Guinea Pig")}
            >
              <small>Guinea Pig</small>
            </button>
          </div>
        </div>
      </>
    );
  };