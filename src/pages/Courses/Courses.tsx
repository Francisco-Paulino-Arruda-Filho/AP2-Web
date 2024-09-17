import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

interface Aluno {
    nome: string;
    curso: string;
    ira: number;
}

const Courses = () => {

    const [data, setData] = useState<{ [key: string]: Aluno[] }>({});
    useEffect(() => {
        fetch('http://localhost:3000/aluno', { method: "GET" }).
            then(response => { console.log(response); return response.json() }).
            then(data => {
                const byCourse = groupBy(data, "curso")
                console.log(byCourse)
                setData(byCourse)
            }
            ).catch((error) => { console.error(error) })
    }, []);


    return (<>
        <h2 className="mb-4">Lista de Contatos</h2>
        {Object.entries(data).map(([curso, alunos]) => {
            return <>
                <h3>{curso}</h3>

                <table className="table" style={{
                    padding: "5px 10px"
                }}>
                    <thead >
                        <tr>
                            <th>Nome</th>
                            <th>IRA</th>
                            <th>Ação</th>
                        </tr>
                    </thead>
                    <tbody>
                        {alunos.map((aluno) => {
                            return (
                                <tr key={aluno._id} style={{
                                    borderWidth: "5px",
                                    borderColor: aluno.ira >= 7 ? "blue" : "red"
                                }}>
                                    <td>{aluno?.nome || "Sem nome"}</td>
                                    <td>{aluno?.ira || "Sem IRA"}</td>
                                    <td>
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
                        }
                        )}
                    </tbody>
                </table>

            </>
        })}
    </>);
}

function groupBy(array, property) {
    return array.reduce((memo, x) => {
        memo[x[property]] ||= [];
        memo[x[property]].push(x);
        return memo;
    }, {});
}

export default Courses;