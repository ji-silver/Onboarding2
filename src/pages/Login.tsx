import { useForm } from "react-hook-form"
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

interface loginForm {
    id: string,
    password: string
}
const Login = () => {
    const navigate = useNavigate();
    const {
        register, handleSubmit
    } = useForm<loginForm>();

    const onSubmit = async(data: loginForm) => {
        const {id, password} = data;

        if(!id) {
            alert('아이디를 입력해주세요.')
            return;
        } else if(!password) {
            alert('비밀번호를 입력해주세요.')
            return;
        }

        try {
            const response = await axios.post('/api/auth/sign-in', data);
            const token = response.data.data;

            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`; // 헤더에 토큰 저장
            navigate('/board');
        } catch(error) {
            alert('아이디 또는 비밀번호가 맞지 않습니다.');
        }
    }

    return (
        <div className={"w-screen h-screen flex items-center justify-center section"}>
            <div className={'text-center'}>
                <h1 className={'mb-3 text-4xl font-bold text-blue-600'}>Login</h1>
                <form className={"flex flex-col w-[300px] gap-3"} onSubmit={handleSubmit(onSubmit)}>
                    <input className={"rounded-md border-2 p-3"} placeholder={"아이디"}
                           type={'email'} {...register('id')}/>
                    <input className={"rounded-md border-2 p-3"} placeholder={"비밀번호"}
                           type={"password"} {...register('password')}/>
                    <input className={"rounded-md py-4 bg-blue-600 text-white cursor-pointer"} type={'submit'}
                           value={'로그인'}/>
                </form>
            </div>
        </div>
    );
};

export default Login;