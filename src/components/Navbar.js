import PropTypes from 'prop-types';

export default function Navbar(props) {
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.colorMode==="light"?"light":"dark"} bg-${props.colorMode}`}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            {props.title}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  {props.firstBar}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">
                  {props.about}
                </a>
              </li>
            </ul>

            {/* Switch for Dark Mode */}
            <div
              className={`form-check form-switch text-${
                props.colorMode === 'light' ? 'dark' : 'light'
              }`}
            >
              <input
                className="form-check-input mx-1"
                onClick={() => props.setCustomMode('#042743', 'dark')}  // Call the function here
                type="checkbox"
                role="switch"
                id="darkModeSwitch"
                style={{backgroundColor:"#042743"}}
              />
            </div>

            {/* Switch for Mahroon Mode */}
            <div
              className={`form-check form-switch text-${
                props.colorMode === 'light' ? 'dark' : 'light'
              }`}
            >
              <input
                className="form-check-input mx-1"
                onClick={() => props.setCustomMode('#800000', 'mahroon')} // Call the function here
                type="checkbox"
                role="switch"
                id="mahroonModeSwitch"
                style={{backgroundColor:"#800000"}}
              />
            </div>

            {/* Switch for Green Mode */}
            <div
              className={`form-check form-switch text-${
                props.colorMode === 'light' ? 'dark' : 'light'
              }`}
            >
              <input
                className="form-check-input mx-1"
                onClick={() => props.setCustomMode('#4CAF50', 'green')} // Call the function here
                type="checkbox"
                role="switch"
                id="greenModeSwitch"
                style={{backgroundColor:"#4CAF50"}}
                
              />
            </div>

            
          </div>
        </div>
      </nav>
    </>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
  firstBar: PropTypes.string.isRequired,
  colorMode: PropTypes.string.isRequired,
  setCustomMode: PropTypes.func.isRequired, // Make sure the function is defined here
};
