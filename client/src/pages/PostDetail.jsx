import React, { useContext, useEffect, useState } from "react";
import PostAuthor from "../components/PostAuthor";
import { Link, useParams } from "react-router-dom";
import Loader from "../components/Loader";
import DeletePost from "./DeletePost";
import { UserContext } from "../context/userContext";
import axios from "axios";

const PostDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [commentText, setCommentText] = useState("");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const { currentUser } = useContext(UserContext);
  const token = currentUser?.token;

  useEffect(() => {
    const getPost = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/posts/${id}`
        );
        console.log(response.data);
        const fetchedPost = response.data;

        fetchedPost.comments = fetchedPost.comments || [];
        setPost(fetchedPost);
      } catch (error) {
        setError(error.toString());
      }
      setIsLoading(false);
    };
    getPost();
  }, [id]);

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    if (!commentText.trim()) return;
    if (!currentUser) {
      setError("You must be logged in to post a comment.");
      return;
    }

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/posts/${id}/comments`,
        { text: commentText },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setPost((prevPost) => ({
        ...prevPost,
        comments: [...prevPost.comments, response.data],
      }));
      setCommentText("");
    } catch (error) {
      setError(
        "Failed to post comment: " +
          (error.response?.data?.message || error.message)
      );
    }
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <section className="post-detail">
      {error && <p className="error">{error}</p>}
      {post ? (
        <div className="container post-detail__container">
          <div className="post-detail__header">
            {post.creator && (
              <PostAuthor author={post.creator} createdAt={post.createdAt} />
            )}
            {currentUser?.id === post?.creator._id && (
              <div className="post-detail__buttons">
                <Link to={`/posts/${post._id}/edit`} className="btn sm primary">
                  Edit
                </Link>
                <DeletePost postID={id} />
              </div>
            )}
          </div>
          <h1>{post.title}</h1>
          <div className="post-detail__thumbnail">
            <img
              src={`${process.env.REACT_APP_ASSETS_URL}/uploads/${post.thumbnail}`}
              alt={post.title}
            />
          </div>
          <p dangerouslySetInnerHTML={{ __html: post.description }}></p>
          <div className="comment-section">
            {post.comments?.map((comment, index) => (
              <div key={index} className="comment">
                <small className="comment__meta">
                  Commented by {comment.creator?.name || "Unknown user"} on
                  {new Date(comment.createdAt).toLocaleDateString()}
                </small>
                <p className="comment__text">{comment.text}</p>
              </div>
            ))}
            {post?.creator && (
              <form onSubmit={handleCommentSubmit} className="comment-form">
                <textarea
                  value={commentText}
                  onChange={(e) => setCommentText(e.target.value)}
                  required
                  placeholder="Add a comment..."
                />
                <button type="submit">Post Comment</button>
              </form>
            )}
          </div>
        </div>
      ) : (
        <p>No post found.</p>
      )}
    </section>
  );
};

export default PostDetail;
