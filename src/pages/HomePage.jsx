import Navigation from 'src/components/Navigation/Navigation.jsx';
import Logo from 'src/components/REUSABLE/Logo/Logo.jsx';
import SignUpForm from 'src/components/Users/SignUpForm/SignUpForm.jsx';
import UsersNav from 'src/components/Users/UsersNav/UsersNav.jsx';

const HomePage = () => {
  return (
    <>
      <Logo />
      <Navigation />
      <UsersNav />
      <SignUpForm />
    </>
  );
};

export default HomePage;
