import React, { useState } from "react";
import {addUser, getUser} from "../../Store/UserSlice"
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useDispatch, useSelector } from "react-redux";
import { DataGrid, GridActionsCellItem } from '@mui/x-data-grid';

export default function Users() {
  const myUsers = useSelector((state) => state.userSlice.rows);
  const [editableRow, setEditableRow] = useState(null);
  
  const dispatch = useDispatch();
  dispatch(getUser());

  if (!myUsers || !myUsers.length) {
    return <div>Loading...</div>; // Handle loading state
  }
 
  const columns = [

    { field: 'name', headerName: 'Name', width: 160, editable: true },
    { field: 'email', headerName: 'Email', width: 160, editable: true },
    { field: 'address', headerName: 'Address', width: 160, editable: true },
    { field: 'phone', headerName: 'Phone', type: 'number', width: 160, editable: true },
    {
      field: 'dateCreated',
      headerName: 'Date Created',
      type: 'date',
      width: 180,
      editable: true,
    },
    {
      field: 'lastLogin',
      headerName: 'Last Login',
      type: 'dateTime',
      width: 220,
      editable: true,
    },
    {
      field: 'actions',
      type: 'actions',
      width: 100,
      getActions: () => [
        <GridActionsCellItem icon={<EditIcon />} label="Edit" />,
        <GridActionsCellItem icon={<DeleteIcon />} label="Delete" />,
      ],
    },
  ];

  return (
    <div style={{ height: 500, width: '85%', direction: 'ltr', }}>
      <div style={{ overflow: 'none' }}>
        <DataGrid
          rows={myUsers}
          columns={columns}
        />
      </div>
    </div>
  );
}



