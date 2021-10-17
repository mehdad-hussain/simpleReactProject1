import React, { useRef, useState, useEffect } from "react";

import Button from "./Button";

const ImageUploader = (props) => {
  const [file, setFile] = useState();
  const [previewUrl, setPreviewUrl] = useState();
  const [isValid, setIsValid] = useState();

  //  <!-- useref to establish a connection to dom element -->
  const fileUploadRef = useRef();

  //  <!-- function to control image uploading -->
  const imageUploadHandler = () => {
    fileUploadRef.current.click();
  };

  //  <!-- function to set up preview for  uploaded image -->
  const uploadedImageHandler = (event) => {
    let uploadedImage;
    let fileIsValid = isValid;
    if (event.target.files || event.target.files.length === 1) {
      uploadedImage = event.target.files[0];
      setFile(uploadedImage);
      setIsValid(true); // as it does not change state immediately
      fileIsValid = true;
    } else {
      setIsValid(false);
      fileIsValid = false;
    }
    props.input(props.id, uploadedImage, fileIsValid);
  };

  //  <!-- mange preview state for uploaded image -->
  useEffect(() => {
    if (!file) {
      return;
    }
    const fileReader = new FileReader();
    // this browser api dose not work with callback or give use any promise
    fileReader.onload = () => {
      setPreviewUrl(fileReader.result);
    };
    fileReader.readAsDataURL(file);
    // before call readAsDataUrl we need to call onload
  }, [file]);

  return (
    <div className='mt-4'>
      <input
        className='hidden'
        ref={fileUploadRef}
        type='file'
        accept='.jpg,.png,.jpeg'
        id={props.id}
        onChange={uploadedImageHandler}
      />
      <div className='flex flex-row items-center justify-center '>
        <div className='flex items-center justify-center w-24 h-24 mb-4 text-center border-2 border-gray-300 border-solid'>
          {previewUrl ? (
            <img
              className='object-cover w-full h-full'
              src={previewUrl}
              alt='Preview'
            />
          ) : (
            <p>Please pick an image</p>
          )}
        </div>
        <Button
          type='button'
          click={imageUploadHandler}
          classes='btn-secondary ml-3'
        >
          Upload Image
        </Button>
      </div>
      {!isValid && <p>{props.errorText}</p>}
    </div>
  );
};

export default ImageUploader;
