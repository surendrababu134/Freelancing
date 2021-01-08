
import * as types from '../contants';
import * as urls from '../utility/api';
import {url} from './index';
import axios from 'axios';


export function getCountriesData(data) {
    return {
        type: types.GET_COUNTRIES_LIST, data
    }
}

export const getCountries = () => async dispatch =>{
    try{
        const requestUrl = `${url}${urls.GET_COUNTRIES_LIST}`;
        axios.get(requestUrl).then(res=>{
            console.log(res);
            if(res.status===200){
                let resp = res && res.data && res.data.data;
                if(resp.length>0){
                    resp.map(item=>{
                        item.label = item.name;
                        item.value = item.name;
                    })
                }
                dispatch(getCountriesData(resp))
            }
        })
        
    }catch (err) {
        console.log("err")
    }
}

export const postData = (data) => async dispatch =>{
    try{
        const requestUrl = `${url}${urls.POST_COUNTRY}`;
        axios.post(requestUrl,{name:data}).then(res=>{
            console.log(res);
            dispatch(getCountries());
        })
    }catch(err){

    }
}