import Comment from "./Comment";

import styles from "../styles/CommentSection.module.css";

const CommentSection = ({ comments }) => {
  return (
    <section className={styles.section}>
      {comments?.map((comment) => (
        <Comment commentInfo={comment} />
      ))}
    </section>
  );
};

export default CommentSection;
