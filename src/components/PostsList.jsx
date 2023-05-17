import Post from "./Post";
import classes from "./PostsList.module.css";
import NewPost from "./Newpost";
import Modal from "./Modal";

function PostsList({ isPosting, onStopPosting }) {


  return (
    <>
      {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost onCancel={onStopPosting} />
        </Modal>
      )}

      <ul className={classes.posts}>
        <Post author="Elutade" body="React cool sense die" />
      </ul>
    </>
  );
}
export default PostsList;
