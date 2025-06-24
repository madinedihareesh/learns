import { Passion } from "./Passion"

export const Welcome=()=>{
    return(
       <>
     <h1>Welcome to React</h1>
     <Greeting/>
       </>
    )
}

const Greeting=()=>{
    return(
        <>
        <h2>Thanks for Joining the session</h2>
        <Desier/>
        </>
    )
}

const Desier=()=>{
    return(
        <>
        <p> i am very much passationate about learning react</p>
        <Passion/>
        </>
    )
}
