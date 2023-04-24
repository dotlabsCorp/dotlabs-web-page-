import DotlbasLogo from "./DotlbasLogo";
import Link from "next/link";

const Header = () => {
  return (
    <header>
      <Link href="/" passHref>
        <DotlbasLogo />
      </Link>
      {/* <ConnectKitButton /> */}
    </header>
  );
};

export default Header;
