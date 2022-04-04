
function Navbar_User(){
    return(<div id='header'>
            <nav className="navbar navbar-expand-lg bg-color navbar-dark">
            <div className="container-fluid d-flex">
                <a className="navbar-brand logo" href="#">SECTP</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 m">
                        <li className="nav-item mx-3">
                        <a className="nav-link nav-link-color" aria-current="page" href="/Fish_tanks">Fish Tanks</a>
                        </li>
                        <li className="nav-item mx-4">
                        <a className="nav-link nav-link-color" aria-current="page" href="/Statistics">Statistics</a>
                        </li>
                        <div className="btn-group mx-5">
                            <button type="button" className="btn btn-primary ">Fatima</button>
                            <button type="button" className="btn btn-primary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                                <span className="visually-hidden">Toggle Dropdown</span>
                            </button>
                            <ul class="dropdown-menu">
                                <li><a className="dropdown-item" href="/Settings">Settings</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="/Login">Log out</a></li>
                            </ul>
                        </div>
                    </ul>
                </div>
            </div>
            </nav>
        </div>
    )
}

export default Navbar_User