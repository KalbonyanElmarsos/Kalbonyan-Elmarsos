import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useHttp from "../../hooks/use-http";
import { getAllComments } from "../../lib/api";
import LoadingSpinner from "../UI/LoadingSpinner";
import classes from "./Comments.module.css";
import NewCommentForm from "./NewCommentForm";
import CommentsList from "./CommentsList";

const Comments = () => {
  const params = useParams();

  const {
    sendRequest,
    status,
    data: AllCommentsDB,
    error,
  } = useHttp(getAllComments);

  const [isAddingComment, setIsAddingComment] = useState(false);

  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };
  const { id } = params;

  useEffect(() => {
    sendRequest(id);
  }, [sendRequest, id]);

  const afterAddCommentHandler = useCallback(() => {
    sendRequest(id);
  }, [sendRequest, id]);

  let commentsElement;

  if (status === "pending") {
    commentsElement = (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }
  if (error) {
    commentsElement = <p>{error}</p>;
  }

  if (
    status === "completed" &&
    (!AllCommentsDB || AllCommentsDB.length === 0)
  ) {
    commentsElement = (
      <p className="centered"> no Comments yet for this Quote</p>
    );

    // commentsElement = "no comments";
  }
  if (status === "completed" && AllCommentsDB)
    commentsElement = <CommentsList comments={AllCommentsDB} />;

  return (
    <section className={classes.comments}>
      <h2>User Comments</h2>
      {!isAddingComment && (
        <button className="btn" onClick={startAddCommentHandler}>
          Add a Comment
        </button>
      )}
      {isAddingComment && (
        <NewCommentForm
          quoteID={params.id}
          onAddComment={afterAddCommentHandler}
        />
      )}
      {commentsElement}
      {/* <p>Comments...</p> */}
    </section>
  );
};

export default Comments;
