export interface Props {
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  onClick: () => void;
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>["type"];
}
