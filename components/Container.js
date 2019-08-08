import cx from 'classnames'

import styles from './Container.css'

export default function Container({ children, layoutClassName }) {
  return <div className={cx(styles.container, layoutClassName)}>{children}</div>
}
