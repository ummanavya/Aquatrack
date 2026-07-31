import { useEffect, useMemo, useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import api from "../services/api";
import "../styles/alerts.css";

function Alerts(){

const [alerts,setAlerts]=useState([]);

const [filteredAlerts,setFilteredAlerts]=useState([]);

const [loading,setLoading]=useState(false);

const [search,setSearch]=useState("");

useEffect(()=>{

loadAlerts();

},[]);

useEffect(()=>{

if(search===""){

setFilteredAlerts(alerts);

}else{

const value=search.toLowerCase();

setFilteredAlerts(

alerts.filter(alert=>

alert.ownerName.toLowerCase().includes(value)||

alert.householdNumber.toLowerCase().includes(value)||

alert.alertType.toLowerCase().includes(value)

)

);

}

},[search,alerts]);

const loadAlerts=async()=>{

try{

setLoading(true);

const response=await api.get("/api/alerts");

setAlerts(response.data);

setFilteredAlerts(response.data);

}catch(error){

console.log(error);

}finally{

setLoading(false);

}

};

const totalAlerts=alerts.length;

const activeAlerts=useMemo(()=>{

return alerts.filter(a=>!a.resolved).length;

},[alerts]);

const resolvedAlerts=useMemo(()=>{

return alerts.filter(a=>a.resolved).length;

},[alerts]);
return (

<>

<Navbar />

<div className="pageContainer">

    <Sidebar />

    <div className="mainContent">

        {/* ================= Header ================= */}

        <div className="pageHeader">

            <div>

                <h1>🚨 Alerts Dashboard</h1>

                <p>

                    Monitor high bill notifications and water leak alerts across all households.

                </p>

            </div>

        </div>

        {/* ================= Statistics ================= */}

        <div className="statsGrid">

            <div className="statCard">

                <h3>Total Alerts</h3>

                <h1>{totalAlerts}</h1>

            </div>

            <div className="statCard">

                <h3>Active Alerts</h3>

                <h1>{activeAlerts}</h1>

            </div>

            <div className="statCard">

                <h3>Resolved Alerts</h3>

                <h1>{resolvedAlerts}</h1>

            </div>

        </div>

        {/* ================= Search ================= */}

        <div className="card">

            <div className="searchBar">

                <input

                    type="text"

                    placeholder="🔍 Search Owner, Household or Alert Type"

                    value={search}

                    onChange={(e)=>setSearch(e.target.value)}

                />

            </div>

        </div>

        {/* ================= Alerts Table ================= */}

        <div className="card">

            <div className="tableHeader">

                <h2>

                    Alert History

                </h2>

                <span>

                    {filteredAlerts.length} Records

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

                            <th>Bill ID</th>

                            <th>Apartment</th>

                            <th>Household</th>

                            <th>Owner</th>

                            <th>Units</th>

                            <th>Alert Type</th>

                            <th>Message</th>

                            <th>Status</th>

                        </tr>

                    </thead>

                    <tbody>

                    {

                        filteredAlerts.length===0 ?

                        <tr>

                            <td

                                colSpan="8"

                                style={{

                                    padding:"30px"

                                }}

                            >

                                No Alerts Available

                            </td>

                        </tr>

                        :

                        filteredAlerts.map((alert)=>(

                            <tr key={alert.id}>

                                <td>{alert.billId}</td>

                                <td>{alert.apartmentName}</td>

                                <td>{alert.householdNumber}</td>

                                <td>{alert.ownerName}</td>

                                <td>{alert.unitsConsumed} KL</td>

                                <td>

                                    {

                                        alert.alertType==="HIGH_BILL"

                                        ?

                                        <span className="highAlert">

                                            HIGH BILL

                                        </span>

                                        :

                                        <span className="leakAlert">

                                            LEAK DETECTED

                                        </span>

                                    }

                                </td>

                                <td>{alert.message}</td>

                                <td>

                                    {

                                        alert.resolved

                                        ?

                                        <span className="statusBadge resolved">

                                            Resolved

                                        </span>

                                        :

                                        <span className="statusBadge active">

                                            Active

                                        </span>

                                    }

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

export default Alerts;