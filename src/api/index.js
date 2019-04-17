import axios from '@/axios'


var api ={
    getSearchWord(params){
        return axios.get('/api/meituan/header/search.json',params)
    },
    getHotWord(params){
        return axios.get('/api/meituan/header/searchHotWords.json',params)
    },
    getMenu(params){
        return axios.get('/api/meituan/index/nav.json',params)
    },
    getIstyle(params){
        return axios.get('/api/meituan/index/resultsByKeywords.json',params)
    },
    getCity(params){
        return axios.get('/api/meituan/city/cityList.json',params)
    },
    getCityHot(params){
        return axios.get('/api/meituan/city/hot.json',params)
    },
    getGoodsList(params){
        return axios.get('/api/meituan/list/goodsList.json',params)
    },
    getClassify(params){
        return axios.get('/api/meituan/list/classify.json',params)
    },
    getArea(params){
        return axios.get('/api/meituan/list/areaList.json',params)
    },
    getPosition(params){
        return axios.get('/api/meituan/city/getPosition.json',params)
    },
    getProvince(params){
        return axios.get('/api/meituan/city/province.json',params)
    },
    getLogin(params){
        return axios.get('/api/meituan/login',params)
    },
    getRegister(params){
        return axios.get('/api/meituan/register',params)
    }
}


export default api