import LoginPage from "./LoginPage/LoginPage.js"

function Account() {

  const loggedIn = false;

  return (
    <div>
      {loggedIn ? <LoginPage />: <LoginPage />}
    </div>
  );
}

export default Account;
