import './todoinput.css'
export default function TodoInput({value,onChange, ...props }){
    return(
        
            <form className='todoInput' {...props}>
                <input type="text" onChange={onChange} value={value}  placeholder="Please input your task" name="" id="" />
                <input type="submit" value="+" />
            </form>
        
        
    )
}