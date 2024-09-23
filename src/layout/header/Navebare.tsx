import { useAppSelector,useAppDispatch } from '../../Store/hooks';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { clrearitems } from '../../Store/cart/cartSlice';
import { logout } from '../../Store/auth/authslice';
import Headercart from '../../components/Headercart';
import logo from "../../assets/logo2.png"

const Navebare = () => {
  const {accsessToken}=useAppSelector((stata)=>stata.authslice)
  const dispatch=useAppDispatch()
  return (
    <Navbar expand="lg" className="bg-body-tertiary" fixed='top'>
    <Container>
      <Navbar.Brand as={Link} to="/"><img width={"100px"} src={logo}></img></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav"  className="justify-content-end">
        <Nav className="me-auto w-100 d-flex align-items-end" style={{flexDirection:"row-reverse"}}>
          <Nav.Link as={Link} to="/">متجر القوالب الذكيه</Nav.Link>
          <Nav.Link as={Link} to="all-products">جميع المنتجات</Nav.Link>
          <NavDropdown title="الاقسام" id="basic-nav-dropdown">
            <NavDropdown.Item as={Link} to="product/shehadat">شهادات</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="product/monasbat">
              المناسبات
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="product/tahnea">التهنئه</NavDropdown.Item>
  
          </NavDropdown>
          <Nav.Link as={Link} to="/contact-us">تواصل معنا</Nav.Link>
           {accsessToken ? <>
              
            <Nav.Link as={Link} to="/" 
            onClick={()=>{
              dispatch(clrearitems())
              dispatch(logout())
            
            }

            }
            > تسجيل خروج</Nav.Link>

             <Nav.Link as={Link} to="">حسابى</Nav.Link>
             <Nav.Link as={Link} to="/cartpage"><Headercart/></Nav.Link>


             

           </>
           :<>
           <Nav.Link as={Link} to="registure">مستخدم جديد</Nav.Link>
           <Nav.Link as={Link} to="login">تسجيل الدخول</Nav.Link>
           
           </>
           
          }

        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Navebare
