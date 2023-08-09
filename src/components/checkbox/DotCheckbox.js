import React from "react";
import { ReactComponent as Checked } from "assets/icons/checked-dot-checkbox.svg";
import { ReactComponent as Unchecked } from "assets/icons/empty-circle-checkbox.svg";

export default function DotCheckbox({ selected, onClick }) {
    return (
        <>{selected ? <Checked className="cursor-pointer" onClick={onClick}/> : <Unchecked className="cursor-pointer" onClick={onClick}/>}</>
    )
}