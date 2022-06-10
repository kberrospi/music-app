
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { ArtistListSong } from '../components/artists'
import { Songs } from '../components/songs/Songs';
import { useEffect } from 'react';
import App from '../App'
import { useMusic } from '../hooks';

export const AppRouter = () => {

  const { selectArtist, selectAlbum } = useMusic();

  useEffect(() => {
    const artist = localStorage.getItem('artist');
    const album = localStorage.getItem('album');

    if( artist ) selectArtist(JSON.parse(artist))
    if( album ) selectAlbum(JSON.parse(album))

  }, [])
  

  return (
    <Router>
      <Routes>
        <Route  
          path='/artist/:id' 
          element={ 
            <ArtistListSong /> 
          }  
        />
         <Route  
          path='/albums/:id' 
          element={ 
            <Songs /> 
          }  
        />
        <Route  
          path='/' 
          element={ 
            <App /> 
          }  
        />
      </Routes>
    </Router>
  )
}
