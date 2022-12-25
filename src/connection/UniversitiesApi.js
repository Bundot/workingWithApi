import axios from "axios";

const BackendInstance = axios.create({
    baseURL: "http://universities.hipolabs.com", 
})

const TestRoute = async () => {
    try {
const result = await BackendInstance.get("");
return result
    }catch(er){
        return err;
    }
};

const searchByCountry = async (country) => {
    try {
const result = await BackendInstance.get(`search?country=${country}`);
return result;
    }catch(er){
        return err; 
    }
};

export default {searchByCountry};
