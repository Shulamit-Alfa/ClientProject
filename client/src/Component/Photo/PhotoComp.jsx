import { ImageList } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPhoto } from "../../Store/PhotoSlice";
import MyDropzone from "./ImageComp";
import Photos from "./Photos";

export default function PhotoComp() {

    const dispatch = useDispatch();
    dispatch(getPhoto());
    const myPhotos = useSelector((state) => state.photoSlice.photo);
    console.log("myPhotos", myPhotos);

    return (

        <div >
            <h1>Photo</h1>
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