import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>Home</li>
          <li>About Me</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </nav>

      <content>
        <div id="introduction" className="ContentBox">
          <div className="ContentBoxContent">
            <span className="ContentBoxTitle">Welcome!</span>
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

export default App;
