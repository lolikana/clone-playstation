export interface INavSecondData {
  id: string;
  title: string;
  items: {
    icon: string;
    title: string;
  }[];
  links: {
    href: string;
    text: string;
  }[];
}
