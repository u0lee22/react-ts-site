import React from 'react';
import {Omit} from '@material-ui/types';
import {Link as RouterLink, LinkProps as RouterLinkProps} from 'react-router-dom';
import {ListItem, ListItemIcon, ListItemText} from '@material-ui/core';

export default function ListItemLink(props: ListItemLinkProps) {
    const {icon, primary, to} = props;

    const renderLink = React.useMemo(
        () =>
            React.forwardRef<any, Omit<RouterLinkProps, 'to'>>((itemProps, ref) => (
                <RouterLink to={to} ref={ref} {...itemProps} />
            )),
        [to],
    );

    return (
        <ListItem button component={renderLink}>
            {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
            <ListItemText primary={primary}/>
        </ListItem>
    );
}


interface ListItemLinkProps {
    icon?: React.ReactElement;
    primary: string;
    to: string;
}