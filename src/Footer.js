import githubLogo from './images/github.png'

const Footer = () => {
    return (  
        <footer className='mb-5 text-background flex justify-center items-center'>
      <div className='mr-1'>Raiyan Samin 2023 - </div>
      <a href='https://github.com/OhRai' target='_blank' className='flex items-center underline'>
        Github <img src={githubLogo} className='h-auto w-5 ml-1 filter invert' alt='GitHub Logo' />
      </a>
    </footer>
    );
}
 
export default Footer;