import { twMerge } from "tailwind-merge";

export interface PageLayoutProps {
  children: React.ReactNode;
  backgroundColor?: string;
}

export const initialProps = {
  backgroundColor: "bg-white",
};

const PageLayout = ({ children, backgroundColor }: PageLayoutProps) => {
  return (
    <div className={twMerge("min-h-screen", backgroundColor)}>
      <main>{children}</main>
    </div>
  );
};

export default PageLayout;
