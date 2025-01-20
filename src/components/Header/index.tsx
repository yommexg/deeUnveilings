const headerbg = new URL("../../assets/header-bg.jpg", import.meta.url).href;

const Header = () => {
  return (
    <div
      className="min-h-screen bg-center sm:bg-[auto_110%] bg-cover"
      style={{
        backgroundImage: `url(${headerbg})`,
      }}
    >
      {/* Your header content here */}
    </div>
  );
};

export default Header;
