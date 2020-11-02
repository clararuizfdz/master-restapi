import { Lookup } from "common/models";

export const Statuses: Lookup[] = [
    {
      id: 'Alive',
      name: 'Alive',
    },
    {
      id: 'Dead ',
      name: 'Dead ',
    },
    {
        id: 'Unknown',
        name: 'Unknown'
    }
  ];

  export const Genders: Lookup[] = [
      {
          id:'Female',
          name:'Female'
      },
      {
        id:'Male',
        name:'Male'
    },
    {
        id:'Genderless',
        name:'Genderless'
    },
    {
        id:'Unknown',
        name:'Unknown'
    },
  ]