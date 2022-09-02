import React from 'react';
import renderer from 'react-test-renderer';
import { CardTitle, ShoppingCard } from '../../src/components';
import { product1 } from '../data/data';

describe('card title', () => {
    test('debe mostrar el titulo de la card correctamente', () => {
        const wrapper = renderer.create(<CardTitle title="Titulo del producto" className='custom-class' />);

        //console.log(wrapper.toJSON());
        expect(wrapper.toJSON()).toMatchSnapshot();
    })
})


describe('ShoppingCard with title', () => {
    test('debe mostrar la tarjeta con el nombre del producto', () => {
        const wrapper = renderer.create(
            <ShoppingCard product={product1}>
                {
                    () => (

                        <CardTitle />
                    )
                }
            </ShoppingCard>
        );

        //console.log(wrapper.toJSON());
        expect(wrapper.toJSON()).toMatchSnapshot();
    })
})