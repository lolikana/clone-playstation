import axios from 'axios';

import { normalizeDate } from '../utils/helper';

const today = normalizeDate(new Date());
const nextThirtyDays = normalizeDate(new Date(Date.now() + 1000 * 60 * 60 * 24 * 30));
const lastThirtyDays = normalizeDate(new Date(Date.now() - 1000 * 60 * 60 * 24 * 30));

console.log(nextThirtyDays, lastThirtyDays);
const listGamesNewReleasesWrapper = document.querySelector(
  '.section--listGames-newReleases .section--listGames-wrapper'
) as HTMLDivElement;
const listGamesComingSoonWrapper = document.querySelector(
  '.section--listGames-comingSoon .section--listGames-wrapper'
) as HTMLDivElement;

const createListSlide = (data: { img: string; title: string }) => {
  const div = document.createElement('div');
  const figure = document.createElement('figure');
  const img = document.createElement('img');
  const figcaption = document.createElement('figcaption');

  div.classList.add('swiper-slide', 'section--listGames-slide');
  img.src = data.img;
  figcaption.textContent = data.title;

  figure.append(img, figcaption);

  div.appendChild(figure);
  return div;
};

axios
  .get(
    `https://api.rawg.io/api/games?platforms=187&page_size=12&dates=${lastThirtyDays},${today}&ordering=released&key=${process.env.RAWG_KEY}`
    // ''
  )
  .then((res: any) => {
    res.data.results.map((game: any) => {
      console.log(game);
      if (game) {
        listGamesNewReleasesWrapper.appendChild(
          createListSlide({ title: game.name, img: game.background_image })
        );
      }
      return game;
    });
  })
  .catch((err: unknown) => console.log(err));
axios
  .get(
    `https://api.rawg.io/api/games?platforms=187&page_size=12&dates=${today},${nextThirtyDays}&ordering=released&key=${process.env.RAWG_KEY}`
    // ''
  )
  .then((res: any) => {
    res.data.results.map((game: any) => {
      console.log(game);
      if (game) {
        listGamesComingSoonWrapper.appendChild(
          createListSlide({ title: game.name, img: game.background_image })
        );
      }
      return game;
    });
  })
  .catch((err: unknown) => console.log(err));
