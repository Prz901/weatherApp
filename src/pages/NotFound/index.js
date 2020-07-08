import React from "react";

import styled from "styled-components";
//#region 

const Container = styled.div`
  font-family: "Ubuntu", sans-serif;
  background-color: #8EC5FC;
  background-image: linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%);
  height:100vh;
  width:100%;
  display:flex;
  align-items:center;
  justify-content:center;

`;

const Content = styled.div`
    width:50vw;

    display:flex;
    flex-direction:column;
    align-items:center;

    span{
        align-self:center;
        color:purple;
        font-size:50px;
    }
    i{
        margin:10px;
    }
    a{
        text-decoration:none;
    }
    a:hover{
        color:gray;
    }
`;
//#endregion

export default () => {
  return (
    <>
      <Container>
        <Content>
          <span>Page not found</span>
          <i class="fas fa-arrow-left"><a href="http://localhost:3000/"> Voltar</a> </i>
        </Content>
      </Container>
    </>
  );
};
