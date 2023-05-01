import { useEffect } from "react";
import { fetchData } from "./utils/api"

function App() {

  useEffect(()=>{
    apiTesting();
  },[])

  const apiTesting = () =>{
    fetchData("/movie/popular").then((res)=>{
      console.log(res);
    })
  }

  return (
    <div className='App'>
      App
    </div>
  )
}

export default App
