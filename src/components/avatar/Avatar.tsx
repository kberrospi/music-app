import { CSSProperties, FC } from 'react';
import '../../styles/avatar.css'

interface Props {
  src: string | undefined,
  text?: string | undefined
}

export const Avatar:FC<Props> = ({ src, text }) => {
  return (
    <div 
      className='avatar'
      style={{ backgroundImage:`url(${src})`}} 
    >
      <div className='overlay'>
      <span className='name-artists'> { text } </span>

      </div>
    </div>
  )
}
