import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import AddCategory from '../../components/AddCategory';

describe( 'Pruebas sobre el componente <AddCategory />', () => {
    const setCategories = jest.fn();
    let wrapper = shallow( <AddCategory setCategories={ setCategories }/> );

    beforeEach( () => {
        jest.clearAllMocks();
        wrapper = shallow( <AddCategory setCategories={ setCategories }/> );
    } );

    test( 'El componente renderizado, debe ser igual a su Snapshot', () => {
        expect( wrapper ).toMatchSnapshot();
    } );

    test( 'Debe cambiar la caja de texto', () => {
        let value = 'Hello World';
        wrapper.find( 'input' ).simulate( 'change', { target: { value } } );
        // Buscamos el span para verificar que sea igual al inputValue // Lo que cambia en el evento
        expect( wrapper.find( 'span' ).text().trim() ).toBe( value );
    } );

    test( 'Al hacer el submit, no se debe disparar la función setCategories()', () => {
        wrapper.find( 'form' ).simulate( 'submit', { preventDefault(){} } );
        expect( setCategories ).not.toHaveBeenCalled();
    } );

    test( 'Se debe llamar el setCategories y limpiar la caja de texto', () => {
        wrapper.find( 'input' ).simulate( 'change', { target: { value: 'lf236' } } );
        wrapper.find( 'form' ).simulate( 'submit', { preventDefault(){} } );
        expect( setCategories ).toHaveBeenCalled();
        expect( setCategories ).toHaveBeenCalledTimes( 1 );
        expect( setCategories ).toHaveBeenCalledWith( expect.any( Function ) );
        expect( wrapper.find( 'input' ).prop( 'value' ) ).toBe( '' );
    } );
} );