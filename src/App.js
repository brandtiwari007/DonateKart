import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import { useDispatch } from 'react-redux';
import { useEffect,useSelector,useState } from 'react';

  

function App() {
  const[price,setPrice] =useState();
  const[changePrice,setChangePrice]=useState('INR');
  const [loading,setLoading]=useState(false);
  // https://v6.exchangerate-api.com/v6/%7Byour_apikey%7D/latest/INR
  useEffect(()=>{
    getPriceForCurrency(changePrice)
  },[])
  const getPriceForCurrency=curreny=>{
    setLoading(true)
    let URL= 'https://v6.exchangerate-api.com/v6/d14dedd383b7be9a14103ceb/latest/'+curreny
    axios.get(URL).then((res)=>{
       console.log("res>>>",res.data.conversion_rates);
       setChangePrice(curreny)
       setPrice(res.data.conversion_rates)
       
    }).finally(()=>{
setLoading(false)
    })
  }

  
  
 
  return (
    <div className="App" >
      <select onChange={({target:{value}})=>{
        console.log({value})
        getPriceForCurrency(value)}} value={changePrice}>
        <option value={'INR'}>INR</option>

        <option value={'USD'}>USD</option>

      </select>
    <div style={{marginTop:50,display:'flex',justifyContent:"center",flexWrap:'wrap'}}>
      <div>

      <img
            style={{height:100,width:100,marginLeft:20}}
            src={'https://pngimg.com/uploads/running_shoes/running_shoes_PNG5805.png'}
            
            />
            
            <div>
            {changePrice==="INR"?'Rs':'$'
            }
            {(3000/price?.INR).toFixed(2) }

            </div>
            </div>
      <div>

       <img
            style={{height:100,width:100,marginLeft:20}}
            src={'https://png.pngtree.com/png-vector/20191026/ourmid/pngtree-laptop-icon-png-image_1871608.jpg'}
            />
            <div>
            {changePrice==="INR"?'Rs':'$'
            }

            {(4000/price?.INR).toFixed(2) }
            </div>
            </div>

            <div>

       <img
            style={{height:100,width:100,marginLeft:20}}
            src={'https://png.pngtree.com/png-clipart/20190610/original/pngtree-tissot-wristwatch-male-watch-black-watches-png-image_1859633.jpg'}
            />
            <div>
            {changePrice==="INR"?'Rs':'$'
            }
            {(2000/price?.INR).toFixed(2) }
            </div>
            </div>

    </div>
    {loading?<p>Please wait updating prices...</p>:null}
    
    </div>
  );
}

export default App;
