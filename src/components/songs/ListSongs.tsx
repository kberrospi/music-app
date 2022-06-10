import { Text } from "@nextui-org/react"
import { FC } from "react"
import { SongClass } from "../../interfaces"
import { newTime } from '../../utils';

interface Props {
  songs: SongClass[] | undefined
}

export const ListSongs:FC<Props> = ({ songs }) => {
  
  return (
    <div className='container-list-songs'>
      {
        songs?.map( (song, index) => {
          const { partialTime } = newTime(parseInt(song.duration_ms))
          return (
            <div className='content-list-songs' key={index}>
              <Text className='song-index' color='#FFF'> { index+1 } </Text>
              <Text className='song-name' color='#FFF'> { song.name } </Text>
              <Text className='song-time' color='#FFF'> { partialTime } </Text>
            </div>
          )
        })
      }

    </div>
  )
}
