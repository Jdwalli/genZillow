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
import { roommatePrompts } from "../helpers/prompts";
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
                chat={roommatePrompts[0].zilly}
                prompt={roommatePrompts[0].prompt}
              />
              <HandleBotReply
                chat={roommatePrompts[1].zilly}
                prompt={roommatePrompts[1].prompt}
              />
            </>
          )}
          {name !== "" && (
            <HandleUserReply
              data={name}
              chat={roommatePrompts[2].zilly}
              prompt={roommatePrompts[2].prompt}
            />
          )}
          <div></div>

          {showCleanlinessLevel && (
            <HandleBotReply
              chat={roommatePrompts[3].zilly}
              prompt={roommatePrompts[3].prompt}
              data={name}
            />
          )}

          {showCleanlinessLevel && (
            <CleanlinessLevel setPreferedCleanliness={setPreferedCleanliness} />
          )}
          {preferedCleanliness !== "" && (
            <HandleUserReply
              data={preferedCleanliness.toLowerCase()}
              prompt={roommatePrompts[4].prompt}
              chat={roommatePrompts[4].zilly}
            />
          )}

          {preferedCleanliness !== "" && (
            <HandleBotReply
              chat={roommatePrompts[5].zilly}
              prompt={roommatePrompts[5].prompt}
              data={name}
            />
          )}

          {showLifestyleLevel && (
            <LifestyleLevel setPreferedLifestyle={setPreferedLifestyle} />
          )}
          {preferedLifestyle !== "" && (
            <HandleUserReply
              data={preferedLifestyle.toLowerCase()}
              prompt={roommatePrompts[6].prompt}
              chat={roommatePrompts[6].zilly}
            />
          )}

          {preferedLifestyle !== "" && (
            <HandleBotReply
              chat={roommatePrompts[7].zilly}
              prompt={roommatePrompts[7].prompt}
              data={preferedLifestyle.toLowerCase()}
            />
          )}

          {preferedLifestyle !== "" && (
            <HandleBotReply
              chat={roommatePrompts[8].zilly}
              prompt={roommatePrompts[8].prompt}
              data={""}
            />
          )}

          {showMonthlyRent && <MonthlyRent setMonthlyRent={setMonthlyRent} />}

          {monthlyRent !== "" && (
            <HandleUserReply
              data={monthlyRent}
              chat={roommatePrompts[9].zilly}
              prompt={roommatePrompts[9].prompt}
            />
          )}

          {monthlyRent !== "" && (
            <HandleBotReply
              chat={roommatePrompts[10].zilly}
              prompt={roommatePrompts[10].prompt}
              data={name}
            />
          )}

          {showSmokingQuestion && (
            <SmokingStatus setSmokingStatus={setSmokingStatus} />
          )}

          {smokingStatus !== "" && (
            <HandleUserReply
              data={smokingStatus}
              chat={roommatePrompts[11].zilly}
              prompt={roommatePrompts[11].prompt}
            />
          )}

          {smokingStatus !== "" && (
            <HandleBotReply
              chat={roommatePrompts[12].zilly}
              prompt={roommatePrompts[12].prompt}
              data={name}
            />
          )}

          {showDrinkingQuestion && (
            <DrinkingStatus setDrinkingStatus={setDrinkingStatus} />
          )}

          {drinkingStatus !== "" && (
            <HandleUserReply
              data={drinkingStatus}
              chat={roommatePrompts[13].zilly}
              prompt={roommatePrompts[13].prompt}
            />
          )}

          {drinkingStatus !== "" && (
            <HandleBotReply
              chat={roommatePrompts[14].zilly}
              prompt={roommatePrompts[14].prompt}
              data={name}
            />
          )}

          {showRomanceQuestion && (
            <RomanticStatus setRomanticStatus={setRomanticStatus} />
          )}

          {romanticStatus !== "" && (
            <HandleUserReply
              data={romanticStatus}
              chat={roommatePrompts[15].zilly}
              prompt={roommatePrompts[15].prompt}
            />
          )}

          {romanticStatus !== "" && (
            <HandleBotReply
              chat={roommatePrompts[16].zilly}
              prompt={roommatePrompts[16].prompt}
              data={name}
            />
          )}

          {showPetsQuestion && <PetsStatus setPetStatus={setPetStatus} />}

          {petStatus !== "" && (
            <HandleUserReply
              data={name}
              chat={roommatePrompts[17].zilly}
              prompt={roommatePrompts[17].prompt}
            />
          )}

          {petStatus !== "" && (
            <HandleBotReply
              data={name}
              chat={roommatePrompts[18].zilly}
              prompt={roommatePrompts[18].prompt}
            />
          )}

          {showGenderPreferenceQuestion && (
            <GenderPreference setGenderPreference={setGenderPreference} />
          )}

          {genderPreference !== "" && (
            <HandleUserReply
              data={genderPreference}
              chat={roommatePrompts[19].zilly}
              prompt={roommatePrompts[19].prompt}
            />
          )}
          {genderPreference !== "" && (
            <HandleBotReply
              chat={roommatePrompts[20].zilly}
              prompt={roommatePrompts[20].prompt}
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
