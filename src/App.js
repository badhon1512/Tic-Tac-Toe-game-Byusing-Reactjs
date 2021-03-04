import logo from './logo.svg';
import './App.css';
import Board from './components/Board'
import {useState} from 'react'

import {useEffect} from 'react'

import Player  from './components/Players.jsx'

function App() {

  const [scoreInfo,setScoreInfo]=useState([{id:1,score:'available'},
  {id:2,score:'available'},
  {id:3,score:'available'},
  {id:4,score:'available'},
  {id:5,score:'available'},
  {id:6,score:'available'},
  {id:7,score:'available'},
  {id:8,score:'available'},
  {id:9,score:'available'}


])

const [turn,setTurn]=useState('x')
const [winner,setWinner]=useState('Game playing')




useEffect(()=>{


  CheckWinter()


 
  //console.log("winner",winner)

})





const Play=(id)=>{


  setTurn('x')
  let check=scoreInfo.filter((item)=>

    item.score!=='available'

   
  )


  if(check.length%2===0)
  {
   
    setTurn('O')
  }


  let updatedItem=scoreInfo.map((item)=>{

    if(item.id===id)
    {
      item.score=turn
    }

    return item;

  })

  setScoreInfo(updatedItem);
}


function CheckWinter()
{
  
  for(let i=0;i<scoreInfo.length;i++)
  {

    ///console.log(scoreInfo[i].score,scoreInfo[i+1].score,scoreInfo[i+2].score)

    if(scoreInfo[i].score==='x'&&scoreInfo[i+1].score==='x'&&scoreInfo[i+2].score==='x')
    {

      setWinner("player 1 win the match")
     

    }


    if(scoreInfo[i].score==='O'&&scoreInfo[i+1].score==='O'&&scoreInfo[i+2].score==='O')
    {

      setWinner("player 2 win the match")

    }
    i+=2

  }



  console.log(scoreInfo[1].score,scoreInfo[4].score,scoreInfo[7].score)

  for(let i=0;i<3;i++)
  {

    console.log(i,i+3,i+6);


    if(scoreInfo[i].score==='x'&&scoreInfo[i+3].score==='x'&&scoreInfo[i+6].score==='x')
    {

      setWinner("player 1 win the match")
     

    }


    if(scoreInfo[i].score==='O'&&scoreInfo[i+3].score==='O'&&scoreInfo[i+6].score==='O')
    {

      setWinner("player 2 win the match")

    }
   

  }




  //console.log(scoreInfo[0].score,scoreInfo[4].score,scoreInfo[8].score)

  if(scoreInfo[0].score==='x'&&scoreInfo[4].score==='x'&&scoreInfo[8].score==='x')
  {

    setWinner("player 1 win the match")
   

  }


  if(scoreInfo[0].score==='O'&&scoreInfo[4].score==='O'&&scoreInfo[8].score==='O')
  {

    setWinner("player 2 win the match")

  }



  if(scoreInfo[2].score==='x'&&scoreInfo[4].score==='x'&&scoreInfo[6].score==='x')
  {

    setWinner("player 1 win the match")
   

  }


  if(scoreInfo[2].score==='O'&&scoreInfo[4].score==='O'&&scoreInfo[6].score==='O')
  {

    setWinner("player 2 win the match")

  }

  
}

  return (
    <div className="App">



      <Player turn={turn}
      
      winner={winner}
      
      />

      <Board Play={Play} scoreInfo={scoreInfo}/>
     
    </div>
  );
}

export default App;
