import { useSelector } from "react-redux"
import "../styles/summary.css"

export const Summary = ()=>{
    const data = useSelector(state=>state.fin)
    console.log(data)
 return(
     <div className="summaryParent">
        <div>
            <p className="headingSumm">Booking Summary</p>
            <div className="divBorder">
                <p><span className="spanItem">Doctor Details</span></p>
                <p><span className="spanItem1">Doctor Name :</span> {data.name}</p>
                <p><span className="spanItem1">Speciality :</span> {data.spec}</p>
            </div>
            <div className="divBorder">
                <p><span className="spanItem">Patient Details</span></p>
                <p><span className="spanItem1">Patient Name : </span>{data.patient}</p>
                <p><span className="spanItem1">Patient Age :</span> {data.pAge}</p>
                <p><span className="spanItem1">Timings :</span> {data.time}</p>
                <p><span className="spanItem1">Amount :</span> ₹ {data.amount}</p>
            </div>
            <div >
                <p><span className="spanItem">Booking Details</span></p>
                <p><span className="spanItem1">Booked On :</span> {data.cdate}</p>
                <p><span className="spanItem1">Booked For : </span>{data.date}</p>
            </div>
        </div>
     </div>
 )   
}