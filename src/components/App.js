import "../App.css";
import Welcome from "welcome"
import {playerData} from "../data/playerData"

console.log("pd", playerData);

function App(){
    return(
        <div className = "container">
            <Welcome/>
            </div>
    );
}

export default App;
    

