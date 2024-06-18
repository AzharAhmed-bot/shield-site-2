
interface ButtonProp{
    name: string,
    onClick?:() => void,
    style?:string
}

const Button=({name,style='',onClick}:ButtonProp)=>{

    return(
        <button className={`${style}`} onClick={onClick}>
        {name}
        </button>
    )
}

export default Button;