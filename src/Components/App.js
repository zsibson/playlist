import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// Import Components
import Login from '../Login';
import PlaylistHome from '../Components/PlaylistHome';

const code = new URLSearchParams(window.location.search).get('code');

function App() {

    return (
      <div>

      { ! code ? (
        <Login />
      ) : (
        <PlaylistHome code={code} />
        )
      }
        
      </div>
    );
}


export default App;
