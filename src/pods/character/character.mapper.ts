import * as apiModel from './api/character.api-model';
import * as viewModel from './character.vm';

export const mapFromApiToVm = ( 
    character: apiModel.CharacterEntityApi, comment: apiModel.CommentEntityApi)
    : viewModel.Character => (console.log("Comment", comment),{
        ...character,
        id: character.id,
         name: character.name,
         gender: character.gender,
         image: character.image,
         origin: character.origin.name,
         species: character.species,
         status: character.status,
         type: character.type,
         url: character.url,
         comment: {
            idComment: comment.idComment,
            comment: comment.comment
        }
    });
    

    export const mapCommentFromVmToApi = (
        character: viewModel.Character
    ) : apiModel.CommentEntityApi => ({
        id: character.id,
        idComment: character.comment.idComment,
        comment: character.comment.comment
    });