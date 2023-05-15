interface ButtonProps {
  type?: 'button' | 'reset' | 'submit';
  children?: JSX.Element | string;
  onClick?: () => void;
  small?: boolean;
}
const Button = ({ children, onClick, small, type }: ButtonProps) => {
  return (
    <button
      type={type ? type : 'button'}
      onClick={onClick}
      className={`Button ${small ? 'Button--small' : ''}`}>
      {children}
    </button>
  );
};

export default Button;
