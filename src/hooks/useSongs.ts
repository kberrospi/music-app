import { SongsProps } from "../interfaces"
import { useAxios } from "./useAxios"
import { newTime } from "../utils";

interface albumAxiosProps {
  loading: boolean,
  data: null |  SongsProps[],
  error: null | string
}

export const useSongs = (id: string | undefined) => {

  let totalDuration = 0;
  const { loading, data }  = useAxios<albumAxiosProps>(`/albums/${id}/songs`);
  const songs = data?.find( songs => songs.album === parseInt(id+''));

  songs?.songs.forEach( song => {
    totalDuration += parseInt(song.duration_ms)
  } )

  const { totalTime } = newTime(totalDuration)


  return {
    songs: songs?.songs,
    loading,
    duration: totalTime,
    error: !songs?.songs  
  }
}