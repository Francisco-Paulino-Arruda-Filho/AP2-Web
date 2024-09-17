import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import './styles.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const Header = () => {
    const location = useLocation();
    const [activeTab, setActiveTab] = useState("Home");

    useEffect(() => {
        if (location.pathname === "/") {
            setActiveTab("Home");
        } else if (location.pathname === "/add") {
            setActiveTab("Add");
        } else if (location.pathname === "/aluno") {
            setActiveTab("aluno");
        }
    }, [location]);

    return (
        <nav className="navbar navbar-expand-lg fixed-top">
            <div className="container-fluid">
                <div className="navbar-brand logo">
                    CRUD de alunos
                </div>
                <div className="collapse navbar-collapse ">
                    <div className="dropdown ms-auto">
                        <button
                            className="btn btn-secondary dropdown-toggle"
                            type="button"
                            id="dropdownMenuButton"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            Operações
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <li>
                                <Link
                                    className={`dropdown-item ${activeTab === 'Home' ? 'active' : ''}`}
                                    to="/"
                                    onClick={() => setActiveTab("Home")}
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className={`dropdown-item ${activeTab === 'Add' ? 'active' : ''}`}
                                    to="/add"
                                    onClick={() => setActiveTab("Add")}
                                >
                                    Add
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;
