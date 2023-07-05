import React from 'react';
import BuggyCounter from '././component/BuggyContainer';
import ErrorBoundary from './component/ErrorBoundery';

function App() {
  return (
    <div>
      <ErrorBoundary>
        <BuggyCounter />
      </ErrorBoundary>
    </div>
  );
}

export default App;


