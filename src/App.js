
import Accordian from './components/accordian/Accordian';
import Random from './components/random-color/Random';
import Practice from './components/accordian/Practice';
import StarRating from './components/star-rating/StarRating';
import ImageSlider from './components/Image-slider/ImageSlider';
import LoadMore from './components/load more/LoadMore';
import TreeView from './components/tree-view/TreeView';
import menus from './components/tree-view/data';
import QrGenerator from './components/qr-code-generator/QrGenerator';
import LightDarMode from './components/light-dark-mode/LightDarMode';
import TabTest from './components/Tabs/MainTabs';
import ModalTest from './components/custom-modal/ModalTest';
import Profile from './components/github-profile-finder/Profile';
import SearchAutocomplete from './components/search-auto-complete/searchAutocomplete';
import TicTacToe from './components/tic-tac-toe/TicTacToe';
import Feature from './components/feature-flag/Feature';
import FeatureFlagGlobalState from './components/feature-flag/context';
import Test from './components/use-fetch/Test';
import ClickOutsideTest from './components/use-outside-click/test';
import UseWindowResizeTest from './components/use-window-resize/UseWindowResizeTest';
import ScrollToTop from './components/scroll-to-top/ScrollToTop';
import ScrollToSection from './components/scroll-to-top/ScrollToSection';
import Weather from './components/Weather/Weather';
import './App.css'

export default function App() {
  
  return (
    <div className="App">
      {/* <Accordian /> */}
      {/* <Random /> */}
      {/* <Practice /> */}
      {/* <StarRating noOfStars={10}/> */}
      {/* <ImageSlider url={'https://picsum.photos/v2/list'} limit={'10'} page={'1'}/> */}
      {/* <LoadMore /> */}
      {/* <TreeView menus={menus}/> */}
      {/* <QrGenerator /> */}
      {/* <LightDarMode /> */}
      {/* <TabTest /> */}
      {/* <ModalTest /> */}
      {/* <Profile /> */}
      {/* <SearchAutocomplete /> */}
      {/* <TicTacToe /> */}
      {/* <FeatureFlagGlobalState>
        <Feature />
      </FeatureFlagGlobalState> */}
      {/* <Test /> */}
      {/* <ClickOutsideTest /> */}
      {/* <UseWindowResizeTest /> */}
      {/* <ScrollToTop /> */}
      {/* <ScrollToSection /> */}
      <Weather />
      
    </div>
  );
}


//export default App;
