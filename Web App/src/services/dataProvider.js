import mockData from '../data/jsonData.json';

const GetItemById = function(id){
    let res;
    for(let i in mockData){        
        if(mockData[i].id === Number(id)){
             res = mockData[i];
             break;
        }           
    }
    return res;
}
export default GetItemById;