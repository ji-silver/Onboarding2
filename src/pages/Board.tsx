import useFetch from "../hooks/useFetch.ts";
import {DataGrid, GridColDef} from '@mui/x-data-grid';


export interface IBoardProps {
    //children?: React.ReactNode,
}

const Board = ({}: IBoardProps) => {

    const {data} = useFetch('/api/board')


    const rows = [
        { id: 1, title: 'Hello', view: 0, author: 'user1', createdAt: '2024-03-11'},
        { id: 2, title: 'Hello', view: 0, author: 'user1', createdAt: '2024-03-11'},
        { id: 3, title: 'Hello', view: 0, author: 'user1', createdAt: '2024-03-11'},
    ];

    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 150 },
        { field: 'title', headerName: '제목', width: 150 },
        { field: 'view', headerName: '조회수', width: 150 },
        { field: 'author', headerName: '작성자', width: 150 },
        { field: 'createdAt', headerName: '작성일', width: 150 },
    ];

    return (
        <div className={"mt-5 w-full"}>
            <DataGrid
                rows={rows}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 5 },
                    },
                }}
                pageSizeOptions={[5, 10]}
                checkboxSelection
            />
        </div>
    );
};


Board.defaultProps = {};

export default Board;
