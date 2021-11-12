import React from 'react'
import { HomeRounded, Explore } from '@material-ui/icons'

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <HomeRounded />,
        cName: 'nav-text'
    },
    {
        title: 'Explore',
        path: '/explore',
        icon: <Explore />,
        cName: 'nav-text'
    },
]