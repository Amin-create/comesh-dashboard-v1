import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function RichTextEditor() {
  const [value, setValue] = useState('');

  return <ReactQuill theme="snow" value={value} onChange={setValue} style={{ height: '200px', marginBottom: "70px" }} />;
}

export default RichTextEditor