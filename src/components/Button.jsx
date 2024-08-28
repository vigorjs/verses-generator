

const Button = ({ onClick, children, className, bgColor, color }) => {
    return (
        <button
          type="button"
          onClick={onClick}
          className={`flex flex-row items-center justify-center rounded-full ${color? `text-[${color}]` : "text-[#fff]"} py-2 px-5 ${bgColor ? `bg-[${bgColor}]` : "bg-gray-700"} ${className}`}
        >
          {children}
        </button>
      );
    };

export default Button;
