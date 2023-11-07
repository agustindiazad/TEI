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
                    <Link href='/viajes' target='_blank' style={{ textDecoration: 'none', color: 'white' }}>Viajes</Link>
                    <SidebarLink></SidebarLink>
                    <Link href='/registrate' style={{ textDecoration: 'none', color: 'white' }}>Registrate</Link>
                    <SidebarLink></SidebarLink>
                    <SidebarLink></SidebarLink>
                    <SideBtnWrap>
                    <SidebarRoute to='/test'>¡Conviertete en Printer!</SidebarRoute>
                    </SideBtnWrap>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
