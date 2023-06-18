import style from "./header.module.css";
import Image from "next/image";

const Header = () => {
  return (
    <nav className={style.mainHeader}>
      <div className={style.image}></div>
      <Image src={"/assets/logo2.png"} width={100} height={100} alt="logo" />
    </nav>
  );
};

export default Header;
