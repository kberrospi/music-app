import { useReducer } from 'react';
import { AlbumState, ArtistState, MusicState, PlaySongState } from '../interfaces';
import { MusicContext } from './MusicContext';
import { musicReducer } from './musicReducer';


const INITIAL_STATE: MusicState = {
  artist: {
    name: '',
    image: '',
    popularity:''

  },
  album: {
    image: '',
    name: '',
    tracks: 0
  },
  playSong:{
    id: '',
    name:'',
    image: ''
  }
}

interface Props {
  children: JSX.Element | JSX.Element[]
}

export const MusicProvider = ({ children }: Props) => {

  const [musicState, dispatch] = useReducer(musicReducer, INITIAL_STATE);

  const selectArtist = ( payload: ArtistState ) => {
    dispatch({ type:'selectedArtist', payload });
    localStorage.setItem('artist', JSON.stringify(payload))
  }

  const selectAlbum = ( payload: AlbumState ) => {
    dispatch({ type:'selectedAlbum', payload });
    localStorage.setItem('album', JSON.stringify(payload))
  }

  const selectPlaySong = ( payload: PlaySongState ) => {
    dispatch({ type: 'selectedPlaySong', payload })
  }

  return (
    <MusicContext.Provider value={{
      musicState,
      selectArtist,
      selectAlbum,
      selectPlaySong
    }}>
      { children }
    </MusicContext.Provider>
  )
}
