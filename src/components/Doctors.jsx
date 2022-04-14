import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { DoctorFunc } from "../redux/action"
import "../styles/Doctors.css"

export const Doctors = ()=>{
    let doctorData = useSelector((state)=>state.clinicData[0])
    let id = useSelector((state)=>state.clinicData[1])
    // console.log("Print DoctorData",doctorData)
    const mapData = doctorData[0].Doctor_info
    // console.log("mapData",mapData)
    let dispatch = useDispatch()
    let navigate = useNavigate()

    function handleAvailability(i,index){
       let payload = {
           clinicId : id,
           doctorId : i,
           timeId : index
       }
       console.log(payload)
     dispatch(DoctorFunc(payload))
    }
    return(
        <div>
          {mapData.map((e)=>{
              return(
                  <div className="mapData">
                      <div>
                          <img src={e.img} alt="img" />
                      </div>
                      <div>
                      <div className="drDetails">
                         <div>
                         <p><span className="spanEle">Name :</span> {e.name}</p>
                          <p><span className="spanEle">Speciality :</span> {e.speciality}</p>
                         </div>
                          <div>
                          <p><span className="spanEle">Fees :</span> ₹ {e.fees}</p>
                          <p><span className="spanEle">Timings :</span> {e.available}</p>
                          </div>
                          <div className="checkBtn">
                          <button onClick={()=>{
                              let data = {
                                  one:e.d_id,
                                  two:e.p_id
                              }
                              localStorage.setItem("doctorId",JSON.stringify(data))
                              navigate("/appointment")
                          }}>Check for Appointment</button>
                      </div>
                         
                      </div>
                     
                      </div>
                     
                  </div>
              )
          })}
        </div>
    )
}