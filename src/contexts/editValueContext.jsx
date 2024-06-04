import React,{useState,useContext} from "react";
const EditValueStateContext = React.createContext();
const EditValueStateFunction = React.createContext();
// Custom hook for the editing state context
export function useEditingValue(){
    return useContext(EditValueStateContext);
}
// Custom hook for the editing state toggle function
export function useEditingValueFunction(){
    return useContext(EditValueStateFunction);
}
export default function EditValueProvider({children}){
    const [editValue, setEditValue] = useState('meeeelo')
    const values =[
        editValue,
        setEditValue
    ]
    function setEdit(){
        alert('jump')
    }
    return(
        <EditValueStateContext.Provider value={values}>
            <EditValueStateFunction.Provider value={setEdit}>
                {children}
            </EditValueStateFunction.Provider>
        </EditValueStateContext.Provider>
        
    )
}