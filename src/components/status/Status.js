import React from "react";
import PropTypes from "prop-types"
import { ReactComponent as GreenTick } from "assets/icons/green-tick.svg"

export default function Status({ status, className }) {
    return(
        <p
            className={`
                rounded-[100px] w-fit hide_tap ${className || ''} text-12 px-[8px] py-[2px]
                ${['paid'].includes(status?.toLowerCase()) ? 'bg-[#E6F9EE] text-[#1BA154]' :''}
            `}
        >
            {status === 'paid' ? <GreenTick className="inline mr-[4px]"/> : ''}
            <span className="truncate capitalize">{status}</span>
        </p>
    )
}

Status.propTypes = {
    status: PropTypes.string,
    className: PropTypes.string
}