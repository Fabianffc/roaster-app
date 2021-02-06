import { playerData } from "../data/playerData"

function Welcome() {
    const currentHour = new Date().getHours()
    const message = currentHour < 5 ? "Why are you still up?" 
                    : currentHour < 12 ? "Good Morning"
                    : currentHour < 18 ? "Good Afternoon"
                    :  "Good Evening"
//You can also do it this way 
/*

*/

    return (
        <>
            <p>{message} sports fans!</p>
            <h2 >Welcome to Astros Fans!!⚾️</h2>
        </>
    )
}

export default Welcome;