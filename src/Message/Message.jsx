const Message = ({ message, author }) => {
  return (
    <div>
      <h3>{message}</h3>
      <p>Author: {author}</p>
    </div>
  );
};
export default Message;
