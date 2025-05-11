import React from 'react';
import ReactQuill from 'react-quill';
import 'quill/dist/quill.snow.css';



const RichTextEditor = ({ input, setInput }) => {

    const handleChange = (content) => {
        setInput(prev => ({ ...prev, description: content }));
    };

    return (
        <ReactQuill
            theme="snow"
            value={input?.description || ""}  // Ensure `input.description` is not undefined
            onChange={handleChange}
        />
    );
};

export default RichTextEditor;
