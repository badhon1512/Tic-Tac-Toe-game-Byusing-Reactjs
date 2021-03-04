import Square from "./Square"

function Board(props)
{

  return(
    <div>


    {
       props.scoreInfo.map((info)=>{

        

        if(info.id%3===0)
        {
         /// alert('call');
          
           
        }
      
            
            return(
              

              <Square key={info.id}
              
              score={info}
              Play={props.Play}
              
              />
              
       
            )
          
         
           

          


        
       })
    }

    </div>

    
  )
}

export default Board