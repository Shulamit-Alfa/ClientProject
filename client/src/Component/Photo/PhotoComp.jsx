import React from "react";
import Photos from "./Photos";
import { useSelector, useDispatch } from "react-redux";
import { ImageList } from "@mui/material";
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { getPhoto } from "../../Store/PhotoSlice";
import MyDropzone from "./ImageComp";

export default function PhotoComp() {

    // const VisuallyHiddenInput = styled('input')({
    //     clip: 'rect(0 0 0 0)',
    //     clipPath: 'inset(50%)',
    //     height: 1,
    //     overflow: 'hidden',
    //     position: 'absolute',
    //     bottom: 0,
    //     left: 0,
    //     whiteSpace: 'nowrap',
    //     width: 1,
    // });
    const dispatch = useDispatch();
    dispatch(getPhoto());
    const myPhotos = useSelector((state) => state.photoSlice.photo);
    console.log("myPhotos", myPhotos);

    // if (!myPhotos || !myPhotos.length) {
    //     return <div>Loading...</div>; // Handle loading state
    // }
    return (

        <div >
            <h1>Photo</h1>
            {/* <Button component="label" variant="contained" startIcon={<CloudUploadIcon />}> */}
            {/* Add Photo
                <VisuallyHiddenInput type="file" />
            </Button> */}

            <MyDropzone />
            <ImageList
                sx={{ width: 500, height: 450 }}
                cols={4}
                rowHeight={121}
            >
                {
                    myPhotos?.map((p) => {
                        return (
                            <Photos item={p} />
                        )
                    })
                }
            </ImageList>
        </div>
    )
}