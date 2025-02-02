import SlickSlider from "./SlickSlider/SlickSlider";
import Footer from "./Footer/Footer";
import FirstView from "./Fv/FirstView";
// git clone https://github.com/kengomasunari2025/github-netlify-kengo.git
// cd 20250128
// git config --global user.name "kengomasunari2025"
// git config --global user.email "kengomasunari2025@gmail.com"
// git push origin main 
// git pull origin main

const Kengo = () => {
  return (
    <div className="bg-white">
      <FirstView/>
      <SlickSlider />
      <Footer />
    </div>
  );
};
export default Kengo;
