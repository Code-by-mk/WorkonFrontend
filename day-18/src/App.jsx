import { useState ,useEffect,useMemo} from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [number, setNumber] = useState(0)

    
  // using fetch

  useEffect( ()=>
  {
    const Callapi= async ()=> {
      const result= await fetch(`https://jsonplaceholder.typicode.com/posts`);
      const response= await result.json();
      console.log(response);
    }
      Callapi();
  },[])

  useEffect(()=>{
    const Callapi= async()=> {
        const result= await axios.get(`https://jsonplaceholder.typicode.com/posts`) 
        console.log(result.data)
    }
    Callapi();
  },[])


  //  by usememo

  const doubleNumber = useMemo(() => {
    console.log("Calculating double...");
    return number * 2;
  }, [number]);

   


    //  try-catch and finally

  const numerator= 100, denominator = 'a';

  try {
       console.log(numerator/denominator);
       console.log(a);
  }
  catch(error) {
      console.log('An error caught'); 
      console.log('Error message: ' + error);  
  }
  finally {
       console.log('Finally will execute every time');
  }








  

  return (
    <>
      <h1>Welcome React</h1>
      <p>Number: {number}</p>
      <p>Double: {doubleNumber}</p>
      <button onClick={() => setNumber((count) => count + 1)}>Increment</button>

    </>
  )
}

export default App
