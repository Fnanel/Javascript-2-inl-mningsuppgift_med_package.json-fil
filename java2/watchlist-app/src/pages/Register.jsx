function Register() {
  return (
    <form>
      <h2>Register</h2>
      <input type="text" placeholder="Name" /><br/>
      <input type="email" placeholder="Email" /><br/>
      <input type="password" placeholder="Password" /><br/>
      <input type="password" placeholder="Confirm Password" /><br/>
      <button type="submit">Register</button>
    </form>
  );
}

export default Register;
