import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { FaLinkedin, FaYoutube, FaTiktok, FaGithub } from 'react-icons/fa';
import {
    FooterContainer, FooterWrap, SocialIconLink, SocialIcons, SocialMediaWrap,
    SocialMedia, SocialLogo, WebsiteRights
} from './FooterElements';
// import { FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink } from './FooterElements';

const Footer = () => {

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <FooterContainer>
            <FooterWrap>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/' onClick={toggleHome}>
                            Viajemos
                        </SocialLogo>
                        <WebsiteRights>Viajemos © {new Date().getFullYear()} All rights reserved. </WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href='/' target='_blank' aria-label='Linkedin'>
                                <FaLinkedin />
                            </SocialIconLink>
                            <SocialIconLink href='/' target='_blank' aria-label='Github'>
                                <FaGithub />
                            </SocialIconLink>
                            <SocialIconLink href='/' target='_blank' aria-label='Youtube'>
                                <FaYoutube />
                            </SocialIconLink>
                            <SocialIconLink href='/' target='_blank' aria-label='Tiktok'>
                                <FaTiktok />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
};

export default Footer;
