import { useEffect, useState } from "react";
import musicApi from "../api/musicApi";


const baseURL = import.meta.env.VITE_BASE_API

export const useAxios = <T> (url: string): T => {

  const [state, setState] = useState<T | any>({ data: null, loading: true, error: null });
  const urlCom = `${baseURL}${url}`

  useEffect( () => {

    setState({ data: null, loading: true, error: null });

      musicApi.get(urlCom)
      .then( resp => {

        setState({
          loading: false,
          error: null,
          data: resp.data
        });
       
      })
      .catch( () => {
        setState({
            data: null,
            loading: false,
            error: 'No se pudo cargar la info'
        })
    })

  },[urlCom])

  return state;

}
