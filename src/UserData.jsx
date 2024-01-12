import { useState } from "react";

const UserData = (props) => {
    const umur = 2024 - props.tahunLahir;
    const {Nama, Umur}= useState(0);
    return(
        <div>
            <div> Nama: {props.nama} </div>
            <div> Umur: {umur} </div>
        </div>
    )
}

export default UserData;