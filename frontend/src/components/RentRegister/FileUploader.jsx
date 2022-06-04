import React from 'react'


const FileUploader = ({onFileSelect, onFileSelectError, onFileSelectSuccess}) => {

    const handleFileInput = (e) => {
        const file = e.target.files[0];
        if(file.size<1024){
            onFileSelectSuccess(file)
        }else{
            onFileSelectError("Arquivo muito grande")
        }
    };

  return (
    <div className='file'>
        <input type="file" onChange={handleFileInput}/>
    </div>
  )
}

export default FileUploader