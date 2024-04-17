import React from 'react';
import { useState } from 'react'; 
import './Form.css';

function Form(props) {
  
  const updateTT = () => {
    props.setTT( [Mon, Tue, Wed, Thu, Fri,])
    console.log(props.TT);
  };

  const [Mon, setMon] = useState(0);
  const [Tue, setTue] = useState(0);
  const [Wed, setWed] = useState(0);
  const [Thu, setThu] = useState(0);
  const [Fri, setFri] = useState(0);
  const [Sat, setSat] = useState(0);
  const [Pre, setPre] = useState(0);
  const [Occ, setOcc] = useState(0);

  return (
    <div className = {props.cn}>
      <div className = "left">
        <h2 className = "FormHeader">Requirement</h2>
      <form>
        <div className = "inDiv"><label className = "FormText">Percentage Requirement :</label> <input></input></div>
      </form>
        <h2 className = "FormHeader">Time Table</h2>
      <form>
        <div className = "inDiv"><label className = "FormText">Monday : </label> <input onChange = {e => setMon(e.target.value)}></input></div>
        <div className = "inDiv"><label className = "FormText">Tuesday : </label> <input onChange = {e => setTue(e.target.value)}></input></div>
        <div className = "inDiv"><label className = "FormText">Wednesday : </label> <input onChange = {e => setWed(e.target.value)}></input></div>
        <div className = "inDiv"><label className = "FormText">Thursday : </label> <input onChange = {e => setThu(e.target.value)}></input></div>
        <div className = "inDiv"><label className = "FormText">Friday : </label> <input onChange = {e => setFri(e.target.value)}></input></div>
        <div className = "inDiv"><label className = "FormText">Saturday : </label> <input onChange = {e => setSat(e.target.value)}></input></div>
      </form>
      <button onClick = {updateTT}>Enter!</button>
      </div>
      <div className = "right">
        <h2 className = "FormHeader">Hours</h2>
        <form>
          <div className = "inDiv"><label className = "FormText">Occured/Total : </label><input onChange = {e => setOcc(e.target.value)}></input></div>
          <div className = "inDiv"><label className = "FormText">Present : </label><input onChange = {e => setPre(e.targer.value)}></input></div>
        </form>
        <h2 className = "FormHeader">Entered Information</h2>
        <div className = "InfoPack">
        </div>
      </div>
    </div>
  )
}

export default Form;
