import React from 'react';
import logo from './logo.svg';
import './App.css';
import UsersList from './components/Usersapp.js'
import axios from 'axios';

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            'users': []
        }
    }
    componentDidMount () {
        // const users = [
        //     {
        //     'first_name': 'Фёдор',
        //     'last_name': 'Достоевский',
        //     'birthday': 1821
        //     },
        //     {
        //     'first_name': 'Прочий',
        //     'last_name': 'Хороший',
        //     'birthday': 1831
        //     },

        // ]
        axios.get('http://127.0.0.1:8000/api/auth/').then(
        
            response => {
                const users = response.data

                this.setState(
                    {
                        'users': users
                    })
            }
        ).catch(error => console.log(error))
    }

    render() {
        return (
            <div>
                <UsersList users={this.state.users} />
            </div>
            
        )
    }
}

export default App;
