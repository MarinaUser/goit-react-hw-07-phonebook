import { ThreeCircles } from 'react-loader-spinner';
import { Container } from './Loader.styled';

export const Loader = () => {
    return (
        <Container>
        <ThreeCircles
  height="100"
  width="100"
  color="#4fa94d"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
  ariaLabel="three-circles-rotating"
  outerCircleColor="lightsalmon"
  innerCircleColor="lightsalmon"
  middleCircleColor="lightsalmon"
    />
        </Container>)
 }