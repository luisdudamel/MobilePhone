const Key = ({ text, keyClass, action }) => {
  return (
    <>
      <li>
        <button className={keyClass} onClick={action}>
          {text}
        </button>
      </li>
    </>
  );
};

export default Key;
