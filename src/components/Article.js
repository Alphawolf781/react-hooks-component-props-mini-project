import React from "react";

const Article=({title, date, preview})=>{
    const displayDate = date || "January 1, 1970";

    return(
        <article>
            <h3>{title}</h3>
            <small>{displayDate}</small>
            <p>{preview}</p>
        </article>
    )
}
export default Article