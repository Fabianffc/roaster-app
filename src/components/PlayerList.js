import Player from "./Player"

function PlayerList(props){
    console.log("props",props);

//Create a list of Players components
    const allPlayers = props.players.map(player =>{
        return <Player 
        firstName = {player.firstName}
        jersey = {player.jerseyNumber}
        hobbies = {player.hobbies}
        />
    })
   return <p>{allPlayers}</p>
}
export default PlayerList;