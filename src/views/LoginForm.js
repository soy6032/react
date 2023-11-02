import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import Axios from "axios";
import { useContext } from 'react';
import { LoginContext, LoginFunContext } from "../index";
import { 
    Form,
    FormGroup,
    Input,
    Label,
    Button,
 } from "reactstrap";




const LoginForm = () => {
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
        Axios.post('/login', formData).then((response) => {
            if(response.data != ''){
                alert("로그인 성공!")
                console.log("22 : "+response.data.userId)
                navigate('/')
                setId(response.data.user_id)
            }else{
                alert('로그인 실패!');
                document.getElementById("id").focus();
                
            }
        })
    }

    return(
        <div>
            <h3 className="text-center mt-5 mb-5">LOGIN 수정이 되는지 테스트tes1t</h3>
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
        </div>
    )
}
export default LoginForm;