export interface ArtistState {
  name: string | undefined;
  image: string | undefined;
  popularity: string | undefined;
}

export interface AlbumState {
  name: string;
  tracks: number;
  image: string;
}

export interface PlaySongState{
  id: string;
  name: string;
  image: string;
}

export interface MusicState{
  artist: ArtistState;
  album: AlbumState;
  playSong: PlaySongState;
}