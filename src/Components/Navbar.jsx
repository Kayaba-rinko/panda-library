import React, { useState, useEffect } from 'react';

function Navbar({ onSearchQueryChange }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [scrollTop, setScrollTop] = useState(0);
  const [navHidden, setNavHidden] = useState(false);
  const [isFixed, setIsFixed] = useState(false); 

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearchQueryChange(searchQuery);  // Pass searchQuery up to App
  };

  const handleChange = (event) => {
    setSearchQuery(event.target.value);
  };

  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      setScrollTop(winScroll);

      if (winScroll > window.innerHeight * 0.5) { // Check if scrolled more than 50%
        setNavHidden(true);
      } else if (winScroll > window.innerHeight * 0.3) { // Check if scrolled more than 30%
        setIsFixed(true); // Set navbar to fixed if scrolled more than 30%
        setNavHidden(false); // Ensure navbar is not hidden if scrolled less than 50%
      } else {
        setIsFixed(false); // Reset to non-fixed if scrolled less than 30%
        setNavHidden(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed-top navbar shadow-lg navbar-expand-lg bg-body-tertiary  ${navHidden ? 'hidden' : ''}`}
      style={{
        transition: 'top 0.5s ease-in-out',
        top: navHidden ? '-100px' : '0px',
      }}
    >
      <div className="container-fluid">
       <svg fill="#000000" height="50px" width="50px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M512,124.33c0-42.877-34.882-77.759-77.758-77.759c-31.977,0-59.554,19.468-71.473,47.17 C329.568,67.045,293.096,53.066,256,53.066c-37.098,0-73.57,13.981-106.769,40.674c-11.919-27.701-39.497-47.169-71.473-47.169 C34.882,46.571,0,81.453,0,124.33c0,41.231,31.377,72.878,68.562,77.286c-15.469,34.974-23.826,71.278-23.826,104.543 c0,113.862,96.481,159.27,211.264,159.27c114.882,0,211.264-45.58,211.264-159.27c0-33.264-8.357-69.566-23.827-104.543 C480.471,197.226,512,165.715,512,124.33z M32,124.33c0-25.232,20.527-45.759,45.758-45.759c23.095,0,42.295,17.253,45.339,39.547 c-14.629,15.686-27.418,33.23-38.093,51.41C58.06,173.93,32,153.205,32,124.33z M225.024,335.863 c7.964-3.134,54.005-3.127,61.952,0c-1.059,8.405-14.402,26.758-30.976,26.758C239.425,362.622,226.083,344.269,225.024,335.863z M272,433.104v-40.882c10.433-3.135,20.32-9.277,28.787-18.067c24.139-25.057,26.924-60.816-7.514-69.731 c-15.145-3.92-59.28-3.952-74.548,0c-33.984,8.797-31.973,44.341-7.514,69.731c8.468,8.79,18.355,14.932,28.788,18.067v40.882 c-89.004-3.618-163.264-37.47-163.264-126.945c0-95.713,82.105-221.092,179.264-221.092c97.157,0,179.264,125.393,179.264,221.092 C435.264,395.615,361.031,429.484,272,433.104z M426.995,169.529c-10.547-17.966-23.33-35.584-38.092-51.411 c3.043-22.292,22.243-39.547,45.339-39.547c25.231,0,45.758,20.527,45.758,45.758C480,153.303,453.833,173.907,426.995,169.529z"></path> </g> </g> <g> <g> <path d="M229.843,183.658c-20.257-20.257-61.593-11.763-92.326,18.972c-30.734,30.734-39.228,72.07-18.972,92.326 c20.257,20.257,61.593,11.763,92.326-18.972C241.605,245.251,250.099,203.915,229.843,183.658z M179.373,266.539 c-11.69,0-21.166-9.476-21.166-21.166c0-11.69,9.476-21.166,21.166-21.166c11.69,0,21.166,9.476,21.166,21.166 C200.539,257.062,191.062,266.539,179.373,266.539z"></path> </g> </g> <g> <g> <path d="M374.484,202.629c-30.734-30.734-72.07-39.228-92.326-18.972c-20.257,20.257-11.763,61.593,18.972,92.326 c30.734,30.734,72.07,39.228,92.327,18.972C413.712,274.7,405.218,233.363,374.484,202.629z M333.278,266.539 c-11.69,0-21.166-9.476-21.166-21.166c0-11.69,9.476-21.166,21.166-21.166s21.166,9.476,21.166,21.166 C354.444,257.062,344.967,266.539,333.278,266.539z"></path> </g> </g> </g></svg>
        <a className="navbar-brand fw-bold brad" href="#">Panda Perpus</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
          </ul>
          <form className="d-flex" role="search" onSubmit={handleSubmit}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={searchQuery}
              onChange={handleChange}
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
