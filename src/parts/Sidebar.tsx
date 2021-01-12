import React from 'react';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import ListItemLink from '../components/ListItemLink';

function Sidebar() {
    const menus = [
        {display: 'Home', path: '/'},
        {display: 'About', path: '/about'},
        {display: 'Users', path: '/users'}
    ];
    return (
        <div>
            <List>
                {menus.map(({display, path}, index) => (
                    <li key={index.toString()}>
                        <ListItemLink to={path} primary={display} icon={<InboxIcon/>}/>
                    </li>
                ))}
            </List>
            <Divider/>
            <List>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{index % 2 === 0 ? <InboxIcon/> : <MailIcon/>}</ListItemIcon>
                        <ListItemText primary={text}/>
                    </ListItem>
                ))}
            </List>
        </div>
    );
}

export default Sidebar;