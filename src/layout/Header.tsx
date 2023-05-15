import Launch from '../components/Launch';
import DarkLogo from './../assets/DarkLogo.svg';
import LightLogo from './../assets/LightLogo.svg';
import MobileLogo from './../assets/MobileLogo.svg';

interface HeaderProps {
  colorTheme: string;
}

const Header = ({ colorTheme }: HeaderProps) => {
  const LogoImage = colorTheme === 'dark' ? LightLogo : DarkLogo;
  return (
    <header className="Header">
      <picture className="Header__logo">
        <source srcSet={MobileLogo} media="(max-width: 767px)" />
        <img src={LogoImage} />
      </picture>

      <Launch />
    </header>
  );
};

export default Header;
