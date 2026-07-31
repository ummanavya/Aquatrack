import { useEffect, useMemo, useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import api from "../services/api";
import "../styles/waterUsage.css";

function WaterUsage(){

const [households,setHouseholds]=useState([]);
const [logs,setLogs]=useState([]);

const [filteredLogs,setFilteredLogs]=useState([]);

const [loading,setLoading]=useState(false);

const [search,setSearch]=useState("");

const [form,setForm]=useState({

householdId:"",
readingDate:"",
meterReading:""

});

useEffect(()=>{

loadHouseholds();

},[]);

useEffect(()=>{

if(search===""){

setFilteredLogs(logs);

}else{

const value=search.toLowerCase();

setFilteredLogs(

logs.filter(log=>

log.household.ownerName.toLowerCase().includes(value)||

log.household.householdNumber.toLowerCase().includes(value)

)

);

}

},[search,logs]);

const loadHouseholds=async()=>{

try{

const response=await api.get("/api/households");

setHouseholds(response.data);

}catch(error){

console.log(error);

}

};

const handleChange=(e)=>{

setForm({

...form,

[e.target.name]:e.target.value

});

};

const saveReading=async()=>{

try{

await api.post("/api/water-usage",form);

alert("Water Reading Added Successfully");

setForm({

householdId:"",
readingDate:"",
meterReading:""

});

}catch(error){

alert("Unable to Save Reading");

}

};

const loadLogs=async()=>{

if(form.householdId===""){

alert("Please Select Household");

return;

}

try{

setLoading(true);

const response=await api.get(

`/api/water-usage/household/${form.householdId}`

);

setLogs(response.data);

setFilteredLogs(response.data);

}catch(error){

console.log(error);

}finally{

setLoading(false);

}

};

const totalLogs=logs.length;

const totalUsage=useMemo(()=>{

return logs.reduce(

(sum,item)=>sum+Number(item.meterReading),

0

);

},[logs]);

const totalHouseholds=households.length;
return (

<>

<Navbar />

<div className="pageContainer">

    <Sidebar />

    <div className="mainContent">

        {/* ================= Header ================= */}

        <div className="pageHeader">

            <div>

                <h1>💧 Water Usage Management</h1>

                <p>

                    Record daily water meter readings and monitor usage history.

                </p>

            </div>

        </div>

        {/* ================= Statistics ================= */}

        <div className="statsGrid">

            <div className="statCard">

                <h3>Total Readings</h3>

                <h1>{totalLogs}</h1>

            </div>

            <div className="statCard">

                <h3>Total Usage</h3>

                <h1>{totalUsage}</h1>

            </div>

            <div className="statCard">

                <h3>Households</h3>

                <h1>{totalHouseholds}</h1>

            </div>

        </div>

        {/* ================= Form ================= */}

        <div className="card">

            <div className="cardTitle">

                ➕ Record Water Reading

            </div>

            <div className="formRow">

                <select

                    name="householdId"

                    value={form.householdId}

                    onChange={handleChange}

                >

                    <option value="">

                        Select Household

                    </option>

                    {

                        households.map((household)=>(

                            <option

                                key={household.id}

                                value={household.id}

                            >

                                {household.householdNumber} - {household.ownerName}

                            </option>

                        ))

                    }

                </select>

                <input

                    type="date"

                    name="readingDate"

                    value={form.readingDate}

                    onChange={handleChange}

                />

                <input

                    type="number"

                    name="meterReading"

                    placeholder="Meter Reading"

                    value={form.meterReading}

                    onChange={handleChange}

                />

                <button

                    className="addBtn"

                    onClick={saveReading}

                >

                    Save Reading

                </button>

                <button

                    className="editBtn"

                    onClick={loadLogs}

                >

                    View History

                </button>

            </div>

        </div>

        {/* ================= Search ================= */}

        <div className="card">

            <div className="searchBar">

                <input

                    type="text"

                    placeholder="🔍 Search Household or Owner"

                    value={search}

                    onChange={(e)=>setSearch(e.target.value)}

                />

            </div>

        </div>

        {/* ================= Table ================= */}

        <div className="card">

            <div className="tableHeader">

                <h2>

                    Water Usage History

                </h2>

                <span>

                    {filteredLogs.length} Records

                </span>

            </div>

            {

                loading ?

                <div className="loading">

                    Loading...

                </div>

                :

                <table className="apartmentTable">

                    <thead>

                        <tr>

                            <th>ID</th>

                            <th>Household</th>

                            <th>Owner</th>

                            <th>Date</th>

                            <th>Reading</th>

                            <th>Source</th>

                            <th>Status</th>

                        </tr>

                    </thead>

                    <tbody>

                    {

                        filteredLogs.length===0 ?

                        <tr>

                            <td

                                colSpan="7"

                                style={{

                                    padding:"30px"

                                }}

                            >

                                No Water Usage Records

                            </td>

                        </tr>

                        :

                        filteredLogs.map((log)=>(

                            <tr

                                key={log.id}

                            >

                                <td>{log.id}</td>

                                <td>{log.household.householdNumber}</td>

                                <td>{log.household.ownerName}</td>

                                <td>{log.readingDate}</td>

                                <td>{log.meterReading}</td>

                                <td>{log.source}</td>

                                <td>

                                    <span className="statusBadge">

                                        Recorded

                                    </span>

                                </td>

                            </tr>

                        ))

                    }

                    </tbody>

                </table>

            }

        </div>
                </div>

    </div>

</>

);

}

export default WaterUsage;