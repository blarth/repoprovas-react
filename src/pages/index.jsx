
import { Routes, Route } from 'react-router-dom';
import SignIn from './signIn';
import SignUp from './signUp';

function Pages() {
  return (
      <Routes>
          <Route path="/login" element={<SignIn />}/>
          <Route path="/" element={<SignUp />}/>
      </Routes>
  );
}
export default Pages