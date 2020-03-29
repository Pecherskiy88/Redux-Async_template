import React from 'react';
import Timer from './components/Timer/TimerContainer';
import StepSelector from './components/StepSelector/StepSelector';
import PostsList from './components/PostsList/PostsList';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Timer />
      <div style={{ width: '400px', margin: '20px auto 0' }}>
        <StepSelector />
      </div>
      <div style={{ width: '600px', margin: '0 auto' }}>
        <PostsList />
      </div>
    </div>
  );
};

export default App;
