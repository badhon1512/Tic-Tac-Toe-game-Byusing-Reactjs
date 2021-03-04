

const Square=(props)=>{

  return(

    <div style={{marginTop:100, marginLeft:100, textAlign:"center"}}>



      <button


onClick={()=>{props.Play(props.score.id)}}
      
      
      >{props.score.score}</button>

      {
        props.score.id %3 ===0?<br/>: ''
        
          
        
      }




    </div>
  )
}

export default Square