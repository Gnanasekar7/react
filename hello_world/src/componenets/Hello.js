import React from "react";

const Hello=()=>{
    // return(
    //     <div>
    //         <h1>hello,JSX</h1>
    //     </div>
    // );
    return React.createElement('div',null,React.createElement('h1',null,'without JSX'))
}

export default Hello