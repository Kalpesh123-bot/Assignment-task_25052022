import React, { useState, useEffect } from "react";
import MultiSelect from 'multiselect-react-dropdown';
import './Dropdownlist.css';

const Dropdownlist = () => {

  const [data, setData] = useState([]);

  useEffect(() => {

    fetch("https://jsonplaceholder.typicode.com/users").then((result) => {
      result.json().then((response) => {
        setData(response);

      })
    })

  }, [])

  console.log(data);

  const [allEntry, setAllEntry] = useState([]);

  function Submit() {
    var arr = [];
    for (var a = 0; a < allEntry.length; a++) {
      arr.push(allEntry[a].name);

    }
    alert("The Employees Name :  " + arr + "  selected.");

    console.log(arr);
  }

  return (

    <div className="main-container">

      <div className="main-div">
        <h1>Employees List</h1>
        <h3>Select List</h3>
        <button type="button"> X </button>

        <div className="center-div">
          <MultiSelect
            displayValue="name"
            options={data}
            onSelect={(value) => setAllEntry(value)}
            placeholder="Select Employees Name"
            showCheckbox />
        </div>
      </div>

      <div class="main-button">
        <button type="submit" onClick={Submit} > Submit </button>
      </div>

    </div>
  );
};

export default Dropdownlist;
