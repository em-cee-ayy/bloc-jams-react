import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import Landing from './components/Landing';
import Library from './components/Library';
import Album from './components/Album';

class App extends Component {
  render() {
    return (

      <div className="App">
      <div class="grid">
        <header>
        <nav>
        <ul class="nav nav-pills nav-fill">
  <li class="nav-item">
    <a class="nav-link" href="/">Landing</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="/library">Library</a>
  </li>
</ul>
        </nav>
          <h1 class ="title">Bloc Jams</h1>
        </header>
        </div>
        <main>
          <Route exact path="/" component={Landing} />
          <Route path="/library" component={Library} />
          <Route path="/Album/:slug" component={Album} />
        </main>
      </div>
    );
  }
}

export default App;
