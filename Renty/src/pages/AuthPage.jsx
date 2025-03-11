// filepath: /src/pages/AuthPage.jsx
import React from 'react';
import { Auth } from '@supabase/auth-ui-react';
import { supabase } from '../supabaseClient';
import { ThemeSupa } from '@supabase/auth-ui-shared';

const AuthPage = () => {
  return (
    // <div className='container' style={{ marginTop: '100px' }}>
    //   <Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} />

    <div className='container' style={{ marginTop: '100px' }}>
      <h1 className='loginheading'>LOGIN</h1>
      <Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} />
    </div>
  );
};

export default AuthPage;