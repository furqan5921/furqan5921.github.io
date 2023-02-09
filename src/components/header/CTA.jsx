
import RESUME from "../../assets/Mohammad-Furqan-Resume.pdf"
const CTA = () => {
  const handleClick = () =>{
    var redirectWindow = window.open("https://drive.google.com/file/d/1msezNuGAJ1h7tM6-faNZDFuuvP6nAoVT/view?usp=sharing",'_blank');
    return redirectWindow.location;
  }
  return (
    <div className='cta'>
      <a href={RESUME} onClick={handleClick}   download className='btn' >View Resume</a>
      <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}


export default CTA