import { useAppDispatch,useAppSelector } from "../Store/hooks"
import { useNavigate,Navigate } from "react-router-dom";
import { useEffect } from "react";
import { useForm,SubmitHandler } from "react-hook-form"
import { signupschema,Tsignuptypes } from "../Validations/signupvalidation";
import Input from "../common/Inputs/input";
import usecheckedavabilityemail from "../hooks/usecheckavabilityemail";
import { zodResolver } from "@hookform/resolvers/zod";
import { resete } from "../Store/auth/authslice";
import actauth from "../Store/auth/actauth/actauth"
import { Container,Row,Col,Spinner } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import styles from "./Styles/Formstyle.module.css"



const {registercontainer,formcontainer}=styles
const Registur = () => {

  const navigate=useNavigate()
  const dispatch=useAppDispatch();
  const{loading,error,accsessToken}=useAppSelector((state)=>state.authslice)
  if(accsessToken){

    return <Navigate to="/"/>
  }
  useEffect(()=>{

   return ()=>{

    dispatch(resete())
    } ;
  },[dispatch])
  const {register,
    handleSubmit,
    formState:{errors},
    getFieldState,
    trigger,
  
  }=useForm<Tsignuptypes>({
    mode:"onBlur",
    resolver:zodResolver(signupschema)
})

const {checkingemail,
  EnterEmail,
  EmailCheckAvability,
  resetemailcheck}=usecheckedavabilityemail()

  // submit
  const submitform :SubmitHandler<Tsignuptypes> = async (data)=>{

    const {firstname,lastname,email,password}=data;

    dispatch(actauth({firstname,lastname,email,password})).unwrap().then(()=>{
      navigate("/login?message=account_created")
      console.log("done")
    })
    }
  const emailonblurhandler= async (e:React.FocusEvent<HTMLInputElement>)=>{
    await trigger("email")
    const value=e.target.value
    const {isDirty,invalid}=getFieldState("email")
    if(isDirty &&!invalid && value!==EnterEmail){

      checkingemail(value)
    }

    if(isDirty &&invalid && EnterEmail ){

      resetemailcheck()
    }
  }
  return (
    <div className={registercontainer}>



      <div className={formcontainer}>
        <h3 style={{color:"white",textAlign:"center"}}>تسجيل حساب جديد</h3>
  
      <Container>
     <Row>
  
        <Col md={{span:6,offset:3}}>
        
        
      <Form onSubmit={handleSubmit(submitform)}>
      <Input
      label="الاسم الاول"
      register={register}
      name="firstname"
      error={errors.firstname?.message}
      type="text"
      />
      <Input
      label="الاسم الاخير"
      register={register}
      name="lastname"
      error={errors.lastname?.message}
      type="text"
      />
      {/* <Input
      label=" رقم الجوال"
      register={register}
      name="phonenumber"
      error={errors.lastname?.message}
      type="text"
      /> */}
      <Input
      label="البريد الالكترونى"
      register={register}
      name="email"
      error={errors.email?.message?
        errors.email?.message:EmailCheckAvability=="notavailable"?"This Email is already taken":""?
        errors.email?.message:EmailCheckAvability=="failed"?"Network error":""
      }
      type="text"
      onBlur={emailonblurhandler}
      formtext={EmailCheckAvability=="checking"?"We are Cheaking the Avability of this Email adress Pleease Wait..":""}
      success={EmailCheckAvability=="available"?"This Email Avalibe to Use":""}
      />
      <Input
      label="الرقم السري"
      register={register}
      name="password"
      error={errors.password?.message}
      type="password"
      />
      <Input
      label="تاكيد الرقم السرى"
      register={register}
      name="confrimpassword"
      error={errors.password?.message}
      type="password"
      />
     
     
      <Button 
      variant="info"
       type="submit"
       className="mt-3"
  
       disabled={EmailCheckAvability==="checking"?true:false
        ||loading==="pending"
       }
      
      >
        {loading==="pending" ?(
          <>
          <Spinner animation="border" size="sm"></Spinner>
            loading..
          
          </>
        ):("submit") }
      </Button>
  
      {error&&(<p style={{color:"DC3545",marginTop:"10px"}}>{error}</p>)}
    </Form>
        
        </Col>
      </Row>
      
      </Container>
      </div>
    </div>
    )
}

export default Registur
