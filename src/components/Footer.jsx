export const Footer = () => {
  return (
    <div className="mt-32 py-4 flex md:flex-row flex-col gap-6 md:gap-0 justify-between items-center">
      <div className="flex gap-7 lg:ml-30 md:ml-18">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Project</a>
      </div>
      <h1 className="text-base font-bold">Made With RIKI REZA❤️</h1>
      <div className="flex items-center gap-3">
        <a href="#">
          <i className="ri-github-fill ri-2x"></i>
        </a>
        <a href="#">
          <i className="ri-instagram-fill ri-2x"></i>
        </a>
        <a href="#">
          <i className="ri-linkedin-box-fill ri-2x"></i>
        </a>
        <a href="#">
          <i className="ri-youtube-fill ri-2x"></i>
        </a>
      </div>
      <div></div>
    </div>
  );
};
