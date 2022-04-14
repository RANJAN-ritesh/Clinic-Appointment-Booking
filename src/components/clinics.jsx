import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { ClinicFunc } from "../redux/action"
import "../styles/clinics.css"

export const Clinics = ()=>{
    // let [data,setData] = useState([])
    let data = useSelector((state)=>state.alldata)
    let dispatch = useDispatch()
    let navigate = useNavigate()
    console.log("print data" ,data)

    function handleClinicClick(id){
        console.log(id)
      dispatch(ClinicFunc(id))
    }
    return(
        <div>
           <div className="parent">
               {
                   data.map((e)=>{
                       return(
                           <div onClick={()=>{
                                  handleClinicClick(e.id)
                                  navigate("/doctor")
                              }} className="clinicsDiv">
                              <div className="imgDiv">
                                  <img src={e.img} alt="img" />
                              </div>
                              <div className="clinicDetails">
                                  <div>
                                  <h1>{e.clinic_name}</h1>
                                  </div>
                                  <div>
                                    <p><span className="spanEle">No. of Doctors : </span>{e.Doc_no}</p>
                                    <p><span className="spanEle">Specialities Available :</span><span className="spanEle2">| {e.Speciality_Available.map((spec)=>spec+" "+" | "+" ")} </span></p>
                                  </div>
                              </div>
                           </div>
                       )
                   })
               }
           </div>
        </div>
    )
}