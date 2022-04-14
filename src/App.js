import logo from './logo.svg';
import './App.css';
import { Clinics } from './components/clinics';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { AllData } from './redux/action';
import { Route, Routes } from 'react-router-dom';
import { Doctors } from './components/Doctors';
import { Appointment } from './components/Appointment';
import { Summary } from './components/summary';
import { History } from './components/history';

function App() {
  // const [data,setData] = useState({})
  let dispatch = useDispatch()

  useEffect(()=>{

    fetch("https://clinic-api1.herokuapp.com/clinics")
    .then((res)=>res.json())
    .then((res)=>{
      console.log(res)
      dispatch(AllData(res))
    })

  },[])
  return (
    <div className="App">
      
      <Routes>
        <Route path={"/"} element={<Clinics/>} ></Route>
        <Route path={"/doctor"} element={<Doctors/>}></Route>
        <Route path={"/appointment"} element={<Appointment/>}></Route>
        <Route path={"/summary"} element={<Summary/>} ></Route>
        <Route path={"/history"} element={<History/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
