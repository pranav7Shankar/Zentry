import React from 'react'
import Button from "./Button.jsx";
import AnimatedTitle from "./AnimatedTitle.jsx";
const ImageClipBox = ({src,clipClass}) =>{
    return (
        <div className={clipClass}>
            <img src={src}/>
        </div>
    )
}
const Contact = () => {
    return (
        <div id={'contact'} className={'my-20 min-h-96 w-screen px-10'}>
            <div className={'relative rounded-lg bg-black py-24 text-blue-50 sm:overflow-hidden'}>
                <div className={'absolute -left-20 top-0 hidden h-full w-72 overflow-hidden sm:block lg:left-20 lg:w-96'}>
                    <ImageClipBox clipClass={'contact-clip-path-1'} src={'img/contact-1.webp'}/>
                    <ImageClipBox clipClass={'contact-clip-path-2 lg:translate-y-40 translate-y-60'} src={'img/contact-2.webp'}/>
                </div>
                <div className={'absolute -top-40 left-20 w-60 sm:top-1/2 md:left-auto md:right-10 lg:top-20 lg:w-80'}>
                    <ImageClipBox
                        src={'img/swordman-partial.webp'}
                        clipClass={'absolute md:scale-125'} />
                    <ImageClipBox clipClass={'sword-man-clip-path md:scale-125'} src={'img/swordman.webp'}/>
                </div>
                <div className={'flex flex-col items-center text-center'}>
                    <p className={'mb-10 font-general text-[10px] uppercase'}>Join Zentry</p>
                    <AnimatedTitle
                        title="let&#39;s build the <br /> new era of <br /> gaming together."
                        className="special-font !md:text-[6.2rem] w-full font-zentry !text-5xl !font-black !leading-[.9]"
                    />
                    <Button title={'contact us'} containerClass={'mt-10 cursor-pointer'}/>
                </div>
            </div>
        </div>
    )
}
export default Contact
