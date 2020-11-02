import React from 'react';
import * as api from './api';
import { useHistory, useParams } from 'react-router-dom';
import { mapFromApiToVm, mapCommentFromVmToApi } from './character.mapper';
import { createEmptyCharacter, Character } from './character.vm';
import { CharacterComponent } from './character.component';
import { Lookup } from 'common/models';


export const CharacterContainer: React.FC = (props) => {
    const [character, setCharacter ] = React.useState<Character>(createEmptyCharacter());
    const [statuses, setStatuses] = React.useState<Lookup[]>([]);
    const [genders, setGenders] = React.useState<Lookup[]>([]);
    const {id} = useParams();
    const history = useHistory();

    const handleLoadStatuses = async() =>{
        const apiStatuses = await api.getStatuses();
        setStatuses(apiStatuses);
    }

    const handleLoadGenders = async() =>{
        const apiGenders = await api.getGenders();
        setGenders(apiGenders);
    }

    const handleLoadCharacter = async() =>{
        const apiCharacter = await api.getCharacter(id);
        const apiComment = await api.getComment(id);
        setCharacter(mapFromApiToVm(apiCharacter, apiComment));
    }

    React.useEffect(() => {
        if(id){
            handleLoadCharacter();
        }
        handleLoadStatuses();
        handleLoadGenders();
    }, []);

    const handleSave = async(character: Character) =>{
        const success = await api.saveComment(mapCommentFromVmToApi(character));
        if (success) {
            history.goBack();
          } else {
            alert('Error on save comment');
          }
        };
    return <CharacterComponent character={character} statuses = {statuses} genders ={genders}  onSave = {handleSave} />
}