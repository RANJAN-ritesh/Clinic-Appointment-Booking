import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Navigate, useNavigate } from "react-router-dom"
import { checkHistory, DoctorFunc, fin } from "../redux/action"
import "../styles/appointment.css"

export const Appointment = ()=>{
    let [date,setDate] = useState("")
    let navigate = useNavigate()
    let [time,setTime] = useState("")
    let [patient,setPatient] = useState("")
    let [patientAge,setPatientAge] = useState("")
    let doctorId = JSON.parse(localStorage.getItem("doctorId"))
    console.log(doctorId)
    let narr = []
    let data = useSelector((state)=>state.alldata.map((e)=>{narr.push(e)}))
    let m = narr.filter((e)=>e.id == doctorId.two)
    let n = m[0].Doctor_info.filter((e)=>e.d_id == doctorId.one)
    let map = n[0]
    console.log(m)
    console.log("n",n)
    let dispatch = useDispatch()

    let count = 0;

    map.timings.map((e)=>{
        if(e == "BOOKED"){
            count++
        }
    })

    let flag = false;

    if(count == map.timings.length){
        flag = true
    }

    const HandleAppointment = (e)=>{
      let clinicID = doctorId.two
      let docID = doctorId.one
      let data = e
     let payload = {
         clinicID,
         docID,
         data
     }
        console.log(payload)
        dispatch(DoctorFunc(payload))
    }

    function handleTime(e){
        setTime(e)
    }

    function handleBooking(){
          
        var today = new Date();
        var Tdate = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        // var Ttime = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        
                  const payload = {
                      "date":date,
                      "amount":map.fees,
                      "time":time,
                      "cdate":Tdate,
                      "img":map.img,
                      "name":map.name,
                      "spec":map.speciality,
                      "patient":patient,
                      "pAge":patientAge
                  }
                  
                  let dateCheck1 = Tdate.split("-").map(Number)
                  let dateCheck2 = date.split("-").map(Number)
                  console.log(dateCheck1)
                  console.log(dateCheck2)
                let count = 0;
                if(dateCheck1[0]<=dateCheck2[0]){
                    count++
                }
                if(dateCheck1[1]<=dateCheck2[1]){
                    count++
                }
                if(dateCheck1[1] === dateCheck2[1]){
                    if(dateCheck1[2] < dateCheck2[2]){
                        count++
                    }
                   
                }
                console.log(count)
                  if(payload.date != "" &&   payload.time != "" && payload.patient != "" && payload.patientAge != ""){
                      if(count === 3){
                        dispatch(fin(payload))
                        let clinicID = doctorId.two
                  let docID = doctorId.one
                  let data = payload
                 let payload2 = {
                     clinicID,
                     docID,
                     data
                 }
                 dispatch(checkHistory(payload2))
                        alert('Booking Confirmed - You will be taken to Summary page')
                        navigate("/summary")
                      }else{
                          alert("Please fill the Date after today")
                      }
                    
                  }else{
                      alert("Please Check If Date , Time ,Patient name and Age are Filled")
                  }
               
              }

    const HandleHistory = ()=>{
        localStorage.setItem("docHistory",JSON.stringify(doctorId))
        navigate("/history")
    }
    return(
        <div className="parentAppointment">
        <div className="DrDiv">
        <div>
        <img src={map.img} />
        </div>
           <div>
               <p className="headers">Doctor Details</p>
               <p>Name : {map.name}</p>
               <p>Speciality : {map.speciality}</p>
               <p>Fees : ₹ {map.fees} </p>
           </div>
        </div>
       
        <div className="patientDiv">
           <p className="headers">Patient Details</p>
           <div className="patientDetails">
           <div>
        <label>Patient Name : </label>
            <input type="text" onChange={(e)=>setPatient(e.target.value)}/>
        </div>
        <div>
        <label>Patient Age : </label>
            <input type="Number" onChange={(e)=>setPatientAge(e.target.value)} />
        </div>
           </div>
         
        <div>
           
                <p ><span className="headers">Pick a Date & Slot</span><span> ( Pick only One slot .)</span></p>
            
            <div >
            <div>
            <label>Select Date :   </label>
                         <input type="date" onChange={(e)=>setDate(e.target.value)}/>
            </div>
            <div className="appointmentMap">
            { flag ? <h1>Appointments not available</h1> : map.timings.map((e,i)=>{
              return(
                   <button onClick={()=>{HandleAppointment(i)
                   handleTime(e)}}>{e}</button>
                   )
           })}
            </div>
           
            </div>
            <div className="confirmBtn">
                <button onClick={handleBooking}>Confirm Booking</button>
            </div>
            <div className="historyBtn">
                <button onClick={HandleHistory}>Check History</button>
            </div>
        </div>
        </div>
        
        </div>
    )
}