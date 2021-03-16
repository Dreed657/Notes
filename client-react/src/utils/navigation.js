const getNavigation = () => {
    const authLinks = [
        {
            title: 'Home',
            link: '/',
        },
        {
            title: 'Create',
            link: '/create',
        },
        {
            title: 'Profile',
            link: `/profile/123123`,
        },
    ]

    const guestLinks = [
        {
            title: 'Login',
            link: '/login',
        },
        {
            title: 'Register',
            link: '/register',
        },
    ]

    return guestLinks
}

export default getNavigation
