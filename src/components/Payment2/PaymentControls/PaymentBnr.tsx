import React from 'react';
import styled from 'styled-components';
// @ts-ignore
import cardimg from '../../../images/card_image_banner.png';

const BannerWrapper = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: auto;
    background-color: #2268AE;
`
const CARDLOGO = styled.img`
    margin-left: 42px;
`
const BannerHeading = styled.div`
 margin-left: 42px;
 color: white;
 font-weight: bold;
 margin-right: 700px;
`
const BannerSubtitle = styled.div`
 margin-left: 42px;
 color: white;
 font-weight-bold;
`
export const PaymentBanner = (props) => {

    return(
        <BannerWrapper>
            <CARDLOGO src={cardimg} alt="card image"/>
            <BannerHeading>
                Zurich Online Payments
            </BannerHeading>
            <BannerSubtitle>
                Mandatory Fields on Submission*    
            </BannerSubtitle>    
        </BannerWrapper>
    )
}
