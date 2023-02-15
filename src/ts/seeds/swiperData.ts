import { ISwiperHardware, ISwiperTop } from '../libs/types';

import DeadSpaceLarge from '../../assets/images/slider/top/dead_space.webp';
import DeadSpaceLogo from '../../assets/images/slider/top/dead_space-logo.png';
import DeadSpaceMedium from '../../assets/images/slider/top/dead_space-medium.webp';
import DeadSpaceMobile from '../../assets/images/slider/top/dead_space-mobile.webp';
import DeadSpaceThumb from '../../assets/images/slider/top/dead_space-thumb.png';
import ForspokenLarge from '../../assets/images/slider/top/forspoken.webp';
import ForspokenLogo from '../../assets/images/slider/top/forspoken-logo.png';
import ForspokenMedium from '../../assets/images/slider/top/forspoken-medium.webp';
import ForspokenMobile from '../../assets/images/slider/top/forspoken-mobile.webp';
import ForspokenThumb from '../../assets/images/slider/top/forspoken-thumb.png';
import LivePS5Large from '../../assets/images/slider/top/live_ps5.webp';
import LivePS5Logo from '../../assets/images/slider/top/live_ps5-logo.png';
import LivePS5Medium from '../../assets/images/slider/top/live_ps5-medium.webp';
import LivePS5Mobile from '../../assets/images/slider/top/live_ps5-mobile.webp';
import LivePS5Thumb from '../../assets/images/slider/top/live_ps5-thumb.png';

import HardwareCamera from '../../assets/images/slider/hardware/hd-camera.webp';
import HardwareDualCollection from '../../assets/images/slider/hardware/dualsense-collection.webp';
import HardwareDualEdge from '../../assets/images/slider/hardware/dualsense-edge.webp';
import HardwareHeadset from '../../assets/images/slider/hardware/3d-pulse-headset.webp';
import HardwarePS5Console from '../../assets/images/slider/hardware/playstation-5.webp';
import HardwarePS5Cover from '../../assets/images/slider/hardware/ps5-console-cover.webp';
import HardwareRemote from '../../assets/images/slider/hardware/media-remote.webp';

export const swiperTopData: ISwiperTop[] = [
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
    text: 'The sci-fi survival horror classic returns, rebuilt to offer a deeper and more immersive experience, out now on PS5',
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
    text: 'The sci-fi survival horror classic returns, rebuilt to offer a deeper and more immersive experience, out now on PS5',
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
    text: 'The sci-fi survival horror classic returns, rebuilt to offer a deeper and more immersive experience, out now on PS5',
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
    text: 'The sci-fi survival horror classic returns, rebuilt to offer a deeper and more immersive experience, out now on PS5',
    btn: { text: 'Find out more', href: '#' }
  },
  {
    id: 6,
    img: {
      large: DeadSpaceLarge,
      medium: DeadSpaceMedium,
      mobile: DeadSpaceMobile,
      thumb: DeadSpaceThumb
    },
    alt: 'dead space game',
    logo: DeadSpaceLogo,
    title: 'Humanity ends here',
    text: 'The sci-fi survival horror classic returns, rebuilt to offer a deeper and more immersive experience, out now on PS5',
    btn: { text: 'Find out more', href: '#' }
  },
  {
    id: 7,
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

export const swiperHardwareData: ISwiperHardware[] = [
  {
    id: 1,
    img: HardwarePS5Console,
    alt: 'PS5 Console',
    title: 'PlayStation 5 Console',
    text: 'Experience an all-new generation of incredible PlayStation games. PS5 consoles are currently in stock.',
    btn: {
      more: { text: 'Learn more', href: '#' },
      buy: { text: 'Buy now', href: '#' }
    }
  },
  {
    id: 2,
    img: HardwareDualCollection,
    alt: 'DualSense™ Wireless Controller',
    title: 'DualSense™ Wireless Controller',
    text: 'Immerse yourself in the gaming experience with a controller the supports responsive haptic feedback and dynamic trigger effects.',
    btn: { more: { text: 'Learn more', href: '#' } }
  },
  {
    id: 3,
    img: HardwareHeadset,
    alt: 'PULSE 3D™ Wireless Headset',
    title: 'PULSE 3D™ Wireless Headset',
    text: 'Enjoy a seamless wireless experience with a headset fine-tuned for 3D Audio on PS5 consoles.',
    btn: { more: { text: 'Learn more', href: '#' } }
  },
  {
    id: 4,
    img: HardwareDualEdge,
    alt: 'DualSense Edge™ Wireless Controller',
    title: 'DualSense Edge™ Wireless Controller',
    text: 'Get an edge in gameplay with remappable buttons, tunable triggers and sticks, changeable stick caps, back buttons, and more.',
    btn: { more: { text: 'Learn more', href: '#' } }
  },
  {
    id: 5,
    img: HardwareRemote,
    alt: 'Media Remote',
    title: 'Media Remote',
    text: 'Conveniently control movies, streaming services and more on your PS5 console with an intuitive layout.',
    btn: { more: { text: 'Learn more', href: '#' } }
  },
  {
    id: 6,
    img: HardwareCamera,
    alt: 'HD Camera',
    title: 'HD Camera',
    text: 'Add yourself to your gameplay videos and broadcasts with smooth, sharp, full-HD capture.',
    btn: { more: { text: 'Learn more', href: '#' } }
  },
  {
    id: 7,
    img: HardwarePS5Cover,
    alt: 'PS5 Console Covers',
    title: 'PS5 Console Covers',
    text: 'Personalise your PlayStation 5 or PlayStation 5 Digital Edition console with a vibrant array of new colour options.',
    btn: { more: { text: 'Learn more', href: '#' } }
  }
];
