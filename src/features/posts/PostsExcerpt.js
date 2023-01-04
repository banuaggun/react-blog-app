import { Link } from "react-router-dom";

import PostAuthor from "./PostAuthor";

import ReactionButtons from "./ReactionButtons";

import TimeAgo from "./TimeAgo";

const PostsExcerpt = ({ post }) => {
    return (
      <article>
        <div className="post__area">
          <div className="post__area__inner">
          <div className="post__area__text__title">
            <span>
              {post.title}
            </span>
          </div>
          <div className="post__area__body">
            <span className="excerpt">
              {post.body.substring(0, 65)}...
            </span>
          </div>
          <div className="post__area__end">
        
            <TimeAgo timestamp={post.date} />

            <PostAuthor userId={post.userId} />
        
          </div>
          </div>
        </div>
        <div className="post__buttons">
          <div className="post__buttons__reactions">
            <ReactionButtons post={post} />
          </div>
          <div className="post__buttons__view">
            <Link to={`post/${post.id}`}>View Post</Link>
          </div>
          
          
        </div>
      </article>
    );
};

export default PostsExcerpt;
