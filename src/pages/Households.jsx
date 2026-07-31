import { useEffect, useMemo, useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import api from "../services/api";
import "../styles/households.css";

function Households(){

const [households,setHouseholds]=useState([]);
const [filteredHouseholds,setFilteredHouseholds]=useState([]);

const [apartments,setApartments]=useState([]);

const [search,setSearch]=useState("");

const [loading,setLoading]=useState(false);

const [editId,setEditId]=useState(null);

const [form,setForm]=useState({

householdNumber:"",
ownerName:"",
phoneNumber:"",
totalMembers:"",
apartmentId:""

});

useEffect(()=>{

loadHouseholds();
loadApartments();

},[]);

useEffect(()=>{

if(search===""){

setFilteredHouseholds(households);

}else{

const value=search.toLowerCase();

setFilteredHouseholds(

households.filter(h=>

h.ownerName.toLowerCase().includes(value) ||

h.householdNumber.toLowerCase().includes(value)

)

);

}

},[search,households]);

const loadHouseholds=async()=>{

try{

setLoading(true);

const response=await api.get("/api/households");

setHouseholds(response.data);

setFilteredHouseholds(response.data);

}catch(error){

console.log(error);

}finally{

setLoading(false);

}

};

const loadApartments=async()=>{

try{

const response=await api.get("/api/apartments");

setApartments(response.data);

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

const resetForm=()=>{

setEditId(null);

setForm({

householdNumber:"",
ownerName:"",
phoneNumber:"",
totalMembers:"",
apartmentId:""

});

};

const saveHousehold=async()=>{

try{

if(editId===null){

await api.post("/api/households",form);

alert("Household Added Successfully");

}else{

await api.put(`/api/households/${editId}`,form);

alert("Household Updated Successfully");

}

resetForm();

loadHouseholds();

}catch(error){

console.log(error);

alert("Operation Failed");

}

};

const editHousehold=(household)=>{

setEditId(household.id);

setForm({

householdNumber:household.householdNumber,

ownerName:household.ownerName,

phoneNumber:household.phoneNumber,

totalMembers:household.totalMembers,

apartmentId:household.apartment.id

});

window.scrollTo({

top:0,

behavior:"smooth"

});

};

const deleteHousehold=async(id)=>{

if(!window.confirm("Delete this household?")) return;

try{

await api.delete(`/api/households/${id}`);

loadHouseholds();

}catch(error){

console.log(error);

}

};

const totalHouseholds=households.length;

const totalMembers=useMemo(()=>{

return households.reduce(

(sum,item)=>sum+Number(item.totalMembers),

0

);

},[households]);

const assignedApartments=apartments.length;
return (

<>

<Navbar />

<div className="pageContainer">

    <Sidebar />

    <div className="mainContent">

        {/* ================= Header ================= */}

        <div className="pageHeader">

            <div>

                <h1>🏠 Household Management</h1>

                <p>

                    Manage household owners, members and apartment allocation.

                </p>

            </div>

        </div>

        {/* ================= Statistics ================= */}

        <div className="statsGrid">

            <div className="statCard">

                <h3>Total Households</h3>

                <h1>{totalHouseholds}</h1>

            </div>

            <div className="statCard">

                <h3>Total Members</h3>

                <h1>{totalMembers}</h1>

            </div>

            <div className="statCard">

                <h3>Apartments</h3>

                <h1>{assignedApartments}</h1>

            </div>

        </div>

        {/* ================= Form ================= */}

        <div className="card">

            <div className="cardTitle">

                {

                    editId===null

                    ?

                    "➕ Add Household"

                    :

                    "✏ Update Household"

                }

            </div>

            <div className="formRow">

                <input

                    type="text"

                    name="householdNumber"

                    placeholder="Household Number"

                    value={form.householdNumber}

                    onChange={handleChange}

                />

                <input

                    type="text"

                    name="ownerName"

                    placeholder="Owner Name"

                    value={form.ownerName}

                    onChange={handleChange}

                />

                <input

                    type="text"

                    name="phoneNumber"

                    placeholder="Phone Number"

                    value={form.phoneNumber}

                    onChange={handleChange}

                />

                <input

                    type="number"

                    name="totalMembers"

                    placeholder="Members"

                    value={form.totalMembers}

                    onChange={handleChange}

                />

                <select

                    name="apartmentId"

                    value={form.apartmentId}

                    onChange={handleChange}

                >

                    <option value="">

                        Select Apartment

                    </option>

                    {

                        apartments.map((apartment)=>(

                            <option

                                key={apartment.id}

                                value={apartment.id}

                            >

                                {apartment.apartmentName}

                            </option>

                        ))

                    }

                </select>

                <button

                    className="addBtn"

                    onClick={saveHousehold}

                >

                    {

                        editId===null

                        ?

                        "Add Household"

                        :

                        "Update Household"

                    }

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

                    Household List

                </h2>

                <span>

                    {filteredHouseholds.length} Records

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

                            <th>House No</th>

                            <th>Owner</th>

                            <th>Phone</th>

                            <th>Members</th>

                            <th>Apartment</th>

                            <th>Status</th>

                            <th>Actions</th>

                        </tr>

                    </thead>

                    <tbody>

                    {

                        filteredHouseholds.length===0

                        ?

                        <tr>

                            <td

                                colSpan="8"

                                style={{

                                    padding:"30px"

                                }}

                            >

                                No Household Found

                            </td>

                        </tr>

                        :

                        filteredHouseholds.map((household)=>(

                            <tr

                                key={household.id}

                            >

                                <td>{household.id}</td>

                                <td>{household.householdNumber}</td>

                                <td>{household.ownerName}</td>

                                <td>{household.phoneNumber}</td>

                                <td>{household.totalMembers}</td>

                                <td>

                                    {household.apartment.apartmentName}

                                </td>

                                <td>

                                    <span className="statusBadge">

                                        Active

                                    </span>

                                </td>

                                <td>

                                    <button

                                        className="editBtn"

                                        onClick={()=>

                                            editHousehold(household)

                                        }

                                    >

                                        ✏ Edit

                                    </button>

                                    <button

                                        className="deleteBtn"

                                        onClick={()=>

                                            deleteHousehold(household.id)

                                        }

                                    >

                                        🗑 Delete

                                    </button>

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

export default Households;