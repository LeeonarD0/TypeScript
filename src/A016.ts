// Structural Typing
type User = {
  username: string;
  password: number;
};

type VerifyUsr = (user: User, sentValue: User) => boolean;

const verifyUser: VerifyUsr = (user, sentValue) => {
  return (
    user.username === sentValue.username && user.password === sentValue.password
  );
};

const bdUser = { username: 'Leo', password: 12345 };
const sentUser = { username: 'Leo', password: 12345 };
const loggedIn = verifyUser(bdUser, sentUser);

console.log(loggedIn);
