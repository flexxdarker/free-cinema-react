import React from 'react'
import { Layout as AntdLayout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import { HomeOutlined, InfoCircleOutlined, VideoCameraOutlined, CalendarOutlined } from '@ant-design/icons';

const { Header: AntdHeader } = AntdLayout;

export default function Header() {
    return (
        <AntdHeader
            style={{
                display: 'flex',
                alignItems: 'center',
            }}
        >
            <div className="demo-logo" />
            <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['2']}
                style={{
                    flex: 1,
                    minWidth: 0,
                }}
            >
                <Menu.Item key="1">
                    <HomeOutlined />
                    <span>Home</span>
                    <Link to="/" />
                </Menu.Item>
                <Menu.Item key="2">
                    <VideoCameraOutlined />
                    <span>Films</span>
                    <Link to="/films" />
                </Menu.Item>
                <Menu.Item key="3">
                    <CalendarOutlined />
                    <span>Sessions</span>
                    <Link to="/sessions" />
                </Menu.Item>
            </Menu>
        </AntdHeader>
    )
}