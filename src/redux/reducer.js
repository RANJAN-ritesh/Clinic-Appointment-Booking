import { ALLDATA, CHECK_HISTORY, CLINIC, DOCTORS, FIN } from "./actionTypes"

const nameInitialState = {
    alldata : [],
    clinicData:[],
    fin:{}
}
export const reducer = (state = nameInitialState, {type,payload}) => {
    switch (type) {
        case ALLDATA:
            return {
                ...state,
                alldata : payload
            }

        case CLINIC:
            return{
                ...state,
                clinicData:[state.alldata.filter((e)=>e.id === payload),payload]
            }
        
        case DOCTORS:
            let m = state.alldata
            function appointment(){
                
                let l = ( payload.clinicID)
                let n = payload.docID
                let o = payload.data
                m[l].Doctor_info[n].timings[o] = "BOOKED"
              }
            
            appointment()
            
            return{
              ...state,
              alldata:m
            }
        case FIN:
            return{
             ...state,
             fin:payload
            }
        
        case CHECK_HISTORY:
            let arr = state.alldata
            function history(){
                
                let l = ( payload.clinicID)
                let n = payload.docID
                let o = payload.data
                arr[l].Doctor_info[n].history.push(o)
              }
            
            history()
            return{
                ...state,
                alldata:arr
            }
        default:
            return state
    }
}