import Navigation from 'src/components/Navigation/Navigation.jsx';
import Logo from 'src/components/REUSABLE/Logo/Logo.jsx';
import UsersNav from 'src/components/Users/UsersNav/UsersNav.jsx';

const HomePage = () => {
  return (
    <>
      <Logo />
      <Navigation />
      <UsersNav />
    </>
  );
};

export default HomePage;
