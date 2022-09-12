
import React, {useState, useEffect, FunctionComponent} from "react";

import { MonthlyRentProps } from "../types/handlers"

export const MonthlyRent: FunctionComponent<MonthlyRentProps> = (props: MonthlyRentProps) => {
  const [monthlyRent, setMonthlyRent] = useState("")

  function handleChange(e:any) {
    setMonthlyRent(e.target.value)
}

  useEffect(() => {
    setTimeout(() => {
      props.setMonthlyRent(monthlyRent)
    }, 1000);
}, [monthlyRent])


return (
  <div className="weight-cont">

      <div className="body">
          <input type="number" onChange={(e) => handleChange(e)} onSubmit={(e) => console.log(e)}
              placeholder={"0"} className="inp" />
          <span className='msm'>$</span>
      </div>
  </div>
)



}