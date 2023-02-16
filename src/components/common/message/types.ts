export interface MessageProps {
  icon: string;
  title: string;
  className?: string;
  description: string;
  route?: string;
  button?: string;
  onClick?: () => void;
}
