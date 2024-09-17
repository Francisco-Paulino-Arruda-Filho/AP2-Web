import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min";
import './styles.css';
import { useParams, useNavigate } from 'react-router-dom'

interface Aluno {
    nome: string;
    curso: string;
    ira: number;
}

const AddEdit = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const initialState = {
        nome: "",
        curso: "",
        ira: 7.0,
    } as Aluno;
    const [state, setState] = useState(initialState)
    const [data, setData] = useState<{ [key: string]: Aluno }>({});
    const { nome, curso, ira } = state;

    useEffect(() => {
        fetch(`http://localhost:3000/aluno?${new URLSearchParams({
            id: id || ""
        })}`)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                if (!data) {
                    return;
                }
                setData(data);
            })
            .catch((err) => {
                toast.error("Erro ao carregar os dados");
                console.error(err);
            });
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
        fetch(`http://localhost:3000/aluno/` + (id || ""), {
            method: id ? "PUT" : "POST",
            headers: {
                'Content-Type': 'application/json' // Adiciona o cabeçalho correto
            },
            body: JSON.stringify(state) // Certifica-se de enviar o corpo como JSON
        }).then((response) => {
            console.log(response);
            if (response.ok) {
                toast.success(`Aluno ${id ? "atualizado" : "adicionado"} com sucesso`);
                navigate('/');
            } else {
                toast.error("Erro ao salvar os dados");
            }
        })
        .catch((err) => {
            toast.error("Erro ao salvar os dados");
            console.error(err);
        });
    };
    

    return (
        <>
            <div className='container mt-5'>
                <form onSubmit={handleSubmit} className="w-80 mx-auto form-custom">
                    <div className="form-group mb-3">
                        <label htmlFor='nome'>Nome</label>
                        <input 
                            type='text' 
                            id='nome' 
                            name='nome' 
                            value={nome}
                            onChange={handleInputChange}
                            placeholder='Nome' 
                            className="form-control form-control-lg w-100"
                        />
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor='curso'>Curso</label>
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
                        <label htmlFor='ira'>IRA</label>
                        <input 
                            type='number' 
                            id='ira' 
                            name='ira'
                            value={ira}
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
