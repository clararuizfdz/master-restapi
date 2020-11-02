import { CharacterEntityApi } from './character.api-model';
import Axios from 'axios';
import { Lookup } from 'common/models';
import { Statuses, Genders } from './character.data';

const url = process.env.CHARACTER_API_URL;

export const getCharacter = async (id: string): Promise<CharacterEntityApi> => {
  const {data} = await Axios.get<CharacterEntityApi>(`${url}/${id}`);
  return data;
};

export const getStatuses = async (): Promise<Lookup[]> => {
  return Statuses;
};

export const getGenders = async(): Promise<Lookup[]> =>{
  return Genders;
}

// export const saveHotel = async (hotel: Hotel): Promise<boolean> => {
//   return true;
// };
