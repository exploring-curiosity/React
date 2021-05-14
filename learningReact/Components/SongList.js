import React,{useState, useEffect} from 'react';
import { v1 as uuidv1 } from 'uuid';
import NewSongForm from './NewSongForm';

const SongList = () => {
    const [songs,setSongs]=useState([
        {title:'Song1',id:1},
        {title:'Song2',id:2},
        {title:'Song3',id:3},
    ]);
    const addSong=(title)=>{
        setSongs([...songs,{title,id:uuidv1()}])
    }
    const [age,setAge]=useState(20);
    useEffect(()=>{
        console.log('Use effect ran(songs)',songs);
    },[songs])
    useEffect(()=>{
        console.log('Use effect ran(age)',age);
    },[age])
    return ( 
        <div className='song-list'>
            <ul>
                {songs.map(song=> {
                    return ( <li key={song.id}>{song.title}</li>)
                })}
            </ul>
            <NewSongForm addSong={addSong}/>
            <button onClick={()=>{setAge(age+1)}}>Add 1 to Age : {age} </button>
        </div>
     );
}
 
export default SongList;