import HeroImg from "./hero-show.svg";
import "./css/hero.css"

function Hero(){
    return <>
        <section className="hero">
            <div className="hero-info">
                <h1 className="hero-title">Be More Effective with <span className="brand">Kaam</span></h1>
                <p className="hero-desc">Create and manage your kaams easily with Kaam. and adding more text like this can increase the text length of it</p>
                <button className="hero-cto" >Get Started</button>
            </div> 
            <div className="hero-img">
                <img src={HeroImg} alt="Hero" />
            </div>
        </section>
    </>
}

export default Hero;