import React from 'react';

class Menu extends React.Component{
    render() {
        let menus = [
            'Главная',
            'Пользователь',
            'ToDo',
            'Настройки'
        ]
        return <div>
            {menus.map((value, index)=>{
                return <div key={index}><Link label={value} /></div>
            })}

            </div>
    }
}

class Link extends React.Component{
    render() {
        const url = '/' + this.props.label.toLowerCase().trim().replace(' ', '-');
        return <div>
            <a href="{url}">{this.props.label}</a>
            </div>
    }

}

export default Menu;
