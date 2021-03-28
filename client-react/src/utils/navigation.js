const getNavigation = (user) => {
    const guestLinks = [
        {
            title: 'Login',
            link: '/login',
        },
        {
            title: 'Register',
            link: '/register',
        },
    ];

    if (!user) {
        return guestLinks;
    }
    
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
            title: `Hello ${user.Username}`,
            link: `/profile/${user.Username}`,
        }
    ];

    return !!user ? authLinks : guestLinks;
};

export default getNavigation;
