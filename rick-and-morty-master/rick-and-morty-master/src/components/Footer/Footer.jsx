import "./Footer.css";
const Footer = () => {
  const date = new Date().getFullYear();

  return (
    <footer>
      &copy;<span id="year">{date} </span>
      <span>Oleksandr Sosiukin. All rights reserved.</span>
    </footer>
  );
};

export default Footer;
