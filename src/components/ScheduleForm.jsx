import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import axios from "axios";

import TimePicker from 'react-time-picker';
import DurationPicker from 'react-duration-picker';

import ErrorMessage from "./ErrorMessage";
import WeekPicker from "./WeekPicker";

function ScheduleForm() {
  const {register, handleSubmit, errors, formState: { isSubmitting }} = useForm();
  const [timeValue, onChangeTime] = useState('12:00');
  const [durationValue, onChangeDuration] = useState({hours: 1, minutes: 2, seconds: 3});


  // TODO Calculate the min/max float using formula
  function onSubmit(config) {
    axios.post("/configs", config)
      .then(res => {
        if(res.data === "Range Conflict"){
          alert("Range Conflict");
        } else {
          console.log(res.data);
        }
      })
      .catch(err => {
        console.log(err);
      });
  }

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
            value={timeValue}
            disableClock={true}
          />
        </div>

        <br/>

        <div>
            <h4>How long?</h4>
              <DurationPicker
                onChange={onChangeDuration}
                value={durationValue}
                noHours={true}
              />
        </div>
     </div>
  </div>
  )
}

export default ScheduleForm;
