
import  { Component } from 'react';
import React from 'react'
import { Navbar, NavbarBrand, Nav, NavItem, NavbarToggler, Jumbotron,Collapse } from 'reactstrap';
import { NavLink } from 'react-router-dom';


class Header extends Component {
    constructor(props){
        super(props);
        this.state ={
            isNavOpen:false
        }
        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav(){
        this.setState({
            isNavOpen:!this.state.isNavOpen
        });
    }
    render(){
        return(
              <>
                 <Navbar dark expand="md">
                    <div className="container">
                    <NavbarToggler onClick={this.toggleNav} />
                    <NavbarBrand className="mr-auto" href="/">
                     <img src="assets/images/logo.png" height="30" width="41" alt="Restorant logo" />
                       Confusion
                      </NavbarBrand>
                    <Collapse isOpen={this.state.isNavOpen} navbar>
                    <Nav navbar>
                        <NavItem>
                            <NavLink className="nav-link" to="/home">
                             <span className="fa fa-home fa-lg"></span> Home
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to="/menu">
                             <span className="fa fa-list fa-lg"></span> Menu
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to="/aboutus">
                             <span className="fa fa-info fa-lg"></span> About Us
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to="/contactus">
                             <span className="fa fa-address-card fa-lg"></span>  Contact Us
                             
                            </NavLink>
                        </NavItem>
                    </Nav>
                    </Collapse>
                    </div>
                </Navbar>
                 <Jumbotron>
                     <div className="container">
                         <div className="row row-header">
                             <div className="col-12 col-sm-6">
                                 <h1>Restorant Con fusion</h1>
                                 <p>We take inspiration from  Wold best couisines, and create a unique fusion experience. Our lipsmacking creations will take your culinary senses!</p>
                             </div>
                         </div>
                     </div>
                 </Jumbotron>
              </>
        );
    }
}

export default Header