import React from 'react';
import renderer from 'react-test-renderer';
import { CardImage, ShoppingCard } from '../../src/components';
import { product2 } from '../data/data';


describe('card image', () => {
    test('debe mostrar la imagen', () => {
        const wrapper = renderer.create(<CardImage image='../ruta-de-img' />);

        //console.log(wrapper.toJSON());
        expect(wrapper.toJSON()).toMatchSnapshot();
    })
})

describe('card image dentro de ShoppingCard', () => {
    test('debe mostrar la imagen', () => {
        const wrapper = renderer.create(
        <ShoppingCard product={product2}>
        {
            () => (

                <CardImage  />

            )
        }
    </ShoppingCard>
        );

        //console.log(wrapper.toJSON());
        expect(wrapper.toJSON()).toMatchSnapshot();
    })
})