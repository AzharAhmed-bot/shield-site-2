import programs from "../../assets/programs.png"


const Opportunity=()=>{

    return(
        <>
        <div className="mt-20 flex items-center justify-center ">
            <img className="w-96 h-64" src={programs} alt="Programs" />
            
        </div>
        <div className="flex items-center justify-center ">
        <h1 className="bg-[#003445] px-12 py-6 rounded-lg text-white mt-[-12px]">Opportunity Areas</h1>  
        </div>
        
        </>
    )
}

export default Opportunity;