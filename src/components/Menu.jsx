import { useUserCtx } from '../hooks/useMyContext';

export const Menu = () => {
  const { isLogined, username, logIn, logOut } = useUserCtx();

  return (
    <div>
      {isLogined && username}
      {isLogined ? (
        <button type="button" onClick={logOut}>
          logOut
        </button>
      ) : (
        <button type="button" onClick={logIn}>
          logIn
        </button>
      )}
    </div>
  );
};
