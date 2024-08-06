import About from "./About";
import Banner from "./Banner";
import Card from "./Card";
import Chefs from "./Chefs";
import Radius from "./Radius";
import Services from "./Services";
import Slider from "./Slider";




const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <Card></Card>
            <Radius></Radius>
            <Chefs></Chefs>
         <Slider></Slider>
         
        </div>
    );
};

export default Home;