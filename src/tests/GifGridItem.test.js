import React from 'react';
import { shallow } from "enzyme";
import GifGridItem from "../components/GifGridItem";

describe( 'Prueba con el componente <GifGridItem />', () => {
    const title = 'Un titulo';
    const url = 'http://localhost/img.jpg';
    const wrapper = shallow( <GifGridItem title={ title } url={ url }/> );
    test( 'Debe mostrar el componente correctamente renderizado', () => {
        expect( wrapper ).toMatchSnapshot();
    } );

    test( 'El componente renderizado debe tener un párrafo con el title', () => {
        const p = wrapper.find( 'p' );
        expect( p.text().trim() ).toBe( title );
    } );

    test( 'El componente renderizado debe tener la imágen igual al url y el alt de los props', () => {
        const img = wrapper.find( 'img' );
        expect( img.prop( 'src' ) ).toBe( url );
        expect( img.prop( 'title' ) ).toBe( title );
    } );

    test( 'El <div> principal debe tener la case animate__fadeIn', () => {
        const div = wrapper.find( 'div' );
        let clasessDiv = div.prop( 'className' );
        expect( clasessDiv.includes( 'animate__fadeIn' ) ).toBe( true );
    } );
} );