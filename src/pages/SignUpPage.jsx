import SignUpForm from 'src/components/Users/SignUpForm/SignUpForm.jsx';
import AdvantagesSection from 'src/components/AdvantagesSection/AdvantagesSection';
import css from './SignUpPage.module.css';
import Container from 'src/components/REUSABLE/Container/Container';

import { useState, useEffect } from 'react';

const SignUpPage = () => {

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 1440);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  return (
    <Container>
      <div className={css.SignUpContainer}>

      {isMobile ? (
        <SignUpForm />
      ) : (
        <>
          <SignUpForm />
      <AdvantagesSection />
        </>
      )}
    
      
    </div>
    </Container>
  );
};

export default SignUpPage;
