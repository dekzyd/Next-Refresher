import styles from "./Post.module.css";
import { Link } from "react-router-dom";

const Post = (props) => {
  const { author, body, id } = props;
  const { text, post } = styles;
  return (
    <li className={post}>
      <Link to={id}>
      <p className={styles.author}>{author}</p>
      <p className={text}>{body}</p>
      </Link>
    </li>
  );
};

export default Post;
