import { useState } from 'react';

export default function DocumentEditor() {
  const [count, setCount] = useState(0);

  const handleChange = (event) => {
    console.log(event.target.value);
  };

  return (
    <div style={{ height: '100%', width: '100%' }}>
      <textarea
        style={{
          height: '80%',
          width: '80%',
          borderStyle: 'none',
          outline: 'none',
          padding: '50px', // Add padding here
        }}
        type="textarea"
        name="textvalue"
        onChange={handleChange}
      ></textarea>
    </div>
  );
}
