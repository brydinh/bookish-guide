import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

import TimePicker from "react-time-picker";
import DurationPicker from "react-duration-picker";

import WeekPicker from "./WeekPicker";

function ScheduleForm() {
  // const {register, handleSubmit, errors, formState: { isSubmitting }} = useForm();

  const [days, onChangeDays] = useState([]);
  const [time, onChangeTime] = useState("12:00");
  const [duration, onChangeDuration] = useState({hours: 1, minutes: 2, seconds: 3});

  return (
    <div className="container">
      <div className="form">
        <div>
            <h4>What Days?</h4>
             <WeekPicker />
        </div>
        <br/>
        <div>
          <h4>What Time?</h4>
          <TimePicker
            onChange={onChangeTime}
            value={time}
            disableClock={true}
          />
        </div>
        <br/>
        <div>
            <h4>How long?</h4>
              <DurationPicker
                onChange={onChangeDuration}
                value={duration}
                noHours={true}
              />
        </div>
     </div>
  </div>
  )
}

export default ScheduleForm;
