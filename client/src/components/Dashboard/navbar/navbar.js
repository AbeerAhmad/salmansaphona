import React from 'react';
import { Nav } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap'
import { Form } from 'react-bootstrap'
import { FormControl } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import './css/navibar.css';
import { Menu, Dropdown, Icon } from 'antd';
import { Link } from 'react-router-dom';



class Navibar extends React.Component {

  render() {
    return (
      <div>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home" style={{ visibility: 'hidden' }}>React-Bootstrap</Navbar.Brand>
          {/* <Navbar.Brand href="#home" style={{ visibility: 'hidden' }}>React-Bootstrap</Navbar.Brand> */}
          {/* <Navbar.Brand href="#home"style={{visibility:'hidden'}}>React-Bootstrap</Navbar.Brand> */}


          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Link to='/'>  <Nav.Link href="#home">HOME</Nav.Link></Link>
              <Nav.Link href="#link">ABOUT-US</Nav.Link>
              <Nav.Link href="#link">AURA-WOMEN</Nav.Link>
              <Nav.Link href="#link">AURA-BASICS</Nav.Link>
              <Nav.Link href="#link">AURA-FUSION</Nav.Link>
              <Nav.Link href="#link">AURA-PRET</Nav.Link>
            </Nav>
            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-primary">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>

      </div>
    )
  }
}
export default Navibar;















// import React from 'react';
// import { Nav } from 'react-bootstrap';
// import { NavDropdown } from 'react-bootstrap'
// import { Form } from 'react-bootstrap'
// import { FormControl } from 'react-bootstrap'
// import { Button } from 'react-bootstrap'
// import Navbar from 'react-bootstrap/Navbar'
// import './css/navibar.css';
// import { Menu, Dropdown, Icon } from 'antd';
// import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';
// import store from '../../../store/store';




// class Navibar extends React.Component {

//   componentDidMount = () => {
//     fetch('/getMainCats', {
//         method: 'get',
//     }).then(function (res) {

//         return res.json();

//     }).then(function (data) {
//         console.log(data);
//         store.dispatch({
//             type: "get_Cats",
//             payload: data,
//         })

//     })
// }

//   render() {
//     const { SubMenu } = Menu;

//     const menu = (
//       <Menu>
//         <SubMenu title="Men">
//           <Menu.Item>T-shirts</Menu.Item>
//           <Menu.Item>Polo Shirts</Menu.Item>
//           <Menu.Item>Polo Shirts</Menu.Item>
//           <Menu.Item>Night Shirts</Menu.Item>
//           <Menu.Item>Full Length Shirts</Menu.Item>
//           <Menu.Item>Casual Shirts</Menu.Item>
//           <Menu.Item>Casual Trousers</Menu.Item>
//           <Menu.Item>Nighty Trousers</Menu.Item>
//           <Menu.Item>Slim Fit Jeans</Menu.Item>
//           <Menu.Item>Baggy Jeans</Menu.Item>
//           <Menu.Item>Uppers</Menu.Item>
//           <Menu.Item>Jackets</Menu.Item>
//         </SubMenu>

//         <SubMenu title="Women">
//           <Menu.Item>T-shirts</Menu.Item>
//           <Menu.Item>Polo Shirts</Menu.Item>
//           <Menu.Item>Polo Shirts</Menu.Item>
//           <Menu.Item>Night Shirts</Menu.Item>
//           <Menu.Item>Full Length Shirts</Menu.Item>
//           <Menu.Item>Casual Shirts</Menu.Item>
//           <Menu.Item>Casual Trousers</Menu.Item>
//           <Menu.Item>Nighty Trousers</Menu.Item>
//           <Menu.Item>Slim Fit Jeans</Menu.Item>
//           <Menu.Item>Baggy Jeans</Menu.Item>
//           <Menu.Item>Uppers</Menu.Item>
//           <Menu.Item>Jackets</Menu.Item>
//         </SubMenu>

//         <SubMenu title="Kids">
//           <Menu.Item>T-shirts</Menu.Item>
//           <Menu.Item>Polo Shirts</Menu.Item>
//           <Menu.Item>Polo Shirts</Menu.Item>
//           <Menu.Item>Night Shirts</Menu.Item>
//           <Menu.Item>Full Length Shirts</Menu.Item>
//           <Menu.Item>Casual Shirts</Menu.Item>
//           <Menu.Item>Casual Trousers</Menu.Item>
//           <Menu.Item>Nighty Trousers</Menu.Item>
//           <Menu.Item>Slim Fit Jeans</Menu.Item>
//           <Menu.Item>Baggy Jeans</Menu.Item>
//           <Menu.Item>Uppers</Menu.Item>
//           <Menu.Item>Jackets</Menu.Item>
//         </SubMenu>

//         <SubMenu title="Accessories" disabled>
//           <Menu.Item>5d menu item</Menu.Item>
//           <Menu.Item>6th menu item</Menu.Item>
//         </SubMenu>
//       </Menu>
//     )
//     return (
//       <div style={{ position: 'relative' }}>
//         <div className='navibarBrand_name_div'>
//           <Navbar.Brand href="#" style={{ fontSize: '2.4vw' }}>Trend Synergy</Navbar.Brand>
//         </div>
//         <Navbar bg="light" expand="lg"  >
//           <NavDropdown title="Products" id="basic-nav-dropdown" className='bas_nav_dpdown'>
//             <div className='dropdown_main_div'>
//             {this.props.nGetMainCats.map((item)=>{
//              return <div className='dropdown_Men_Main_div'>

//                 <div className='dropdown_Men_title_div'>
//                   <ul>
//                     <li>
//                       <a href='#'>
//                         {item.MainCategory}
//                       </a>
//                     </li>
//                   </ul>
//                 </div>
//                 <div className='dropdown_Men_items_div'>
//                   <ul>
//                     <li>
//                       <a href='#'>{item.SubCategory}</a>
//                     </li>
//                     {/* <li>
//                       <a href='#'>Polo Shirts</a>
//                     </li> <li>
//                       <a href='#'>Night-Shirts</a>
//                     </li> <li>
//                       <a href='#'>Nighty-Trousers</a>
//                     </li> <li>
//                       <a href='#'>Casual Trousers</a>
//                     </li> <li>
//                       <a href='#'>Casual Shirts</a>
//                     </li><li>
//                       <a href='#'>Full Length Shirts</a>
//                     </li>
//                     <li>
//                       <a href='#'>Slim Fit Jeans</a>
//                     </li>
//                     <li>
//                       <a href='#'>Baggy Jeans</a>
//                     </li>
//                     <li>
//                       <a href='#'>Uppers</a>
//                     </li>
//                     <li>
//                       <a href='#'>Jackets</a>
//                     </li> */}
//                   </ul>
//                 </div>
//               </div>
//               })}

//               {/* <div className='dropdown_Women_Main_div'>


//                 <div className='dropdown_Women_title_div'>
//                   <ul>
//                     <li>
//                       <a href='#'>Women</a>
//                     </li>
//                   </ul>
//                 </div>


//                 <div className='dropdown_Women_items_div'>
//                   <ul>
//                     <li>
//                       <a href='#'>item-1</a>
//                     </li>
//                     <li>
//                       <a href='#'>item-1</a>
//                     </li> <li>
//                       <a href='#'>item-1</a>
//                     </li> <li>
//                       <a href='#'>item-1</a>
//                     </li> <li>
//                       <a href='#'>item-1</a>
//                     </li> <li>
//                       <a href='#'>item-1</a>
//                     </li>
//                   </ul>
//                 </div>

//               </div> */}
















//               {/* <div className='dropdown_kids_Main_div'>


//                 <div className='dropdown_kids_title_div'>
//                   <ul>
//                     <li>
//                       <a href='#'>Kids</a>
//                     </li>
//                   </ul>
//                 </div>


//                 <div className='dropdown_kids_items_div'>
//                   <ul>
//                     <li>
//                       <a href='#'>item-1</a>
//                     </li>
//                     <li>
//                       <a href='#'>item-1</a>
//                     </li> <li>
//                       <a href='#'>item-1</a>
//                     </li> <li>
//                       <a href='#'>item-1</a>
//                     </li> <li>
//                       <a href='#'>item-1</a>
//                     </li> <li>
//                       <a href='#'>item-1</a>
//                     </li>
//                   </ul>
//                 </div>

//               </div> */}

//             </div> 
//           </NavDropdown>

//           <Navbar.Toggle aria-controls="basic-navbar-nav" />

//           <Navbar.Collapse id="basic-navbar-nav">
//             <Nav className="mr-auto">
//               <Dropdown overlay={menu}>
//                 <a className="ant-dropdown-link" href="#" style={{marginTop:'8px'}}>
//                   Products <Icon type="down" />
//                 </a>
//               </Dropdown>,
//               <Link to='/'> <Nav.Link href="/">Home</Nav.Link> </Link>

//                <Nav.Link href="#link">Our Story</Nav.Link>

//             </Nav>
//             <Form inline>
//               <FormControl type="text" placeholder="Search" className="mr-sm-2" />
//               <Button variant="outline-success">Search</Button>
//             </Form>
//           </Navbar.Collapse>
//         </Navbar>
//       </div>
//     )
//   }
// }
// let NewVM = connect(function (store) {

//   return {
//       nGetMainCats: store.adminReducer.MainCats,
//   }

// })(Navibar);
// export default NewVM;
