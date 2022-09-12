import React, {Dispatch, SetStateAction} from "react";


export interface LifeStyleProps {
    setPreferedLifestyle: Dispatch<SetStateAction<string>>;
}

export interface CleanlinessProps {
    setPreferedCleanliness: Dispatch<SetStateAction<string>>;
}

export interface MonthlyRentProps {
  setMonthlyRent: Dispatch<SetStateAction<string>>;
}

export interface SmokingProps {
    setSmokingStatus: Dispatch<SetStateAction<string>>;
}

export interface DrinkingProps {
    setDrinkingStatus: Dispatch<SetStateAction<string>>;
}

export interface GenderPreferenceProps {
    setGenderPreference: Dispatch<SetStateAction<string>>;
}

export interface PetProps {
    setPetStatus: Dispatch<SetStateAction<string>>;
}

export interface PetTypeProps {
    setPetType: Dispatch<SetStateAction<string>>;
}

export interface RomanticStatusProps {
    setRomanticStatus: Dispatch<SetStateAction<string>>;
}
