import React, { useState } from 'react';

import Switch from "react-switch";

function WeekPicker() {
  const [days, setState] = useState({
    u: false,
    m: false,
    t: false,
    w: false,
    r: false,
    f: false,
    s: false
  });

  const changeHandler = e => {
     setState({...days, [e.target.name]: !e.target.checked})
  }

  return (
    <div className="btn-group btn-group-sm" role="group">
      <div className="day-container">
        <h6>Sunday</h6>
        <Switch onChange={e=> setState({...days, 'u' : !days['u']})} checked={ days['u'] } />
      </div>
      <div className="day-container">
        <h6>Monday</h6>
        <Switch onChange={e=> setState({...days, 'm' : !days['m']})} checked={ days['m'] } />
      </div>
      <div className="day-container">
        <h6>Tuesday</h6>
        <Switch onChange={e=> setState({...days, 't' : !days['t']})} checked={ days['t'] } />
      </div>
      <div className="day-container">
        <h6>Wednesday</h6>
        <Switch onChange={e=> setState({...days, 'w' : !days['w']})} checked={ days['w'] } />
      </div>
      <div className="day-container">
        <h6>Thursday</h6>
        <Switch onChange={e=> setState({...days, 'r' : !days['r']})} checked={ days['r'] } />
      </div>
      <div className="day-container">
        <h6>Friday</h6>
        <Switch onChange={e=> setState({...days, 'f' : !days['f']})} checked={ days['f'] } />
      </div>
      <div className="day-container">
        <h6>Saturday</h6>
        <Switch onChange={e=> setState({...days, 's' : !days['s']})} checked={ days['s'] } />
      </div>
  </div>
  )
}

export default WeekPicker;
