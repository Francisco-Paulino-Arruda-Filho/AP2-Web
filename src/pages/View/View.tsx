import { useEffect, useState } from 'react';
import app from '../../config/Firebase';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min";
import './styles.css';
import { useParams, useNavigate } from 'react-router-dom'

interface Aluno {
    nome: string;
    curso: string;
    ira: number;
}

const View = () => {
    const [data, setData] = useState<Aluno | null>(null);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`http://localhost:3000/aluno/find/${id}`, { method: "GET" }).
            then(response => { console.log(response); return response.json() }).
            then(data => {
                console.log(data)
                setData(data)
            }
            ).catch((error) => { console.error(error) })

    }, [id]);

    return (
        <>
            <div className='container mt-5'>
                {data &&
                    <div key={id} className='view'>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title header">{data.nome}</h5>
                                <h6 className="card-subtitle mb-2 text-muted">Curso: {data.curso}</h6>
                                <p className="card-text">IRA: {data.ira}</p>
                                <button
                                    onClick={() => navigate('/')}
                                    className="btn btn-primary"
                                >
                                    Voltar
                                </button>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </>
    )
}

export default View;
