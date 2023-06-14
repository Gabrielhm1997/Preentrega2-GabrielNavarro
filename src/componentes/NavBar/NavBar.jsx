import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
    return (
        <header id="inicio">
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <div className="iconTitle d-flex justify-content-center align-items-center nav-link">
                        <img src="/img/logo.jpg" alt="logo" className="logo img-fluid rounded-circle me-2" />
                        <h1 className="titulo fw-bold">Frosty Bite</h1>
                    </div>
                    <CartWidget/>
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div className="offcanvas-header">
                            <h4 className="offcanvas-title titulo" id="offcanvasNavbarLabel">Frosty Bite</h4>
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                <li className="nav-item d-flex align-items-center justify-content-end m-2">
                                    Inicio
                                </li>
                                <li className="nav-item d-flex align-items-center justify-content-end m-2">
                                    Baldes
                                </li>
                                <li className="nav-item d-flex align-items-center justify-content-end m-2">
                                    Postres
                                </li>
                                <li className="nav-item d-flex align-items-center justify-content-end m-2">
                                    Tortas
                                </li>
                                <li className="nav-item d-flex align-items-center justify-content-end m-2">
                                    Yogurt
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default NavBar