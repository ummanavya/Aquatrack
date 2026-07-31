import { useEffect, useMemo, useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import api from "../services/api";
import "../styles/apartments.css";

function Apartments() {

    const [apartments, setApartments] = useState([]);
    const [filteredApartments, setFilteredApartments] = useState([]);

    const [search, setSearch] = useState("");

    const [editId, setEditId] = useState(null);

    const [loading, setLoading] = useState(false);

    const [form, setForm] = useState({
        apartmentName: "",
        apartmentAddress: "",
        totalHouseholds: ""
    });

    useEffect(() => {
        loadApartments();
    }, []);

    useEffect(() => {

        if(search.trim()===""){

            setFilteredApartments(apartments);

        }else{

            const value=search.toLowerCase();

            setFilteredApartments(

                apartments.filter((item)=>

                    item.apartmentName.toLowerCase().includes(value) ||

                    item.apartmentAddress.toLowerCase().includes(value)

                )

            );

        }

    },[search,apartments]);

    const loadApartments = async () => {

        try{

            setLoading(true);

            const response=await api.get("/api/apartments");

            setApartments(response.data);

            setFilteredApartments(response.data);

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

    const resetForm=()=>{

        setForm({

            apartmentName:"",
            apartmentAddress:"",
            totalHouseholds:""

        });

        setEditId(null);

    };

    const saveApartment=async()=>{

        if(

            form.apartmentName.trim()==="" ||

            form.apartmentAddress.trim()==="" ||

            form.totalHouseholds===""

        ){

            alert("Please fill all fields");

            return;

        }

        try{

            if(editId===null){

                await api.post("/api/apartments",form);

                alert("Apartment Added Successfully");

            }else{

                await api.put(`/api/apartments/${editId}`,form);

                alert("Apartment Updated Successfully");

            }

            resetForm();

            loadApartments();

        }catch(error){

            console.log(error);

            alert("Operation Failed");

        }

    };

    const editApartment=(apartment)=>{

        setEditId(apartment.id);

        setForm({

            apartmentName:apartment.apartmentName,

            apartmentAddress:apartment.apartmentAddress,

            totalHouseholds:apartment.totalHouseholds

        });

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    };

    const deleteApartment=async(id)=>{

        const confirmDelete=window.confirm(

            "Delete this apartment?"

        );

        if(!confirmDelete) return;

        try{

            await api.delete(`/api/apartments/${id}`);

            alert("Apartment Deleted Successfully");

            loadApartments();

        }catch(error){

            console.log(error);

            alert("Unable to Delete");

        }

    };

    const totalApartments=apartments.length;

    const totalHouseholds=useMemo(()=>{

        return apartments.reduce(

            (sum,item)=>sum+Number(item.totalHouseholds),

            0

        );

    },[apartments]);

    const averageHouseholds=useMemo(()=>{

        if(totalApartments===0) return 0;

        return (

            totalHouseholds/

            totalApartments

        ).toFixed(1);

    },[apartments]);
    return (

<>
    <Navbar />

    <div className="pageContainer">

        <Sidebar />

        <div className="mainContent">

            <div className="pageHeader">

                <div>

                    <h1>🏢 Apartment Management</h1>

                    <p>
                        Manage apartment details, addresses and households.
                    </p>

                </div>

            </div>

            {/* ================= Statistics ================= */}

            <div className="statsGrid">

                <div className="statCard">

                    <h3>Total Apartments</h3>

                    <h1>{totalApartments}</h1>

                </div>

                <div className="statCard">

                    <h3>Total Households</h3>

                    <h1>{totalHouseholds}</h1>

                </div>

                <div className="statCard">

                    <h3>Average</h3>

                    <h1>{averageHouseholds}</h1>

                </div>

            </div>

            {/* ================= Form ================= */}

            <div className="card">

                <div className="cardTitle">

                    {editId === null
                        ? "➕ Add Apartment"
                        : "✏ Update Apartment"}

                </div>

                <div className="formRow">

                    <input
                        type="text"
                        name="apartmentName"
                        placeholder="Apartment Name"
                        value={form.apartmentName}
                        onChange={handleChange}
                    />

                    <input
                        type="text"
                        name="apartmentAddress"
                        placeholder="Apartment Address"
                        value={form.apartmentAddress}
                        onChange={handleChange}
                    />

                    <input
                        type="number"
                        name="totalHouseholds"
                        placeholder="Total Households"
                        value={form.totalHouseholds}
                        onChange={handleChange}
                    />

                    <button
                        className="addBtn"
                        onClick={saveApartment}
                    >
                        {
                            editId===null
                            ? "Add Apartment"
                            : "Update Apartment"
                        }
                    </button>

                </div>

            </div>

            {/* ================= Search ================= */}

            <div className="card">

                <div className="searchBar">

                    <input

                        type="text"

                        placeholder="🔍 Search Apartment..."

                        value={search}

                        onChange={(e)=>setSearch(e.target.value)}

                    />

                </div>

            </div>

            {/* ================= Table ================= */}

            <div className="card">

                <div className="tableHeader">

                    <h2>Apartment List</h2>

                    <span>

                        {filteredApartments.length} Records

                    </span>

                </div>

                {

                    loading ?

                    <div className="loading">

                        Loading Apartments...

                    </div>

                    :

                    <table className="apartmentTable">

                        <thead>

                            <tr>

                                <th>ID</th>

                                <th>Name</th>

                                <th>Address</th>

                                <th>Total Households</th>

                                <th>Status</th>

                                <th>Actions</th>

                            </tr>

                        </thead>

                        <tbody>

                            {filteredApartments.length===0 ?

                                <tr>

                                    <td
                                        colSpan="6"
                                        style={{
                                            padding:"30px"
                                        }}
                                    >

                                        No Apartments Found

                                    </td>

                                </tr>

                            :

                            filteredApartments.map((apartment)=>(

                                <tr
                                    key={apartment.id}
                                >

                                    <td>

                                        {apartment.id}

                                    </td>

                                    <td>

                                        {apartment.apartmentName}

                                    </td>

                                    <td>

                                        {apartment.apartmentAddress}

                                    </td>

                                    <td>

                                        {apartment.totalHouseholds}

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
                                                editApartment(apartment)
                                            }
                                        >

                                            ✏ Edit

                                        </button>

                                        <button
                                            className="deleteBtn"
                                            onClick={()=>
                                                deleteApartment(apartment.id)
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

export default Apartments;