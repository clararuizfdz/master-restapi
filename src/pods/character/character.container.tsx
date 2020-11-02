import React from 'react';
import * as api from './api';
import { useHistory, useParams } from 'react-router-dom';
import { mapFromApiToVm } from './character.mapper';
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
        console.log("apiStatuses", apiStatuses);
        setStatuses(apiStatuses);
    }

    const handleLoadGenders = async() =>{
        const apiGenders = await api.getGenders();
        console.log("apiGenders", apiGenders);
        setGenders(apiGenders);
    }

    const handleLoadCharacter = async() =>{
        const apiCharacter = await api.getCharacter(id);
        setCharacter(mapFromApiToVm(apiCharacter))
    }


    React.useEffect(() => {
        if(id){
            handleLoadCharacter();
        }
        handleLoadStatuses();
        handleLoadGenders();
    }, []);

    const handleSave = async(character: Character) =>{

    };
    return <CharacterComponent character={character} statuses = {statuses} genders ={genders}  onSave = {handleSave} />
}