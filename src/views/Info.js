import React, { useState, useEffect } from "react";
import { useNavigate, Link, useParams } from 'react-router-dom';
import Axios from "axios";
import { useContext } from 'react';
import { LoginContext, LoginFunContext } from "../index";
import { 
    Card, CardBody, CardTitle, CardSubtitle, Table, Button
    
 } from "reactstrap";

const Starter = () =>{

    const [list, setList] = useState([]);
    const { noteIdx } = useParams();


    useEffect(() => {
        Axios.get(`/list/${Number(noteIdx)}`).then((response) => {
            setList(response.data);
            console.log(response.data)
        })
    },[])
    

    return(
        <div>
        <Card>
            <CardBody>
            <CardTitle tag="h5">NOTE LIST</CardTitle>
            <Table className="no-wrap mt-3 align-middle" responsive borderless>
                <thead>
                <tr>
                    <th>NO</th>
                    <th>CATEGORY</th>
                    <th>TITLE</th>
                    <th>WRITER</th>
                    <th>DATE</th>
                </tr>
                </thead>
                <tbody>
                {list.map((tdata, index) => (
                    <tr key={index} className="border-top">
                        <td>{tdata.noteIdx}</td>
                        <td>{tdata.categoryName}</td>
                        <td>
                        <Link  className="text-decoration-none text-secondary" to={`/info/${tdata.noteIdx}`}>
                            {tdata.noteTitle}
                        </Link>
                        </td>
                        <td>{tdata.userId}</td>
                        <td>{tdata.noteCreateTime}</td>
                    </tr>
                ))}
                </tbody>
            </Table>
            </CardBody>
        </Card>
        <div className="d-flex justify-content-end">
            <Link to="/write"><Button className="mt-2">Write</Button></Link>
        </div>
        </div>
    )
}

export default Starter;