const Copyright = () => {
  const date = new Date().getFullYear();
  return (
    <div className="mt-20 text-center mb-4">
      &copy; Copyright {date} <span>Abolore.</span>
      <p>All Right Reserved</p>
    </div>
  );
};

export default Copyright;
