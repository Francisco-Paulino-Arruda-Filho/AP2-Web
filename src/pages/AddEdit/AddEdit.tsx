import React, { useEffect, useState } from 'react';
import app from '../../config/Firebase';
import { toast } from 'react-toastify';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min";
import './styles.css';
import { useParams, useNavigate } from 'react-router-dom'

interface Aluno {
    name: string;
    curso: string;
    IRA: number;
}

const AddEdit = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const initialState = {
        name: "",
        curso: "",
        IRA: 7.0,
    } as Aluno;
    const [state, setState] = useState(initialState)
    const [data, setData] = useState<{ [key: string]: Aluno }>({});
    const { name, curso, IRA } = state;

    useEffect(() => {
        
    }, [id]);

    useEffect(() => {
        if (id) {
            setState(data[id] || initialState); // Adiciona uma verificação para garantir que state seja um objeto válido
        } else {
            setState(initialState);
        }
        return () => {
            setState(initialState);
        }
    }, [id, data]);
    

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setState({
            ...state,
            [name]: value
        })
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
    };

    return (
        <>
            <div className='container mt-5'>
                <form onSubmit={handleSubmit} className="w-80 mx-auto form-custom">
                    <div className="form-group mb-3">
                        <label htmlFor='name'>Nome</label>
                        <input 
                            type='text' 
                            id='name' 
                            name='name' 
                            value={name}
                            onChange={handleInputChange}
                            placeholder='Nome' 
                            className="form-control form-control-lg w-100"
                        />
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor='email'>E-mail</label>
                        <input 
                            type='text' 
                            id='curso' 
                            name='curso'
                            value={curso}
                            onChange={handleInputChange}
                            placeholder='Curso' 
                            className="form-control form-control-lg w-100"
                        />
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor='IRA'>IRA</label>
                        <input 
                            type='number' 
                            id='IRA' 
                            name='IRA'
                            value={IRA}
                            onChange={handleInputChange}
                            placeholder='IRA' 
                            className="form-control form-control-lg w-100"
                        />
                    </div>
                    <input type='submit' className="btn btn-primary btn-lg w-100"
                        value={id ? "Atualizar" : "Adicionar"}
                    >
                    </input>
                </form>
            </div>
        </>
    )
}

export default AddEdit;
