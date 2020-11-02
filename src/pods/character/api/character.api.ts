import { CharacterEntityApi, CommentEntityApi } from './character.api-model';
import Axios from 'axios';
import { Lookup } from 'common/models';
import { Statuses, Genders } from './character.data';

const url = process.env.CHARACTER_API_URL;
const commentUrl = '/api/comments';

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

export const getComment = async(id:string): Promise<CommentEntityApi> => {
  let data: CommentEntityApi = {
    id: "",
    idComment: "",
    comment:""
  };

   await Axios.get<CommentEntityApi>(`${commentUrl}/${id}`)
  .then( response => data = response.data)
  .catch( error => console.log(error));
  return data;
}

export const saveComment = async (comment: CommentEntityApi): Promise<boolean> => {
  if(comment.idComment){
    await Axios.put<CommentEntityApi>(`${commentUrl}/${comment.id}`, comment);
  } else {
    comment.idComment = comment.id;
    await Axios.post<CommentEntityApi>(commentUrl, comment);
  }
  return true;
};
