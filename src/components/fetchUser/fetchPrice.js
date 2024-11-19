import axios from 'axios';

const API_URL = 'https://sycret.ru/service/api/api';
const API_KEY = '011ba11bdcad4fa396660c2ec447ef14';

export default class fetchPrice{
    static async getAll(){
    const response = await axios.post(API_URL, {
      ApiKey: API_KEY,
      MethodName: 'OSGetGoodList',
    });
    return response.data;
}
};
