import React, { useState } from "react";

const Stopwatch = (props) => {
  
  return (
    <div>
      <span>{props.time.h >= 10 ? props.time.h : "0" + props.time.h}</span>
      &nbsp;:&nbsp;
      <span>{props.time.mn >= 10 ? props.time.mn : "0" + props.time.mn}</span>
      &nbsp;:&nbsp;
      <span>{props.time.s >= 10 ? props.time.s : "0" + props.time.s}</span>
      &nbsp;:&nbsp;
      <span>{props.time.ms >= 10 ? props.time.ms : "0" + props.time.ms}</span>
      
    </div>
  );
};

export default Stopwatch;
