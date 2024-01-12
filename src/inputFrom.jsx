import { useState } from "react";

    const inputFrom = (props) => {
        const [nama, setNama] = useState("");
        const [umur, setUmur] = useState();
    }
    const printNama = () =>{
        alert ("Nama Saya " +nama  + "/n umur: " + umur);
    }


    return(
        <div>
            <div> Nama: {nama}</div>
            <input onChange={(e) => setNama(e.target.value)} />
            <div>Umur : {umur} </div>
            <input type="{}" onChange={(e) => setUmur(e.target.value)} />

            <button onClick={printNama}> Print </button>

        </div>
    )


export default inputFrom;