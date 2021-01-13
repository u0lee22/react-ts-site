import React from 'react';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemLink from '../components/ListItemLink';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import GroupIcon from '@material-ui/icons/Group';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';

function Sidebar() {
    const menus = [
        {display: 'Home', path: '/', icon: <HomeIcon/>},
        {display: 'About', path: '/about', icon: <InfoIcon/>},
        {display: 'Users', path: '/users', icon: <GroupIcon/>}
    ];
    return (
        <div>
            <List>
                {menus.map(({display, path, icon}, index) => (
                    <li key={index.toString()}>
                        <ListItemLink to={path} primary={display} icon={icon}/>
                    </li>
                ))}
            </List>
            <Divider/>
            <List>
                {['Example 1', 'Example 2', 'Example 3'].map((text, index) => (
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