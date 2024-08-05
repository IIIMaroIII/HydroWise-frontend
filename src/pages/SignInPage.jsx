import Container from 'src/components/REUSABLE/Container/Container.jsx';
import css from './signInPage.module.css';
import SignInForm from 'src/components/Users/SignInForm/SignInForm.jsx';

const SignInPage = () => {
  return (
    <Container type="section" addClass={css.signInPageContainer}>
      <SignInForm />
    </Container>
  );
};

export default SignInPage;
