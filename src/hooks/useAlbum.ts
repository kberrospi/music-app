import { AlbumsProps } from "../interfaces"
import { useAxios } from "./useAxios"

interface albumAxiosProps {
  loading: boolean,
  data: null |  AlbumsProps[],
  error: null | string
}

export const useAlbum = (id: string | undefined) => {

  const { loading, data }  = useAxios<albumAxiosProps>(`/artists/${id}/albums`)  
  const albm = data?.find( album => album.artist === parseInt(id+''))
  

  return {
    albm,
    loading
  }
}
