import React, { useEffect, useState } from 'react';
import { Button, message, Popconfirm, Rate, Space, Table, Tag } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';

const makeFirstUpper = (text) => {
    return text[0].toUpperCase() + text.slice(1);
}

const confirm = (id) => {
    console.log("Deleting product: ", id);
    message.success('Deleting product...');
};
const mapGanres = (list) =>{
  return list;
}

const columns = [
    {
        title: 'Id',
        dataIndex: 'id',
        key: 'id'
    },
    {
        title: 'Image',
        dataIndex: 'poster',
        key: 'poster',
        render: (text) => <img style={imageStyles} src={text} alt='Film Poster' />
    },
    {
        title: 'Name',
        dataIndex: 'title',
        key: 'name'
    },
    {
        title: 'Price',
        dataIndex: 'price',
        key: 'price',
        render: (text) => <span>{text}$</span>
    },
    {
        title: 'Category',
        dataIndex: 'ganre',
        key: 'ganre',
        render: (text) => <span>{mapGanres(text)}</span>
    },
    {
      title: 'Company',
      dataIndex: 'production',
      key: 'production',
      render: (text) => <span>{makeFirstUpper(text)}</span>
    },
    {
        title: 'Rating',
        dataIndex: 'rating',
        key: 'rating',
        render: (text) => <Rate allowHalf disabled defaultValue={text} />
    },
    {
        title: 'Action',
        key: 'action',
        render: (_, record) => (
            <Space size="middle">
                <a>Show</a>
                <Popconfirm
                    title="Delete the films"
                    description={`Are you sure to delete ${record.title}?`}
                    onConfirm={() => confirm(record.id)}
                    okText="Yes"
                    cancelText="No"
                    placement="left"
                >
                    <Button danger icon={<DeleteOutlined />}></Button>
                </Popconfirm>
            </Space>
        ),
    },
];

const api = "https://freetestapi.com/api/v1/movies";

export default function Films() {

    const [films, setFilms] = useState([]);

    const loadFilms = async () => {
        const response = await fetch(api);
        const data = await response.json();

        console.log(data);
        setFilms(data);
    }

    useEffect(() => {
        loadFilms();
    }, []);

    return (
        <Table columns={columns} dataSource={films} pagination={{ pageSize: 5 }} rowKey="id" />
    );
}

const imageStyles = {
    width: 100,
    height: 50,
    objectFit: "cover",
    borderRadius: 6
}