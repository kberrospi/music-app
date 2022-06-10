import { ArtistProps } from "../interfaces"
import { useAxios } from "./useAxios"

interface artistsAxiosProps {
  loading: boolean,
  data: null |  ArtistProps[],
  error: null | string
}

export const useArtists = () => {

  const { loading, data } = useAxios<artistsAxiosProps>(`/artists`)  

  return {
    data,
    loading
  }
}