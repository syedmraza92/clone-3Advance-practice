interface ButtonProps {
  text: string;
}

const Button: React.FC<ButtonProps> = ({ text }) => {
  return (
    <div>
      <button className="bg-3advance px-4 py-3 rounded-full text-white font-bold">
        <h1>{text}</h1>
      </button>
    </div>
  );
};

export default Button;
