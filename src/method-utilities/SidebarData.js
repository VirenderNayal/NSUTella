import React from 'react'
import { HomeRounded, Explore, BookSharp, Group, GitHub, Code } from '@material-ui/icons'

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
    {
        title: 'Blog',
        path: '/blog',
        icon: <BookSharp />,
        cName: 'nav-text'
    },
    {
        title: 'NSUT Societies',
        path: '/societies',
        icon: <Group />,
        cName: 'nav-text'
    },
    {
        title: 'Git & Github',
        path: '/explore/git-github',
        icon: <GitHub />,
        cName: 'nav-text'
    },
    {
        title: 'Open Source',
        path: '/explore/open-source',
        icon: <Code />,
        cName: 'nav-text'
    },
]