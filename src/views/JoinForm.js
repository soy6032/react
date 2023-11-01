import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import Axios from "axios";
import { useContext } from 'react';
import { LoginContext, LoginFunContext } from "../index";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { 
    Form,
    FormGroup,
    Input,
    Label,
    Button,
 } from "reactstrap";
 const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
const JoinForm = () =>{
    const id = useContext(LoginContext);
    const {setId} = useContext(LoginFunContext);

    const navigate = useNavigate();

    const [formData, setFromData] = useState({
        userId : '',
        userPw : ''
    })

    const handleInputChange = (e) =>{
        const {name, value} = e.target;
        setFromData({
            ...formData,
            [name] : value,
        })
    }

    const handleSubmit = async (e) => {
        console.log(formData)
        Axios.post('/join', formData).then((response) => {
            
        })
    }

    return(
        <div>
        <h3 className="text-center mt-5 mb-5">JOIN PAGE</h3>
        <Form>
                <FormGroup floating>
                    <Input
                        id="id"
                        name="userId"
                        placeholder="ID"
                        type="id"
                        onChange={handleInputChange}
                    />
                    <Label for="id">
                        ID
                    </Label>
                </FormGroup>
                <FormGroup floating>
                    <Input
                        id="examplePassword"
                        name="userPw"
                        placeholder="Password"
                        type="password"
                        onChange={handleInputChange}
                    />
                    <Label for="examplePassword">
                        Password
                    </Label>
                </FormGroup>
                <Button onClick={handleSubmit}>
                    Submit
                </Button>
            </Form>


            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6} lg={4}>
                        <Item>xs=8</Item>
                    </Grid>
                    <Grid item xs={12} md={6} lg={4}>
                        <Item>xs=8</Item>
                    </Grid>
                    <Grid item xs={12} md={6} lg={4}>
                        <Item>xs=8</Item>
                    </Grid>
                </Grid>
            </Box>
            </div>

            
    )
}

export default JoinForm;