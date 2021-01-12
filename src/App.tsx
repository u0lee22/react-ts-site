import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import clsx from "clsx";
import Users from './pages/Users';
import About from './pages/About';
import Home from './pages/Home';
import Sidebar from "./parts/Sidebar";
import {Container} from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import CssBaseline from '@material-ui/core/CssBaseline';
import MenuIcon from "@material-ui/icons/Menu";
import Typography from "@material-ui/core/Typography";
import axios from "axios";
import {createStyles, makeStyles, Theme, useTheme} from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";


const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            maxWidth : 'initial'
        },
        appBar: {
            zIndex: theme.zIndex.drawer + 1
        },
        toolbar: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            padding: theme.spacing(0, 1),
            // necessary for content to be below app bar
            ...theme.mixins.toolbar,
        },
        menuButton: {
            marginRight: 36,
        },
        drawer: {
            width: drawerWidth,
            flexShrink: 0,
            overflow: 'none'
        },
        drawerOpen: {
            width: drawerWidth,
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
        },
        drawerClose: {
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
            overflowX: 'hidden',
            width: theme.spacing(7) + 1,
            [theme.breakpoints.up('sm')]: {
                width: theme.spacing(9) + 1,
            },
        },
        content: {
            flexGrow: 1,
            padding: theme.spacing(3),
        },
    }));

function App() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);
    const theme = useTheme();

    const handleDrawerToggle = () => {
        const toggle = !open
        console.log('test');
        axios.get("/test")
            .then(({data}) => {
                console.log(data);
            })
            .catch(e => {  // API 호출이 실패한 경우
                console.error(e);  // 에러표시
            });

        setOpen(toggle);
    };

    return (
        <Container className={clsx('App',classes.root)}>
            <CssBaseline/>
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerToggle}
                        edge="start"
                        className={clsx(classes.menuButton)}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6" noWrap>
                        Test Site
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                className={clsx(classes.drawer, {
                    [classes.drawerOpen]: open,
                    [classes.drawerClose]: !open,
                })}
                classes={{
                    paper: clsx({
                        [classes.drawerOpen]: open,
                        [classes.drawerClose]: !open,
                    }),
                }}
            >
                <Toolbar/>
                <Sidebar></Sidebar>
            </Drawer>
            <main className={classes.content}>
                <Toolbar/>
                <Router>
                    <Switch>
                        <Route path="/about" component={About}></Route>
                        <Route path="/users" component={Users}></Route>
                        <Route path="/" component={Home}></Route>
                    </Switch>
                </Router>
            </main>
        </Container>
    );
}

export default App;
