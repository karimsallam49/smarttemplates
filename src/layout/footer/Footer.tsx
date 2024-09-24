import styles from "./Footerstyle.module.css"
const {footer,footercontainer} =styles
const Footer = () => {
  return (

    <div className={footer}>

   <div className={footercontainer}>

        <div></div>
        <div className="d-flex">
            <p style={{marginRight:"5px"}}>سياسه الخصوصيه</p>|<p style={{marginLeft:"5px"}}>طريقه الاستخدام</p>
        </div>
        <div>جميع الحقوق محفوظه &copy;متجر القوالب الذكيه</div>
        
        <div>made by smartsync</div>


   </div>
    </div>
  )
}

export default Footer
