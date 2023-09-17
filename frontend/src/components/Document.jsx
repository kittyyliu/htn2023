import { useState } from 'react';
export default function DocumentEditor() {
	const [count, setCount] = useState(0);
  
	const handleChange = (event) => {
		console.log(event.target.value);
	}
  
	return (
	  <div style={{height: '100%', width: '100%'}}>
		<textarea style={{height: '100%', width: '100%', borderStyle: 'None', outline: 'None'}}
			type="textarea"
			name="textvalue"
			onChange={handleChange}>
		</textarea>
	  </div>
	);
  }
