
import { Routes, Route } from 'react-router-dom';
import Main from './main';
import SignIn from './signIn';
import SignUp from './signUp';

function Pages() {
  return (
      <Routes>
          <Route path="/login" element={<SignIn />}/>
          <Route path="/" element={<SignUp />}/>
          <Route path="/homepage/:path" element={<Main />} />
      </Routes>
  );
}
export default Pages