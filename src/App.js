import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Body from './Components/Body';
import Header from './Components/Header';
import Main from './Components/Main';
import WatchVideo from './Components/WatchVideo';
import store from './Utils/Store';
import SearchPage from './Components/SearchPage';
function App() {
  const appRouter = createBrowserRouter([{
    path:'/',
    element:( <div>
    <Header/>
    <Body/>
    </div>),
    children:[
     {
      path:'/',
      element:<Main/>
     },
     {
      path:'watch',
      element:<WatchVideo/>
     },
     {
      path:'/results',
      element:<SearchPage/>
     },

    ]
  }])
  return (
    <Provider store={store}>
    <div >
    
   <RouterProvider router={appRouter}/>
    </div>
    </Provider>
  );
}

export default App;
