import Form from 'react-bootstrap/Form';
import { FieldValues, Path, UseFormRegister } from 'react-hook-form';
import style from "../../pages/Styles/Formstyle.module.css"
const{inputstyle}=style
type inputprops<tfiledvalu extends FieldValues>={

    label:string;
    name:Path<tfiledvalu>;
    type?:string;
    register:UseFormRegister<tfiledvalu>;
    error?:string
    onBlur?:(e:React.FocusEvent<HTMLInputElement>)=>void;
    formtext?:string
    success?:string
}

const Input =<tfiledvalu extends FieldValues> ({
    label,
    name,
    type="text",
    register,
    error,
    onBlur,
    formtext,
    success
    
}:inputprops<tfiledvalu>) => {
    const onBlurHandler=(e:React.FocusEvent<HTMLInputElement>)=>{
    
        if(onBlur){
    
            onBlur(e);
            register(name).onBlur(e)
    
        }else{
            register(name).onBlur(e)

        }
    }
    return (
    <Form.Group controlId="formBasicEmail">
      <Form.Label style={{color:"white"}}>{label}</Form.Label>
      <Form.Control className={inputstyle} type={type} {...register(name)} onBlur={onBlurHandler} 
      isInvalid={error ?true:false} 
      isValid={success?true:false}
      />
      <Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback>
      <Form.Control.Feedback type="valid">{success}</Form.Control.Feedback>
      
      {formtext &&  <Form.Text muted>{formtext}</Form.Text> }

      
     </Form.Group>
  )
}

export default Input
