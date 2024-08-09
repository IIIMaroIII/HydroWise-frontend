import Container from 'src/components/REUSABLE/Container/Container.jsx';
import css from './signInPage.module.css';
import SignInForm from 'src/components/Users/SignInForm/SignInForm.jsx';
import { useWindowSize } from 'react-use';
import AdvantagesSection from 'src/components/AdvantagesSection/AdvantagesSection.jsx';

const SignInPage = () => {
  const { width } = useWindowSize();
  return (
    <Container type="section" addClass={css.signInPageContainer}>
      <SignInForm />
      {width <= 1439 ? null : <AdvantagesSection />}
    </Container>
  );
};

export default SignInPage;
