export interface BigButtonProps {
  title?: string;
}

export const initialProps: BigButtonProps = {
  title: "Button Title",
};

const BigButton = ({ title }: BigButtonProps) => {
  return (
    <div className="mt-10">
      <button className="flex w-full items-center justify-center rounded-md border border-transparent bg-sky-200 py-3 px-8 text-base font-medium text-white">
        {title}
      </button>
    </div>
  );
};

export default BigButton;
