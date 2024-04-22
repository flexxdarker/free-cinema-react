import React, { useEffect } from 'react';
import { Button, Checkbox, Form, Input, InputNumber, Select, Space, Upload } from 'antd';
import TextArea from 'antd/es/input/TextArea';
const { Option } = Select;

const categories = [
    { value: 1, label: "Action" },
    { value: 2, label: "Horror" },
    { value: 3, label: "Thriller" },
    { value: 4, label: "Fantasy" }
]
const companies = [
    {value: 1, label: "Paramaout Comedy"},
    {value: 2, label: "Universal Pictures"},
    {value: 3, label: "Sony Pictures"}
]

export default function CreateFilmForm({ film }) {

    useEffect(() => {
        if (film) {
            form.setFieldsValue(film);
        }
    }, []);

    const [form] = Form.useForm();

    const onFinish = (values) => {
        console.log(values);
    };
    const onReset = () => {
        form.resetFields();
    };
    const normFile = (e) => {
        if (Array.isArray(e)) {
            return e;
        }
        return e?.file;
    };

    return (
        <>
            <h1>Create New Film</h1>
            <Form
                form={form}
                name="control-hooks"
                onFinish={onFinish}
                style={{
                    maxWidth: 600,
                    margin: "auto"
                }}
                layout="vertical"
            >
                <Form.Item
                    name="name"
                    label="Name"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                    style={{
                        flexGrow: 1
                    }}

                >
                    <Input placeholder="Enter Film name" />
                </Form.Item>


                    <Form.Item
                        name="year"
                        label="Year"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                        style={{ flexGrow: 1 }}
                    >
                        <InputNumber
                            style={{
                                width: '100%',
                            }}
                            placeholder="Enter film year"
                        />
                    </Form.Item>
            <div className='vupadalka'>

                <Form.Item
                    name="categoryId"
                    label="Category"
                    initialValue={1}
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                    >
                    <Select
                        placeholder="Select a product category"
                        options={categories}
                        >
                        {/* <Option value="1">Electronics</Option>
                        <Option value="2">Transport</Option>
                        <Option value="3">Sport</Option>
                    <Option value="4">other</Option> */}
                    </Select>
                </Form.Item>
                <Form.Item
                    name="companyId"
                    label="Company"
                    initialValue={1}
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                    >
                    <Select
                        placeholder="Select a product category"
                        options={companies}
                        >
                        {/* <Option value="1">Electronics</Option>
                        <Option value="2">Transport</Option>
                        <Option value="3">Sport</Option>
                    <Option value="4">other</Option> */}
                    </Select>
                </Form.Item>
            </div>

            <Form.Item
                    name="imageUrl"
                    label="Image"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                    style={{
                        flexGrow: 1
                    }}

                >
                    <Input placeholder="Enter image of Film" />
                </Form.Item>

                <Form.Item
                    name="description"
                    label="Description"
                >
                    <TextArea rows={4}
                        placeholder="Enter product description"
                        minLength={10} maxLength={3000} showCount />
                </Form.Item>

                <Form.Item style={{
                    textAlign: "center"
                }}>

                    <Space>
                        <Button type="primary" htmlType="submit">
                            Create
                        </Button>
                        <Button htmlType="button" onClick={onReset}>
                            Reset
                        </Button>
                    </Space>
                </Form.Item>
            </Form>
        </>
    );
};
