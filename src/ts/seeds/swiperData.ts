import ForspokenMobile from '../../assets/images/slider/forspoken-mobile.webp';
import ForspokenMedium from '../../assets/images/slider/forspoken-medium.webp';
import ForspokenLarge from '../../assets/images/slider/forspoken.webp';
import ForspokenThumb from '../../assets/images/slider/forspoken-thumb.png';
import ForspokenLogo from '../../assets/images/slider/forspoken-logo.png';
import DeadSpaceMobile from '../../assets/images/slider/dead_space-mobile.webp';
import DeadSpaceMedium from '../../assets/images/slider/dead_space-medium.webp';
import DeadSpaceLarge from '../../assets/images/slider/dead_space.webp';
import DeadSpaceThumb from '../../assets/images/slider/dead_space-thumb.png';
import DeadSpaceLogo from '../../assets/images/slider/dead_space-logo.png';
import LivePS5Mobile from '../../assets/images/slider/live_ps5-mobile.webp';
import LivePS5Medium from '../../assets/images/slider/live_ps5-medium.webp';
import LivePS5Large from '../../assets/images/slider/live_ps5.webp';
import LivePS5Thumb from '../../assets/images/slider/live_ps5-thumb.png';
import LivePS5Logo from '../../assets/images/slider/live_ps5-logo.png';

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

export const swiperTopData = [
  {
    id: 1,
    img: {
      large: ForspokenLarge,
      medium: ForspokenMedium,
      mobile: ForspokenMobile,
      thumb: ForspokenThumb
    },
    alt: 'forspoken game',
    logo: ForspokenLogo,
    title: 'Find your fight',
    text: 'Traverse sprawling landscapes and battle monstrous creatures with a massive variety of magif abilities, out now on PS5.',
    btn: { text: 'Play now', href: '#' }
  },
  {
    id: 2,
    img: {
      large: DeadSpaceLarge,
      medium: DeadSpaceMedium,
      mobile: DeadSpaceMobile,
      thumb: DeadSpaceThumb
    },
    alt: 'dead space game',
    logo: DeadSpaceLogo,
    title: 'Humanity ends here',
    text: ' The sci-fi survival horror classic returns, rebuilt to offer a deeper and more immersive experience, out now on PS5',
    btn: { text: 'Find out more', href: '#' }
  },
  {
    id: 3,
    img: {
      large: DeadSpaceLarge,
      medium: DeadSpaceMedium,
      mobile: DeadSpaceMobile,
      thumb: DeadSpaceThumb
    },
    alt: 'dead space game',
    logo: DeadSpaceLogo,
    title: 'Humanity ends here',
    text: ' The sci-fi survival horror classic returns, rebuilt to offer a deeper and more immersive experience, out now on PS5',
    btn: { text: 'Find out more', href: '#' }
  },
  {
    id: 4,
    img: {
      large: DeadSpaceLarge,
      medium: DeadSpaceMedium,
      mobile: DeadSpaceMobile,
      thumb: DeadSpaceThumb
    },
    alt: 'dead space game',
    logo: DeadSpaceLogo,
    title: 'Humanity ends here',
    text: ' The sci-fi survival horror classic returns, rebuilt to offer a deeper and more immersive experience, out now on PS5',
    btn: { text: 'Find out more', href: '#' }
  },
  {
    id: 5,
    img: {
      large: DeadSpaceLarge,
      medium: DeadSpaceMedium,
      mobile: DeadSpaceMobile,
      thumb: DeadSpaceThumb
    },
    alt: 'dead space game',
    logo: DeadSpaceLogo,
    title: 'Humanity ends here',
    text: ' The sci-fi survival horror classic returns, rebuilt to offer a deeper and more immersive experience, out now on PS5',
    btn: { text: 'Find out more', href: '#' }
  },
  {
    id: 6,
    img: {
      large: LivePS5Large,
      medium: LivePS5Medium,
      mobile: LivePS5Mobile,
      thumb: LivePS5Thumb
    },
    logo: LivePS5Logo,
    alt: 'live ps5 game',
    title: 'Bringing your the extraordinary',
    text: 'Explore incredible worlds and experience the unexpected. Start your story today.',
    btn: { text: 'Find out more', href: '#' }
  }
];
