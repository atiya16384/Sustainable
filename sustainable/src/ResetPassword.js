import React from 'react';

const ResetPassword = () => {
  return (
    <div className="reset-password">
      <h2>Reset Password</h2>
      <form>
        <input type="email" placeholder="Email" required />
        <button type="submit">Send Reset Link</button>
      </form>
    </div>
  );
};

export default ResetPassword;
