import { useSelector } from "react-redux"
import "../styles/history.css"

export const History = ()=>{
    let doctorId = JSON.parse(localStorage.getItem("doctorId"))
    console.log(doctorId)
    let narr = []
    let data = useSelector((state)=>state.alldata.map((e)=>{narr.push(e)}))
    let m = narr.filter((e)=>e.id == doctorId.two)
    let n = m[0].Doctor_info.filter((e)=>e.d_id == doctorId.one)
    let history = n[0].history
    console.log("history",history)
    let length = history.length
    return(
        <div className="HistoryParent">
            {length === 0 ? <h1>No History Available</h1> : history.map((e)=>{
              return(  <div className="historyMap">
              <div>
                  <p><span className="histHead">Doctor Details</span></p>
                    <p><span className="histLabel">Doctor name :</span> {e.name}</p>
                    <p> <span className="histLabel">Specialization :</span> {e.spec}</p>
              </div>
                   <div>
                       <p><span className="histHead">Patient Details</span></p>
                       <p><span className="histLabel">Patient name :</span> {e.patient}</p>
                       <p><span className="histLabel">Patient age :</span> {e.pAge}</p>
                   </div>
                   <div>
                       <p><span className="histHead">Booking Details</span></p>
                       <p><span className="histLabel">Booked on :</span> {e.cdate}</p>
                       <p><span className="histLabel">Booked For :</span> {e.date}</p>
                   </div>
                </div>)
            }) }
        </div>
    )
}