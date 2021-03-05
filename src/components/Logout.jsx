export default function Logout() {
  return (
    <div>
      <button
        onClick={() => {
          localStorage.removeItem("user");
        }}
      >
        Logout
      </button>
      <div>Current user:{localStorage.getItem('user')}</div>
    </div>
  );
}
