import FilterSection from "@components/FilterSection";
import { color } from "@constants/color";
import { TripData } from "@constants/data";
import { Divider, Input, Radio, RadioChangeEvent, Space } from "antd";
import Header from "layouts/Header";
import React, { useState } from "react";
import styled from "styled-components";
import "./style.css";
const banner = {
  link: "#",
  banner:
    "https://resell-ticket.s3.ap-southeast-2.amazonaws.com/banner/98d728fa-3b76-42d7-b573-34ace9e3f81d.jpg",
};

const BookingPage = () => {
  const onChange = (e: RadioChangeEvent) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };
  const [value, setValue] = useState(1);

  return (
    <Container>
      <Wrapper>
        <BannerContainer>
          <Header />
        </BannerContainer>

        <Banner>
          <a href="#">
            <img src={banner?.banner} alt={banner?.banner} />
          </a>
        </Banner>

        <FilterSection />

        <BookingContainer>
          <BookingTripContainer>
            <BookingTripWrapper>
              {TripData.map((item, index) => {
                return (
                  <TripWrapper key={index}>
                    <img src={item.thumbnail} alt="" />
                    <TripInfo>
                      <Flex>
                        <TripTitle>{item.businessName}</TripTitle>
                        <TripTitle
                          style={{ fontWeight: 500, fontSize: "18px" }}
                        >
                          Từ {item.minPrice}
                        </TripTitle>
                      </Flex>
                      <div>
                        <TripTitle style={{ fontWeight: "normal" }}>
                          {item.seatTemplateOption}
                        </TripTitle>
                      </div>
                      <TripTimeWrapper>
                        <div>
                          <TripTitle style={{ fontWeight: "normal" }}>
                            From {item.departure} - {item.startTime}
                          </TripTitle>

                          <TripTitle style={{ fontWeight: "normal" }}>
                            To {item.destination} - {item.endTime}
                          </TripTitle>
                        </div>
                      </TripTimeWrapper>
                    </TripInfo>
                  </TripWrapper>
                );
              })}
            </BookingTripWrapper>
          </BookingTripContainer>
          <FilterContainer>
            <FilterWrapper>
              <TripTitle>Bộ lọc</TripTitle>
              <Divider />
              <div>
                <FilterSectionTitle>Sắp xếp</FilterSectionTitle>

                <Radio.Group onChange={onChange} value={value}>
                  <Space direction="vertical">
                    <Radio value={1}>Giá tăng dần</Radio>
                    <Radio value={2}>Giá giảm dần</Radio>
                    <Radio value={3}>Đánh giá</Radio>
                  </Space>
                </Radio.Group>
              </div>
            </FilterWrapper>
          </FilterContainer>
        </BookingContainer>
      </Wrapper>
    </Container>
  );
};

export default BookingPage;

const Container = styled.div`
  background: ${color.background};
`;
const Wrapper = styled.section`
  margin: 0 auto;
  max-width: 1440px;
`;
const BannerContainer = styled.div``;
const Banner = styled.div`
  margin: auto;
  display: flex;
  justify-content: center;
  height: 480px;
  border-radius: 20%;

  img {
    height: 100%;
    width: 100%;
    object-fit: contain;
    align-self: center;
  }
  @media (max-width: ${(props) => props.theme.breakPoint.md}px) {
    height: fit-content;
    padding: 40px 0;
  }
`;

const BookingContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 15px;
  width: 100%;
`;

const BookingTripContainer = styled.main`
  flex: 1 1 0%;
`;

const BookingTripWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

const FilterContainer = styled.aside`
  width: 280px;
  border-radius: 4px;
  background-color: #fff;
`;

const TripWrapper = styled.div`
  width: 100%;
  padding: 16px;
  height: 200px;
  display: flex;
  align-items: center;
  gap: 12px;
  background-color: #fff;
  border-radius: 4px;

  img {
    width: 150px;
    height: 150px;
    object-fit: cover;
  }
`;

const TripInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  height: 100%;
`;

const TripTitle = styled.h3`
  font-size: 16px;
  color: rgb(72, 72, 72);
  font-weight: bold;
`;

const FilterSectionTitle = styled.h3`
  font-size: 14px;
  color: rgb(26, 32, 44);
  font-weight: 600;
  margin-bottom: 15px;
`;

const TripTimeWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const FilterWrapper = styled.div`
  padding: 15px;
  width: 100%;
  border-radius: 6px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 1px;
  background-color: white;
  border: 1px solid rgb(237, 242, 247);
`;

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
