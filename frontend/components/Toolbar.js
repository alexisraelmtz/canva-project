import styles from "../styles/Toolbar.module.scss";
import React, { useEffect, useState } from "react";
const Toolbar = () => {
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState("");
  useEffect(() => {
    const getPhotos = async (query = "gradient") => {
      const request = await fetch("/api/unsplash", {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: "follow", // manual, *follow, error
        referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(query), // body data type must match "Content-Type" header
      });
      return request;
    };
    // getPhotos().then((data) => console.log(data));
  }, []);
  return (
    <div className={styles.toolbarcontainer}>
      <div className={styles.elements}>
        <button className={styles.elementsbutton}>C</button>
        <button className={styles.elementsbutton}>S</button>
        <button className={styles.elementsbutton}>T</button>
        <button className={styles.elementsbutton}>L</button>
        <button className={styles.elementsbutton}>A</button>
        <button className={styles.elementsbutton}>P</button>
        <button className={styles.elementsbutton}>A</button>
        <button className={styles.elementsbutton}>P</button>
        <input type="color" />
        <input type="range" />

        <input
          placeholder="Search photo"
          className={styles.searchbar}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button>S</button>
      </div>
    </div>
  );
};

export default Toolbar;

export async function getServerSideProps(context) {
  const session = await getSession(context);

  return {
    props: { session },
  };
}
