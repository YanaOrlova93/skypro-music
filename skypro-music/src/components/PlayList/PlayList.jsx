import PlayListItem from '../PlayListItem/PlayListItem';
import './PlayList.css'



function PlayList () {
   const number = 10
  return (
        <div className="content__playlist playlist">
                <PlayListItem number={number}/>

                
              </div>
    )
}

export default PlayList;