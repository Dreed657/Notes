const getNavigation = () => {
  const authLinks = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "Create",
      link: "/create",
    },
    {
      title: "Profile",
      link: `/profile/123123`,
    }
  ];

  // const guestLinks = [
  //   {
  //     title: "Publications",
  //     link: "/",
  //   },
  //   {
  //     title: "Register",
  //     link: "/register",
  //   },
  //   {
  //     title: "Login",
  //     link: "/login",
  //   },
  // ];

  return authLinks;
};

export default getNavigation;
