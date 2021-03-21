import React from 'react';
import classes from './Layout.module.css';
import Wrapper from '../../hoc/Wrapper';
const Layout =(props)=>(
    <Wrapper>
        <div>Toolbox, SideDrawer, Backdrop</div>
        <main className={classes.Content}>
            {props.children}
        </main>
    </Wrapper>
    
)

export default Layout;