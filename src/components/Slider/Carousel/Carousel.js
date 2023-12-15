import React from 'react'
import styles from './carousel.module.scss'
import {useState , useEffect , Children , cloneElement} from 'react'
import {  FiArrowLeftCircle, FiArrowRightCircle } from 'react-icons/fi'

const PAGE_WIDTH = 1100

export const Carousel = ({ children }) => {

   const [offset,setOffset] = useState(0)
   const [pages, setPages] = useState([])

   useEffect(() => {
    setPages(
        Children.map(children,child => {
            return cloneElement(child, {
							style: {
								height: '100%',
								minWidth: `${PAGE_WIDTH}px`,
								maxWidth: `${PAGE_WIDTH}px`,
							},
						})
        })
    )
   },[])

   const handleClickLeftArrow = (e) => {
    setOffset((currentOffset) => {
        const newOffset = currentOffset + PAGE_WIDTH
        return Math.min(newOffset, 0)
    })
   }

    const handleClickRightArrow = e => {
		  setOffset(currentOffset => {
				const newOffset = currentOffset - PAGE_WIDTH

                console.log(newOffset)
    
				return Math.max(newOffset, -4400 )
			})
		}
   
   
   
  return (
    <>
			<div className={styles.group}>
				<div>
					<h1>Корпоративная жизнь</h1>
				</div>
				<div className={styles.group_arrow}>
					<FiArrowLeftCircle onClick={handleClickLeftArrow} />
					<FiArrowRightCircle onClick={handleClickRightArrow} />
				</div>
			</div>
		<div className={styles.main_container}>
			<div className={styles.window}>
				<div
					className={styles.all_pages_container}
					style={{ transform: `translateX(${offset}px` }}
				>
					{pages}
				</div>
			</div>
		</div>

    </>
	)
}
