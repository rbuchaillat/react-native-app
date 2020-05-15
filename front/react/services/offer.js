/* eslint-disable prettier/prettier */
import {requests} from './requests';

export const Offer = {
  list: () => requests.get('/offres'),
  create: (
    name,
    descriptionEntreprise,
    descriptionOffre,
    dateDebut,
    typeContrat,
    lieu,
  ) =>
    requests.post('/offres', {
      name,
      descriptionEntreprise,
      descriptionOffre,
      dateDebut,
      typeContrat,
      lieu,
    }),
  show: (id) => requests.get(`/offres/${id}`),
};
