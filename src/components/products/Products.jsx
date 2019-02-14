import React, {Component} from 'react'
import {Row, Col, Avatar, Icon, Card} from 'antd'

class Products extends Component{
    constructor(props){
        super(props)
        this.state={
            products: [
                {
                    nombre:'paracetamol',
                    imagen:'https://farmaciasdesimilares.com/ui/productos/me/M_110.jpg',
                    precio:'$120.00'
                },
                {
                    nombre:'paracetamol',
                    imagen:'https://farmaciasdesimilares.com/ui/productos/me/M_110.jpg',
                    precio:'$120.00'
                },
                {
                    nombre:'paracetamol',
                    imagen:'https://farmaciasdesimilares.com/ui/productos/me/M_110.jpg',
                    precio:'$120.00'
                },
                {
                    nombre:'paracetamol',
                    imagen:'https://farmaciasdesimilares.com/ui/productos/me/M_110.jpg',
                    precio:'$120.00'
                },
                {
                    nombre:'paracetamol',
                    imagen:'https://farmaciasdesimilares.com/ui/productos/me/M_110.jpg',
                    precio:'$120.00'
                }
        
            ]
        }
    }
    render(){
        const {Meta} =Card
        return(
            
            <Row gutter={16}>
            {
                this.state.products.map((products,index)=>(
                    <Col key={index} span={8} style={{marginBottom:'16px' }}>
                    <Card 
                    cover={<img src={products.imagen} alt={products.nombre} />} 
                    actions={[<Icon type='dolar' />, <icon type='shopping-cart' />]}
                    >

                    <Meta 
                    avatar={<Avatar src ='https://upload.wikimedia.org/wikipedia/en/thumb/8/8b/Avatar_2_logo.jpg/220px-Avatar_2_logo.jpg' />}
                    title={products.nombre}
                    description={products.precio}

                    />
                    

                    </Card>

                    </Col>
                ))
            }

            </Row>

        )
    }
}


export default Products