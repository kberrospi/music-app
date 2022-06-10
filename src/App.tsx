import { Artist } from './components/artists/Artist';
import { Layout } from './components/ui/Layout';
import { PreLoading } from './components/ui/PreLoading';
import { useArtists } from './hooks/useArtists';
import './styles/app.css'

function App() {

  const { loading, data } = useArtists();


  if(loading) return ( <PreLoading /> )

  return (
    <Layout>
      <div className='content-artists'>
        {
          data?.map(artist => (
            artist.name &&
            <Artist artistInfo={ artist } key={ artist.id } />
          ))
        }
      </div>
    </Layout>
    
  )
}

export default App
