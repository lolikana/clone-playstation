import { INavSecondData } from '../libs/types';
import PS5Icon from '../../assets/images/icon/navbar-secondary/ps5.png';
import PS4Icon from '../../assets/images/icon/navbar-secondary/ps4.png';
import PS4PropIcon from '../../assets/images/icon/navbar-secondary/ps4-pro.png';
import PSVRIcon from '../../assets/images/icon/navbar-secondary/ps-vr.png';
import PSVR2Icon from '../../assets/images/icon/navbar-secondary/ps-vr2.png';
import PSPlusIcon from '../../assets/images/icon/navbar-secondary/ps-plus.png';
import ShopGameIcon from '../../assets/images/icon/navbar-secondary/shop-games.png';
import PSStarsIcon from '../../assets/images/icon/navbar-secondary/ps-stars.png';
import PSBlogIcon from '../../assets/images/icon/navbar-secondary/ps-blog.png';
import PSBlogMonthIcon from '../../assets/images/icon/navbar-secondary/ps-blog-month.png';
import ShopOffIcon from '../../assets/images/icon/navbar-secondary/shop-official.png';
import SupportIcon from '../../assets/images/icon/navbar-secondary/ps-support.png';
import PSNIcon from '../../assets/images/icon/navbar-secondary/ps-psn.png';

export const navSecondData: INavSecondData[] = [
  {
    id: 'Games',
    title: 'Games',
    items: [
      {
        icon: PS5Icon,
        title: 'PS5'
      },
      {
        icon: PS4Icon,
        title: 'PS4'
      },
      {
        icon: PSVRIcon,
        title: 'PS VR'
      },
      {
        icon: PSPlusIcon,
        title: 'PS Plus'
      },
      {
        icon: ShopGameIcon,
        title: 'Buy Games'
      }
    ],
    links: [
      {
        text: 'PlayStation Indies',
        href: '#'
      },
      {
        text: 'PS4 games on PS5',
        href: '#'
      },
      {
        text: 'Free to Play',
        href: '#'
      },
      {
        text: 'Playstation games on PC',
        href: '#'
      },
      {
        text: 'Deals & offers',
        href: '#'
      }
    ]
  },
  {
    id: 'Hardware',
    title: 'Hardware',
    items: [
      {
        icon: PS5Icon,
        title: 'PS5'
      },
      {
        icon: PS4Icon,
        title: 'PS4'
      },
      {
        icon: PS4PropIcon,
        title: 'PS4 Pro'
      },
      {
        icon: PSVR2Icon,
        title: 'PS VR2'
      }
    ],
    links: [
      {
        text: 'DualSense wireless controller',
        href: '#'
      },
      {
        text: 'PULSE 3D wireless headset',
        href: '#'
      },
      {
        text: 'DUALSHOCK 4 wireless controller',
        href: '#'
      },
      {
        text: 'PS5 & PS4 accessories',
        href: '#'
      },
      {
        text: 'Playstation VR',
        href: '#'
      }
    ]
  },
  {
    id: 'Services',
    title: 'Services',
    items: [
      {
        icon: PSPlusIcon,
        title: 'PS Plus'
      },
      {
        icon: PSStarsIcon,
        title: 'PS Stars'
      }
    ],
    links: [
      {
        text: 'PS5 entertainment',
        href: '#'
      },
      {
        text: 'PS4 entertainment',
        href: '#'
      }
    ]
  },
  {
    id: 'News',
    title: 'News',
    items: [
      {
        icon: PSBlogIcon,
        title: 'PS Blog'
      },
      {
        icon: PSBlogMonthIcon,
        title: 'This Month on Playstation'
      }
    ],
    links: [
      {
        text: 'Competition Center',
        href: '#'
      },
      {
        text: 'Accessibility',
        href: '#'
      },
      {
        text: 'Privacy & Safety',
        href: '#'
      }
    ]
  },
  {
    id: 'Shop',
    title: 'Shop',
    items: [
      {
        icon: PS4PropIcon,
        title: 'Hardware and Discs'
      },
      {
        icon: ShopGameIcon,
        title: 'Digital Games and Services'
      },
      {
        icon: ShopOffIcon,
        title: 'Official Merchandise'
      }
    ],
    links: [
      {
        text: 'Buy a PS5',
        href: '#'
      },
      {
        text: 'New releases',
        href: '#'
      },
      {
        text: 'Latest Discount',
        href: '#'
      },
      {
        text: 'Buy gift card',
        href: '#'
      },
      {
        text: 'Subscribe to PS Plus',
        href: '#'
      }
    ]
  },
  {
    id: 'Support',
    title: 'Support',
    items: [
      {
        icon: SupportIcon,
        title: 'Support'
      },
      {
        icon: PSNIcon,
        title: 'PSN Status'
      }
    ],
    links: [
      {
        text: 'Account',
        href: '#'
      },
      {
        text: 'Store',
        href: '#'
      },
      {
        text: 'Subscriptions',
        href: '#'
      },
      {
        text: 'Games',
        href: '#'
      },
      {
        text: 'Hardware',
        href: '#'
      }
    ]
  }
];
