import styles from "../styles/Thumbnail.module.scss";
import timeago from "epoch-timeago";
import React, { useState } from "react";

const Thumbnail = ({ create_date, name, id, author }) => {
  const [editMode, setEditMode] = useState(false);

  return (
    <div className={styles.newcanva}>
      <div className={styles.addcanva} onClick={() => console.log("ok")}>
        image
      </div>
      <div className={styles.canvasdata}>
        <p>{name}</p>
        <p>{author}</p>
        <time datetime={new Date(+create_date).toISOString()}>
          {timeago(create_date)}
        </time>
      </div>
      <button onClick={() => console.log("edit")}>edit</button>
    </div>
  );
};

export default Thumbnail;
