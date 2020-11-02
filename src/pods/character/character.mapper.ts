import * as apiModel from './api/character.api-model';
import * as viewModel from './character.vm';

export const mapFromApiToVm = ( 
    character: apiModel.CharacterEntityApi)
    : viewModel.Character => (console.log("Character", character),{
        ...character,
        id: character.id,
         name: character.name,
         gender: character.gender,
         image: character.image,
         origin: character.origin.name,
         species: character.species,
         status: character.status,
         type: character.type,
         url: character.url
    });