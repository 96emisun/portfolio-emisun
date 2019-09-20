import React from 'react';
import logo from './resources/rat-logo.svg';
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
    currentContent.classList.toggle('FadeOut');
    currentContent.classList.toggle('FadeIn');

    const newContent = document.getElementById(page);
    newContent.classList.toggle('FadeOut');
    newContent.classList.toggle('FadeIn');

    this.setState({
      currentPage: page
    });
  }

  render() {
    return (
      <div className="App">
        <nav>
          <img src={logo} alt="" />
          <ul>
            <li onClick={() => this.handleClick("about")}>About Me</li>
            <li onClick={() => this.handleClick("projects")}>Projects</li>
            <li onClick={() => this.handleClick("contact")}>Contact</li>
          </ul>
        </nav>
        
        <content>
          <div id="about" className="ContentBox FadeIn">
            <div className="ContentBoxContent">
              <span className="ContentBoxTitle">About</span>
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

          <div id="projects" className="ContentBox FadeOut">
            <div className="ContentBoxContent">
              <span className="ContentBoxTitle">Projects</span>
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

          <div id="contact" className="ContentBox FadeOut">
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
