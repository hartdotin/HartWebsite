import styled from 'styled-components';
const Heading=styled.h2`
    color:white;
    display:none; 
    font-size:20px; 
    justify-content:center;
    margin-left:12px;
    @media screen and (max-width: 500px){
       display:block;  
    };
`
const Container=styled.div`
position:absolute;
    height:175px; 
    display:none;
    margin-top:24px;
    width:240px;
    margin-left:105px;
    border:1px solid #ccc4c4;
    border-radius:30px;
    @media screen and (max-width: 500px){
        display:${({disp})=>disp};
    };
`
const MenuBar = (props) => {
    return (  
        <Container disp={props.disp}>
            <Heading>Our Product</Heading>
            <Heading>About</Heading>
            <Heading>Blogs</Heading>
            <Heading>ABDM</Heading>
        </Container>
    );
}
 
export default MenuBar;