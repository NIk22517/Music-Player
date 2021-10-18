import React from "react";


const LibrarySong = ({song, songs, setCurrentSong, audioRef, isPlaying, id, setSongs}) =>{
    const songSelectHandler = async () => {
        // const selectedSong = songs.filter((state) => state.id === id);
        await  setCurrentSong(song);
        //Add active  State
        const newSong = songs.map((song) => {
            if(song.id === id){
                return{
                    ...song,
                    active: true,
                }
            }else{
                return{
                    ...song,
                    active: false,
                }
            }
        });
        setSongs(newSong);
        //here check if the song is playing
        if(isPlaying) audioRef.current.play();
    };
    return(
        <div onClick={songSelectHandler} className={`library-song-container ${song.active ? 'selected' : ""}`}>
        <img src={song.cover} alt={song.name} ></img>
        <div className="song-description">
            <h3>{song.name}</h3>
            <h4>{song.artist}</h4>
            </div>
        </div>
        
    )
}
export default LibrarySong;