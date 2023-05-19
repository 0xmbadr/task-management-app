interface ButtonProps {
  type?: 'button' | 'reset' | 'submit';
  children?: JSX.Element | string;
  onClick?: () => void;
  small?: boolean;
  colorTheme?: boolean;
  style?: React.CSSProperties;
}
const Button = ({
  children,
  onClick,
  small,
  type,
  colorTheme,
  style,
}: ButtonProps) => {
  return (
    <button
      type={type ? type : 'button'}
      onClick={onClick}
      className={`Button ${small ? 'Button--small' : ''}  ${
        colorTheme ? 'Button--theme' : ''
      }`}
      style={style}>
      {children}
    </button>
  );
};

export default Button;
