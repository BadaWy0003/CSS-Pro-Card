import React from "react"
import ReactDOM from "react-dom"
import Component1 from "./Components/Component1"
import Component15 from "./Components/Component1-5"
import Component2 from "./Components/Component2"
import Component3 from "./Components/Component3"
import Component4 from "./Components/Component4"

//const pic = (<img src="./images/github-Icon.png"/>)
function Main(){
    return(<div id="container">
            <Component1/>
            
                
                <Component2/>
                <Component3/>
                <Component4/>
            
        </div>)
}
ReactDOM.render(<Main/>,document.getElementById("root"))
