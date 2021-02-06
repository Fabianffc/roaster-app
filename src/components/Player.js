function Player(props) {
    const hobbies = props.hobbies.map(hobby =>{
        return <li>{hobby}</li>

    })

    console.log(hobbies);
    return (
        <div>
            <h3>{props.firstName} || number {props.jersey}</h3>
           <ul>{hobbies}</ul> 
        </div>)
}
export default Player;

//player name h3
// add a list of hobbies under each player