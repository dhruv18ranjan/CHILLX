import { useEffect } from "react";
import { fetchData } from "./utils/api"
import { useDispatch, useSelector } from "react-redux";
import { getApiConfiguration } from "./store/homeSlice";

function App() {

  const dispatch = useDispatch();
  const {url} =useSelector((state)=>state.home);

  useEffect(()=>{
    apiTesting();
  },[])

  const apiTesting = () =>{
    fetchData("/movie/popular").then((res)=>{
      console.log(res);
      dispatch(getApiConfiguration(res))
    })
  }

  return (
    <div className='App'>
      App {url?.total_pages}
    </div>
  )
}

export default App
