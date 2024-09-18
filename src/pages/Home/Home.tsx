import { useEffect, useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min"; // Certifique-se de importar o JS do Bootstrap
import './styles.css';
import { Link } from 'react-router-dom';

// Defina a tipagem dos dados dos contatos
interface Aluno {
    _id: string,
    nome: string;
    curso: string;
    ira: number;
}

// O estado agora usa um objeto cujas chaves são strings (os IDs)
const Home = () => {
    const [data, setData] = useState<Aluno[]>([]);
    const [destaca, setDestaca] = useState(false)

    useEffect(() => {
        fetch('http://localhost:3000/aluno', { method: "GET" }).
            then(response => { console.log(response); return response.json() }).
            then(data => {
                setData(data)
            }
            ).catch((error) => { console.error(error) })
    }, []);

    const onDelete = (id: string) => {
        fetch(`http://localhost:3000/aluno/find/${id}`, { method: "DELETE" }).then(
            () => {
                setData(data.filter((val) => val._id != id))
            }
        )
    };

    const calculaMedia = () => {
        let soma = 0;
        let quantidade = 0;
        data.forEach((aluno) => {
            soma += aluno.ira;
            quantidade++;
        });
        return quantidade > 0 ? (soma / quantidade).toFixed(2) : "0";
    }

    return (
        <div className='container mt-5'>
            <h2 className="mb-4">Lista de alunos</h2>
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
                    {data.map((aluno) => {
                        return (
                            <tr key={aluno._id}
                            >
                                <td
                                    className={destaca ? Number(aluno.ira) >= 7 ? "high-ira" : "flow-ira" : "" }
                                >{aluno?.nome || "Sem nome"}</td>
                                <td
                                    className={destaca ? Number(aluno.ira) >= 7 ? "high-ira" : "flow-ira" : "" }
                                >{aluno?.curso || "Sem curso"}</td>
                                <td
                                    className={destaca ? Number(aluno.ira) >= 7 ? "high-ira" : "flow-ira" : "" }
                                >{aluno?.ira || "Sem IRA"}</td>
                                <td
                                    className={destaca ? Number(aluno.ira) >= 7 ? "high-ira" : "flow-ira" : "" }
                                >
                                    <button
                                        className="btn btn-danger"
                                        onClick={() => onDelete(aluno._id)}
                                    >
                                        Deletar
                                    </button>
                                    <Link to={`/update/${aluno._id}`}>
                                        <button className='btn btn-success'>
                                            Editar
                                        </button>
                                    </Link>
                                    <Link to={`/view/${aluno._id}`}>
                                        <button className='btn btn-info'>
                                            Visualizar
                                        </button>
                                    </Link>
                                </td>
                            </tr>
                        );
                    })}
                    <tr className="bg-light">
                        <td colSpan={3} className="text-center"><strong>Média das Notas</strong></td>
                        <td className="text-center"><strong>{calculaMedia()}</strong></td>
                    </tr>
                </tbody>
            </table>
            <button className='btn' onClick={() => setDestaca(!destaca)}
                style={{
                    backgroundColor: '#9466ff',
                    color: '#fff'
                }}
            >
                Destacar
            </button>
        </div>
    );
};

export default Home;
