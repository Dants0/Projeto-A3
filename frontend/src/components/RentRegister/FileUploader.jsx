import React from 'react'


const FileUploader = ({onFileSelect, onFileSelectError, onFileSelectSuccess}) => {

    const handleFileInput = (e) => {
        const file = e.target.files[0];
        onFileSelectSuccess(file)
    };

  return (
    <div className='file'>
        <input type="file" onChange={handleFileInput} accept="image/png, image/jpeg, image/jpg"/>
    </div>
  )
}

export default FileUploader