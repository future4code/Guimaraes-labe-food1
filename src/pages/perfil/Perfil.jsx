import React from "react";

import { BASE_URL } from "../../constants/urls";
import { useRequestData } from "../../hooks/useRequestData";
import { ContainerProfilePage, Bar, Title, TitleTextStyle, ProfileText, ProfileAdressContainer, ProfileAdressDesc, ProfileAdress, EditContainer, DeliveryHistText, Line } from "./PerfilStyled";

import ProfileImg from '../../img/profile-edit.svg'

const Perfil = () => {
    const profileData = useRequestData(`${BASE_URL}/profile`)

    const onClickEditName = () =>{
        alert('Editando nome!')
    }
    const onClickEditEmail = () =>{
        alert('Editando e-mail!')
    }
    
    return (
        <ContainerProfilePage>
            <Bar>
                <Title>
                <TitleTextStyle>Meu Perfil</TitleTextStyle>
                </Title>
            </Bar>
            <EditContainer>
            <ProfileText>Placeholder Name</ProfileText>
            <img src={ProfileImg} onClick={onClickEditName}/>
            </EditContainer>
            <ProfileText>placeholder@gmail.com</ProfileText>
            <ProfileText>333.333.333-33</ProfileText>
            <ProfileAdressContainer>
                <EditContainer>
                <ProfileAdressDesc>Endereço cadastrado</ProfileAdressDesc> 
                <img src={ProfileImg} onClick={onClickEditEmail}/>
                </EditContainer>
                <ProfileAdress>Placeholder, 00 - Place</ProfileAdress>
            </ProfileAdressContainer>
            <DeliveryHistText>Histórico de pedidos</DeliveryHistText>
            <Line></Line>
        </ContainerProfilePage>
    )
}

export default Perfil
