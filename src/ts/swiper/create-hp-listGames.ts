import { IListGame } from '../libs/types';

const listGamesNewReleasesWrapper = document.querySelector(
  '.listGames--container-newReleases .listGames--wrapper'
) as HTMLDivElement;
const listGamesComingSoonWrapper = document.querySelector(
  '.listGames--container-comingSoon .listGames--wrapper'
) as HTMLDivElement;

const createListSlide = ({ name, background_image }: IListGame) => {
  const div = document.createElement('div');
  const figure = document.createElement('figure');
  const img = document.createElement('img');
  const figcaption = document.createElement('figcaption');

  div.classList.add('swiper-slide', 'listGames--slide');
  img.src = background_image;
  img.alt = name;
  figcaption.textContent = name;

  figure.append(img, figcaption);

  div.appendChild(figure);
  return div;
};

// for (let i = 1; i <= 12; i++) {
//   listGamesNewReleasesWrapper.appendChild(
//     createListSlide({
//       name: 'The Last of Us',
//       background_image: 'https://upload.wikimedia.org/wikipedia/en/4/46/Video_Game_Cover_-_The_Last_of_Us.jpg'
//     })
//   );
//   listGamesComingSoonWrapper.appendChild(
//     createListSlide({
//       name: 'Biohazard 5',
//       background_image: 'https://www.residentevil.com/4/_asset/background_images/bio4-share-global.png'
//     })
//   );
// }

export const createListGamesNewsReleased = ({ name, background_image }: IListGame) => {
  listGamesNewReleasesWrapper.appendChild(createListSlide({ name, background_image }));
};

export const createListGamesComingSoon = ({ name, background_image }: IListGame) => {
  listGamesComingSoonWrapper.appendChild(createListSlide({ name, background_image }));
};
