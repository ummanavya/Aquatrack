import { useEffect, useMemo, useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import api from "../services/api";
import "../styles/billing.css";

function Billing(){

const [households,setHouseholds]=useState([]);
const [tariffPlans,setTariffPlans]=useState([]);
const [billingCycles,setBillingCycles]=useState([]);

const [filteredBills,setFilteredBills]=useState([]);

const [loading,setLoading]=useState(false);

const [search,setSearch]=useState("");

const [form,setForm]=useState({

householdId:"",
tariffPlanId:"",
cycleStartDate:"",
cycleEndDate:""

});

useEffect(()=>{

loadHouseholds();
loadTariffPlans();
loadBills();

},[]);

useEffect(()=>{

if(search===""){

setFilteredBills(billingCycles);

}else{

const value=search.toLowerCase();

setFilteredBills(

billingCycles.filter(bill=>

bill.household.householdNumber.toLowerCase().includes(value) ||

bill.tariffPlan.planName.toLowerCase().includes(value)

)

);

}

},[search,billingCycles]);

const loadHouseholds=async()=>{

try{

const response=await api.get("/api/households");

setHouseholds(response.data);

}catch(error){

console.log(error);

}

};

const loadTariffPlans=async()=>{

try{

const response=await api.get("/api/tariff-plans");

setTariffPlans(response.data);

}catch(error){

console.log(error);

}

};

const loadBills=async()=>{

try{

setLoading(true);

const response=await api.get("/api/billing-cycles");

setBillingCycles(response.data);

setFilteredBills(response.data);

}catch(error){

console.log(error);

}finally{

setLoading(false);

}

};

const handleChange=(e)=>{

setForm({

...form,

[e.target.name]:e.target.value

});

};

const generateBill=async()=>{

try{

await api.post("/api/billing-cycles",form);

alert("Bill Generated Successfully");

setForm({

householdId:"",
tariffPlanId:"",
cycleStartDate:"",
cycleEndDate:""

});

loadBills();

}catch(error){

console.log(error);

if(error.response){

alert(error.response.data.message);

}else{

alert("Unable to Generate Bill");

}

}

};

const totalBills=billingCycles.length;

const totalRevenue=useMemo(()=>{

return billingCycles.reduce(

(sum,item)=>sum+Number(item.totalAmount),

0

);

},[billingCycles]);

const totalUnits=useMemo(()=>{

return billingCycles.reduce(

(sum,item)=>sum+Number(item.unitsConsumed),

0

);

},[billingCycles]);
return (

<>

<Navbar />

<div className="pageContainer">

    <Sidebar />

    <div className="mainContent">

        {/* ================= Header ================= */}

        <div className="pageHeader">

            <div>

                <h1>💰 Billing Management</h1>

                <p>

                    Generate billing cycles, monitor revenue and manage customer bills.

                </p>

            </div>

        </div>

        {/* ================= Statistics ================= */}

        <div className="statsGrid">

            <div className="statCard">

                <h3>Total Bills</h3>

                <h1>{totalBills}</h1>

            </div>

            <div className="statCard">

                <h3>Total Revenue</h3>

                <h1>₹ {totalRevenue.toFixed(2)}</h1>

            </div>

            <div className="statCard">

                <h3>Total Units</h3>

                <h1>{totalUnits}</h1>

            </div>

        </div>

        {/* ================= Generate Bill ================= */}

        <div className="card">

            <div className="cardTitle">

                💳 Generate New Bill

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

                <select

                    name="tariffPlanId"

                    value={form.tariffPlanId}

                    onChange={handleChange}

                >

                    <option value="">

                        Select Tariff Plan

                    </option>

                    {

                        tariffPlans.map((plan)=>(

                            <option

                                key={plan.id}

                                value={plan.id}

                            >

                                {plan.planName}

                            </option>

                        ))

                    }

                </select>

                <input

                    type="date"

                    name="cycleStartDate"

                    value={form.cycleStartDate}

                    onChange={handleChange}

                />

                <input

                    type="date"

                    name="cycleEndDate"

                    value={form.cycleEndDate}

                    onChange={handleChange}

                />

                <button

                    className="addBtn"

                    onClick={generateBill}

                >

                    Generate Bill

                </button>

            </div>

        </div>

        {/* ================= Search ================= */}

        <div className="card">

            <div className="searchBar">

                <input

                    type="text"

                    placeholder="🔍 Search Household or Tariff Plan"

                    value={search}

                    onChange={(e)=>setSearch(e.target.value)}

                />

            </div>

        </div>

        {/* ================= Billing Table ================= */}

        <div className="card">

            <div className="tableHeader">

                <h2>

                    Billing History

                </h2>

                <span>

                    {filteredBills.length} Records

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

                            <th>Tariff Plan</th>

                            <th>Start Date</th>

                            <th>End Date</th>

                            <th>Units</th>

                            <th>Amount</th>

                            <th>Status</th>

                        </tr>

                    </thead>

                    <tbody>

                    {

                        filteredBills.length===0 ?

                        <tr>

                            <td

                                colSpan="8"

                                style={{

                                    padding:"30px"

                                }}

                            >

                                No Bills Generated

                            </td>

                        </tr>

                        :

                        filteredBills.map((bill)=>(

                            <tr

                                key={bill.id}

                            >

                                <td>{bill.id}</td>

                                <td>{bill.household.householdNumber}</td>

                                <td>{bill.tariffPlan.planName}</td>

                                <td>{bill.cycleStartDate}</td>

                                <td>{bill.cycleEndDate}</td>

                                <td>{bill.unitsConsumed}</td>

                                <td>

                                    ₹ {bill.totalAmount}

                                </td>

                                <td>

                                    <span

                                        className={`statusBadge ${bill.status?.toLowerCase()}`}

                                    >

                                        {bill.status || "OPEN"}

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

export default Billing;