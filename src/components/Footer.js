import React from 'react'
import { Layout as AntdLayout } from 'antd';

const { Footer: AntdFooter } = AntdLayout;

export default function Footer() {
    return (
        <AntdFooter
            style={{
                textAlign: 'center',
            }}
        >
            <div>Ant Design ©{new Date().getFullYear()} Created by Ant UED</div>
            <div>Creator flexxdarker for PV221 ♡</div>
        </AntdFooter>
    )
}