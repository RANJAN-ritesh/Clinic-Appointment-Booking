import { ALLDATA, CHECK_HISTORY, CLINIC, DOCTORS, FIN } from "./actionTypes"

export const AllData = (payload)=>{
  return{
      type:ALLDATA,
      payload
  }
}

export const ClinicFunc = (payload)=>{
    return{
        type:CLINIC,
        payload
    }
  }

  export const DoctorFunc = (payload)=>{
    return{
        type:DOCTORS,
        payload
    }
  }

  export const fin = (payload)=>{
    return{
      type:FIN,
      payload
    }
  }

  export const checkHistory = (payload)=>{
    return{
      type:CHECK_HISTORY,
      payload
    }
  }