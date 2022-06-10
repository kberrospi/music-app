import { useContext } from 'react';
import { MusicContext } from '../context/MusicContext';


export const useMusic = () => {
  
  const { musicState, selectArtist, selectAlbum, selectPlaySong } = useContext(MusicContext)

  return {
    musicState,
    selectArtist,
    selectAlbum,
    selectPlaySong,
    artist: musicState.artist,
    album: musicState.album,
    playSong: musicState.playSong
  }

}
