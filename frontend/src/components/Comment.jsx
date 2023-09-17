import React, { useState } from 'react';

const CommentBox = () => {
  const [comments, setComments] = useState([
  ]);

  const [newComment, setNewComment] = useState({ author: '', body: '' });

  const addComment = (author, body) => {
    const comment = {
      id: comments.length + 1,
      author,
      body
    };
    setComments([...comments, comment]);
    setNewComment({ author: '', body: '' });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewComment((prevComment) => ({
      ...prevComment,
      [name]: value,
    }));
  };

  const Comment = ({ author, body }) => {
    return (
      <div className="comment" style={commentStyle}>
        <p className="comment-header" style={commentHeaderStyle}>{author}</p>
        <p className="comment-body" style={commentBodyStyle}>- {body}</p>
        <div className="comment-footer" style={commentFooterStyle}>
        </div>
      </div>
    );
  };
  

  const getComments = () => {
    return comments.map((comment) => (
      <Comment author={comment.author} body={comment.body} key={comment.id} />
    ));
  };

  return (
    <div className="comment-box" style={commentBoxStyle}>
      <h2 style={headingStyle}>Leave Feedback</h2>
      <CommentForm
        addComment={addComment}
        handleChange={handleChange}
        newComment={newComment}
      />
      <div className="comment-list" style={commentListStyle}>{getComments()}</div>
    </div>
  );
};

const CommentForm = ({ addComment, handleChange, newComment }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    addComment(newComment.author, newComment.body);
  };

  return (
    <form className="comment-form" onSubmit={handleSubmit} style={formStyle}>
      <div className="comment-form-fields">
        <textarea
          placeholder="Comment"
          name="body"
          rows="4"
          value={newComment.body}
          onChange={handleChange}
          style={textareaStyle}
        ></textarea>
      </div>
      <div className="comment-form-actions">
        <button type="submit" style={buttonStyle}>Post Comment</button>
      </div>
    </form>
  );
};

// Define inline styles
const commentBoxStyle = {
  padding: '20px',
  backgroundColor: '#ffffff',
  border: '1px solid #ccc',
  borderRadius: '5px',
  margin: '20px',
};

const headingStyle = {
  fontSize: '24px',
  fontWeight: 'bold',
  marginBottom: '10px',
};

const subHeadingStyle = {
  fontSize: '20px',
  fontWeight: 'bold',
  marginTop: '20px',
};

const buttonStyle = {
  backgroundColor: '#F9500D', // Change the button color to #F9500D
  color: 'white',
  padding: '8px 16px',
  borderRadius: '5px',
  border: 'none',
  cursor: 'pointer',
  marginTop: '10px',
};

const formStyle = {
  marginTop: '20px',
};

const inputStyle = {
    width: '93%', // Adjust the width as needed
    padding: '10px',
    marginBottom: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  };
  
  const textareaStyle = {
    width: '80%', // Adjust the width as needed
    padding: '10px',
    marginBottom: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  };
  

const commentListStyle = {
  marginTop: '20px',
};

const commentStyle = {
  backgroundColor: 'white',
  padding: '10px',
  borderRadius: '5px',
  border: '1px solid #ccc',
  marginBottom: '10px',
};

const commentHeaderStyle = {
  fontSize: '18px',
  fontWeight: 'bold',
};

const commentBodyStyle = {
  fontSize: '16px',
};

const commentFooterStyle = {
  marginTop: '5px',
};

const deleteLinkStyle = {
  color: 'red',
  textDecoration: 'none',
  cursor: 'pointer',
};

const commentCountStyle = {
  fontSize: '16px',
  color: '#777',
};

export default CommentBox;
