import React from 'react';
import ratLogoImg from './resources/rat-logo.svg';
import placeholderImg from './resources/placeholder.png';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currentPage: "about"
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(page) {
    var currentPage = this.state.currentPage;

    const currentContent = document.getElementById(currentPage);
    currentContent.classList.toggle('Active');

    const newContent = document.getElementById(page);
    newContent.classList.toggle('Active');

    this.setState({
      currentPage: page
    });
  }

  render() {
    return (
      <div className="App">
        <nav>
          <img src={ratLogoImg} alt="" />
          <ul>
            <li onClick={() => this.handleClick("about")}>About Me</li>
            <li onClick={() => this.handleClick("projects")}>Projects</li>
            <li onClick={() => this.handleClick("contact")}>Contact</li>
          </ul>
        </nav>
        
        <content>
          <div id="about" className="ContentBox Active">
            <div className="ContentBoxContent">
              <span className="ContentBoxTitle">Welcome!</span>
              <p className="ContentBoxText">
                <br/>
                My name is Emil Sundqvist and I'm a tech enthusiast living in the chilly northern parts of Sweden.
                <br/><br/>
                I am currently working as an Application Management Lead for a large consulting business. That position carries a lot of responsibilities and many difficulties, but I've never been one to turn down a challenge.
                <br/><br/>
                Head to the "projects" tab for samples of my work or the "contact" tab where you can get in touch with me directly. From there you can also navigate to my LinkedIn page to read more about me and my qualifications.
              </p>
            </div>
          </div>

          <div id="projects" className="ContentBox">
            <div className="ContentBoxContent">
              <span className="ContentBoxTitle">Projects</span>

              <a target="_blank" href="#" className="ProjectBox">
                <img src={placeholderImg} alt="image" />
              </a>

              <a target="_blank" href="#">
                <img src="#" alt="image" />
              </a>

              <a target="_blank" href="#">
                <img src="#" alt="image" />
              </a>

              <a target="_blank" href="#">
                <img src="#" alt="image" />
              </a>

              <a target="_blank" href="#">
                <img src="#" alt="image" />
              </a>

              <a target="_blank" href="#">
                <img src="#" alt="image" />
              </a>
            </div>
          </div>

          <div id="contact" className="ContentBox">
            <div className="ContentBoxContent">
              <span className="ContentBoxTitle">Contact</span>
              <p className="ContentBoxText">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi urna lacus, auctor vel dignissim eu, ultricies a tortor.
                Etiam gravida mauris nulla, in molestie nisl accumsan vitae. Duis et posuere dolor. Aenean bibendum ligula ut mi viverra, feugiat scelerisque nisl pulvinar.
                Nulla viverra ut nunc eget faucibus. Vivamus facilisis orci vel turpis vehicula, at pharetra ligula porta. In luctus congue felis, sit amet accumsan magna ultrices non.
                <br/>
                Vivamus vulputate felis nec commodo euismod. Donec tincidunt nisl non quam fermentum, ut lobortis tortor pretium.
                Donec varius ultricies tellus, vitae convallis quam facilisis vel. Donec eget facilisis nisl. Duis libero nibh, consequat at libero eget, egestas lobortis velit.
                Sed viverra tempus tellus eget bibendum. Cras aliquet nibh sed mi mollis suscipit. Phasellus porta, magna nec vehicula cursus, elit quam suscipit libero, at pellentesque orci sem ut sapien.
                Mauris gravida sem lacus, ut semper metus consequat nec. Nunc elementum tortor id urna volutpat gravida. Vivamus quam erat, semper in sem a, vehicula lacinia sapien.
                Curabitur ligula dui, efficitur eu turpis non, viverra pretium massa. In auctor mollis mauris sit amet dapibus.
              </p>
            </div>
          </div>
        </content>

      </div>
    );
  }
}

export default App;
