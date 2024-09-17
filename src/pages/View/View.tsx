import { useEffect, useState } from 'react';
import app from '../../config/Firebase';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min";
import './styles.css';
import { useParams, useNavigate } from 'react-router-dom'

interface Aluno {
    name: string;
    curso: string;
    IRA: number;
}

const View = () => {
    const [data, setData] = useState<{ [key: string]: Aluno }>({});
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        
    }, [id]);

    return (
        <>
            <div className='container mt-5'>
                {
                    Object.keys(data).map((userId) => {
                        if (userId === id) {
                            const { name, curso, IRA } = data[userId]; // Desestruturando o contato
                            return (
                                <div key={userId} className='view'>
                                    <div className="card">
                                        <div className="card-body">
                                            <h5 className="card-title header">{name}</h5>
                                            <h6 className="card-subtitle mb-2 text-muted">Curso: {curso}</h6>
                                            <p className="card-text">IRA: {IRA}</p>
                                            <button 
                                                onClick={() => navigate('/')} 
                                                className="btn btn-primary"
                                            >
                                                Voltar
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            );
                        }
                        return null;
                    })
                }
            </div>
        </>
    )
}

export default View;
