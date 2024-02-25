import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Cards from "./components/Cards";
import Filter from "./components/Filter";
import { apiUrl, filterData } from "./data";
import { toast } from "react-hot-toast";
import Spinner from "./components/Spinner";

const App = () => {

  let [courses, setCourses] = useState(null);
  let [loading, setLoading] = useState(true);
  let [category,setCategory] = useState(filterData[0].title);

  async function fetchData() {
    setLoading(true);
    try {
      // fetch api ka data
      let apiData = await fetch(apiUrl);
      // convert api ka data ko json format mn
      let output = await apiData.json();
      // check data is came or not
      if(!apiData.ok){
        throw new Error("failed to fetch data");
      }
      // display data on rendering
      setCourses(output.data);

    }
    catch (error) {
      toast.error("network mn koi dikkat hai");
    }
    setLoading(false);
  }


  useEffect(
    () => {
      fetchData();
    }, []
  );
  console.log(courses);

  return (
    <div>
      <div>
        <Navbar />
        <Filter filterData={filterData} category={category} setCategory={setCategory} />
      </div>
      
      <div>
        {
          loading ? (<Spinner />) : (<Cards courses={courses} category={category} />)
        }
      </div>
    </div>
  );
};

export default App;
