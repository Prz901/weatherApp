import React, { useEffect, useState } from "react";
import styled from "styled-components";
import api from "../../services/api";

//#region
const Container = styled.div`
  background-color: #8470ff;
  display:flex;
  justify-content:center;

`;

const Content = styled.div`
  font-family: "Ubuntu", sans-serif;
  width: 500px;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  span {
    color: white;
    margin: 10px;
    font-size: 50px;
    margin: 18px;
  }

  .input-content{
    margin-bottom:16px;
  }

  input {
    margin-top: 30px;
    width: 15vw;
    background-color: rgba(0, 0, 0, 0);
    border: none;
    border-bottom: 1px solid white;
    color: white;
    font-size: 25px;

    ::placeholder {
      color: white;
      opacity: 1;
      font-size: 20px;
    }
  }
  button {
    margin: 8px;
    font-size: 20px;
    border: none;
    background-color: #f44336;
    border-radius: 8px;
    color: white;
    padding: 10px 20px;
  }
`;

const Card = styled.div`
  background-color: white;
  margin: 18px;
  border-radius: 12px;
  width:100%;
  height:350px;

  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
  

  .name-city {
    font-size: 1.8rem;
    color: gray;
    font-weight: 400;
    padding:3px;
    margin-bottom:8px;
  }
  .temperature {
    font-size: 4rem;
    color: black;
    font-weight: 600;
    padding:3px;
    margin-bottom:4px;

    &::after {
      content: "°";
    }

  }
  .clouds {
    font-size: 30px;
    color: gray;
    font-weight: 300;
    padding:3px;

  }
  .country{
    background-color:orange;
    border-radius:7px;
    font-size:1.4rem;
    padding:2px;
    align-self:flex-start;

  }
`;
//#endregion

const Weather = ( { data } ) => {
  if(!data ){
    return (
      <div>Loading</div>
    )
  }
  return (
    <>
      <p className="name-city">{data.data.name} <span className="country">{data.data.sys.country}</span></p>
      <p className="temperature">{Math.ceil(data.data.main.temp-273)}</p>
      <p className="clouds">{data.data.weather[0].description}</p>
    </>
  )
};

export default () => {
  const [data, setData] = useState(null);
  const [city, setCity] = useState("fortaleza");

  async function fetchSearch() {
    const ApiKey = "276c38e3d5083822bdaac2c8176b0e22";
    const response = await api.get(`/weather?q=${city}&appid=${ApiKey}`);
    setData(response)
  }

  useEffect(() => {
    fetchSearch();
  }, []);

  return (
    <>
      <Container>
        <Content>
          <div>
            <span>Simple Weather App</span>
          </div>
          <div className="input-content">
            <input
              type="text"
              placeholder="Search for a City"
              onChange={(e) =>setCity(e.target.value)}
            ></input>
            <button onClick={fetchSearch}>Submit</button>
          </div>
          <Card>
            <Weather data={data}  />
          </Card>
        </Content>
      </Container>
    </>
  );
};
