import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import styles from "./NewsAndPress.module.scss"
import NewsImgBanner from "../../assets/img//header_banner/LochLomondPanorama-2000x1334.jpg"
import { getData } from "../../services/data";
import { INewsPost } from "../../interfaces/INewsPost";
import Pagination from "../../components/Pagination/Pagination"
import { CircularProgress } from "@mui/material";

export default function NewsAndPress() {
  const location = useLocation();
  const homeRoute = location.pathname.endsWith('/')

  const [allNews, setAllNews] = useState<any>([])
  const [newsData, setNewsData] = useState<any>([]);
  const [allData, setAllData] = useState([])
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0)
  const [currentPage, setCurrentPage] = useState(1);
  const [maxPageLimit, setMaxPageLimit] = useState(5);
  const [minPageLimit, setMinPageLimit] = useState(0);

  const [totalPages, setTotalPages] = useState(0)


  useEffect(() => {
    getData("home_news", setAllData, setProgress, setLoading)
  }, [])


  useEffect(() => {
    const data = allData && transformData(allData, 5)
    data && setAllNews(data)
  }, [allData])


  useEffect(() => {
    const newsList = [...allNews].find((item: any) => item.page === currentPage)
    setNewsData(newsList?.items)
  }, [currentPage, allNews])


  const transformData = (allItems: any, limit: number) => {
    let result = [];
    let currentIndex = 0

    const pagesCount = Math.ceil((allItems.length) / limit)
    setTotalPages(pagesCount)


    for (let i = 0; i < pagesCount; i++) {
      let item = {
        items: [], page: 0
      } as any

      for (let j = 0; j < limit; j++) {
        if (currentIndex > allItems.length - 1) {
          break;
        }
        item.items.push(allItems[currentIndex])
        currentIndex++
      }
      item.page = i + 1
      result.push(item)
    }
    return result
  }


  const handlePrevClick = () => {
    setCurrentPage(prevPage => prevPage > 1 ? prevPage - 1 : 1)
    const previousData = [...allNews].find((item: any) => item.page === currentPage)

    if (previousData) {
      setNewsData(previousData.items)
    }
  }


  const handleNextClick = () => {
    setCurrentPage(prevPage => prevPage + 1)

    const existingData = [...allNews].find((item: any) => item.page === currentPage)
    if (existingData) {
      setNewsData(existingData.items)
    }
  }

  const handlePageClick = (e: any) => {
    setCurrentPage(Number(e.target.id))

    const data = [...allNews].find((item: any) => item.page === currentPage)
    setNewsData(data.items)
  };



  return (
    // <>
    //   {
    //     !homeRoute &&
    //     <div className={`${styles.wrap_fullscreen_image}`}>
    //       <div className={`${styles.image}`}>
    //         <img src={NewsImgBanner} alt="" />

    //       </div>
    //     </div>
    //   }

    //   <div>NewsAndPress</div>
    // </>
    <>
      <section className={styles['hero-news-and-press']}>
        <div className={styles['wrap-fullscreen-image']}>
          <div className={styles.image}>
            <img src={NewsImgBanner} alt="" />
          </div>
        </div>
        <div className={styles["dark-overlay-hero"]}></div>
        <div className={styles["wrap-hero-header"]}>
          <h1>News & Press <br /> from the A&B world</h1>
        </div>
      </section>

      <section className={styles.filters}>
        <div className={styles["wrap-search"]}>
          <p>Search articles</p>
          <form>
            <input type="text" name="search" />
          </form>
        </div>
        <p className={styles["filter-title"]}>Filter our News & Press</p>
        <div className={styles["wrap-sort-buttons"]}>
          <button className={`${styles["sort-all"]} ${styles.active}`}>All</button>

          <div className={styles["news_and_press_cat"]} data-name="news_and_press_cat">
            <div data-value="ab-news">
              A&B News
            </div>
            <div data-value="ab-press">
              A&B Press
            </div>
            <div data-value="our-blog">
              Our Blog
            </div>
            <div data-value="ab-newsletter">
              A&B Newsletter
            </div>


          </div>

        </div>
      </section>

      <section className={styles["wrap-all-news-and-press"]}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {loading && progress < 100 && (
            <CircularProgress value={progress} color="success" />
          )}
        </div>

        <div className={styles["wrapper-news-items"]}>

          {newsData && newsData.map((item: INewsPost) => (
            <a key={item.id} className={styles["news-list__card"]} href={item.link}>
              <div className={styles.image}>
                <img src={item.img} alt="" />
              </div>
              <div className={styles["wrap-text__card"]}>
                <p className={styles["card-category"]}>{item.category}</p>
                <h2 className={styles["card-title"]}>{item.title}</h2>
                <div className={styles["gradient-bottom"]}></div>
              </div>
            </a>

          ))}
        </div>
      </section>

      <Pagination currentPage={currentPage} maxPageLimit={maxPageLimit} minPageLimit={minPageLimit} totalPages={totalPages} data={allNews} onPrevClick={handlePrevClick} onNextClick={handleNextClick}
        onPageChange={handlePageClick}
      />
    </>
  )
}
