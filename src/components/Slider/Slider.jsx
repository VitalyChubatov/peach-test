import React from 'react'
import styles from './slider.module.scss'
import { Carousel } from './Carousel/Carousel'


export const Slider = () => {

  
  return (
		<Carousel>
			<div className={`${styles.img} ${styles.img5}`}></div>
			<div className={`${styles.img} ${styles.img4}`}></div>
			<div className={`${styles.img} ${styles.img3}`}></div>
			<div className={`${styles.img} ${styles.img2}`}></div>
			<div className={`${styles.img} ${styles.img1}`}></div>
		</Carousel>
	)
}
