import s from './UserMenu..module.css';

export default function Navigator() {
  return (
    <div className={s.Navigator}>
      <p className={s.text}>Вход выполнен</p>
      <button type="button" className={s.button}>
        Log out
      </button>
    </div>
  );
}
