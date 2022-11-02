import React from 'react';
import { CDBFooter, CDBBox, CDBBtn, CDBIcon } from 'cdbreact';
import Logo from '../Images/kidify-logo.png';


function Footer () {
  return (
    <div className='footer'>
    <CDBFooter className="shadow">
      <CDBBox
        display="flex"
        justifyContent="between"
        alignItems="center"
        className="mx-auto flex-wrap"
        style={{ width: '80%' }}
      >
        <CDBBox display="flex" alignItems="center">
          <a href="/" className="d-flex align-items-center p-0 text-dark">
            <img className="footer-logo"
              alt="logo"
              src={Logo}
            />
          </a>
        </CDBBox>
        <CDBBox>
          <small className="copyright ml-2">&copy; Copyright © 2022 All Rights Reserved
</small>
        </CDBBox>
        <CDBBox display="flex">
          <CDBBtn flat color="dark" className="p-2">
            <CDBIcon fab icon="facebook-f" />
          </CDBBtn>
          <CDBBtn flat color="dark" className="mx-3 p-2">
            <CDBIcon fab icon="twitter" />
          </CDBBtn>
          <CDBBtn flat color="dark" className="p-2">
            <CDBIcon fab icon="instagram" />
          </CDBBtn>
        </CDBBox>
      </CDBBox>
    </CDBFooter>
    </div>
  );
};

export default Footer;