import React, {useState}  from "react"
import Skip from "./pages/Skip";




function App() {

  const [skip,setSkip] = useState([])
  
  return (
    <div>
      <Skip/>
    </div>
  );
}

export default App;
