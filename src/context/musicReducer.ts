import { ArtistState, AlbumState, MusicState, PlaySongState } from '../interfaces/context';

type MusicAction = 
  | { type: 'selectedArtist', payload: ArtistState }
  | { type: 'selectedAlbum', payload: AlbumState }
  | { type: 'selectedPlaySong', payload: PlaySongState }


export const musicReducer = ( state: MusicState, action: MusicAction ): MusicState => {

  switch ( action.type ) {
    case 'selectedArtist':
      return {
        ...state,
        artist: action.payload
      }
    
    case 'selectedAlbum':
      return {
        ...state,
        album: action.payload
      }
    
    case 'selectedPlaySong':
      return{
        ...state,
        playSong: action.payload
      }

    default:
      return state;
  }

}