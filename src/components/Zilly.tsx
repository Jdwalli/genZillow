import React, {
  useState,
  useEffect,
  useRef,
  FunctionComponent,
  MouseEvent,
  Dispatch,
  SetStateAction,
} from "react";
import ScrollToBottom from "react-scroll-to-bottom";
import { roomatePromps } from "../helpers/prompts";
import { Formik, Field, Form, FormikHelpers } from "formik";
import { HandleBotReply, HandleUserReply } from "../helpers/replies";

// Question Handlers
import { LifestyleLevel } from "../handlers/Lifestyle";
import { CleanlinessLevel } from "../handlers/Cleanliness";
import { MonthlyRent } from "../handlers/Rent";
import { SmokingStatus } from "../handlers/Smoking";
import { DrinkingStatus } from "../handlers/Drinking";
import { RomanticStatus } from "../handlers/Romantic";
import { PetsStatus, PetType } from "../handlers/Pets";
import { GenderPreference } from "../handlers/Gender";

const Zilly = () => {
  const [startBot, setStartBot] = useState(false); // Is the bot ready to run? (Should have a little timeout)
  const [preferences, setPreferences] = useState(false); // Whole JSON Object
  const [name, setName] = useState("");

  const [showCleanlinessLevel, setShowCleanlinessLevel] = useState(false);
  const [preferedCleanliness, setPreferedCleanliness] = useState("");

  const [showLifestyleLevel, setShowLifestyleLevel] = useState(false);
  const [preferedLifestyle, setPreferedLifestyle] = useState("");

  const [showMonthlyRent, setShowMonthlyRent] = useState(false);
  const [monthlyRent, setMonthlyRent] = useState("");

  const [showSmokingQuestion, setShowSmokingQuestion] = useState(false);
  const [smokingStatus, setSmokingStatus] = useState("");

  const [showDrinkingQuestion, setShowDrinkingQuestion] = useState(false);
  const [drinkingStatus, setDrinkingStatus] = useState("");

  const [showRomanceQuestion, setShowRomanceQuestion] = useState(false);
  const [romanticStatus, setRomanticStatus] = useState("");

  const [showPetsQuestion, setShowPetsQuestion] = useState(false);
  const [petStatus, setPetStatus] = useState("");

  const [showGenderPreferenceQuestion, setShowGenderPreferenceQuestion] =
    useState(false);
  const [genderPreference, setGenderPreference] = useState("");


  let counter = 0;
  useEffect(() => {
    (async () => {
      setTimeout(() => 2000);
      counter = 1;
      setStartBot(true);
      setTimeout(() => 2000);
      counter = 2;
    })();
  }, []);

  useEffect(() => {
    if (name !== "") {
      setShowCleanlinessLevel(true);
    }
  }, [name]);

  useEffect(() => {
    if (preferedCleanliness !== "") {
      setShowLifestyleLevel(true);
    }
  }, [preferedCleanliness]);

  useEffect(() => {
    if (preferedLifestyle !== "") {
      setShowMonthlyRent(true);
    }
  }, [preferedLifestyle]);

  useEffect(() => {
    if (monthlyRent !== "") {
      setShowSmokingQuestion(true);
    }
  }, [monthlyRent]);

  useEffect(() => {
    if (smokingStatus !== "") {
      setShowDrinkingQuestion(true);
    }
  }, [smokingStatus]);

  useEffect(() => {
    if (drinkingStatus !== "") {
      setShowRomanceQuestion(true);
    }
  }, [drinkingStatus]);

  useEffect(() => {
    if (romanticStatus !== "") {
      setShowPetsQuestion(true);
    }
  }, [romanticStatus]);

  useEffect(() => {
    if (petStatus !== "") {
      setShowGenderPreferenceQuestion(true);
    }
  }, [petStatus]);

  interface Values {
    name: string;
  }

  return (
    <div className="chatbot">
      <div className="chatbot-header">
        <p>Zilly</p>
      </div>
      <div className="chatbot-main">
        <ScrollToBottom className="chatbot-body">
          {startBot === true && (
            <>
              <HandleBotReply
                chat={roomatePromps[0].zilly}
                prompt={roomatePromps[0].prompt}
              />
              <HandleBotReply
                chat={roomatePromps[1].zilly}
                prompt={roomatePromps[1].prompt}
              />
            </>
          )}
          {name !== "" && (
            <HandleUserReply
              data={name}
              chat={roomatePromps[2].zilly}
              prompt={roomatePromps[2].prompt}
            />
          )}
          <div></div>

          {showCleanlinessLevel && (
            <HandleBotReply
              chat={roomatePromps[3].zilly}
              prompt={roomatePromps[3].prompt}
              data={name}
            />
          )}

          {showCleanlinessLevel && (
            <CleanlinessLevel setPreferedCleanliness={setPreferedCleanliness} />
          )}
          {preferedCleanliness !== "" && (
            <HandleUserReply
              data={preferedCleanliness.toLowerCase()}
              prompt={roomatePromps[4].prompt}
              chat={roomatePromps[4].zilly}
            />
          )}

          {preferedCleanliness !== "" && (
            <HandleBotReply
              chat={roomatePromps[5].zilly}
              prompt={roomatePromps[5].prompt}
              data={name}
            />
          )}

          {showLifestyleLevel && (
            <LifestyleLevel setPreferedLifestyle={setPreferedLifestyle} />
          )}
          {preferedLifestyle !== "" && (
            <HandleUserReply
              data={preferedLifestyle.toLowerCase()}
              prompt={roomatePromps[6].prompt}
              chat={roomatePromps[6].zilly}
            />
          )}

          {preferedLifestyle !== "" && (
            <HandleBotReply
              chat={roomatePromps[7].zilly}
              prompt={roomatePromps[7].prompt}
              data={preferedLifestyle.toLowerCase()}
            />
          )}

          {preferedLifestyle !== "" && (
            <HandleBotReply
              chat={roomatePromps[8].zilly}
              prompt={roomatePromps[8].prompt}
              data={""}
            />
          )}

          {showMonthlyRent && <MonthlyRent setMonthlyRent={setMonthlyRent} />}

          {monthlyRent !== "" && (
            <HandleUserReply
              data={monthlyRent}
              chat={roomatePromps[9].zilly}
              prompt={roomatePromps[9].prompt}
            />
          )}

          {monthlyRent !== "" && (
            <HandleBotReply
              chat={roomatePromps[10].zilly}
              prompt={roomatePromps[10].prompt}
              data={name}
            />
          )}

          {showSmokingQuestion && (
            <SmokingStatus setSmokingStatus={setSmokingStatus} />
          )}

          {smokingStatus !== "" && (
            <HandleUserReply
              data={smokingStatus}
              chat={roomatePromps[11].zilly}
              prompt={roomatePromps[11].prompt}
            />
          )}

          {smokingStatus !== "" && (
            <HandleBotReply
              chat={roomatePromps[12].zilly}
              prompt={roomatePromps[12].prompt}
              data={name}
            />
          )}

          {showDrinkingQuestion && (
            <DrinkingStatus setDrinkingStatus={setDrinkingStatus} />
          )}

          {drinkingStatus !== "" && (
            <HandleUserReply
              data={drinkingStatus}
              chat={roomatePromps[13].zilly}
              prompt={roomatePromps[13].prompt}
            />
          )}

          {drinkingStatus !== "" && (
            <HandleBotReply
              chat={roomatePromps[14].zilly}
              prompt={roomatePromps[14].prompt}
              data={name}
            />
          )}

          {showRomanceQuestion && (
            <RomanticStatus setRomanticStatus={setRomanticStatus} />
          )}

          {romanticStatus !== "" && (
            <HandleUserReply
              data={romanticStatus}
              chat={roomatePromps[15].zilly}
              prompt={roomatePromps[15].prompt}
            />
          )}

          {romanticStatus !== "" && (
            <HandleBotReply
              chat={roomatePromps[16].zilly}
              prompt={roomatePromps[16].prompt}
              data={name}
            />
          )}

          {showPetsQuestion && <PetsStatus setPetStatus={setPetStatus} />}

          {petStatus !== "" && (
            <HandleUserReply
              data={name}
              chat={roomatePromps[17].zilly}
              prompt={roomatePromps[17].prompt}
            />
          )}

          {petStatus !== "" && (
            <HandleBotReply
              data={name}
              chat={roomatePromps[18].zilly}
              prompt={roomatePromps[18].prompt}
            />
          )}

          {showGenderPreferenceQuestion && (
            <GenderPreference setGenderPreference={setGenderPreference} />
          )}

          {genderPreference !== "" && (
            <HandleUserReply
              data={genderPreference}
              chat={roomatePromps[19].zilly}
              prompt={roomatePromps[19].prompt}
            />
          )}
          {genderPreference !== "" && (
            <HandleBotReply
              chat={roomatePromps[20].zilly}
              prompt={roomatePromps[20].prompt}
              data={name}
            />
          )}
        </ScrollToBottom>
        <br />
        {name === "" ? (
          <div className="bottom-cont">
            <Formik
              initialValues={{
                name: "",
              }}
              onSubmit={(
                values: Values,
                { setSubmitting }: FormikHelpers<Values>
              ) => {
                setTimeout(() => {
                  setName(values.name);
                  setSubmitting(false);
                }, 500);
              }}
            >
              <Form className="bottom-cont">
                <Field
                  id="name"
                  className="form-input"
                  name="name"
                  placeholder="What is your name?"
                />
              </Form>
            </Formik>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Zilly;
