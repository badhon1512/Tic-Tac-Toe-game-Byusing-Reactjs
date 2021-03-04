

function Players(props)
{

  
  return(




    <div>


      {
         props.turn==='x'?  <h1>Player 1's turn</h1>:  <h1>Player 2's turn</h1>
      }

      {
        
        <h1>{props.winner}</h1>
      
      }

     
    </div>
  )
}

export default Players