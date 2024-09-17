import React, { useEffect, useState } from 'react';
import app from '../../config/Firebase';
import { toast } from 'react-toastify';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min"; // Certifique-se de importar o JS do Bootstrap
import './styles.css';
import { Link } from 'react-router-dom';

// Defina a tipagem dos dados dos contatos
interface Aluno {
    name: string;
    curso: string;
    IRA: number;
}

// O estado agora usa um objeto cujas chaves são strings (os IDs)
const Home = () => {
    const [data, setData] = useState<{ [key: string]: Aluno }>({});

    useEffect(() => {
        fetch('http://localhost:3000/aluno', { method: "GET" }).
            then(response => { console.log(response); return response.json() }).
            then(data => {
                console.log(data)
                setData(data)
            }
            ).catch((error) => { console.error(error) })
    }, []);

    const onDelete = (id: string) => {

    };

    return (
        <div className='container mt-5'>
            <h2 className="mb-4">Lista de Contatos</h2>
            <table className="table table-striped table-bordered table-hover styled-table">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Curso</th>
                        <th>IRA</th>
                        <th>Ação</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.keys(data).map((id) => {
                        const aluno = data[id]; // Pegue o contato relacionado ao ID
                        return (
                            <tr key={id}>
                                <td>{aluno?.name || "Sem nome"}</td>
                                <td>{aluno?.curso || "Sem curso"}</td>
                                <td>{aluno?.IRA || "Sem IRA"}</td>
                                <td>
                                    <button
                                        className="btn btn-danger"
                                        onClick={() => onDelete(id)}
                                    >
                                        Deletar
                                    </button>
                                    <Link to={`/update/${id}`}>
                                        <button className='btn btn-success'>
                                            Editar
                                        </button>
                                    </Link>
                                    <Link to={`/view/${id}`}>
                                        <button className='btn btn-info'>
                                            Visualizar
                                        </button>
                                    </Link>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default Home;
