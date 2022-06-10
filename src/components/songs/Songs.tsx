import { Grid, Text } from "@nextui-org/react";
import { useParams } from "react-router-dom"
import { useMusic } from '../../hooks/useMusic';
import { Layout, PreLoading } from "../ui";
import { useSongs } from "../../hooks";
import { ListSongs } from "./ListSongs";
import '../../styles/songs.css'


export const Songs = () => {

  const { id } = useParams();
  const { album } = useMusic();
  const { loading, songs, duration, error } = useSongs(id);

  if( loading ) return ( <PreLoading /> )
  if( error ) return ( <h1> Error en la info </h1> )

  return (
    <Layout>
      <div className='container-album-song'>
        <div className='img-album'> 
          <img src={ album.image } alt={album.name} /> 
        </div>
        <div className='content-album-info'>
            <Text h3 > { album.name } </Text>
            <Text > Álbum  &#183; { album.name } </Text>
            <Text> { album.tracks } canciones &#183; { duration } </Text>
        </div>
      </div>
      <Grid.Container className='container-songs'>
        <Grid className='content-songs'>
          <Text h3 color='#FFF'> Canciones </Text>
          <ListSongs songs={ songs } />
        </Grid>
      </Grid.Container>
    </Layout>
  )
}
