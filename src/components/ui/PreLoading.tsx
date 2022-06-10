import { Loading } from "@nextui-org/react";
import '../../styles/loading.css'

export const PreLoading = () => {
  return (
    <div className='loading'>
      <Loading size="lg" />
    </div>
  )
}
