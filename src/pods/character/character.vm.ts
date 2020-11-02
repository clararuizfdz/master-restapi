export  interface Character{
    id: string;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: string;    
    image: string;    
    url: string;
    comment: Comment;    
};

interface Comment {
    idComment: string;
    comment: string;
}

const createEmptyComment = () : Comment =>  ({
    idComment: "",
    comment: ""
});

export const createEmptyCharacter = () : Character => ({
    id: '',
    name: '',
    status: '',
    species: '',
    type: '',
    gender: '',
    origin: '',  
    image: '',    
    url: '',   
    comment: createEmptyComment()
});


