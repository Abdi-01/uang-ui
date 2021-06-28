import React from 'react'
import Button from '@material-ui/core/Button';
import SidebarComponent from '../../components/sidebar';
import { MenuWrapper } from './logoutPage';

const LogoutPage = () => {
    return (
        <div>
            <MenuWrapper>
              <SidebarComponent/>
              <div>
                <Button variant="contained" color="primary">
                    Logout
                </Button>
              </div>
            </MenuWrapper>
        </div>
    )
}

export default LogoutPage
