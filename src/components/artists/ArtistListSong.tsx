import { FC } from 'react';
import { useParams } from "react-router-dom"
import { Container, Text } from '@nextui-org/react';
import { Avatar } from '../avatar/Avatar';
import { Album } from '../albums/Album';
import { Layout, PreLoading } from '../ui';
import { useAlbum, useMusic } from '../../hooks';
import { PLaySong } from '../playSong/PlaySong';
import Star from '../../assets/icon-star.png'
import '../../styles/artist-list-song.css'

export const ArtistListSong:FC = () => {
  const { id } = useParams();
  const { artist, playSong } = useMusic();
  const { albm, loading } = useAlbum(id)

  if( loading ) return ( <PreLoading /> )
 
  return (
    <Layout>
      <div className='banner-artist'>
        <Avatar src={artist.image} />
        <Text className='name-artist'> 
          { artist.name }  
          <img src={Star} />
          <span> { artist.popularity }  </span>
        </Text>
      </div>
      <Container className='content-albumes'>
        <Text h4 color='#FFF'> Álbumes </Text>
        {
          albm?.albums.map( album => (
            <Album album={album} key={ album.id } />
          ) )
        }
      </Container>
      { !!playSong.id && <PLaySong /> }
      
    </Layout>
  )
}
