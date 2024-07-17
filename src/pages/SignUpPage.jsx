import SignUpForm from 'src/components/Users/SignUpForm/SignUpForm.jsx';
import AdvantagesSection from 'src/components/AdvantagesSection/AdvantagesSection';
import css from './SignUpPage.module.css';
import Container from 'src/components/REUSABLE/Container/Container';

const SignUpPage = () => {
  return (
    <Container>
      <div className={css.SignUpContainer}>
    
      <SignUpForm />
      <AdvantagesSection />
    </div>
    </Container>
  );
};

export default SignUpPage;
