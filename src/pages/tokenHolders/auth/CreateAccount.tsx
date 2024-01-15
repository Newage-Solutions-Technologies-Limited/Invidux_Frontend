import { useState, useEffect, useRef } from 'react' 
import {useForm} from 'react-hook-form'
import { TextField } from "../../../components/reusable/FormInput"
import { Button,} from '../../../components/reusable/Buttons'
import google from '../../../assets/icons/google.svg'
import facebook from '../../../assets/icons/facebook.svg'
import linkedin from '../../../assets/icons/linkedin.svg'
import apple from '../../../assets/icons/apple.svg'
import onboarding1 from '../../../assets/images/Onboarding1.png'
import onboarding2 from '../../../assets/images/Onboarding2.jpg'
import onboarding3 from '../../../assets/images/Onboarding3.png'

const slides = 
      [
        {
          img: onboarding1,
          title: "Unlock wealth by smart investing in real estate with Invidux.",
          subTitle: 'Earn regular and stable passive income regardless of your budget while you lead a premium living.'
        }, 
        {
          img: onboarding2,
          title: "Unlock wealth by smart investing in real estate with Invidux.",
          subTitle: 'Earn regular and stable passive income regardless of your budget while you lead a premium living. '
        },
        {
          img: onboarding3,
          title: "Unlock wealth by smart investing in real estate with Invidux.",
          subTitle: 'Earn regular and stable passive income regardless of your budget while you lead a premium living.'
        },
      ];

const CreateAccount = () => {
  const {handleSubmit, control} = useForm()
  const [isChecked, setIsChecked] = useState(false);
  const delay = 2500;
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }
  
  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === slides.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  const onSubmitHandler = async() =>{
    alert('hello')
  }

  return (
    <div className="flex justify-center items-center gap-x-16 py-20">
      <div className="slideshow">
        <div
          className="slideshowSlider"
          style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
        >
          {slides.map((slide, index) => (
            <div
              className="slide bg-center bg-cover bg-no-repeat rounded-2xl"
              key={index}
              style={{backgroundImage: `url(${slide.img})`}}
            >
              <h2 className="w-[504px] text-black text-[32px] font-semibold leading-10">{slide.title}</h2>
              <p className="w-[504px] text-black text-base font-normal leading-normal">{slide.subTitle}</p>
              
              <div className="slideshowDots mt-auto">
                {slides.map((_, idx) => (
                  <div
                    key={idx}
                    className={`slideshowDot${index === idx ? " active" : ""}`}
                    onClick={() => {
                      setIndex(idx);
                    }}
                  ></div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h1 className="text-slate-900 text-4xl leading-[44px] mb-[16px]">Create an account for FREE</h1>
        <p className="text-slate-600 text-base font-normal leading-normal mb-[48px]">Enter your email address to start.</p>
        <form onSubmit = {handleSubmit(onSubmitHandler)}>
          <TextField 
            name='email'
            label="Email"
            placeholder='example@gmail.com'
            control ={control}
            rules={{
              required: 'This field is requires',
              pattern: {
                message: 'Enter company\'s email',
                value: /^(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?])(?=.*[0-9])[a-zA-Z0-9!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]{8,}$/,
              }
            }}
          />
          <div className='flex items-center my-[32px]'>
            <input
                className='mr-3'
                id="terms"
                name= 'terms'
                type="checkbox"
                checked={isChecked}
                onChange={()=> {setIsChecked(!isChecked)}}
              /> 
              <div><span className="text-zinc-900 text-base font-normal leading-normal">I agree to Invidux’s </span><span className="text-[#B1924E] text-base font-normal underline leading-normal">Terms of Use and Privacy Policy</span></div>
          </div>
          <Button>Continue</Button>
        </form>
        <p className="text-neutral-500 text-sm font-normal leading-tight mt-[16px] mb-[48px]">We'll email you an OTP. Check your inbox and spam folder.</p>
        <div className='flex justify-center items-center'>
          <p className="text-zinc-900 text-base font-normal leading-normal mb-[96px]">Or Sign up</p>
          <div>
            <img src={google} alt="google" />
            <img src={facebook} alt="facebook" />
            <img src={linkedin} alt="linkedin" />
            <img src={apple} alt="apple" />
          </div>
        </div>

      </div>

    </div>
  )
}

export default CreateAccount