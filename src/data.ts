import backblaze from './imgs/backblaze.png';
import bunny from './imgs/bunny.png';
import scaleway from './imgs/scaleway.png';
import vultr from './imgs/vultr.png';
import { Service } from './types/service';
import { NameServices } from './types/services';

export const services: Service[] = [
  {
    title: NameServices.BackBlaze,
    img: backblaze,
  },
  {
    title: NameServices.Bunny,
    img: bunny,
  },
  {
    title: NameServices.Scaleway,
    img: scaleway,
  },
  {
    title: NameServices.Vultr,
    img: vultr,
  },
]