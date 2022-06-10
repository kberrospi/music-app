
import { FC } from "react";
import { Link } from "react-router-dom";
import { Avatar } from "../avatar/Avatar";
import { useMusic } from '../../hooks/useMusic';
import { ArtistProps } from "../../interfaces/artist";

interface Props {
  artistInfo: ArtistProps
}


export const Artist:FC<Props> = ({ artistInfo }) => {

  const { selectArtist } = useMusic();
  const payload = {
    name: artistInfo.name,
    image: artistInfo.image,
    popularity: artistInfo.popularity
  }

  return (
    <Link 
      to={`/artist/${artistInfo.id}`} 
      onClick={ () => selectArtist(payload) } 
    >
      <div className='content-artists' >
        <Avatar
          src={ artistInfo.image }
          text={ artistInfo.name }
        />
      </div>
    </Link>
  )
}
