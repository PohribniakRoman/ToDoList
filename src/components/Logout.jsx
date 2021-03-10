export default function Logout({changeStatus}) {
  return (
    <div>
      <button
        onClick={() => {
          changeStatus();
          localStorage.removeItem("user");
        }}
      >
        Logout
      </button>
      <div>Current user:{localStorage.getItem('user')}</div>
    </div>
  );
}
