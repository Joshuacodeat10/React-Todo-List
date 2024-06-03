import React,{useState,useContext} from "react";
const EditingStateContext = React.createContext();
const EditingToggleFunction = React.createContext();
// Custom hook for the editing state context
export function useEditingState(){
    return useContext(EditingStateContext);
}
// Custom hook for the editing state toggle function
export function useEditingFunction(){
    return useContext(EditingToggleFunction);
}
export default function EditingProvider({children}){
    const [isEditing, setIsEditing] = useState(true)
    function onEdit(){
        setIsEditing(!isEditing)
    }
   
    return(
        <EditingStateContext.Provider value={isEditing}>
            <EditingToggleFunction.Provider value={onEdit}>
                {children}
            </EditingToggleFunction.Provider>
        </EditingStateContext.Provider>
        
    )
}