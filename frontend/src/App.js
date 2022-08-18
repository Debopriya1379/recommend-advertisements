import {useEffect, useState} from 'react'
import './App.css';
import axios from 'axios'
import AdsCard from './components/AdsCard';

function App() {

  const[AllAds, setAllAds] = useState([]);
  const[FilteredAds,setFilteredAds] = useState([]);

  const getAds = async()=>{
    const response = await axios.get("http://localhost:5000/Ads")
    console.log(response.data)
    setAllAds(response.data)
  }

  const handleFilter = (e)=>{
    const searchText = e.target.value;
    const newFilter = AllAds.filter((value)=>{
      return value.description.toLowerCase().includes(searchText.toLowerCase());
    })
    if(searchText === ""){
      setFilteredAds([]);
    }else{
      setFilteredAds(newFilter);
    }
  }

  useEffect(()=>{
    getAds()
  },[]);

  return (
    <div className="App">
      <header>
        <h2>This is a Header</h2>
      </header>
      <section className="Search_bar">
        <input type="text" placeholder="Search here" onChange={(e)=>{handleFilter(e)}} />
      </section>
      <section className="Recommended_ads">
        <h3>All Ads</h3>
        <div className="Ads">
        {
          FilteredAds && FilteredAds.map((ad,id)=>{
            return(
              <AdsCard key={id} data={ad} />
            )
          })
        }
        </div>
      </section>
    </div>
  );
}

export default App;
