import { useCallback, useState } from "react";


export function Counter (){

    const [count,setCount] = useState(0);

    const increment = useCallback(()=>setCount(function (c){
        return c+ 1;
    }),[]);

    return <>

    <p>{count}</p>

    <button onClick={increment}>Increase</button>
    </>

}