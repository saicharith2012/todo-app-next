export default function Button({ onclick, text }: ButtonProps) {
  const defaultStyles = "border px-2 py-1 w-fit m-4 cursor-pointer";
  return (
    <button className={`${defaultStyles}`} onClick={onclick}>
      {text}
    </button>
  );
}

interface ButtonProps {
  onclick: () => void;
  text: string;
}
