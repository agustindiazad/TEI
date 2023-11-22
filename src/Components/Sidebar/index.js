import React from 'react'
import {
    SidebarContainer, Icon, CloseIcon, SideBtnWrap,
    SidebarLink, Link, SidebarWrapper, SidebarRoute, SidebarMenu
} from './SidebarElements'


const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <Link href='/conductores' style={{ textDecoration: 'none', color: 'white' }}>Conductores</Link>
                    <SidebarLink></SidebarLink>
                    <Link href='/pasajeros' style={{ textDecoration: 'none', color: 'white' }}>Pasajeros</Link>
                    <SidebarLink></SidebarLink>
                    <SideBtnWrap>
                    <SidebarRoute to='/rutas'>¡Mira las Rutas!</SidebarRoute>
                    </SideBtnWrap>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
