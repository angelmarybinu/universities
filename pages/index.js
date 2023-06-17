
import React, { useState } from 'react';
import styles from './styles.module.css';
import universitiesData from '../public/data.json';

export default function Home() {
  const universitiesPerPage = 9;
  const [currentPage, setCurrentPage] = useState(1);
  const [displayedUniversities, setDisplayedUniversities] = useState(
    universitiesData.slice(0, universitiesPerPage)
  );

  const handleLoadMoreClick = () => {
    const nextPage = currentPage + 1;
    const newUniversities = universitiesData.slice(
      0,
      nextPage * universitiesPerPage
    );
    setCurrentPage(nextPage);
    setDisplayedUniversities(newUniversities);
  };

  return (
    <main>
      <div className={styles.main}>
      <div className={styles.transition}>
          {/*<div className={styles.maindiv}>*/}
          <div className={`${styles.maindiv} ${styles.zoomEffect}`}>
            <h1 className={styles.heading}>
              <br />
              <br />
              <div className={styles.welcome}>WELCOME</div>Come let's find out
              <span className={styles.bold}>
                <br />The Best Universities in India
              </span>
            </h1>
          </div>
        </div>
      </div>
      <div className={styles.cardContainer}>
        {displayedUniversities.map((university, index) => (
          <div className={`${styles.card} ${styles.frame}`} key={index}>
          <div className={styles.photo}></div>
          <div className={styles.text}>
            <h2>{university.name}</h2>
            <p>Location: {university.country}</p>
            
            <button
                className={styles.websiteButton}
                onClick={() => window.open(university.web_pages[0], '_blank')}
              >
                Visit Website
              </button>
             
          </div>
        </div>
        ))}
      </div>
      {universitiesData.length > universitiesPerPage && (
        <div className={styles.loadMoreButton}>
          {displayedUniversities.length < universitiesData.length ? (
            <button onClick={handleLoadMoreClick}className={styles.loadMore}>Load More</button>
          ) : (
            <p>All universities have been loaded.</p>
          )}
        </div>
      )}
    </main>
  );
}

