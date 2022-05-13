import React from "react";

import { BASE_URL } from "../../constants/urls";
import { useRequestData } from "../../hooks/useRequestData";
import { ContainerProfilePage, Bar, Title, TitleTextStyle, ProfileText, ProfileAdressContainer, ProfileAdressDesc, ProfileAdress, EditContainer, DeliveryHistText, Line } from "./PerfilStyled";

import ProfileImg from '../../img/profile-edit.svg'

const Perfil = () => {
    const profileData = useRequestData(`${BASE_URL}/profile`)
    const orderHistory = useRequestData(`${BASE_URL}/orders/history`)

    const orders = orderHistory[0].orders

    const onClickEditName = () => {
        alert('Editando nome!')
    }
    const onClickEditEmail = () => {
        alert('Editando e-mail!')
    }

    const renderOrders = () => {
        switch (orderHistory[2]) {
            case false:
                if (orders.length === 0) {
                    return <p>Faça um pedido!</p>
                } else
                    if (orders.length > 0) {
                        return <p>Pedidos:</p>
                    }
            case true:
                return <p>Carregando...</p>
        }
    }

    const loadingScreen = () => {
        switch (profileData[2]) {
            case false:
                return <ContainerProfilePage>
                    <Bar>
                        <Title>
                            <TitleTextStyle>Meu Perfil</TitleTextStyle>
                        </Title>
                    </Bar>
                    <EditContainer>
                        <ProfileText>{profileData[0].user.name}</ProfileText>
                        <img src={ProfileImg} onClick={onClickEditName} />
                    </EditContainer>
                    <ProfileText>{profileData[0].user.email}</ProfileText>
                    <ProfileText>{profileData[0].user.cpf}</ProfileText>
                    <ProfileAdressContainer>
                        <EditContainer>
                            <ProfileAdressDesc>Endereço cadastrado</ProfileAdressDesc>
                            <img src={ProfileImg} onClick={onClickEditEmail} />
                        </EditContainer>
                        <ProfileAdress>{profileData[0].user.address}</ProfileAdress>
                    </ProfileAdressContainer>
                    <DeliveryHistText>Histórico de pedidos</DeliveryHistText>
                    <Line></Line>
                    <div>{renderOrders()}</div>
                </ContainerProfilePage>
            case true:
            default:
                return <p>Carregando</p>
        }
    }

    return (
        <div>{loadingScreen()}</div>
    )
}

export default Perfil
