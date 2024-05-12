import React from "react";
import { Link } from "react-router-dom";
import ReactTimeAgo from "react-time-ago";
import TimeAgo from "javascript-time-ago";
import sv from "javascript-time-ago/locale/sv.json";

TimeAgo.addDefaultLocale(sv);

const PostAuthor = ({ author, createdAt }) => {
  if (!author) {
    return <p>Author data not available</p>; // Show a message or return null/empty div
  }

  return (
    <Link to={`/posts/users/${author._id}`} className="post__author">
      <div className="post__author-avatar">
        <img
          src={`${process.env.REACT_APP_ASSETS_URL}/uploads/${
            author.avatar || "default-avatar.png"
          }`}
          alt={author.name || "Unknown user"}
        />
      </div>
      <div className="post__author-details">
        <h5>By: {author.name}</h5>
        <small>
          <ReactTimeAgo date={new Date(createdAt)} locale="en-US" />
        </small>
      </div>
    </Link>
  );
};

export default PostAuthor;

// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import ReactTimeAgo from "react-time-ago";
// import TimeAgo from "javascript-time-ago";

// import sv from "javascript-time-ago/locale/sv.json";

// TimeAgo.addDefaultLocale(sv);

// const PostAuthor = ({ author, createdAt }) => {
//   const [author, setAuthor] = useState({});

//   useEffect(() => {
//     console.log("Author ID before API call:", author); // Log the author ID to debug

//     const getAuthor = async () => {
//       if (author) {
//         // Ensure authorID is present
//         try {
//           const response = await axios.get(
//             `${process.env.REACT_APP_BASE_URL}/users/${author}`
//           );
//           setAuthor(response.data);
//         } catch (error) {
//           console.error("Failed to fetch author details:", error);
//         }
//       }
//     };

//     getAuthor();
//   }, [author]);

//   return (
//     <Link to={`/posts/users/${author._id}`} className="post__author">
//       <div className="post__author-avatar">
//         <img
//           src={`${process.env.REACT_APP_ASSETS_URL}/uploads/${author?.avatar}`}
//           alt={author?.name || "Author"}
//         />
//       </div>
//       <div className="post__author-details">
//         <h5>By: {author?.name}</h5>
//         <small>
//           <ReactTimeAgo date={new Date(createdAt)} locale="sv-SE" />
//         </small>
//       </div>
//     </Link>
//   );
// };

// export default PostAuthor;
