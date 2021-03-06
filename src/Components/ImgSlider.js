import slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';

function ImgSlider() {
  let settings = {
    dots: true,
    infinite: true,
    slidesToScroll: 1,
    slidesToShow: 1,
    autoplay: true,
  };

  return (
    <Carousel {...settings}>
      <Wrap>
        <img src="/images/buck.jpg" alt="" />
      </Wrap>
      <Wrap>
        <img src="/images/eternals.jpg" alt="" />
      </Wrap>
      <Wrap>
        <img src="/images/encanto.jpg" alt="" />
      </Wrap>
      <Wrap>
        <img src="/images/nwh.jpg" alt="" />
      </Wrap>
    </Carousel>
  );
}

export default ImgSlider;

const Carousel = styled(slider)`
  margin-top: 20px;

  ul li button {
    &::before {
      font-size: 10px;
      color: white;
    }
  }
  li.slick-active button::before {
    color: white;
  }

  .slick-list {
    overflow: visible;
  }

  button {
    z-index: 1;
  }
`;

const Wrap = styled.div`
  img {
    border: 4px solid transparent;
    width: 100%;
    height: 100%;
    border-radius: 4px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition-duration: 300ms;

    &:hover {
      border: 4px solid rgba(249, 249, 249, 0.8);
    }
  }
`;
