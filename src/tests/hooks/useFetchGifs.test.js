import { renderHook } from '@testing-library/react-hooks';
import useFetchGifs from '../../hooks/useFetchGifs';
describe( 'Pruebas sobre el hook useFetchGifs', () => {
    test( 'Se debe retornar el estado inicial', async () => {
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs( 'Pokemon' ) )
        const { data, loading } = result.current;
        await waitForNextUpdate();
        expect( data ).toEqual( [] );
        expect( loading ).toBe( true );
    } );

    test( 'Se debe retornar un arreglo de imágenes y el loading en false', async () => {
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs( 'Pokemon' ) )
        await waitForNextUpdate();
        const { data, loading } = result.current;
        expect( data.length ).toBe( 10 );
        expect( loading ).toBe( false );
    } );
} );