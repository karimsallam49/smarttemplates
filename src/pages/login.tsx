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
import style from "./Styles/Formstyle.module.css"

const{loginformcontainer,inputstyle,container}=style;



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

    <div className={container}>

      <Row className="w-100">

        <Col md={{ span: 6, offset: 3 }}>
        

      {searchparams.get("message")==="account_created"&&
      (<Alert variant="success">
        Your account successfully created please login</Alert>)}
      
  <div className={loginformcontainer}>

    <h4 style={{color:"white", alignSelf:"center"}}>تسجيل الدخول</h4>

    <Form onSubmit={handleSubmit(submiteform)}>

      
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label style={{color:"white"}}>البريد الالكترونى</Form.Label>
      <Form.Control className={inputstyle} type="text"  {...register("email")} isInvalid={errors.email?.message?true:false}/>
      <Form.Control.Feedback type="invalid">{errors.email?.message}</Form.Control.Feedback>

    
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label style={{color:"white"}}>الرقم السرى</Form.Label>
      <Form.Control className={inputstyle} type="password"  {...register("password")} isInvalid={errors.password?.message?true:false}/>
      <Form.Control.Feedback type="invalid">{errors.password?.message}</Form.Control.Feedback>

    </Form.Group>
   
    
    
    <Button 
    variant="warning"
     type="submit"

     disabled={loading==="pending"
     }
    
    >
      {loading==="pending" ?(
        <>
        <Spinner animation="border" size="sm"></Spinner>
          loading..
        
        </>
      ):("تسجيل") }
    </Button>

    {error&&(<p style={{color:"red",marginTop:"10px"}}>{error}</p>)}
  </Form>
  </div>
        </Col>
      </Row>



      


    

    

    </div>
  )
}

export default Login
