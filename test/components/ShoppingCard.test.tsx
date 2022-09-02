import React from 'react';
import renderer from 'react-test-renderer';
import { ShoppingCard } from '../../src/components';
import { product2 } from '../data/data';

const { act } = renderer;

describe('Shopping Card', () => {
    test('debe mostrar el componente correctamente', () => {
        const wrapper = renderer.create(
            <ShoppingCard product={product2}>
                {
                    () => (
                        <h2>Product Card</h2>
                    )
                }
            </ShoppingCard>);

        //console.log(wrapper.toJSON());
        expect(wrapper.toJSON()).toMatchSnapshot();
    })
})

describe('Shopping Card ', () => {
    test('debe incrementar el contador', () => {
        const wrapper = renderer.create(
            <ShoppingCard product={product2}>
                {
                    ({ count, increasBy }) => (

                        <>
                            <h2>Product Card</h2>
                            <span>{count}</span>
                            <button onClick={() => { increasBy(1) }}></button>
                        </>

                    )
                }
            </ShoppingCard>
        );

        //console.log(wrapper.toJSON());
        //expect(wrapper.toJSON()).toMatchSnapshot();

        let tree = wrapper.toJSON();
        expect(tree).toMatchSnapshot();

        act(() => {

            (tree as any).children[2].props.onClick();
        });

        tree = wrapper.toJSON();

        expect((tree as any).children[1].children[0]).toBe('1');
    })
})