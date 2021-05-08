import Discussion from '../assets/discussion.png';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Landing from './Tabs/Landing';
import Customers from './Tabs/Customers';
export default function Home(props) {
  const history = useHistory();

  const signUp = () => {
    history.push('/signup');
  };
  const viewData = () => {
    history.push('/viewdata');
  };
  return (
    <>
      <div className="container">
        <div className="header">
          <div className="header-text">LandKit</div>
          <div className="header-tabs">
            <div>
              <a className="tab-text" href="#experience">
                Experience
              </a>
            </div>
            <div>
              <a className="tab-text" href="#customers">
                Customers
              </a>
            </div>
            <div>
              <a className="tab-text" href="#account">
                Account
              </a>
            </div>
            <div>
              <a className="tab-text" href="#documentation">
                Documentation
              </a>
            </div>
          </div>
          <div className="signUp-bgbtn">
            <button className="signUp-btn" onClick={signUp}>
              Sign Up
            </button>
          </div>
        </div>
        <div className="web-description">
          <div className="description">
            <div className="description-head">
              Welcome to <span className="landkit">Landkit.</span> Develop anything.
            </div>
            <div className="description-text">
              Build a beautiful, modern website with flexible Bootstrap components built from scratch.
            </div>
            <div className="description-bgbtn">
              <button className="description-btn" onClick={viewData}>
                View Api Data
              </button>
            </div>
          </div>
          <div className="discussion-bgimg">
            <img className="discussion-img" src={Discussion} alt="discussion" />
          </div>
        </div>
      </div>
      <Landing />
      <Customers />
    </>
  );
}
