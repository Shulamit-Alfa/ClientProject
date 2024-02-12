import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { useDispatch } from 'react-redux';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import { addPhoto } from '../../Store/PhotoSlice';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';


function MyDropzone() {
    const dispatch = useDispatch();
    const [imagePreview, setImagePreview] = useState('');

    const handleAddPhoto = (img) => {
        const photo = {
            "img": img
        };
        dispatch(addPhoto(photo));
    };

    const onDrop = useCallback((acceptedFiles) => {
        const file = acceptedFiles[0];
        const reader = new FileReader();
        const fileReadPromise = new Promise((resolve, reject) => {
            reader.onload = () => {
                resolve(reader.result);
                // const result = reader.result;
                // setImagePreview(result);
                // handleAddPhoto(result);
            };
            reader.onerror = reject;

        });

        fileReadPromise
            .then((result) => {
                setImagePreview(result);
                handleAddPhoto(result);
            })
            .catch((error) => {
                console.log('Error reading file:', error);
            });

        reader.readAsDataURL(file);
    }, []);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

    return (
        <div {...getRootProps()}>
            <input {...getInputProps()} />
            {isDragActive ? (
                <p>Drop the files here...</p>
            ) : (
                // <Button component="label" variant="contained" startIcon={<CloudUploadIcon />}>
                //     Add Photo
                //     {/* <VisuallyHiddenInput type="file" /> */}
                // </Button>
                <div>
                    <Button variant="outlined" >
                        <CloudUploadIcon />  Add Photo
                    </Button>
                </div>
            )}

            {imagePreview ? (
                <img src={imagePreview} alt="Preview" style={{ display: 'none' }}
                />

            ) : (
                <p></p>
            )}
        </div>
    );
}

export default MyDropzone;