import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
background: #FF93B8;
text-size:1200px;
height: 40px;
display: flex;
justify-content: space-between;
padding: 0.4rem calc((100vw - 1000px) / 2);
z-index: 12;
`;

export const NavLink = styled(Link)`
color: #;NOM 
display: flex;
align-items: center;
text-decoration: none;
font-size: 20px;
padding: 0 1rem;
height: 100%;
cursor: pointer;
&.active {
	color: #F50D5A;
}
`;

export const Bars = styled(FaBars)`
display: none;
color: #808080;
text-size:30px;
@media screen and (max-width: 768px) {
	display: block;
	position: absolute;
	top: 0;
	right: 0;
	transform: translate(-100%, 75%);
	font-size: 1.8rem;
	cursor: pointer;
}
`;

export const NavMenu = styled.div`
display: flex;
align-items: center;
margin-right: -24px;

/* Second Nav */
/* margin-right: 24px; */
/* Third Nav */
/* width: 100vw;
white-space: nowrap; */
@media screen and (max-width: 768px) {
	display: none;
}
`;
