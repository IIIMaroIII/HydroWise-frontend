import SignUpForm from 'src/components/Users/SignUpForm/SignUpForm.jsx';
import AdvantagesSection from 'src/components/AdvantagesSection/AdvantagesSection';
import css from './SignUpPage.module.css';
import Container from 'src/components/REUSABLE/Container/Container';
import { useWindowSize } from 'react-use';

const SignUpPage = () => {
  const { width } = useWindowSize();

  return (
    <Container type="section" addClass={css.signInPageContainer}>
      <SignUpForm />
      {width <= 1439 ? null : <AdvantagesSection />}
    </Container>
  );
};

export default SignUpPage;
