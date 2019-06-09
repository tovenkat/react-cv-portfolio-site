import React from 'react';
import ReactDOM from 'react-dom';
import ReactFullpage from '@fullpage/react-fullpage';
import Body from './Body/Body';

const Fullpage = () => (
  <ReactFullpage
    render={({ state, fullpageApi }) => {
      return (
        <div>
        <ReactFullpage.Wrapper>
          <div className="section">
            
            <p>Section 1 (welcome to fullpage.js)</p>
            <button onClick={() => fullpageApi.moveSectionDown()}>
              Click me to move down
            </button>
          </div>
          <div className="section">
          
            <p>Section 2</p>
          </div>
        </ReactFullpage.Wrapper>
        
        </div>
      );
    }}
  />
);
export default Fullpage;