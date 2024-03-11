import useFetch from "../hooks/useFetch.ts";
import {DataGrid, GridColDef} from '@mui/x-data-grid';
import { MdAdd, MdDelete } from "react-icons/md";


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
        { field: 'id', headerName: 'ID', flex: 1},
        { field: 'title', headerName: '제목', flex: 2},
        { field: 'view', headerName: '조회수', flex: 1 },
        { field: 'author', headerName: '작성자', flex: 1 },
        { field: 'createdAt', headerName: '작성일', flex: 1 },
    ];

    return (
        <div className={"max-w-[1440px] mx-auto sm:px-16 px-6 py-4"}>
            <div className={'flex justify-between mb-3'}>
                <h2 className={"text-2xl font-bold"}>모든 글</h2>
                <div className={'flex gap-3'}>
                    <button className={'rounded-md bg-blue-600 px-3 text-white flex items-center gap-1'}><MdAdd /><span>추가</span></button>
                    <button className={'rounded-md bg-blue-600 px-3 text-white flex items-center gap-1'}><MdDelete /><span>삭제</span></button>
                </div>
            </div>
            <DataGrid
                rows={rows}
                columns={columns}
                        pageSizeOptions={[5, 10]}
                        checkboxSelection
                    />
        </div>
    );
};


Board.defaultProps = {};

export default Board;
