import { useEffect } from 'react';
export default function DocumentEditor({content, setContent}) {
	//useEffect(()=> {
	//	fetch('http://localhost:3000/')
	//}, []);

	const handleChange = (event) => {
		setContent(event.target.value)
	}
  
	return (
	  <div style={{height: '100%', width: '100%'}}>
		<div style={{padding: 'auto', width:'70%', height: '70%'}}>
			<pre contentEditable="true" style={{height: '100%', width: '100%', borderStyle: 'None', outline: 'None'}}
				type="textarea"
				name="textvalue"
				onChange={handleChange}>
			</pre>
		</div>
	  </div>
	);
  }
