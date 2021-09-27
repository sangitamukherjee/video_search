import {Container} from 'react-bootstrap';
import React, {useState} from 'react';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import HomeScreen from './screens/homeScreen/HomeScreen';
import LoginScreen from './screens/loginScreen/LoginScreen';
import WatchScreen from './screens/watchScreen/WatchScreen';
import SearchScreen from './screens/searchScreen/SearchScreen';

import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import './_app.scss';


const Layout = ({children}) => {
  const [sidebar, toggleSidebar] = useState(false)
  const handleToggleSidebar = () => toggleSidebar(value => !value)
  return(
    <>
      <Header handleToggleSidebar={handleToggleSidebar}/>
      <div className="app__container">
        <Sidebar
          sidebar={sidebar}
          handleToggleSidebar={handleToggleSidebar}
        />
        <Container fluid className="app_main">
          {children}
        </Container>
      </div>
    </>

  )
}

const App = () => {
  return (
    <Router>
      <Switch>
         <Route exact path='/'>
            <Layout>
               <HomeScreen/>
              </Layout>
         </Route>

         <Route path='/auth'>
            <LoginScreen/>
         </Route>
         <Route path='/search/:query'>
            <Layout>
               <SearchScreen/>
            </Layout>
         </Route>

         <Route path='/watch/:id'>
            <Layout>
               <WatchScreen />
            </Layout>
         </Route>
         <Route>
            <Redirect to='/' />
         </Route>

      </Switch>
    </Router>
   )
}
export default App;
