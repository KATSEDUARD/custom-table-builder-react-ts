type Props = {
    children: React.ReactNode;
    onClick: () => void;
    className?: string;
};

export const Button = ({ children, onClick, className }: Props) => {
    return (
        <button
            onClick={onClick}
            className={`${className} py-2 px-4 rounded-lg bg-blue-700 text-white hover:bg-blue-950 cursor-pointer`}
        >
            {children}
        </button>
    );
};
