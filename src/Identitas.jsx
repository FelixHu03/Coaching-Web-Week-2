import React from "react";

function Identitas(props) {
 return (
    <div>
        <h1>My Identity</h1>
        <ul>
            <li>Nama: {props.nama}</li>
            <li>NPM: {props.npm}</li>
            <li><a href="https://github.com/FelixHu03">My Github</a></li>
        </ul>
    </div>
 );
}

export default Identitas;