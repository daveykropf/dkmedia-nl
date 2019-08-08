import Container from './Container'

import styles from './Footer.css'

export default function Footer({ layoutClassname }) {
  return (
    <Container layoutClassname={layoutClassname}>
      <div className={styles.layout}>
        Footer
      </div>
    </Container>
  )
}
