import React, { useState } from 'react';

// const MyComponent = () => {
//     const [variableMessage, setVariableMessage] = useState("Initial message");
    
//     return (
//         <div>
//             <h1>My Component</h1>
//             <div>{variableMessage}</div>
//             {/* Button to change the message */}
//             <button onClick={() => setVariableMessage("Updated message!")}>
//                 Update Message
//             </button>
//         </div>
//     );
// };

// export default MyComponent

const MyComponent = () => {
   const [image, setVariableMessage] = useState(["imgs/1.jpg","imgs/2.jpg","imgs/3.jpg","imgs/4.jpg","imgs/5.jpg","imgs/6.jpg"]);
   const [index,setindex]=useState(1);
   return(
   
   < div>
   <button onClick={() => setindex(index+1)}> → </button> 
   <button onClick={() => setindex(index-1)}> ← </button>

   <img src={image[index]} alt=""></img>

   </div>
    
   )
};

export default MyComponent