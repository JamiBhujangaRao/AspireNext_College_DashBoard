import { Link } from 'react-router-dom'
import Header from '../Header'
import { HomeContainer, HomeContent, HomeHeading, HomeDescription, ShopNowButton } from './styledComponents'


const Home = () => (
  <>
    <Header />
    <HomeContainer>
      <HomeContent>
        <HomeHeading>Know About Colleges</HomeHeading>
        <HomeDescription>
          The College Dashboard is your one-stop platform to explore, compare, and manage
          information about colleges with ease. From academic courses to location, fees, and
          favorites, this dashboard helps students and parents make informed decisions. With
          powerful search and filter options, you can quickly find colleges that match your
          interests, budget, and career goals.
        </HomeDescription>
        <Link to="/colleges">
          <ShopNowButton type="button">Get Started</ShopNowButton>
        </Link>
      </HomeContent>
    </HomeContainer>
  </>
);

export default Home;