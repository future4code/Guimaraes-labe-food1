import styled from 'styled-components'

export const ContainerProfilePage = styled.div`
    width: 360px;
    height: 640px;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
`
export const Bar = styled.div`
    width: 360px;
    height: 64px;
    margin: 0 0 16px;
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    box-shadow: 0 0.5px 0 0 rgba(0, 0, 0, 0.25);
    background-color: #fff;
`
export const Title = styled.div`
    width: 175px;
    height: 44px;
    margin: 20px 92px 0 93px;
    padding: 13px 53.5px 12px;
`
export const TitleTextStyle = styled.span`
    font-family: Roboto;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    text-align: center;
    color: #000;
`
export const EditContainer = styled.div`
    display: flex;
    justify-content: space-between;
`

// Nome
export const ProfileText = styled.span`
    height: 18px;
    margin: 16px 16px 8px;
    font-family: Roboto;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    color: #000;
`

// Endereço
export const ProfileAdressContainer = styled.div`
    width: 360px;
    height: fit-content;
    margin: 16px 0;
    display: flex;
    padding: 16px 0;
    flex-direction: column;
    background-color: #eee;
`
export const ProfileAdressDesc = styled.span`
  height: 18px;
  font-family: Roboto;
  font-size: 16px;
  padding: 0 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: #b8b8b8;
`
export const ProfileAdress = styled.span`
    height: 18px;
    margin: 8px 0 0;
    padding: 0 16px;
    font-family: Roboto;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    color: #000;
`

// Pedidos
export const DeliveryHistText = styled.span`
    height: 18px;
    margin: 16px 16px 8px;
    text-align: center;
    font-family: Roboto;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    color: #000;
`
export const Line = styled.div`
    width: 328px;
    height: 1px;
    margin-left: auto;
    margin-right: auto;
    border: solid 1px #000;
`