import React, { Component } from 'react';
import { Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui/Toolbar';
import './css/NavBar.scss';

// Material ui
import Accessibility from 'material-ui/svg-icons/action/accessibility';
import { grey200, grey700 } from 'material-ui/styles/colors';

const toolbarStyle = {
    backgroundColor: grey200
}

const iconStyle = {
    color: grey700,
    margin: '5px',
    cursor: 'pointer'
}

const toolbartitleStyle = {
    marginRight: '10px',
    cursor: 'pointer'
}

const titleStyle = {
    color: grey700,
    cursor: 'pointer'
}

class NavBar extends Component {
    render() {
        return (
            <Toolbar style={toolbarStyle}>
                <ToolbarGroup>
                    <ToolbarTitle
                        style={titleStyle}
                        text="Main"
                        onTouchTap={() => this.props.history.push('/')} />
                </ToolbarGroup>
                <ToolbarGroup>
                    <Accessibility
                        style={iconStyle}
                        onTouchTap={() => this.props.history.push('/auth')} />
                    <ToolbarTitle
                        style={toolbartitleStyle}
                        text="Auth"
                        onTouchTap={() => this.props.history.push('/auth')} />
                </ToolbarGroup>
            </Toolbar>
        );
    }
}

export default NavBar;