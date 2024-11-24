import React, { useState } from 'react';
import './Comments.css'; 

function Comments({ comment }) {
    const [likes, setLikes] = useState(comment.likes || 0);
    const [dislikes, setDislikes] = useState(comment.dislikes || 0);
    const [commentsCount, setCommentsCount] = useState(comment.commentsCount || 0);
    const [sharesCount, setSharesCount] = useState(comment.sharesCount || 0);

    const firstChar = comment.name.charAt(0).toUpperCase();
    const randomColor = `hsl(${Math.random() * 360}, 70%, 60%)`;

    const handleLike = () => setLikes(likes + 1);
    const handleDislike = () => setDislikes(dislikes + 1);
    const handleComment = () => setCommentsCount(commentsCount + 1);
    const handleShare = () => setSharesCount(sharesCount + 1);

    return (
        <div className="comments-container">
            <div className="comment">
                <div className="comment-header">
                    <div className="commenter-image" style={{ backgroundColor: randomColor }}>
                        {firstChar}
                    </div>
                    <div className="commenter-details">
                        <div className="commenter-name">{comment.name}</div>
                        <div className="commenter-email">{comment.email}</div>
                    </div>
                </div>
                <p className="comment-body">{comment.body}</p>
                <div className="comment-actions">
                    <button className="like-btn" onClick={handleLike}>
                        👍 {likes}
                    </button>
                    <button className="dislike-btn" onClick={handleDislike}>
                        👎 {dislikes}
                    </button>
                    <button className="comment-btn" onClick={handleComment}>
                        💬 {commentsCount}
                    </button>
                    <button className="share-btn" onClick={handleShare}>
                        📤 {sharesCount}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Comments;
