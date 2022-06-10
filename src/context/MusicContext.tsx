import { createContext } from "react";
import { AlbumState, ArtistState, MusicState, PlaySongState } from "../interfaces";

export type MusicContextProps = {
  musicState: MusicState,
  selectArtist: (payload: ArtistState) => void;
  selectAlbum: (payload: AlbumState) => void;
  selectPlaySong: (payload: PlaySongState) => void;
}

export const MusicContext = createContext<MusicContextProps>({} as MusicContextProps);