import { useEffect, useMemo, useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import api from "../services/api";
import "../styles/reports.css";

function Reports(){

const [apartments,setApartments]=useState([]);
const [households,setHouseholds]=useState([]);
const [bills,setBills]=useState([]);

const [fromDate,setFromDate]=useState("");
const [toDate,setToDate]=useState("");

const [selectedApartment,setSelectedApartment]=useState("");
const [selectedHousehold,setSelectedHousehold]=useState("");

const [loading,setLoading]=useState(false);

useEffect(()=>{

loadData();

},[]);

const loadData=async()=>{

try{

setLoading(true);

const apartmentResponse=await api.get("/api/apartments");

const householdResponse=await api.get("/api/households");

const billResponse=await api.get("/api/billing-cycles");

setApartments(apartmentResponse.data);

setHouseholds(householdResponse.data);

setBills(billResponse.data);

}catch(error){

console.log(error);

}finally{

setLoading(false);

}

};

const filteredBills=bills.filter((bill)=>{

let valid=true;

if(selectedApartment!==""){

valid=valid &&

String(bill.household?.apartment?.id)===selectedApartment;

}

if(selectedHousehold!==""){

valid=valid &&

String(bill.household?.id)===selectedHousehold;

}

if(fromDate!==""){

valid=valid && bill.cycleStartDate>=fromDate;

}

if(toDate!==""){

valid=valid && bill.cycleEndDate<=toDate;

}

return valid;

});

const totalApartments=apartments.length;

const totalHouseholds=households.length;

const totalBills=bills.length;

const totalWaterUsage=useMemo(()=>{

return bills.reduce(

(sum,item)=>sum+Number(item.unitsConsumed),

0

);

},[bills]);

const totalRevenue=useMemo(()=>{

return bills.reduce(

(sum,item)=>sum+Number(item.totalAmount),

0

);

},[bills]);

const exportPdf=async()=>{

try{

const response=await api.get("/api/reports/pdf",{

responseType:"blob"

});

const url=window.URL.createObjectURL(

new Blob([response.data],{

type:"application/pdf"

})

);

const link=document.createElement("a");

link.href=url;

link.download="AquaTrack_Report.pdf";

document.body.appendChild(link);

link.click();

link.remove();

}catch(error){

alert("Unable to export PDF");

}

};

const exportExcel=async()=>{

try{

const response=await api.get("/api/reports/excel",{

responseType:"blob"

});

const url=window.URL.createObjectURL(

new Blob([response.data])

);

const link=document.createElement("a");

link.href=url;

link.download="AquaTrack_Report.xlsx";

document.body.appendChild(link);

link.click();

link.remove();

}catch(error){

alert("Unable to export Excel");

}

};

const downloadInvoice = async (billingCycleId) => {
    try {

        const response = await api.get(
            `/api/invoices/${billingCycleId}`,
            {
                responseType: "blob"
            }
        );

        const url = window.URL.createObjectURL(
            new Blob([response.data], {
                type: "application/pdf"
            })
        );

        const link = document.createElement("a");

        link.href = url;
        link.download = `Invoice-${billingCycleId}.pdf`;

        document.body.appendChild(link);
        link.click();
        link.remove();

        window.URL.revokeObjectURL(url);

    } catch (error) {

        console.error(error);
        alert("Unable to download invoice");

    }
};

return (

<>

<Navbar />

<div className="pageContainer">

    <Sidebar />

    <div className="mainContent">

        {/* ================= Header ================= */}

        <div className="pageHeader">

            <div>

                <h1>📊 Reports Dashboard</h1>

                <p>

                    Analyze water usage, billing performance and generate reports.

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

                <h3>Total Water Usage</h3>

                <h1>{totalWaterUsage} KL</h1>

            </div>

            <div className="statCard">

                <h3>Total Revenue</h3>

                <h1>₹ {totalRevenue.toFixed(2)}</h1>

            </div>

        </div>

        {/* ================= Report Filters ================= */}

        <div className="card">

            <div className="cardTitle">

                🔍 Report Filters

            </div>

            <div className="formRow">

                <input
                    type="date"
                    value={fromDate}
                    onChange={(e)=>setFromDate(e.target.value)}
                />

                <input
                    type="date"
                    value={toDate}
                    onChange={(e)=>setToDate(e.target.value)}
                />

                <select
                    value={selectedApartment}
                    onChange={(e)=>setSelectedApartment(e.target.value)}
                >

                    <option value="">

                        All Apartments

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

                <select
                    value={selectedHousehold}
                    onChange={(e)=>setSelectedHousehold(e.target.value)}
                >

                    <option value="">

                        All Households

                    </option>

                    {

                        households.map((household)=>(

                            <option
                                key={household.id}
                                value={household.id}
                            >

                                {household.householdNumber}

                            </option>

                        ))

                    }

                </select>

            </div>

        </div>

        {/* ================= Water Usage Report ================= */}

        <div className="card">

            <div className="tableHeader">

                <h2>

                    💧 Water Usage Report

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

                            <th>Apartment</th>

                            <th>Household</th>

                            <th>Owner</th>

                            <th>Units</th>

                            <th>Total Amount</th>

                            <th>Invoice</th>

                        </tr>

                    </thead>

                    <tbody>

                    {

                        filteredBills.length===0 ?

                        <tr>

                            <td
                                colSpan="7"
                                style={{padding:"30px"}}
                            >

                                No Records Found

                            </td>

                        </tr>

                        :

                        filteredBills.map((bill)=>(

                            <tr key={bill.id}>

                                <td>{bill.id}</td>

                                <td>{bill.household?.apartment?.apartmentName}</td>

                                <td>{bill.household.householdNumber}</td>

                                <td>{bill.household.ownerName}</td>

                                <td>{bill.unitsConsumed} KL</td>

                                <td>

                                    ₹ {Number(bill.totalAmount).toFixed(2)}

                                </td>

                                <td>
                                    <button
                                        className="download-btn"
                                        onClick={() => downloadInvoice(bill.id)}
                                    >
                                        📄 Download
                                    </button>
                                </td>

                            </tr>

                        ))

                    }

                    </tbody>

                </table>

            }

        </div>

        {/* ================= Billing Report ================= */}

        <div className="card">

            <div className="tableHeader">

                <h2>

                    💰 Billing Report

                </h2>

            </div>

            <table className="apartmentTable">

                <thead>

                    <tr>

                        <th>ID</th>

                        <th>Apartment</th>

                        <th>Household</th>

                        <th>Billing Period</th>

                        <th>Units</th>

                        <th>Total Bill</th>

                        <th>Invoice</th>

                    </tr>

                </thead>

                <tbody>

                {

                    filteredBills.length===0 ?

                    <tr>

                        <td
                            colSpan="7"
                            style={{padding:"30px"}}
                        >

                            No Records Found

                        </td>

                    </tr>

                    :

                    filteredBills.map((bill)=>(

                        <tr key={bill.id}>

                            <td>{bill.id}</td>

                            <td>{bill.household?.apartment?.apartmentName}</td>

                            <td>{bill.household.householdNumber}</td>

                            <td>

                                {bill.cycleStartDate}

                                {" - "}

                                {bill.cycleEndDate}

                            </td>

                            <td>{bill.unitsConsumed}</td>

                            <td>

                                ₹ {Number(bill.totalAmount).toFixed(2)}

                            </td>

                            <td>
                                <button
                                    className="download-btn"
                                    onClick={() => downloadInvoice(bill.id)}
                                >
                                    📄 Download
                                </button>
                            </td>

                        </tr>

                    ))

                }

                </tbody>

            </table>

        </div>

        {/* ================= Export Buttons ================= */}

        <div className="reportButtons">

            <button
                className="pdfBtn"
                onClick={exportPdf}
            >

                📄 Export PDF

            </button>

            <button
                className="excelBtn"
                onClick={exportExcel}
            >

                📊 Export Excel

            </button>

            <button
                className="printBtn"
                onClick={()=>window.print()}
            >

                🖨 Print Report

            </button>

        </div>
                </div>

    </div>

</>

);

}

export default Reports;