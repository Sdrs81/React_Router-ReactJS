import React from 'react'
import { useParams } from "react-router-dom"

function MemberDetail() {

    // const params = useParams();
    // const memberID = params.memberID;

    const { memberID, name } = useParams();

    return (
        <>
            <div>MemberDetail: {memberID}</div>
            <div>Name :{name}</div>
        </>
    )
}

export default MemberDetail