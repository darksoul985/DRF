import React from 'react';
import logo from './logo.svg';
import './App.css';
import UsersList from './components/Usersapp.jsx';
import ProjectList from './components/Projectapp.js';
import TodosList from './components/Todoapp.js';
import NotFound404 from './components/NotFound404';
import UserProjects from './components/UserProjects.jsx'
import axios from 'axios';
import {BrowserRouter, Route, Routes,Link,useLocation, Navigate} from 'react-router-dom';

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            'users': [],
            'projects': [],
            'todolist':[]
        }
    }
    componentDidMount () {
        axios.get('http://127.0.0.1:8000/api/auth/').then(response => {
            console.log(response)

                this.setState(
                    {
                        'users': response.data
                    })
            }
        ).catch(error => console.log(error));
        
        axios.get('http://127.0.0.1:8000/api/projects/').then(response => {
            console.log(response.data.results)

                this.setState(
                    {
                        'projects': response.data.results
                    })
            }
        ).catch(error => console.log(error));

        axios.get('http://127.0.0.1:8000/api/todo/').then(response => {

                this.setState(
                    {
                        'todolist': response.data.results
                    })
            }
        ).catch(error => console.log(error));
    }

    render() {
        return (
            <div>
                <BrowserRouter>
                    <nav>
                        <ul>
                            <li>
                                <Link to='/users'>Пользователи</Link>
                            </li>
                            <li>
                                <Link to='/projects'>Проекты</Link>
                            </li>
                            <li>
                                <Link to='/todolist'>Задачи</Link>
                            </li>
                        </ul>
                    </nav>
                    <Routes>
                        <Route exact path='/' element={<Navigate to='/projects' />}/>

                        <Route exact path='users' element={<UsersList users={this.state.users} />}/>
                        {/*TODO не работает переход по проекту */}
                        <Route path='/projects'>
                            <Route index element={<ProjectList projects={this.state.projects} />}/>
                            <Route path=':userId' element={<UserProjects projects={this.state.users} />}/>
                        </Route>    
                        <Route exact path='todolist' element={<TodosList todolist={this.state.todolist} />}/>

                        <Route path='*' element={<NotFound404/>}/>
                            
                    </Routes>
                </BrowserRouter>
            </div>
            
        )
    }
};

export default App;
