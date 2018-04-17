
import React from 'react';
import { TabPane, TabContent, Nav, NavItem, NavLink } from 'mdbreact';
import classnames from 'classnames';
class TabsPage extends React.Component {

  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      activeItem: '1'
    };
  }
  toggle(tab) {
    if (this.state.activeItem !== tab) {
      this.setState({
        activeItem: tab
      });
    }
  }
  render() {
    return (
      <div>
        <Nav className="nav-tabs nav-justified">
                <NavItem>
                  <NavLink 
                    className={classnames({ active: this.state.activeItem === '1' })}
                    onClick={() => { this.toggle('1'); }}
                  >
                    Profile
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink 
                    className={classnames({ active: this.state.activeItem === '2' })}
                    onClick={() => { this.toggle('2'); }}
                  >
                    Follow
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink 
                    className={classnames({ active: this.state.activeItem === '3' })}
                    onClick={() => { this.toggle('3'); }}
                  >
                    Contact
                  </NavLink>
                </NavItem>
        </Nav>
        <TabContent activeItem={this.state.activeItem}>
          <TabPane tabId="1">
            <div className="row">
              <div className="col-sm-12">
              <br />
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil odit magnam minima, soluta doloribus
                        reiciendis molestiae placeat unde eos molestias. Quisquam aperiam, pariatur. Tempora, placeat ratione
                        porro voluptate odit minima.</p>
              </div>
            </div>
          </TabPane>
          <TabPane tabId="2">
            <div className="row">
              <div className="col-sm-12">
                <br />
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil odit magnam minima, soluta doloribus
                        reiciendis molestiae placeat unde eos molestias. Quisquam aperiam, pariatur. Tempora, placeat ratione
                        porro voluptate odit minima.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil odit magnam minima, soluta doloribus
                        reiciendis molestiae placeat unde eos molestias. Quisquam aperiam, pariatur. Tempora, placeat ratione
                        porro voluptate odit minima.</p>
              </div>
            </div>
          </TabPane>
          <TabPane tabId="3">
            <div className="row">
              <div className="col-sm-12">
                <br />
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil odit magnam minima, soluta doloribus
                        reiciendis molestiae placeat unde eos molestias. Quisquam aperiam, pariatur. Tempora, placeat ratione
                        porro voluptate odit minima.</p>
              </div>
            </div>
          </TabPane>
        </TabContent>
      </div>
    );
  }
}

export default TabsPage;