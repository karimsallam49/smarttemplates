import { useEffect } from "react";
import { useSearchParams,useNavigate } from "react-router-dom";
import actAuthLogin from "../Store/auth/actauth/actauthlogin";
import { useAppDispatch,useAppSelector } from "../Store/hooks";
import { useForm,SubmitHandler } from "react-hook-form";
import { Tlogin } from '../Validations/loginvalidation';
import { loginvalidation } from '../Validations/loginvalidation';
import { Col, Row,Alert,Spinner } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { zodResolver } from "@hookform/resolvers/zod";
import { resete } from "../Store/auth/authslice";
import { Navigate } from "react-router-dom";
import actgetproductbyid from "../Store/Act/aCtgeproductbyid";
// import actgetproductbyid from "../store/cart/act/actgetproductbyid";




const Login = () => {
  const {loading,error,accsessToken}=useAppSelector((state)=>state.authslice)
  const dispatch=useAppDispatch();

  if(accsessToken){

    return <Navigate to="/"/>
  }

  useEffect(()=>{

    return ()=>{
 
     dispatch(resete())
     } ;
   },[dispatch])

  const navigate=useNavigate()

  const[searchparams,setsearchparams]=useSearchParams()
  const {register,handleSubmit,formState:{errors}}=useForm<Tlogin>({
    resolver:zodResolver(loginvalidation),
    mode:"onBlur"

  })

  const submiteform:SubmitHandler<Tlogin>=(data)=>{

    if(searchparams.get("message")==="account_created"){

      setsearchparams("");
    }
    dispatch(actAuthLogin(data)).unwrap().then(()=>{

      navigate("/")

      dispatch(actgetproductbyid("productid"))
    })
  }

  return (
    <Row>

      <Col md={{span:6,offset:3}}>

      {searchparams.get("message")==="account_created"&&
      (<Alert variant="success">
        Your account successfully created please login</Alert>)}
      
    <Form onSubmit={handleSubmit(submiteform)}>
  
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label style={{color:"white"}}>Email address</Form.Label>
      <Form.Control type="text" placeholder="Enter email" {...register("email")} isInvalid={errors.email?.message?true:false}/>
      <Form.Control.Feedback type="invalid">{errors.email?.message}</Form.Control.Feedback>

    
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label style={{color:"white"}}>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" {...register("password")} isInvalid={errors.password?.message?true:false}/>
      <Form.Control.Feedback type="invalid">{errors.password?.message}</Form.Control.Feedback>

    </Form.Group>
   
    
    
    <Button 
    variant="info"
     type="submit"

     disabled={loading==="pending"
     }
    
    >
      {loading==="pending" ?(
        <>
        <Spinner animation="border" size="sm"></Spinner>
          loading..
        
        </>
      ):("submit") }
    </Button>

    {error&&(<p style={{color:"red",marginTop:"10px"}}>{error}</p>)}
  </Form>
      
      </Col>
    </Row>
  )
}

export default Login
