import { shallow } from 'enzyme';
import GiftExpertApp from '../GiftExpertApp';
describe( 'Pruebas sobre el componente <GiftExpertApp />', () => {
    test( 'El componente renderizado debe ser igual a su Snapshot por defecto', () => {
        const wrapper = shallow( <GiftExpertApp /> );
        expect( wrapper ).toMatchSnapshot();
    } );

    test( 'El componente renderizado debe tener mostrar una lista de categorias', () => {
        let listaCategorias = [ 'Naruto', 'Death Note' ];
        const wrapper = shallow( <GiftExpertApp defaultCategories={ listaCategorias }/> );
        expect( wrapper.find( 'GifGrid' ).length ).toBe( listaCategorias.length );
    } );
} )