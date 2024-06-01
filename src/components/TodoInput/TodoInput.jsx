export default function TodoInput({value, ...props }){
    return(
        <div>
            <form {...props}>
                <input type="text" value={value} placeholder="Please input your task" name="" id="" />
                <input type="submit" value="+" />
            </form>
        </div>
        
    )
}