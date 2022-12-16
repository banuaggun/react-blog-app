import { Link } from "react-router-dom";

import PostAuthor from "./PostAuthor";

import ReactionButtons from "./ReactionButtons";

import TimeAgo from "./TimeAgo";

const PostsExcerpt = ({ post }) => {
    return (
      <article>
        <div className="post__area">
          <div className="post__area__text__title">
            <span>
              {post.title}
            </span>
          </div>
          <div className="post__area__body">
            <span className="excerpt">
              {post.body.substring(0, 75)}...
            </span>
          </div>
          <div className="post__area__end">
        
            <TimeAgo timestamp={post.date} />

            <PostAuthor userId={post.userId} />
        
          </div>
        </div>
        <div className="post__buttons">
          <Link to={`post/${post.id}`}>View Post</Link>
          <ReactionButtons post={post} />
        </div>
      </article>
    );
};

export default PostsExcerpt;
