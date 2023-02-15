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

export interface ISwiperTop {
  id: number;
  img: ISwiperTopImg;
  alt: string;
  logo: string;
  title: string;
  text: string;
  btn: { text: string; href: string };
}
[];

interface ISwiperTopImg {
  large: string;
  medium: string;
  mobile: string;
  thumb: string;
}

export interface ISwiperHardware {
  id: number;
  img: string;
  alt: string;
  title: string;
  text: string;
  btn: { more: { text: string; href: string }; buy?: { text: string; href: string } };
}
