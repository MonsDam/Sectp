
function Navbar(){
    return(<div id='header'>
            <nav className="navbar navbar-expand-lg bg-color navbar-dark">
            <div className="container-fluid d-flex">
                <a className="navbar-brand logo" href="#">SECTP</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 m">
                        <li className="nav-item mx-4">
                        <a className="nav-link nav-link-color" aria-current="page" href="/Signup">Sign Up</a>
                        </li>
                    </ul>
                </div>
            </div>
            </nav>
        </div>
    )
}

export default Navbar