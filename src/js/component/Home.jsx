import React, { Component } from 'react';
import qs from 'qs';
import { Menu, Dropdown, Icon } from 'antd';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            obj: {
                a: 1,
                b: true,
                c: 'string'
            }
        }
        console.log(qs.parse('foo[bar]=baz'));
        var Book = {};
        var name = '';
        Object.defineProperty(Book, 'name', {
            set: function (value) {
                name = value;
                console.log('你买了一本书，书名叫做' + value);
            },
            get: function () {
                return '《' + name + '》';
            }
        });
        Book.name = 'Javascript权威指南';
        console.log(Book.name);
    }
    render() {
        const menu = (
            <Menu>
                <Menu.Item>
                    <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">1st menu item</a>
                </Menu.Item>
                <Menu.Item>
                    <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">2nd menu item</a>
                </Menu.Item>
                <Menu.Item>
                    <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">3rd menu item</a>
                </Menu.Item>
            </Menu>
        );
        return (<div>
            <Dropdown overlay={menu}>
                <a className="ant-dropdown-link" href="#">
                    Hover me <Icon type="down" />
                </a>
            </Dropdown>
        </div>)
    }
}