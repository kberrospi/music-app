import { useState } from 'react';
import { Loading, Grid, Avatar, Text } from '@nextui-org/react';
import { useMusic, useSongs } from '../../hooks';
import { newTime } from '../../utils';
import OpenNew from '../../assets/resize.png'
import { ListSongs } from '../songs/ListSongs';

export const PLaySong = ( ) => {

  const { playSong } = useMusic()
  const { loading, songs } = useSongs(playSong.id)
  const [track, setTrack] = useState(0);
  const { partialTime } = newTime( parseInt(songs?.[track].duration_ms+''))

  const [openWindow, setOpenWindow] = useState(false)
  
  if(loading) return ( <div className='play-song-loading'> <Loading /> </div> )
 
  return (
    <Grid.Container className='play-song'>
      <Grid className='content-controls'>
        <button 
          disabled={ track === 0  } 
          onClick={ () => setTrack(track-1) } 
        > 
          ‹ 
        </button>
        <audio src={ songs?.[track].preview_url || ''  } controls ></audio>
        <button 
          disabled={ songs && track === songs.length-1  } 
          onClick={ () => setTrack(track+1) } 
        > 
          › 
        </button>
      </Grid>
      <Grid className='content-info-song'>
        <Avatar src={ playSong.image } squared size='lg' />
        <Grid className='content-text-song' >
          <Text color='#FFF' h4> { songs?.[track].name } </Text>
          <Text color='#FFF'> duración: { partialTime } </Text> 
        </Grid>
        
      </Grid>
      <Grid className='content-btns'>
          <button onClick={ () => setOpenWindow(!openWindow) }>
            <img src={ OpenNew } />
          </button>
      </Grid>
      {
        openWindow &&
        <Grid className='list-song-album'>
          <Text color='#FFF' h4 > Canciones </Text>
          <ListSongs songs={ songs } />
        </Grid>
      }
      

    </Grid.Container>
  )
}
