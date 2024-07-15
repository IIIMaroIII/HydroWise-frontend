import css from './usersSettingsForm.module.css';

const DailyNorma = () => {
  return (
    <div>
      <ul className='ap-label-name'>My daily norma</ul>
      <div>
        <li className='ap-text'>For woman:</li>
        <p className='ap-formula'>V=(M*0,03)+(T*0,4)</p>
      </div>
      <div>
        <li className='ap-text'>For man:</li>
        <p className='ap-formula'>V=(M*0,04)+(T*0,6)</p>
      </div>
      <p className='ap-rule'>
        * V is the volume of the water norm in liters per day, M is your body
        weight, T is the time of active sports, or another type of activity
        commensurate in terms of loads (in the absence of these, you must set 0)
      </p>
      <h4 className='ap-text'>! Active time in hours</h4>
    </div>
  );
};

export default DailyNorma;
