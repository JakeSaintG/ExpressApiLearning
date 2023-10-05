// const codeYouRepository = {
//     get: (): any => {
//         return { 
//             name: "Code You",
//             other_names: ["Code Louisville", "Code Kentucky"],
//             fearless_leader: "Brian Luerman"
//         };
        
//     }
// };

//module.exports = codeYouRepository;

export class CodeYouRepository {

    private codeYouData = { 
        name: "Code You",
        other_names: ["Code Louisville", "Code Kentucky"],
        fearless_leader: "Brian Luerman"
    }

    constructor() {
    }

    public returnCodeYouData = () => {
        return this.codeYouData;
    }
}