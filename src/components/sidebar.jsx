import React, {Component} from 'react'

export default class Sidebar extends Component {
  render() {
    return (<div>
      <div>
        <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i/></nav>
        <aside id="colorlib-aside" className="border js-fullheight">
          <div className="text-center">
            <div className="author-img" style={{
                backgroundImage: 'url(images/about.jpg)'
              }}/>
            <h1 id="colorlib-logo">
              <a href="index.html">Sandeep Yalamarthi</a>
            </h1>
            <span className="email">
              <i className="icon-phone3"></i>
              9542073330</span>

            <span className="email">
              <i className="icon-mail"></i>
              sandeep.yalamarthi@gmail.com</span>
          </div>
          <nav id="colorlib-main-menu" role="navigation" className="navbar">
            <div id="navbar" className="collapse">
              <ul>
                <li className="active">
                  <a href="#home" data-nav-section="home">Introduction</a>
                </li>
                <li>
                  <a href="#about" data-nav-section="about">About</a>
                </li>
                <li>
                  <a href="#skills" data-nav-section="skills">Skills</a>
                </li>
                <li>
                  <a href="#wrkexp" data-nav-section="wrkexp">Work Experience</a>
                </li>
                <li>
                  <a href="#education" data-nav-section="education">Education</a>
                </li>
              </ul>
            </div>
          </nav>
          <nav id="colorlib-main-menu">
            <ul>
              <li>
                <a href="https://www.facebook.com/chandrasandeep.yalamarthi" target="_blank" rel="noopener noreferrer"><i className="icon-facebook2"/></a>
              </li>
              <li>
                <a href="https://in.linkedin.com/in/sandeepyalamarthi" target="_blank" rel="noopener noreferrer"><i className="icon-linkedin2"/></a>
              </li>
              <li>
                <a href="https://github.com/sanyalam" target="_blank" rel="noopener noreferrer">
                  <i className="icon-github"></i>
                </a>
              </li>
            </ul>
          </nav>
          <div className="colorlib-footer">
            <p>
              <small>
                Made with
                <i className="icon-heart" aria-hidden="true"/>
                and
                <i className="icon-beer" aria-hidden="true"></i>
                <br></br>
                Thanks
                <a href="https://colorlib.com" target="_blank" rel="noopener noreferrer">Colorlib</a>
                for inspiration
              </small>
            </p>
            <p>
              <small>
                Something coming soon !!
              </small>
            </p>
          </div>
        </aside>
      </div>
    </div>)
  }
}
