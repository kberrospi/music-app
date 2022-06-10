import { FC } from 'react';
import { Avatar, Text } from '@nextui-org/react';
import { AlbumProp } from '../../interfaces';
import { Link } from 'react-router-dom';
import { useMusic } from '../../hooks/useMusic';
import IconPlay from '../../assets/play.svg'
import '../../styles/album.css';

interface Props {
  album: AlbumProp
}

export const Album:FC<Props> = ({ album }) => {

  const payload = {
    image: album.image,
    name: album.name,
    tracks: album.total_tracks
  }

  const payloadPlayAlbum ={ 
    id: (album.id).toString(), 
    name:album.name, 
    image: album.image 
  }

  const { selectAlbum, selectPlaySong } = useMusic()

  return (
    <div className='container-album'>
      <div>
        <Avatar 
          css={{ marginLeft:'10px' }}
          src={ album.image }
        />
      </div>
      
      <div className='content-album'>
        <div className='content-text-album'>
          <Link 
            to={`/albums/${album.id}`}
            onClick ={ () => selectAlbum(payload) }
          >
            <Text 
              h5 
              className='title-album' 
              color='#FFF'
            > 
              { album.name } 
            </Text>
          </Link>
          <Text 
            className='tracks-album' 
            color='#FFF'
          > 
            Canciones: { album.total_tracks }
          </Text>
        </div>
        
        <div className='content-button-album'>
          <button 
            className='btn-play'
            onClick={ ()=> selectPlaySong(payloadPlayAlbum) }
          > 
            <img src={IconPlay} />
          </button>
        </div>
      </div>
    </div>
  )
}
