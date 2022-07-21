import styles from './MasonryBox.module.css'

const MasonryBox = ({ wallSrc, userName }) => {
  return (
    <div
      className={styles['my-masonry']}
      style={{
        cursor: 'pointer',
      }}
    >
      <img src={wallSrc} style={{ width: '100%' }} alt="" />
      <div className={`${styles['my-masnry-description']} flex`}>
        <div
          className={`${styles['my-masnry-user-box']} flex align-items-center`}
        >
          <div
            className={`${styles['my-masnry-user-prof-desc']} flex flex-column`}
          >
            <h1>{userName}</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MasonryBox
