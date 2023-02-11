const Navbar = () => {
  return (
    <nav
    className="navbar fixed-top navbar-expand-lg navbar-light"
    style={{"background-color": "#ffffff"}}
      >
      <div className="container">
        <a className="navbar-brand mb-0 h1 fs-2" href="#">
          📖 ReadWide
        </a>

        <div className="d-flex justify-content-center mx-auto">
          <ul className="navbar-nav my-auto">
            <li className="nav-item active">
              <a className="nav-link h6" href="#">
                Register Book <span className="sr-only">(current)</span>
              </a>
            </li>
          </ul>
          <form className="navbar-form navbar-right d-inline-flex p-2">
            <input
              className="form-control mx-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-dark mx-2" type="submit">
              Find Books
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
