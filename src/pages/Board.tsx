import useFetch from "../hooks/useFetch.ts";

export interface IBoardProps {
    //children?: React.ReactNode,
}

const Board = ({}: IBoardProps) => {

    const {data} = useFetch('/api/board')
    console.log(data)

    return (
        <div>
            게시판
        </div>
    );
};


Board.defaultProps = {};

export default Board;
