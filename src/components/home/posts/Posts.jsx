import React from 'react'
import Comments from '../comments/Comments'

function Posts() {
  return (
    <div style={{ marginBottom: '30px' }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img
          src="path_to_user_image.jpg"
          alt="User"
          style={{ width: '40px', height: '40px', borderRadius: '50%', marginRight: '10px' }}
        />
        <span>User Name</span>
        <span style={{ marginLeft: '10px', color: 'gray' }}>Date Posted</span>
      </div>

      <h4>Post Title</h4>
      <p>Post Body</p>

      <Comments />
    </div>
  )
}

export default Posts