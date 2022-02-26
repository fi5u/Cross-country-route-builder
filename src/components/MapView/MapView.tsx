import ErrorBoundary from 'components/utils/ErrorBoundary'
import type { Props } from './MapView.types'
import styles from './MapView.module.css'

/**
 * 
 * @param param.
 */
function MapView({}: Props) {
  return (
    <ErrorBoundary id="MapView">
      <div
        className={styles.root}
      >
        
      </div>
    </ErrorBoundary>
  )
}

export default MapView
