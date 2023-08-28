import useImage from '@/data/image';
import styles from '@/styles/Home.module.css'

export default function StationImage(props) {
  const { image, isLoading, isError } = useImage(props.station)

  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>Error</div>
  if (!image) return <div>No image</div>

  return (
    <image src={image} width="400" height="400" alt={props.station.name} className={styles.imagestyle}/>
  )
}