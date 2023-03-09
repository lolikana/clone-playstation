import axios from 'axios';

import {
  createListGamesComingSoon,
  createListGamesNewsReleased
} from '../swiper/create-hp-listGames';
import { IListGame } from '../libs/types';

import { normalizeDate } from '../utils/helper';

const today = normalizeDate(new Date());
const nextThirtyDays = normalizeDate(new Date(Date.now() + 1000 * 60 * 60 * 24 * 30));
const lastThirtyDays = normalizeDate(new Date(Date.now() - 1000 * 60 * 60 * 24 * 30));

axios
  .get(
    `https://api.rawg.io/api/games?platforms=187&page_size=12&dates=${lastThirtyDays},${today}&ordering=released&key=${process.env.RAWG_KEY}`
  )
  .then((res: any) => {
    res.data.results.map((game: IListGame) => {
      if (game) {
        createListGamesNewsReleased(game);
      }
      return game;
    });
  })
  .catch((err: any) => {
    console.log(err);
  });

axios
  .get(
    `https://api.rawg.io/api/games?platforms=187&page_size=12&dates=${today},${nextThirtyDays}&ordering=released&key=${process.env.RAWG_KEY}`
  )
  .then((res: any) => {
    res.data.results.map((game: IListGame) => {
      if (game) {
        createListGamesComingSoon(game);
      }
      return game;
    });
  })
  .catch((err: unknown) => console.log(err));
