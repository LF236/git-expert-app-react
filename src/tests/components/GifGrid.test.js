import { shallow } from 'enzyme';
import GifGrid from '../../components/GifGrid';
import useFetchGifs from '../../hooks/useFetchGifs';
jest.mock( '../../hooks/useFetchGifs' );
describe( 'Pruebas sobre el componente <GifGrid />', () => {
    let category = 'naruto';
    test( 'El componente renderizado debe ser igual al Snapshot por defecto', () => {
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });

        const wrapper = shallow( <GifGrid category={ category }/> );
        
        expect( wrapper ).toMatchSnapshot();
    } );

    test( 'Debe mostrar items cuando se cargar imágenen con useFetchGifs', () => {
        let imgs = [{
            id: 'dasdsa',
            url: 'https://localhost/nada/img.png',
            title: 'Luis Fernando Rodriguez Hernández'
        }];

        useFetchGifs.mockReturnValue({
            data: imgs,
            loading: false
        });

        const wrapper = shallow( <GifGrid category={ category }/> );
        // expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find( 'p' ).exists() ).toBe( false );
        expect( wrapper.find( 'GifGridItem' ).length ).toBe( imgs.length );
    } )
} )