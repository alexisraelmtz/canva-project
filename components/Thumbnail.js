import styles from "../styles/Thumbnail.module.scss";
import timeago from "epoch-timeago";
import React, { useState } from "react";
import Editable from "./EditableInput/Editable";
import Link from "next/link";

const Thumbnail = ({ create_date, name, id, author }) => {
  const pr = { create_date, name, id, author };
  const x = { ...pr };
  console.log(x);
  const [canvaName, setCanvaName] = useState(name);
  let string_copy = (" " + name).slice(1);
  let textInput = React.createRef();
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      console.log(textInput.current.value);
    }
  };
  return (
    <div className={styles.newcanva}>
      <Link href={`/canvasses/${x.id}`}>
        <div
          className={styles.addcanva}
          onClick={() => console.log("ok")}></div>
      </Link>
      <div className={styles.canvasdata}>
        <Editable text={canvaName} placeholder="Change Canva name" type="input">
          <input
            ref={textInput}
            className={styles.input}
            type="text"
            name="task"
            placeholder="Change Canva name"
            value={canvaName}
            onKeyDown={handleKeyDown}
            onChange={(e) =>
              e.target.value === ""
                ? setCanvaName(string_copy)
                : setCanvaName(e.target.value)
            }
          />
        </Editable>
        {/* <p>{name}</p> */}
        {/* <p>{author}</p> */}
        <time
          datetime={new Date(+create_date).toISOString()}
          className={styles.datetime}>
          {timeago(create_date)}
        </time>
      </div>
      {/* <button onClick={() => console.log("edit")}>edit</button> */}
    </div>
  );
};

export default Thumbnail;
