import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import SelectSearch from '../../components/selectSearch';
import { getCountries,postData } from '../../actions/countries';
import { filterByValue } from '../../utility/utilities';
import { useHistory ,useLocation } from 'react-router-dom';
const Admin = () => {
    const dispatch = useDispatch();
    const location = useLocation()
        const history = useHistory()
    const { data } = useSelector(state => {
        return {
            data: state.CountriesReducer.data
        }
    });
    const [dataList, setDataList] = useState([]);
    const [count, setCount] = useState(1);
    const [menuOpen, setMenuOpen] = useState(false);
    const [onShowText,setOnShowText] = useState("")
    useEffect(() => {
        if (data) {
            filteringData(data);
        }

    }, [data]);
    useEffect(() => {
        dispatch(getCountries());
    }, []);
    const filteringData = (dateObject) =>{
        let newData = []
        if (dateObject.length > 5) {
            let filterData = JSON.parse(JSON.stringify(dateObject));
            // newData
            newData = filterData.slice(0,count*5);
            setCount(count+1);
            let remainValue = filterData.length - newData.length;
            if(remainValue>=5){
                newData.push({ label: "5more", value: "+" })
            }else if(remainValue<5 && remainValue>0){
                newData.push({ label: remainValue+"more", value: "+" })
            }
            
        } else {
            newData = JSON.parse(JSON.stringify(data));
        }
        
            setDataList(newData);
    }
    const [selectedOption, setSelectedOption] = useState("");
    const handleChange = (item) => {
        if(item.value==="+"){
            filteringData(data);
        }else{
            setSelectedOption(item)
        }
        
    }
    return (
        <div>
            <div className="selectWidth">
                {dataList.length > 0 ? <SelectSearch
                    options={dataList}
                    value={selectedOption}
                    onInputChange={(e) => {
                        let conValue = filterByValue(data,e);
                        if(conValue.length>0){
                            filteringData(conValue);
                            
                            setCount(1);
                        }else{
                            setOnShowText(e);
                        }
                    }}
                    menuIsOpen={menuOpen}
                    onMenuOpen={() => {
                        setMenuOpen(true)
                    }}
                    onBlur={()=>{
                        setMenuOpen(false)
                    }}
                    onChange={(item) => {
                        handleChange(item);
                    }}
                /> : ""}

            </div>
            
            {history.location.pathname==="/user"?"":<div className="selectAddWidth">
                {onShowText}
                <button onClick={(e)=>{
                    let conValue = filterByValue(data,onShowText);
                    if(conValue.length>0){}else{
                        setMenuOpen(false)
                        dispatch(postData(onShowText));
                        setOnShowText("");
                        setCount(1);
                    }
                }}>Add</button>
            </div>}
            
        </div>
    )
}

export default Admin
