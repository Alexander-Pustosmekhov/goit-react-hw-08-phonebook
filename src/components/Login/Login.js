// import s from './Login.module.css';

export default function Login() {
  return (
    <>
      <form>
        <label>
          Email
          <input type="mail" required />
        </label>
        <label>
          Password
          <input type="password" required />
        </label>
        <button type="submit"></button>
      </form>
    </>
  );
}
